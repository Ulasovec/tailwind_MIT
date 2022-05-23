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

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element ={<Header/>}/>
                <Route path="team" element={<Team/>}/>
                <Route path="feature" element={<Feature/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="gallery" element={<Gallery/>}/>
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <div>
            <Nav/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}



