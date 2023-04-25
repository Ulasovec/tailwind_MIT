import React from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

const Nav = () => {
    const {isAuth} = useContext(UserContext);

    return (

            <nav
                className=" bg-black text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-3xl mx-auto"
            >
                <div>

                        <Link to="/">
                            <img src="/Img/Молчи и танцуй лого_студия_б.png" className='h-16 w-34%'/>
                        </Link>

                </div>

                <div className="mt-5 md:mt-0">
                    <ul className="flex flex-col text-sm md:flex-row md:space-x-5 w-full items-center">
                        <li>
                            <Link to="team"
                                  className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                            >Преподаватели</Link>
                        </li>
                        <li>
                            <Link to="feature"
                                className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                            >Направления</Link>
                        </li>
                        <li>
                            <Link to="gallery"
                                className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                            >Галерея</Link>
                        </li>
                        <li>
                            <Link to="news"
                                className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                            >Новости</Link>
                        </li>
                        <li>
                            <Link to="timetable"
                                className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                            >Расписание</Link>
                        </li>
                        {(isAuth.userName == "admin")
                        ?
                         <li>
                         
                         <Link to="page_admin"
                             className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                         >Администратор / {isAuth.userName}</Link>
                        </li>
                        :(isAuth.userName) 
                        ?  
                        <li><Link to="page_users"
                         className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                     >Пользователь / {isAuth.userName}</Link>
                        </li>
                        :
                        <li>                         
                            <Link to="registration"
                                className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300"
                            >Личный кабинет</Link>
                        </li>}
                    </ul>
                </div>
            </nav>

    );
};

export default Nav;