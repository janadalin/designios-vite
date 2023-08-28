import './style.scss';

export default ({ ...props }) => {
    return (
        <section className={props.bgColor ? 'section bg-color' : 'section'}>
            <div className='section__inner'>
                {props.title !== undefined && (
                    <div className='section__header'>
                        {props.heading === 'h1' ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
                        <hr />
                    </div>
                )}
                {props.children}
            </div>
        </section>
    );
};