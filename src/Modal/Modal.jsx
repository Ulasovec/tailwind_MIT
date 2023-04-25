import React, {useReducer, useState} from 'react';
import usePost from "../hooks/fetch/usePost";


const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const create = usePost();
    const [form, setForm] = useReducer((form, action) => ({...form, ...action}),
        {name: '', tell: '+7', dance: ''})

    function handleForm(e) {
        e.preventDefault();
        create.mutate({data:form});
        console.log('submit')
        setForm({name: '', tell: '+7', dance: ''});
        setShowModal(false)
    }

    return (
        <>
            <button
                className=" mt-2 bg-blue-200 text-black active:bg-blue-500
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Записаться
            </button>
            {showModal ? (
                <>
                    <div
                        className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Оставьте заявку</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                                          onSubmit={handleForm}>
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Имя
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={form.name}
                                            onChange={(e) => setForm({name: e.target.value})}/>
                                        <label className="block text-black text-sm font-bold mb-1"
                                        >
                                            Телефон
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            type='tel'
                                            value={form.tell}
                                            onChange={(e) => setForm({tell: e.target.value})}/>
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Танцевальное направление
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={form.dance}
                                            onChange={(e) => setForm({dance: e.target.value})}/>
                                        <button
                                            className="mt-2 text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="submit"
                                        >
                                            Отправить
                                        </button>
                                    </form>
                                </div>
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Закрыть
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};


export default Modal;