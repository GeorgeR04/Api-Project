import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import {fetchGhibliFilms} from "../api/api.jsx";

function Dropdownmenu(){
    const [dropdown ,setdropdown]= useState(false);

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchFilmsData = async () => {
            const filmsData = await fetchGhibliFilms();
            setFilms(filmsData);

        };

        fetchFilmsData();
    }, []);

    return(<>
            <ul className={dropdown ?"none" : "w-[15rem] bg-gradient-to-t from-GamePage to-GamePage2 h-fit z-20 absolute left-[-3.2rem] p-5 "} onClick={() => setdropdown(!dropdown)}>
                {films.map((item) =>{
                    return(
                        <li key={item.id} >
                            <Link to={`/film/${item.title}`} className="hover:text-white"
                                  onClick={() => setdropdown(!dropdown)}
                            >{item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>


        </>
    );
}
export default Dropdownmenu;