import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const { login } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`https://api.github.com/users/${login}`);
      setUser(res.data);
    };
    getUser();
  }, [login]);

  return (
    <div className="container">
      <div className="user-nav">
        <Link to="/" className="back-btn">Back to Search</Link>
        <span>Hireable: {user.hireable ? '✅' : '❌'}</span>
      </div>
      
      <div className="profile-card">
        <div className="profile-side">
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="profile-info">
          <a href={user.html_url} className="github-link">Show Github Profile</a>
          <h2>Username: {user.login}</h2>
        </div>
      </div>

      <div className="stats-bar">
        <div className="badge badge-red">Followers: {user.followers}</div>
        <div className="badge badge-green">Following: {user.following}</div>
        <div className="badge badge-light">Repository: {user.public_repos}</div>
        <div className="badge badge-dark">Gist: {user.public_gists}</div>
      </div>
    </div>
  );
};

export default User;