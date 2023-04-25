import React from 'react';
import { useQueryMe } from '../hooks/fetch/useQueryMe';

const AdminPage = () => {

    const queryMe = useQueryMe();
    console.log(queryMe);
   

    return (

            <div >
            Здравствуй, admin.
            </div>
    );
};

export default AdminPage;