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

const queryClient = new QueryClient(); // Create a react-query client

export default function App() {
    const location = useLocation();

    return (
        <QueryClientProvider client={queryClient}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Header/>}/>
                        <Route path="team" element={<Team/>}/>
                        <Route path="feature" element={<Feature/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="gallery" element={<Coll/>}>
                            <Route index element={<Gallery/>}/>
                            <Route path="rehearsal" element={<GalleryTraning/>}/>
                            <Route path="video" element={<GalleryMP4/>}/>
                        </Route>
                        <Route path="timetable" element={<Timetable/>}/>
                    </Route>
                </Routes>
            </AnimatePresence>
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
            <div className='bg-gradient-to-r from-white to-gray-500'>
                <Outlet/>
            </div>
            </motion.div>
            <Footer/>
        </div>
    );
}



