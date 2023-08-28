import useVersiculos from '../../../utils/Biblia/Versiculos';

import './style.scss';

export default ({ livro, capitulo, setVersiculo }) => {
    const { versiculos, loading, error } = useVersiculos(livro, capitulo);

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || versiculos.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    }

    return (
        <div className='versiculos'>
            {versiculos.versiculos.map((versiculo, index) => (
                <span key={index}><sup>{versiculo.versiculo}</sup>{versiculo.texto}</span>
            ))}
        </div>
    );
}