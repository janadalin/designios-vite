import { useEffect, useState } from 'react';
import useCarousel from '../../utils/Sanity';
import sanityClient from '../../utils/Sanity/sanity';
import imageUrlBuilder from '@sanity/image-url'

import './style.scss';

export default () => {
    const { data, loading, error } = useCarousel(`*[_type == 'carousel' && status == true]`);
    const builder = imageUrlBuilder(sanityClient);
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateCurrentIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = currentIndex + 1;
        } else if (newIndex >= data.length) {
            newIndex = 0;
        }

        setCurrentIndex(newIndex);
    };
    const urlFor = (source) => {
        return builder.image(source);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateCurrentIndex(currentIndex + 1);
        }, 8000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    if (error) {
        return <p>Opps!!! Algo deu errado, por favor tente novamente...</p>
    }

    if (loading || data.length === 0) {
        return <p>Aguarde...carregando!!!</p>
    }

    return (
        <section className='carousel'>
            {data.map((slide, index) => (
                <div className={currentIndex === index ? 'carousel__slide fade' : 'carousel__slide'} key={index}>
                    <img src={urlFor(slide.image)} alt={slide.text2} />
                    <div className='carousel__slide__text'>
                        <p>{slide.text1}</p>
                        <p>{slide.text2}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};