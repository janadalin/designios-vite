import { useState } from 'react';
import Testamentos from './Testamentos';
import Livros from './Livros';
import Capitulos from './Capitulos';
import Versiculos from './Versiculos';
import Breadcrumbs from './Breadcrumbs';

export default () => {
    const [testamento, setTestamento] = useState([]);
    const [livro, setLivro] = useState([]);
    const [capitulo, setCapitulo] = useState([]);
    const [versiculo, setVersiculo] = useState([]);

    return (
        <div className='biblia'>
            {testamento.length === 0 && (
                <Testamentos setTestamento={setTestamento} />
            ) || (testamento.length !== 0 && (
                <Breadcrumbs label={testamento.label} setValues={[setTestamento, setLivro, setCapitulo]} />
            ))}

            {testamento.length !== 0 && livro.length === 0 && (
                <Livros testamento={testamento} setLivro={setLivro} />
            ) || (livro.length !== 0 && (
                <Breadcrumbs label={livro.label} setValues={[setLivro, setCapitulo]} />
            ))}

            {livro.length !== 0 && capitulo.length === 0 && (
                <Capitulos livro={livro.value} setCapitulo={setCapitulo} />
            ) || (capitulo.length !== 0 && (
                <Breadcrumbs label={capitulo.label} setValues={[setCapitulo, setVersiculo]} />
            ))}

            {livro.length !== 0 && capitulo.length !== 0 && versiculo.length === 0 && (
                <Versiculos livro={livro.value} capitulo={capitulo.value} setVersiculo={setVersiculo} />
            ) || (capitulo.length !== 0 && (
                <Breadcrumbs label={versiculo.label} setValues={[setVersiculo]} />
            ))}
        </div>
    );
};