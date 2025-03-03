import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const BodyUsuariosDireccion = () => {
    const [apiData, setApiData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`http://localhost:8001/usuarios/`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            setApiData(response.data);
            setFilteredData(response.data);
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error.response);
        });
    }, []);

    useEffect(() => {
        let filtered = apiData;

        if (searchTerm) {
            filtered = filtered.filter(user => 
                user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCountry) {
            filtered = filtered.filter(user => user.pais === selectedCountry);
        }

        setFilteredData(filtered);
    }, [searchTerm, selectedCountry, apiData]);

    return (
        <div>
            <h2>Buscar Usuarios</h2>
            <div>
                <input 
                    type="text" 
                    placeholder="Buscar por nombre..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
                    <option value="">Filtrar por país</option>
                    {[...new Set(apiData.map(user => user.pais))].map((pais, index) => (
                        <option key={index} value={pais}>{pais}</option>
                    ))}
                </select>
            </div>

            <div className='contenedor-cards'>
                <div id="contendor-tabla" className="contenedor-tabla-usuario">
                    <table id="contenido-tabla" className="contenido-tabla-usuario">
                        <thead id="thead" className="thead">
                            <tr>
                                <th className='th'>Foto</th>
                                <th className='th'>Nombre</th>
                                <th className='th'>Correo</th>
                                <th className='th'>País</th>
                                <th className='th'>Calle</th>
                                <th className='th'>Ciudad</th>
                                <th className='th'>Estado</th>
                                <th className='th'>Código Postal</th>
                            </tr>
                        </thead>
                        <tbody id="tbody" className="tbody">
                            {filteredData.map((data) => (
                                <tr key={data._id}>
                                    <td className='td'><img width={"60px"} src={data.foto} alt="Foto" /></td>
                                    <td className='td'>{data.nombre}</td>
                                    <td className='td'>{data.correo}</td>
                                    <td className='td'>{data.pais}</td>
                                    <td className='td'>{data.direccion[0]?.calle}</td>
                                    <td className='td'>{data.direccion[0]?.ciudad}</td>
                                    <td className='td'>{data.direccion[0]?.estado}</td>
                                    <td className='td'>{data.direccion[0]?.codigo_postal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
