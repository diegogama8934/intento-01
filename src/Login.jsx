import { useEffect } from 'react';
import logo from './logo-uaq.png';

export const Login = () => {
    return (
        <>
        <div className='div-login'>
            <img src={logo} alt="Logo UAQ" className='img-login'/>
            <h1 className='titulo-login'>Bienvenido</h1>
            <form action="">
                <div className='left-items'>
                <label htmlFor="">Correo</label>
                </div>
                <input placeholder='mail@mail.com' class="email" type="email"/>
                <div className='left-items'>
                <label htmlFor="">Contraseña</label>
                </div>
                <input class="password" type="password"/>
                <button type="submit" value="Aceptar">Iniciar sesión</button>
            </form>
            <button type='button'>¿Olvidaste tu contraseña?</button>
        </div>
        <img src={logo} alt="Logo UAQ" className='img-background'/>
        </>
    )
}