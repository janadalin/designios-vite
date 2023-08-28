import './style.scss';

export default ({ list, setValue, ...props }) => {
    const updateValue = (value) => {
        let newItem = list.find(item => {
            return item.value === value;
        });
        setValue(newItem);
    };

    return (
        <ul className='list'>
            {list.map((item, index) => (
                <li {...props} className='list__item' key={index} value={item.value} onClick={e => updateValue(item.value)}>{item.label}</li>
            ))}
        </ul>
    );
};