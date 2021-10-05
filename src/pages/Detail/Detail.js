import React from 'react';
import Card from '../../components/Card';
import useGlobalTasks from '../../hooks/useGlobalTasks';

export default function Detail ({params}){
    /* llamada al Hook para leer el contexto */
    const tasks = useGlobalTasks()
    /*-----*/
    const param = params.id

    const task = tasks.find(singleTask => 
        singleTask.id == param 
    )
    console.log(task)
        return <Card {...task}/>
}