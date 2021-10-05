import React from "react";
import { useState } from "react/cjs/react.development";
import { Link, useLocation } from "wouter";
import './Home.sass';
import { useUsers } from "../../hooks/useUsers";

const MENU = ["Home", "posts", "comments", "users"]


export default function Home() {
    const [keyword, setkeyword] = useState('')
    const [path, pushlocation] = useLocation();
    /* devuelve un Array de 2 posiciones [path_donde_estamos, function]*/


    const handlSubmit = evt => {
        evt.preventDefault(); //para evitar que se recargue
        //Queremos que al buscar naveguemos a la palabra que hemos puesto en form
        //para ello usaremos un Hook que tiene Wouter -> useLocation
        console.log("handlsubmit")
        pushlocation(`${keyword}`)
    }

    const handleChange = evt => {
        setkeyword(evt.target.value);
        console.log("handleChange")
    }



    return (
        <>
            <form class="form-search" onSubmit={handlSubmit}>
                <input class="form-search-input" onChange={handleChange} type="text" value={keyword} placeholder= "Buscar..."/>
                <button>Buscar</button>
            </form>
            <h3 className="home-title">Usuarios más populares</h3>

            <ul className="home-menu">
                {MENU.map((menu) => (
                    <li key={menu} className="home-menu-item">
                        {menu == "Home"
                            ? <Link to="/">{menu}</Link>
                            : <Link to={`/${menu}`}>{menu}</Link>}
                    </li>
                ))}

            </ul>
        </>
    )
}