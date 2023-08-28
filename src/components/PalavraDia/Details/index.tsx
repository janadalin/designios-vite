import usePalavraDia from '../../../utils/PalavraDia';
import Section from '../../Section';

import './style.scss';

export default () => {
    const {palavra, loading, error} = usePalavraDia();
    
    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || palavra.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    }

    return (
        <Section title='Palavras do Santo Padre' heading='h1'>
            <div className='palavra__details' dangerouslySetInnerHTML={{__html: palavra.speech[0].hfwText }}></div>
        </Section>
    );
};