import {useMutation,useQueryClient} from "react-query";
import axios from "axios";
import toast from "react-hot-toast";


export default function usePost() {
    const queryClient = useQueryClient();

    const mutationCreate = useMutation(postData,{
        onSuccess: () => {
            toast.success('Мы вам перезвоним');
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });
    async function postData(form){
        return axios.post(`https://rintd.ru/mit/api/forms`,form);
    }
    return  mutationCreate;
}
