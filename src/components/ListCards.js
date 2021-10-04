import Card from "./Card";
import React, { useState, useEffect } from 'react';
import getUsers from '../services/getUsers';

export default function ListCards({params}) {
    const [data, setData] = useState([]) //Array de 2 posiciones: 1º valor del estado, 2º actualizar el valor
    const {keyword} = params;
    

    useEffect(function () {
        getUsers(keyword).then(data => setData(data))
        console.log('hola' + keyword);
    }, [keyword])

    return (
        
        data.map(({ id, name, email, title, body }) =>
            <Card
                key={id}
                email={email}
                name={name}
                title={title}
                body={body}
                />
        )
    )
}