import { NavLink } from 'react-router-dom';

import './style.scss';

export default () => {
    return (
        <div className='palavra__resume'>
            <h3>Palavras do Santo Padre</h3>
            <NavLink to='palavra' className='palavra__resume__link'>Acompanhe</NavLink>
        </div>
    );
};