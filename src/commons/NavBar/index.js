import React from 'react';
import './index.css';

function NavBar() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        About
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a href="#">
                                <button class="button is-black mr-2">
                                    <span class="icon is-small">
                                        <i class="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </button>
                            </a>
                            <button class="button is-link">
                                <span class="icon is-small">
                                    <i class="fab fa-facebook-square"></i>
                                </span>
                                <span>Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;