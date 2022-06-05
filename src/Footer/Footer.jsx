import React from 'react';

const Footer = () => {
    return (
            <footer
                className="px-3 py-8 bg-white dark:bg-black text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
                <div className="flex flex-col">
                    <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                        <nav
                            className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                            <a aria-current="page" href="https://vk.com/teatr_izhevsk" className="hover:text-gray-700 dark:hover:text-white">
                                Контакты
                            </a>
                            <a aria-current="page" href="https://yandex.ru/maps/44/izhevsk/house/ulitsa_karla_marksa_300a/YUoYdAdjTUYFQFtsfXR0dntlZA==/?ll=53.258471%2C56.844263&z=13" className="hover:text-gray-700 dark:hover:text-white mt-2">
                                Адрес: г.Ижевск, К.Маркса 300А
                            </a>
                        </nav>
                        <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
                        </div>
                        <div
                            className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                            <a className="bg-amber-50 hover:text-primary-gray-20" href="https://github.com/Charlie85270/tail-kit">
                                <img src="/Img/Vk.com_icon-icons.com_55781.png" alt="icon"/>
                            </a>
                            <a className="ml-4 hover:text-primary-gray-20" href="https://vk.com/id5917322">
                    <span className="sr-only">
                        Settings
                    </span>
                                <svg width="30" height="30" fill="currentColor"
                                     className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                                     viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                        </div>
                        <div
                            className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                <span className="">
                    © 2022
                </span>
                            <span className="mt-7 md:mt-1">
                    Created by
                    <a className="underline hover:text-primary-gray-20" href="https://github.com/Ulasovec">
                        Ulasovec
                    </a>
                </span>
                        </div>
                    </div>
                </div>
            </footer>


    );
};

export default Footer;