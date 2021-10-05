import React from 'react';
import { useContext } from 'react/cjs/react.development';

import ObjectContext  from '../context/ObjectContext';

/* CUSTOM HOOK de Lectura del contexto */ 

export default function useGlobalTasks(){
    const {tasks} = useContext(ObjectContext)
    return tasks
}