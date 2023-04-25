import {
    Routes,
    Route,
    Outlet,
    useLocation,
} from "react-router-dom";
import Nav from "./component/header/Nav";
import {Header} from "./component/Baner/Baner";
import {Team} from "./component/Team/Team";
import {Feature} from "./component/Feature/Feature";
import Footer from "./Footer/Footer";
import News from "./Carusel/News";
import Gallery from "./component/Galiry/Gallery";
import Breadcrumb from "./component/Breadcrumb/Breadcrumb";
import GalleryTraning from "./component/Galiry/GalleryTraning";
import GalleryMP4 from "./component/Galiry/GalleryMP4";
import Timetable from "./component/Timetable/Timetable";
import {QueryClient, QueryClientProvider} from "react-query";
import {AnimatePresence,motion} from "framer-motion";
import Form from "./component/Registration/Form";
import FormUser from "./component/Registration/FormUser";
import {UserContext} from "./context/userContext";
import  {useReducer} from 'react';
import UserPage from "./Page/UserPage";
import AdminPage from "./Page/AdminPage";

const queryClient = new QueryClient(); // Create a react-query client

export default function App() {
    const location = useLocation();
    
    const [isAuth,setIsAuth] = useReducer((isAuth, action) => ({...isAuth, ...action}),
    {jwt: '', userName: ''})
console.log(isAuth);
    return (
        <QueryClientProvider client={queryClient}>
            <UserContext.Provider value={{isAuth, setIsAuth}}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Header/>}/>
                        <Route path="team" element={<Team/>}/>
                        <Route path="feature" element={<Feature/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="page_users" element={<UserPage/>}/>
                        <Route path="page_admin" element={<AdminPage/>}/>
                        <Route path="registration_users" element={<FormUser/>}/> 
                        <Route path="registration" element={<Form/>}/>
                        
                        <Route path="gallery" element={<Coll/>}>                    
                            <Route index element={<Gallery/>}/>
                            <Route path="rehearsal" element={<GalleryTraning/>}/>
                            <Route path="video" element={<GalleryMP4/>}/>
                        </Route>
                         
                        <Route path="timetable" element={<Timetable/>}/>
                        
                    </Route>
                </Routes>
            </AnimatePresence>

            </UserContext.Provider>
        </QueryClientProvider>
    );
}

function Coll() {
    return (
        <div>
            <Breadcrumb/>
            <Outlet/>
        </div>
    );
}

function Layout() {
    return (
        <div>

            <Nav/>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <div className='bg-gradient-to-r from-white to-gray-500 '>
                <Outlet/>
            </div>
            </motion.div>
            <Footer/>
        </div>
    );
}



