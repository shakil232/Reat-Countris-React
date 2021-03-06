import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { name , email, id} = props.friend

    // const history = useHistory()
    // const handleClick = (friendId) => {
    //     const url = `/friend/${friendId}`
    //     history.push(url);
    //   }
    return (
        <div className="friend-container">
          
           <h2> Name: {name}</h2>
            <p> Email: {email}</p>
            <Link to={`/friend/${id}` }>
              <button> about details {id}</button>  
            </Link> 
           
            {/* <button onClick={()=>handleClick(id)}> click me </button> */}
           
        </div>
    );
};

export default Friend;