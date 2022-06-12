
import {useFetch} from "../../hooks/fetch/useFetch";
import {url} from "../../source/url";
import {Toaster} from "react-hot-toast";
import {Helmet} from "react-helmet";


export const Team = () => {

    const query = useFetch(url.teacher)
    if (query.isLoading) return <span>Loading...</span>;
    if (query.isError) return  <Toaster
        position="top-center"
        reverseOrder={false}
    />;
    // Деструктуризация
    // const {title, body, createdAt, updatedAt} = query?.data?.data?.attributes;
    const data = query.data.data;

    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Танцевальная студия - Молчи и танцуй - Уласовец</title>
            </Helmet>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
              />
            </svg>
            <span className="relative">Преподаватели студии</span>
          </span>{' '}

                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Занятия проводят педагоги театра танца "Молчи и танцуй".
                </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {data.map(item =>
                <div key={item.id}>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-full md:h-80 xl:h-80"
                            src={`http://localhost:1337${item.attributes?.cover?.data?.attributes?.url}`}
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                {item.attributes.title}
                            </p>
                            <p className="mb-4 text-xs text-gray-100">Руководитель студии</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                {item.attributes.body}
                            </p>

                        </div>
                    </div>
                </div>
                    )}

                </div>
            </div>

    );
};