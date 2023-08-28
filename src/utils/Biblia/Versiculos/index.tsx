import { useEffect, useState } from 'react';

export default (livro: number, capitulo: number) => {
    const [versiculos, setVersiculos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false);
    const dataFetch = async () => {
        return await fetch(`https://www.claret.org.br/biblia/${livro}/${capitulo}`);
    };

    useEffect(() => {
        //setCapitulos([]);
        if(livro == 0) return;

        setLoading(true);
        dataFetch()
            .then((response) => response.json())
            .then((response) => {
                /*
                let newVersiculos = response.versiculos.map((versiculo) => ({
                    'label': versiculo.versiculo, 'value': parseInt(versiculo.versiculo)
                }));
                */

                setVersiculos(response);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [livro]);

    return { versiculos, loading, error };
};