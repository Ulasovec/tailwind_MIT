import {
    Routes,
    Route,
    Outlet,
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



export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element ={<Header/>}/>
                <Route path="team" element={<Team/>}/>
                <Route path="feature" element={<Feature/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="gallery" element={<Coll/>}>
                    <Route index element={<Gallery/>}/>
                    <Route path="rehearsal" element={<GalleryTraning/>}/>
                    <Route path="video" element={<GalleryMP4/>}/>
                </Route>
                <Route path="timetable" element={<div>Расписание</div>}/>
            </Route>
        </Routes>
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

                <Outlet/>

            <Footer/>
        </div>
    );
}



