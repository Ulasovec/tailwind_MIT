import React from 'react';


const Gallery = () => {
    return (
        <div>

        <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto ">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="/Img/мит_1.jpg"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2 ">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="/Img/мит_2.jpg"/>
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="/Img/мит_7.jpg"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="/Img/мит_4.jpg"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="/Img/мит_5.jpg"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="/Img/мит_8.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="overflow-hidden text-gray-700">
                <div className="container px-5 py-2 mx-auto ">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="/Img/мит_1.jpg"/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2 ">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="/Img/мит_2.jpg"/>
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="/Img/мит_7.jpg"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="/Img/мит_4.jpg"/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="/Img/мит_5.jpg"/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="/Img/мит_8.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;