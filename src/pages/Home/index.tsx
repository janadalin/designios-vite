import Section from '../../components/Section';
import PalavraDia from '../../components/PalavraDia/Resume';
import Santos from '../../components/Santos';
import Festas from '../../components/Festas';
import Doacao from '../../components/Doacao';

export default () => {
    return (
        <>
            <Section bgColor={true}>
                <PalavraDia />
            </Section>
            <Section title='Santo do Dia' heading='h2'>
                <Santos />
            </Section>
            <Section title='Festas Litúrgicas' heading='h2'>
                <Festas />
            </Section>
            <Section title='Doação' heading='h2'>
                <Doacao />
            </Section>
        </>
    );
};