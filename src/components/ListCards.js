import Card from "./Card";
import React from 'react';
import { useUsers } from "../hooks/useUsers";

export default function ListCards({params}) {
    const {keyword} = params;
    const {tasks}= useUsers({keyword});
    

    return (
        
        tasks.map(({ id, name, email, title, body }) =>
            <Card
                key={id}
                email={email}
                name={name}
                title={title}
                body={body}
                id= {id}
                />
        )
    )
}