//CUSTOM HOOKS

import { useState, useEffect } from "react";
import getUsers from "../services/getUsers";

/*Le vamos a dar una keyword por defecto*/
export function useUsers ({keyword} = {keyword: null}){
const [loading, setLoagind] = useState(false)
const [users, setUser] = useState([])

useEffect(function() {
    setLoagind(true)

    /* recuperamos la keyword del localStorage, 
    Si la keyword que nos pasan por parámetro esta vacía, 
    cogemos la que esta guardada en el localStorage(lastKeyword) */ 
    const keywordToUse= keyword ? keyword: localStorage.getItem('lastKeyword')
    
    getUsers({keyword: keywordToUse})
    .then(user => {
        setUser(user)
        setLoagind(false)
        /*  guardamos la ultima keyword en el localStorage*/
        localStorage.setItem('lastKeyword', keyword)
    })
}, [keyword])

return {loading, users}
}