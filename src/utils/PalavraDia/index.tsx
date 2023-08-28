import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default () => {
    const [palavra, setPalavra] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false);
    const day = format(new Date(), 'dd');
    const month = format(new Date(), 'MM');
    const year = format(new Date(), 'yyyy');

    const dataFetch = async () => {
        return await fetch(`https://www.vaticannews.va/pt/palavra-do-dia/${year}/${month}/${day}.speech.js`);
    };

    useEffect(() => {
        setLoading(true);
        dataFetch()
            .then((response) => response.json())
            .then((response) => {
                setPalavra(response)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return { palavra, error, loading };
};