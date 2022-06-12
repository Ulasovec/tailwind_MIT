import React from 'react';
import {useFetch} from "../../hooks/fetch/useFetch";
import {url} from "../../source/url";
import {Toaster} from "react-hot-toast";


const GalleryMP4 = () => {
    const query = useFetch(url.video)
    if (query.isLoading) return <span>Loading...</span>;
    if (query.isError) return  <Toaster
        position="top-center"
        reverseOrder={false}
    />;
    // Деструктуризация
    // const {title, body, createdAt, updatedAt} = query?.data?.data?.attributes;
    const data = query.data.data;

    return (
        <div>
            {data.map(item =>
        <section key={item.id} className="overflow-hidden shadow">
                <iframe className="container px-5 py-2 mx-auto h-1/3 sm:w-3/4 sm:h-[20rem] md:h-[28rem]"
                        src ={`${item.attributes.src}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
        </section>
            )}
        </div>
    );
};

export default GalleryMP4;