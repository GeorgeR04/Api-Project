import {Route, Routes} from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Home from "./page/Home.jsx";
import Film from "./page/Film.jsx";
import FilmPageId from "./page/idpage/FilmpageId.jsx";
import FilmcharactereId from "./page/idpage/characterid.jsx";



function App() {


    //In this File We are looking to make the page with the component <Route>
return(
    <>
        <div>
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/film" index element={<Film />}></Route>
            <Route path="/film/:id" element={<FilmPageId/>}></Route>
            <Route path="/character/:id" element={<FilmcharactereId/>}></Route>

        </Routes>

    </>
);
}

export default App
