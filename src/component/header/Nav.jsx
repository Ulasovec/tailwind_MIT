import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <nav
                className="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto"
            >
                <div>
                    <h2 className="text-3xl font-bold">
                        <Link to="/" >MIT</Link>
                    </h2>
                </div>

                <div className="mt-5 md:mt-0">
                    <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
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
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;