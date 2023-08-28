import { useState } from 'react';
import pixLogo from '../../assets/pix.png';

import './style.scss';

export default () => {
    const [copy, setCopy] = useState(false);

    return (
        <div className='doacao'>
            <p>Agora você pode fazer sua doação via</p>            
            <img src={pixLogo} alt='Ajuda a nossa obra de Evangelização!!!' />
            <p title='Clique na chave para copiar' onClick={() => {
                navigator.clipboard.writeText('4d9cbbaa-8691-4312-89aa-a6b015e3fc57')
                setCopy(true);
            }}>
                Chave PIX: 4d9cbbaa-8691-4312-89aa-a6b015e3fc57
                <span className='material-symbols-outlined'>
                    { copy ? 'done' : 'content_copy' }
                </span>
            </p>
            <p>Não deixe essa Obra Evangelizadora acabar!!!</p>
            <p>A sua doação causa o Bem!!!</p>
        </div>
    );
};