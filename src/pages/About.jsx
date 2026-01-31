import React from 'react'
import icon from '../assets/img/rrg.png'

const About = () => {
    return (
        <section className='about about__content'>
            <div className="about_icon">
                <img src={icon} alt="" />
            </div>
            <div className="about_text">
                <h2 className="about-h">
                    About this app</h2>
                <p className="about-p">React app to search Github profiles.</p>
                <p className="about-p">Version: 1.0.0</p>
                <div className="about-p_l">
                    <p className="about-p">Created by</p>
                    <a href="https://github.com/Venum64" className="about-a">Venum64</a>
                </div>
                <div className="about-p_l">
                    <p className="about-p">View this project on</p>
                    <a href="https://github.com/Venum64/GitHub_Finder" className="about-a">my Github</a>
                </div>


            </div>
        </section>
    )
}

export default About