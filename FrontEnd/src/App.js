import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { UsuariosDireccion } from './pages/usuariosDireccion';
import { Login } from './pages/Login';
import { Usuarios } from './pages/usuariosApi';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/usuariosApi' element={<Usuarios></Usuarios>}></Route>
            <Route path='/VW_USUARIOS_CON_DIRECCIONES' element={<UsuariosDireccion></UsuariosDireccion>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
  