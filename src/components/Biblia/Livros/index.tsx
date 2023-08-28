import useLivros from '../../../utils/Sanity';
import List from '../List';

export default ({ testamento, setLivro }) => {
    const { data, loading, error } = useLivros(`*[ _type == 'livros' && references('${testamento._id}') ] | order(value asc)`);

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || data.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    } 
   
    return (
        <List list={data} setValue={setLivro} />
    );
};