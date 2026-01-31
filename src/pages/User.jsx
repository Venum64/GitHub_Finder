import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const { login } = useParams();
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userRes = await axios.get(`https://api.github.com/users/${login}`);
                setUser(userRes.data);

                const reposRes = await axios.get(
                    `https://api.github.com/users/${login}/repos?per_page=5&sort=created`
                );
                setRepos(reposRes.data);
            } catch (err) {
                console.error(err);
            }
        };
        getUserData();
    }, [login]);

    return (
        <div className="container">
            <div className="user-nav">
                <Link to="/" className="back-btn">Back to Search</Link>
                <span>
                    Hireable: {' '}
                    {user.hireable ? (
                        <i className="fa-solid fa-circle-check" style={{ color: "#28a745" }}></i>
                    ) : (
                        <i className="fa-solid fa-circle-xmark" style={{ color: "#dc3545" }}></i>
                    )}
                </span>
            </div>

            <div className="profile-card">
                <div className="profile-side">
                    <img src={user.avatar_url} alt="" className="user-img" />
                </div>
                <div className="profile-info">
                    <a href={user.html_url} target="_blank" rel="noreferrer" className="github-link">
                        Show Github Profile
                    </a>
                    <h2>Username: {user.login}</h2>
                </div>
            </div>

            <div className="stats-bar">
                <div className="badge badge-red">Followers: {user.followers}</div>
                <div className="badge badge-green">Following: {user.following}</div>
                <div className="badge badge-light">Repository: {user.public_repos}</div>
                <div className="badge badge-dark">Gist: {user.public_gists}</div>
            </div>

            <div className="repos-list">
                {repos.map(repo => (
                    <div key={repo.id} className="repo-item">
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                            {repo.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;