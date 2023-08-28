import useCapitulos from '../../../utils/Biblia/Capitulos';
import List from '../List';

export default ({ livro, setCapitulo }) => {
    const {capitulos, loading, error} = useCapitulos(livro);

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || capitulos.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    } 

    return (
        <List list={capitulos} setValue={setCapitulo} />
    );
}