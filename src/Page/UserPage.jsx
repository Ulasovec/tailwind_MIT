import React from 'react';
import { useQueryMe } from '../hooks/fetch/useQueryMe';

const UserPage = () => {

    const queryMe = useQueryMe();
    console.log(queryMe);
   

    return (

            <div >
            Здравствуйте, пользователь.
            </div>
    );
};

export default UserPage;