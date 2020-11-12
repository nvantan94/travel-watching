import React from 'react';

import '../../App.css';
import HeroSection from '../../components/HeroSection'
import Cards from '../../components/Cards';
import Footer from '../Footer';

function Home() {
    return (
        <div className="home-container">
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;