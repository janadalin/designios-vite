import { useEffect, useState } from 'react';
import sanityClient from '../../utils/Sanity/sanity';

export default (params: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const dataFetch = async () => {
        return await sanityClient.fetch(params);
    };

    useEffect(() => {
        setLoading(true);
        dataFetch()
            .then((response) => {
                setData(response);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}