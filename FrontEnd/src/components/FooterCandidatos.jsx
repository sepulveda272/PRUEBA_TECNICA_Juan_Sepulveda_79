import React from 'react'
import '../assets/css/styless.css'
import logoFooter from '../assets/img/mapa.png'

export const FooterCandidatos = () => {

    return (
   <>
      <div className="footer-contenedor">
        <div className="footer-contenido">
              <img src={logoFooter} alt="" width={"100px"}/>

              <div className='footer-column1'>
                  <h3>Contacto</h3>
                  <br />
                  <br />
                    <p>Colombia, Santander</p>
                    
                    <p>+57 3155667890</p>
                    
                    <p>Cajasan@gmail.com</p>
                    <br />
                    <br />
              </div>

              <div className='footer-column2'>
                  <h3>Empresa</h3>
                  <br />
                  <br />
                    <p>Colombia, Santander</p>
                    
                    <p>+57 3155667890</p>
                    
                    <p>Cajasan@gmail.com</p>
                    <br />
                    <br />
              </div>

              <div className='footer-column3'>
                  <h3>Siguenos</h3>
                  <br />
                  <br />
                    <p>Colombia, Santander</p>
                   
                    <p>+57 3155667890</p>
                    
                    <p>Cajasan@gmail.com</p>
                    <br />
                    <br />
              </div>

          
          {/*     <table className="footer-tabla">
                <tr className='encabezados-tabla'>
                  <td><strong>Contacto</strong></td>
                  <td><strong>Empresa</strong></td>
                  <td><strong>Siguenos</strong></td>
                </tr>
                <tr>
                  <td className='columna-contacto'>
                    
                    <p>Colombia, Santander</p>
                    <br />
                    <p>+57 3155667890</p>
                    <br />
                    <p>Cajasan@gmail.com</p>
                    <br />
                  </td>
                  <td className='columna-empresa'>
                    
                    <p>Cajasan</p>
                    <br />
                    <p>Instalaciones</p>
                    <br />
                  </td>
                  <td className='columna-siguenos'>
                    
                    <p>Facebook</p>
                    <br />
                    <p>Instagram</p>
                    <br />
                    <p>Tiktok</p>
                    <br />
                    <p>Linkenid</p>
                    <br />
                    <p>Twitter</p>
                    
                  </td>
                </tr>
              </table> */}
          
        </div>
      </div>
      
   </>
    );
  
}