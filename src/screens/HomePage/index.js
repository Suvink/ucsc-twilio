import React from 'react';
import './index.css';
import HomeHero from './components/HomeHero';
import WorkCards from './components/WorkCards';
import Contact from './components/Contact';

function HomePage(){
    return (
        <div>
            <HomeHero />
            <WorkCards />
            <Contact />
        </div>
    );
}

export default HomePage;