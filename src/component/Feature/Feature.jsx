import Modal from "../../Modal/Modal";
import {Toaster} from "react-hot-toast";

export const Feature = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 md:h-screen">
            <Toaster
                reverseOrder={false}
            />

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
            <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
                <div className="flex flex-col sm:flex-row">
                    <div className="sm:mr-4">
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
                        <h6 className="mb-2 font-semibold leading-5">Уличный танец</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Занятия в данном модуле предусматривают развитие по
                            5 направлениям уличного современного танца: break dance, popping (robot&animation), locking, modern, hip-hop
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
                                Создание танцевальных команд
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
                            Постановка танцевальных номеров
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
                                Развитие импровизации
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className="sm:mr-4">
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
                        <h6 className="mb-2 font-semibold leading-5">Театральная лаборатория</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            В этом модуле вас ждёт полный театрально-танцевальный прокач!
                            Актёрские тренинги, многообразие танцевальных направлений
                            и постановка полноценного танцевального спектакля!
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
                                Постановка спектакля
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
                                Развитие импровизации
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
                       Тренинги и танцевальные мастер классы
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className="sm:mr-4">
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
                        <h6 className="mb-2 font-semibold leading-5">Индивидуальные занятия</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            В любое время вы можете записаться на индивидуальное занятие с любым из наших педагогов.
                            Один клик мышки - и весь наш опыт к вашим услугам!
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
                               Постаонвка номеров
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
                                Развитие  танцевальной техники
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};