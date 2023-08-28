import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default (date: Date) => {
    const [festas, setFestas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //const day = format(date, 'dd');
    const month = format(date, 'M');
    
    const dataFetch = async () => {
        return await fetch(`https://www.vaticannews.va/pt/feriados-liturgicos.list.month.${month}.l:10.o:0.s:pdd.js`);
    };

    useEffect(() => {
        setLoading(true);
        dataFetch()
            .then((response) => response.json())
            .then((response) => {
                setFestas(response)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [date]);

    return { festas, error, loading };
};