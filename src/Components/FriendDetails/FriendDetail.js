import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId} = useParams();
    const [ details , setDetails ] = useState({});
  
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then( res=> res.json())
        .then( data => setDetails (data))
    } ,[])

    return (
        <div>
            <h2>About this person </h2>
            <div>
                <p> Name: {details.name}</p>
                <p> Username: {details.username}</p>
                <p> City: {details.city}</p>
                <p> Phone: {details.phone}</p>
                <p> Email: {details.email}</p>
                <p> WebSite: {details.website}</p>
            </div>
        </div>
    );
};

export default FriendDetail;