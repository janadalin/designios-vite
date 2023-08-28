import { useEffect, useState } from 'react';

export default (date: Date) => {
    const [liturgia, setLiturgia] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false);
    const dataFetch = async () => {
        return await fetch(`https://api-liturgia.edicoescnbb.com.br/contents/in/date/${date}`);
    };

    useEffect(() => {
        setLoading(true);
        dataFetch()
            .then((response) => response.json())
            .then((response) => {
                setLiturgia(response)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [date]);

    return { liturgia, error, loading };
};