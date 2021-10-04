import React from 'react';
import Spinner from '../../components/Spinner';
import ListCards from '../../components/ListCards';
import { useUsers } from '../../hooks/useUsers';

export default function searchResult ({params}) {
    const {keyword} = params
    const {loading, user} = useUsers({keyword})



    return <>
    {loading 
        ? <Spinner/>
        : <ListCards users={user}/>
    }
    </>
}