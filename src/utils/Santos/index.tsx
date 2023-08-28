import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default (date: Date) => {
    const [santos, setSantos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const day = format(date, 'dd');
    const month = format(date, 'MM');

    const dataFetch = async () => {
        return await fetch(`https://www.vaticannews.va/pt/santo-do-dia/${month}/${day}.saints.js`);
    };

    useEffect(() => {
        setLoading(true);
        dataFetch()
            .then((response) => response.json())
            .then((response) => {
                setSantos(response)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [date]);

    return { santos, error, loading };
};