import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="container nav">
                    <a href="https://github.com/" className="logo">
                        <section className='icon'>
                            <i className="fab fa-github" style={{ color: "white" }} >
                            </i></section>
                        <h1 style={{ color: "white" }}>Github Finder</h1>
                    </a>
                    <ul className="list">
                        <li className="item">
                            <a href="/" className="link">Home</a>
                        </li>
                        <li className="item">
                            <a href="/About" className="link">About</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar