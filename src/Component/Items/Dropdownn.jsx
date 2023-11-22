import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import {fetchGhibliFilms, fetchGhibliPeople} from "../api/api.jsx";

function Dropdownmenun(){
    const [dropdownn ,setdropdownn]= useState(false);

    const [chara,setchara]=useState([]);

    useEffect(() => {
        const fetchFilmsData = async () => {

            const charaData = await fetchGhibliPeople();
            setchara(charaData);
        };

        fetchFilmsData();
    }, []);

    return(<>
            <ul
                className={
                    dropdownn
                        ? "none"
                        : "w-[15rem] bg-gradient-to-t from-GamePage to-GamePage2 max-h-[10rem] overflow-y-auto z-20 absolute p-2"
                }
                onClick={() => setdropdownn(!dropdownn)}

            >
                {chara.map((ele) => {
                    return (
                        <li key={ele.id}>
                            <Link
                                to={`/character/${ele.name}`}
                                className="hover:text-white"
                                onClick={() => setdropdownn(!dropdownn)}
                            >
                                {ele.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>


        </>
    );
}
export default Dropdownmenun;