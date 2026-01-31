import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);

  const searchUsers = async (username) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${username}`);
    setUsers(res.data.items);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') searchUsers(text);
  };

  const onClear = () => {
    setText('');
    setUsers([]);
  };

  return (
    <section className='search'>
      <form onSubmit={onSubmit} className='search__block'>
        <input 
          type="text" 
          placeholder='Search User' 
          className='search-input' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
      
      {users.length > 0 && (
        <button className='clear-btn' onClick={onClear}>Clear</button>
      )}

      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt="" className="user-avatar" />
            <h3>{user.login}</h3>
            <Link to={`/user/${user.login}`} className="more-btn">More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;