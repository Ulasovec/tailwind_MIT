import Modal from "../../Modal/Modal";
import {Toaster} from "react-hot-toast";
import {url} from "../../source/url";
import {useFetch} from "../../hooks/fetch/useFetch";

export const Header = () => {
    const query = useFetch(url.baner)
    if (query.isLoading) return <span>Loading...</span>;
    if (query.isError) return  <Toaster
        position="top-center"
        reverseOrder={false}
    />;
    const data = query.data.data;
    const body = data[0].attributes.body;
    return (
        <div className=" relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-66 rounded shadow-lg lg:rounded-none lg:shadow-none   md:h-full xl:object-fill lg:block hidden"
                    src="/Img/люба.jpg"
                    alt="baner"
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Танцевальная студия
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        "Молчи и танцуй"
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        {body}
                    </p>

                </div>
            </div>
        </div>
    );
};