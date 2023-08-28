import useTestamentos from '../../../utils/Sanity';
import List from '../List';

export default ({ setTestamento }) => {
    const { data, loading, error } = useTestamentos(`*[_type == 'testamentos']`);

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || data.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    }

    return (
        <List list={data} setValue={setTestamento} />
    );
};