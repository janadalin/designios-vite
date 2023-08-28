import { Outlet } from 'react-router-dom';

export default () => {
    return (
        <main className='main'>
            <Outlet />
        </main>
    );
};