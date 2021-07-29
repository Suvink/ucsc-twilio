import React from 'react';
import './index.css';

function HomeHero(){
    return(
        <section>
            <div className="columns">
                <div className="column hero-text-col is-6">
                    <h1 className="title is-4">Hi, my name is Suvin.</h1>
                    <h1 className="title is-2">I’m a freelance UX/UI Designer with a marketing background specializing in Shopify & Webflow.</h1>
                    <button class="button is-link mr-2">
                        <span class="icon">
                        <i class="fab fa-dribbble"></i>
                        </span>
                        <span>Dribbble</span>
                    </button>
                    <button class="button is-pink">
                        <span class="icon">
                        <i class="fab fa-linkedin"></i>
                        </span>
                        <span>Linkedin</span>
                    </button>
                </div>
                <div className="column is-6 has-text-centered">
                    <img className="hero-img" src="https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/5ea3ec8bd3a80fe62bc11cda_kristi-header-optimized.jpg" alt="sdcsd" />
                </div>
            </div>
        </section>
    );
}

export default HomeHero;