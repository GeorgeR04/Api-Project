import React, { useEffect, useState } from 'react';
import { fetchGhibliFilms } from './../Component/api/api.jsx';
import logo from './../assets/Studio.png';
import {Link} from "react-router-dom";

function Film(){
    const [films, setFilms] = useState([]);
    const redirectTolink = () => {
        window.location.href = 'https://ghibliapi.vercel.app/';
    };

    useEffect(() => {
        const fetchFilmsData = async () => {
            const filmsData = await fetchGhibliFilms();
            setFilms(filmsData);
        };

        fetchFilmsData();
    }, []);

    const filmDetails = films.map((film, index) => (

        <li className="relative " key={index}>
            <Link to={film.title} >
            <div className="border-[4px] border-BorderA relative w-[25rem] h-auto hover:scale-125 duration-500  ">
                <img src={film.image} />
                <p>{film.title}</p>
                <p>{film.director}</p>
                <p className="realtive flex justify-end">{film.original_title}</p>
                <div className="relative flex text-xl left-[1rem] bottom-[0.5rem] text-white px-4 p-2 bg-grayA rounded-md cursor-pointer w-fit ">
                    <Link to={film.title} >
                        <p>View</p>
                    </Link>
                </div>


            </div>
            </Link>
        </li>
    ));

    return(
        <>

            <div className="font-body relative " >
        <div className="relative border-t-[1px] flex w-full h-[10rem] bg-gradient-to-t from-GamePage to-NavbarColor items-center justify-center gap-x-2">
            <div className="relative  bg-white w-[9rem] h-[9rem]  ">
                <img src={logo}></img>
            </div>
                <h className="flex text-white text-2xl ">Studio Ghibli API</h>
                    <div className="relative flex text-xl  text-white p-3 bg-blue-800 bottom-[1rem] rounded-md cursor-pointer self-end right-[8.7rem] ">
                        <Link to="#" onClick={redirectTolink}>
                            <p>Api</p>
                        </Link>
                    </div>
                        <div className="relative flex text-xl  text-white p-3 bg-gray-400 bottom-[1rem] rounded-md cursor-pointer self-end right-[8.3rem] ">
                            <Link to="#" onClick={redirectTolink}>
                                <p>All Film</p>
                            </Link>
                        </div>

        </div>

                    <ul className=" top-[5rem] left-[5rem] gap-x-[17rem]  relative grid grid-cols-3 gap-y-[8rem] w-fit  ">
                        {filmDetails}
                    </ul>

            </div>

        </>
    );
}
export default Film;