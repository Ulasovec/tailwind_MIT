import React from 'react';


const GalleryMP4 = () => {
    return (
        <div>

        <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6zuGmWPXeSY"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </section>
        </div>
    );
};

export default GalleryMP4;