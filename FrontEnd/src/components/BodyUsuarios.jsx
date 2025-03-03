import axios from 'axios';
import React,{useEffect, useState } from 'react';


export const BodyUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=25');
                setUsuarios(response.data.results);
                setLoading(false);
            } catch (err) {
                setError('Error al cargar los usuarios');
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []);

    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
        <div className='bodyMain'>
            <div className='bodyMiniMain'>
            <h1>Cajasan</h1>
                
            </div>
        </div>
        <div className='contenedor-cards'>
            <div id="contendor-tabla" class="contenedor-tabla-usuario">
                <table id="contenido-tabla" class="contenido-tabla-usuario">
                    <thead id="thead" class="thead">

                        <th className='th'>Foto</th>
                        <th className='th'>Nombre</th>
                        <th className='th'>Correo electronico</th>
                        <th className='th'>Nacionalidad</th>
                    </thead>
                    <tbody id="tbody" class="tbody">
                        {usuarios.map((usuario)=>{
                            return(
                                <tr>
                                    <td className='td'><img src={usuario.picture.thumbnail}/></td>
                                    <td className='td'>{usuario.name.first} {usuario.name.last}</td>
                                    <td className='td'>{usuario.email}</td>
                                    <td className='td'>{usuario.nat}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    </div>
    );
}