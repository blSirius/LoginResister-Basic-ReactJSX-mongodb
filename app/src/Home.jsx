import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    return (
        <>
            <div>HomeMe</div>
            <button className='bg-stone-500' onClick={() => { localStorage.removeItem('token')}}>
                Logout
            </button>
            {token}
        </>
    );
}

export default Home;
