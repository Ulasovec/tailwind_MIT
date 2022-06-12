import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumb = () => {
    return (
        <div>

            <nav className="rounded-md w-full ">
                <ol className="list-reset flex justify-center ">
                    <li><Link to =" " className="font-semibold  text-black hover:text-blue-900">Концерты</Link></li>
                    <li><span className="text-gray-500 mx-2">/</span></li>
                    <li><Link to ="rehearsal" className="font-semibold  text-black hover:text-blue-900">Репетиции</Link></li>
                    <li><span className="text-gray-500 mx-2">/</span></li>
                    <li><Link to ="video" className="font-semibold  text-black hover:text-blue-900">Видеоролики</Link></li>

                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;