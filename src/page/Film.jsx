import React, { useEffect, useState } from 'react';
import { fetchGhibliFilms } from './../Component/api/api.jsx';
import logo from './../assets/Studio.png';
import {Link} from "react-router-dom";

function Film(){

    //useState([]) is a React hook that allows functional components to manage state.
    // in this example It initializes a state variable named films with an empty array [] as its default value.
    // setFilms is the function used to update this state variable.
    //
    // The films variable will contain data related to films retrieved or managed within the React component.

    const [films, setFilms] = useState([]);

    //This function is to redirect to a link you can replace this by a <Link> to={path}
    const redirectTolink = () => {
        window.location.href = 'https://ghibliapi.vercel.app/';
    };

    //for more information about useEffect https://legacy.reactjs.org/docs/hooks-effect.html
    //When it runs: This code runs when the component is first shown on the screen.
    //
    // What it does: It gets film data using a function called fetchGhibliFilms()
    // which fetches information about movies from api.jsx.
    // This happens inside an asynchronous function called fetchFilmsData.
    //
    // What it then does: Once it gets the film data, it updates the films variable using setFilms(filmsData).
    // This setFilms function is what React gives us to update a variable that behaves like a memory space within the component.
    //
    // How often it runs: The useEffect code inside the function [] means it only runs this code once, when the component is first shown.
    // If you put something inside the [], it will check for changes in that particular thing, and whenever that changes, this code will run again.
    //
    // In simple terms, it's a way to get movie data and store it when the component is first shown.

    useEffect(() => {
        const fetchFilmsData = async () => {
            const filmsData = await fetchGhibliFilms();
            setFilms(filmsData);
        };

        fetchFilmsData();
    }, []);

//What it does: This line of code uses the map function on the films array.
//
// How it works: The map function is like a loop that goes through each item in the films array from the api one by one.
//
// What it does with each item: For each film in the films array, it runs a piece of code that uses that film's information.
//
// film and index: Inside the loop, film represents each individual film object in the array from the api, and index is the position of that film in the array from the api.
//
// What happens to the results: Display information about the film , it creates a new array (filmDetails) with the results of that code for each film.
//
// In simpler terms, it's a way to go through each film in the films list and display each film's information, storing the results in a new array called filmDetails.
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

    //Resulat of return: Create the Gray element with Studio Ghibli API link
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