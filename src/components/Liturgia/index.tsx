import { useState, forwardRef } from 'react';
import useLiturgia from '../../utils/Liturgia';
import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import './style.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default () => {
    const [date, setDate] = useState(new Date());
    const { liturgia, loading, error } = useLiturgia(date);
    const ButtonCustom = forwardRef(({ value, onClick }, ref) => (
        <button className='button__calendar' onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || liturgia.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    }

    return (
        <div className='liturgia'>
            <div className='liturgia__calendar'>
                <DatePicker
                    selected={date}
                    onChange={(date: Date) => setDate(date)}
                    locale={ptBR}
                    dateFormat="P"
                    customInput={<ButtonCustom />}
                />
            </div>
            <div className='liturgia__text'>
                <div dangerouslySetInnerHTML={{ __html: liturgia.content.details }} />
                <div dangerouslySetInnerHTML={{ __html: liturgia.content.body.replace('pics/', '../src/assets/') }} />
            </div>
        </div>
    );
};