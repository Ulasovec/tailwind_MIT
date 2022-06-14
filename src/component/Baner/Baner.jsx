export const Header = () => {
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
                    className="object-cover w-full h-66 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-full xl:object-fill "
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
                        Молчи и танцуй – это творческий коллектив единомышленников и профессиональных танцоров, существующий с 2010 года, поставивший более 6 спектаклей и имеющий за плечами гастроли в 8 регионах России, а также за рубежом.
                        Спектакли Молчи и танцуй, такие как "Волшебник изумрудного города", "Маленький принц", "Алые паруса" и т.д., завоевали любовь взрослых и юных зрителей благодаря оригинальному сочетанию танцев в стилях Break dance, Hip Hop и House, глубоким смыслам, динамичности сюжетов, пластической выразительности и мастерству исполнителей.
                    </p>

                </div>
            </div>
        </div>
    );
};