//CUSTOM HOOKS

import { useContext, useState, useEffect } from "react";
import getUsers from "../services/getUsers";
import ObjectContext from "../context/ObjectContext";

/*Le vamos a dar una keyword por defecto*/

export function useUsers({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    /* const [users, setUser] = useState([]) modifica solo el estado local de este Hook*/
    /* Context: */
    const {tasks, setTasks} = useContext(ObjectContext);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'posts'

    useEffect(function () {
        setLoading(true)

        /* Recuperamos la keyword del localStorage, 
        Si la keyword que nos pasan por parámetro esta vacía, 
        cogemos la que esta guardada en el localStorage(lastKeyword) */
        getUsers(keyword)
            .then(data =>  {
                setTasks(data)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)

            })
    }, [keyword, setTasks, keywordToUse])

    return {tasks} 
}