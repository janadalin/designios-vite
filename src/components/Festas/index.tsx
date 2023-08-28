import { useState } from 'react';
import useFestas from '../../utils/Festas';
import { parseISO, format } from 'date-fns';

import './style.scss';

export default () => {
    const [date, setDate] = useState(new Date());
    const { festas, loading, error } = useFestas(date);
    const newFestas = festas !== undefined ? Object.entries(festas) : [];

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || newFestas.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    }

    return (
        <div className='festas'>
            {newFestas.map((festa, index) => (
                index !== 0 && (
                    <div key={index} className='festas__inner'>
                        <img src={`https://www.vaticannews.va${festa[1].image}/jcr:content/renditions/cq5dam.thumbnail.cropped.250.141.png`} />
                        <h3>{festa[1].title}</h3>
                        <p>{format(parseISO(festa[1].date), 'dd/MM')}</p>
                    </div>
                )
            ))}
        </div>
    );
};