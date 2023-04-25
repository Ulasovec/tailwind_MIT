import {useMutation,useQueryClient} from "react-query";
import axios from "axios";
import toast from "react-hot-toast";
import {useContext} from "react";
import { UserContext } from "../../context/userContext";

export default function useLogin() {
    const queryClient = useQueryClient();
    const {setIsAuth} = useContext(UserContext);
    
    const mutationCreate = useMutation(postLogin,{
        onSuccess: (response) => {
            toast.success('Вы вошли в личный кабинет');
            setIsAuth({jwt: response?.data?.jwt,
                      userName: response?.data?.user?.username});
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });
    async function postLogin(form){
        return axios.post(`https://rintd.ru/mit/api/auth/local`,form);
    }
    return  mutationCreate;
}
