import { NavLink } from 'react-router-dom';

import './style.scss';

export default () => {
    return (
        <footer className='footer'>
            <div className='footer__inner'>
                <div className='footer__column'>
                    <h3>Quem somos</h3>
                    <p>O fundamento da nossa Comunidade é o Evangelho: viver e comunicá-lo de maneira integral, na eficácia do Espírito Santo, enquanto esperam e apressam a vinda gloriosa do Senhor (cf. 2Pd 3,12).</p>
                </div>
                <div className='footer__column'>
                    <h3>Liturgia</h3>
                    <div className='footer__links'>
                        <NavLink to='liturgia' className='footer__link'>Liturgia</NavLink>
                        <NavLink to='biblia' className='footer__link'>Bíblia</NavLink>
                        <NavLink to='palavra' className='footer__link'>Palavra do Santo Padre</NavLink>
                    </div>
                </div>
                <div className='footer__column'>
                    <h3>Redes Sociais</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className='footer__copy'>
                <p>Todos os direitos reservados. 2023 &copy;</p>
            </div>
        </footer>
    );
};