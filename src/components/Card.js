import React from "react";
import './Cards.sass';

//Creamos un componente de tipo card para cada usuario con la información de email, fitst_name, last_name y avatar. 
//Esta información se le envia através de los props. 

export default function Card ({id, name, email, title, body}) {
    return(
        <div class="app-card">
            <div class="app-card-item">
                { name && <h4 class="app-card-item-name">Name: {name}</h4>}            
                { email && <h4 class="app-card-item-email">Email: {email}</h4>}
                {title && <h4 class="app-card-item-title">{title}</h4>}
                {body && <h4 class="app-card-item-body">{body}</h4>}
            </div>
        </div>
    )
}