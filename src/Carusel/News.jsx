import React from 'react';

import {url} from "../source/url";
import {useFetch} from "../hooks/fetch/useFetch";
import {Toaster} from "react-hot-toast";
import {Helmet} from "react-helmet";


    const News = () => {
    const query = useFetch(url.news)
    console.log(query)
        if (query.isLoading) return <span>Loading...</span>;
        if (query.isError) return  <Toaster
            position="top-center"
            reverseOrder={false}
        />;
    // Деструктуризация
    const data = query.data.data;
    console.log(data)
    return (
        <div>  <Helmet>
            <meta charSet="utf-8" />
            <title>Танцевальная студия - Молчи и танцуй - Новости</title>
        </Helmet>
        <h1 className="max-w-lg pt-16 font-sans text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">Новости студии</h1>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">

                {data.map(item =>
                <div key={item.id} className="border border-gray-500 transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <img
                            className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                            src={`http://localhost:1337${item.attributes?.cover?.data?.attributes?.url}`}
                            alt="news"
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                    </div>
                    <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            {item.attributes.title}
                        </h5>
                        <p className="mb-5 text-gray-700">
                            {item.attributes.body}
                        </p>
                    </div>
                </div>
                )}


            </div>
        </div>
        </div>
    );
};

export default News;