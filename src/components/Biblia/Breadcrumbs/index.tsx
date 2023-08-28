import './style.scss';

export default ({ label, setValues }) => {
    const updateValues = () => {
        setValues.map((setValue) => {
            setValue([]);
        });
    };

    return (
        <span className='breadcrumbs' onClick={updateValues}>{label}</span>
    );
};