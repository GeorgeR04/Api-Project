import {Route, Routes} from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Home from "./page/Home.jsx";
import Film from "./page/Film.jsx";
import FilmPageId from "./page/Filmpage/FilmpageId.jsx";



function App() {
return(
    <>
        <div>
            <Navbar/>
        </div>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route  path="/film" index element={<Film />}></Route>
            <Route path="/film/:id" element={<FilmPageId/>}></Route>
        </Routes>

    </>
);
}

export default App