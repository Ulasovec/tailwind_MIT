import Modal from "../../Modal/Modal";
import {Toaster} from "react-hot-toast";
import {url} from "../../source/url";
import {useFetch} from "../../hooks/fetch/useFetch";

export const Feature = () => {
    const query = useFetch(url.directions)
    if (query.isLoading) return <span>Loading...</span>;
    if (query.isError) return  <Toaster
        position="top-center"
        reverseOrder={false}
    />;

    const data = query.data.data;
    console.log(data);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <Toaster
                reverseOrder={false}
            />

            <div className=" mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                    id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                  fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                  width="52"
                  height="24"
              />
            </svg>
            <span className="relative">Направления</span>
          </span>

                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Выбирайте и записывайтесь на любое из направлений:
                </p>
                <Modal/>
            </div>

            <div  className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
                {data.map(item =>
                <div className="flex flex-col sm:flex-row" key={item.id}>

                    <div className="sm:mr-4" >
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-2 font-semibold leading-5">{item.attributes.title}</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            {item.attributes.body}
                        </p>
                        <ul className="mb-4 -ml-1 space-y-2">
                            <li className="flex items-start">
                <span className="mr-1">
                  <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                  >
                    <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                                {item.attributes.discription_1}
                            </li>
                            <li className="flex items-start">
                <span className="mr-1">
                  <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                  >
                    <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                                {item.attributes.discription_2}
                            </li>
                            <li className="flex items-start">
                <span className="mr-1">
                  <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                  >
                    <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                                {item.attributes.discription_3}
                            </li>
                            {/*<li><h6 className="mb-2 font-semibold leading-5">Стоимость: 3000</h6></li>*/}
                        </ul>

                    </div>

                </div>
                        )}
                </div>

        </div>
    );
};