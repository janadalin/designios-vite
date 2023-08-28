import { useEffect, useState } from 'react';

export default (livro: number) => {
    const [capitulos, setCapitulos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false);
    const dataFetch = async () => {
        return await fetch(`https://www.claret.org.br/biblia/${livro}`);
    };

    useEffect(() => {
        //setCapitulos([]);
        if(livro == 0) return;

        setLoading(true);
        dataFetch()
            .then((response) => response.json())
            .then((response) => {
                let newCapitulos = response.capitulos.map((capitulo) => ({
                    'label': `Capítulo ${capitulo}`, 'value': parseInt(capitulo)
                }));

                setCapitulos(newCapitulos);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [livro]);

    return { capitulos, loading, error };
};