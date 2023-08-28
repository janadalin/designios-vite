import { useState } from 'react';
import useSantos from '../../utils/Santos';

import './style.scss';

export default () => {
    const [date, setDate] = useState(new Date());
    const { santos, loading, error } = useSantos(date);

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || santos.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    }

    return (
        <div className='santos'>
            {santos.saints.map((santo, index) => (
                <div className='santos__inner' key={index}>
                    {santo.image !== undefined && (
                        <div className='santos__image'>
                            <img src={`https://www.vaticannews.va${santo.image}/_jcr_content/renditions/cq5dam.thumbnail.cropped.250.141.${santo.image.split(/[#?]/)[0].split('.').pop().trim() === 'jpg' ? 'jpeg' : 'png'}`} alt={santo.name} />
                        </div>
                    )}
                    <div className={santo.image !== undefined ? 'santos__summary' : 'santos__summary w-100'}>
                        <h3>{santo.name}</h3>
                        <p>{santo.summary}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};