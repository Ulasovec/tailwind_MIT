import {useQuery} from "react-query";
import axios from "axios";
import toast from "react-hot-toast";

export function useFetch(url) {
    const query = useQuery(['teacher', url], async () => {
        const response = await axios.get(url);
        return response.data;
    },  { onError: (error) => {
        toast.error(error.message)
    }}
        );
    return query
}