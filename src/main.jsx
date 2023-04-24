import React from "react";
import ReactDOM from 'react-dom/client'

import { Login } from "./Login";
import './styles.css';

/**
 * var ruta = login
 * if ruta == login:
 *  reder Login
 * else if ruta == registro:
 *  render Registro
 * 
 * ------------------------
 * 
 * Al navegar a otra pantalla
 * ruta = "registro"
 * 
 * Se hace con useState
 * 
 * /TODO:  
 */

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <Login></Login>
    </React.StrictMode>
)

/*
Hewooloo
*/