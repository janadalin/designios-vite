import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default ({ position }) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className='header' style={{ position: position }}>
            <div className='header__inner'>
                <div className='header__logo'>
                    <span className='material-symbols-outlined'>
                        folded_hands
                    </span>
                    Desígnios de Deus
                </div>
                <nav className='header__nav'>
                    <ul className={toggle ? 'header__nav__menu active' : 'header__nav__menu'}>
                        <li className='header__nav__menu__item'><NavLink to='/' className='header__nav__menu__link' onClick={e => setToggle(false)} end>Home</NavLink></li>
                        <li className='header__nav__menu__item'><NavLink to='liturgia' className='header__nav__menu__link' onClick={e => setToggle(false)}>Liturgia</NavLink></li>
                        <li className='header__nav__menu__item'><NavLink to='biblia' className='header__nav__menu__link' onClick={e => setToggle(false)}>Bíblia</NavLink></li>
                    </ul>
                </nav>
                <div className='header__hamburguer' onClick={handleToggle}>
                    <span className='material-symbols-outlined'>
                        {toggle ? 'close' : 'menu'}
                    </span>
                </div>
            </div>
        </header>
    );
};