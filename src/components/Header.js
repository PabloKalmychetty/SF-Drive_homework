import React, { Component } from 'react';

import '../styles/Header.css'

class Header extends Component {
    render() {
        return(
            <header className='header'>
                <div className='header-block'>
                    <span className='header-text'>SkillDrive</span>
                        <div className='navigation-button'>
                            <nav className='navigation-panel'>
                            <a className='navi-link'>О нас</a>
                            <a className='navi-link'>Условия</a>
                            <a className='navi-link'>Частые вопросы</a>
                            </nav>
                            <button className='header-button'>
                                <span className='button-text'>Войти</span>
                            </button>
                        </div>
                </div>
                <button className='m-menu'>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </button>
            </header>
        )
    }
}

export default Header;