import {useContext} from "react";
import {useQuery} from "react-query";
import axios from "axios";
import { UserContext } from "../../context/userContext";

export const useQueryMe = () => {
    const {isAuth} = useContext(UserContext);
    const queryMe = useQuery(['me', isAuth.jwt], async () => {
        const response = await axios.get('https://rintd.ru/mit/api/users/me?populete=*', {
            headers: {
                Authorization: `Bearer ${isAuth.jwt}`,
            },
        });
        return response.data;
    }, {enabled: !!isAuth.jwt});
    return queryMe;
}
