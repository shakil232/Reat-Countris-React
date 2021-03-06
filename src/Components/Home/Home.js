import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';


const Home = () => {
    const [ friends , setFriends ] = useState([])
    useEffect(()=>{
      const url = 'https://jsonplaceholder.typicode.com/users'
      fetch(url)
      .then( res=> res.json())
      .then( data => setFriends(data))
    }, [])
    return (
        <div>
          <div>
          <h1 className="header"> React-RenderUsers</h1>
          <nav className='nav'>
              <a href="home">Home</a>
              <a href="user">Users</a>
              <a href="contact">Contact</a>
          </nav>
          </div>
            
          <div>
          {
                friends.map(friend => <Friend friend={friend}></Friend> )
            }

          </div>

        </div>
    );
};

export default Home;