import React, {useEffect, useState} from "react";
import {fetchGhibliFilms} from "../../Component/api/api.jsx";
import {Link, useParams} from "react-router-dom";
import {fetchGhibliPeople} from "../../Component/api/api.jsx";
import {fetchGhiblilocation} from "../../Component/api/api.jsx";

function FilmPageId() {
    const { id } = useParams();  // Extracts 'id' from the URL parameters
    const [film, setFilm] = useState(null); // Sets up a variable to hold film data
    const [people, setPeople] = useState([]); // Sets up a variable to hold people data
    const [location,setlocation]=useState([]); // Sets up a variable to hold location data

    // Function to convert total minutes to hours and minutes format
    const convertToHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}min`;
    };

    //What it does: This code runs when the 'id' value changes.
    //
    // How it works: It starts by fetching data related to films, people, and locations from the api.
    //
    // What it does with each item:
    //
    // It finds a specific film based on its title matching the 'id'.
    // Then, it filters people and locations related to that film by checking if their associated films include the URL of the found film.
    // foundFilm: Represents the film that matches the 'id' from the fetched film data.
    //
    // peopleRelatedToFilm: Is an array containing people associated with the found film.
    //
    // locationRelatedToFilm: Is an array containing locations associated with the found film.
    //
    // What happens to the results:
    //
    // The found film is updated using setFilm(foundFilm).
    // The people state is updated with setPeople(peopleRelatedToFilm).
    // The location state is updated with setLocation(locationRelatedToFilm).
    // In simpler terms: When the 'id' changes, this code fetches information about a specific film,
    // filters people and locations associated with that film, and updates the corresponding variables with this information.

    useEffect(() => {
        const fetchData = async () => {
            // Fetch films data
            const filmsData = await fetchGhibliFilms();
            const foundFilm = filmsData.find(film => film.title === id);
            setFilm(foundFilm);

            // Fetch people data
            const peopleData = await fetchGhibliPeople();
            const peopleRelatedToFilm = peopleData.filter(person =>
                person.films.includes(foundFilm.url)
            );
            setPeople(peopleRelatedToFilm);

            const locationData = await fetchGhiblilocation();
            const locationRelatedToFilm = locationData.filter(location =>
                location.films.includes(foundFilm.url)
            );
            setlocation(locationRelatedToFilm);
        };

        fetchData();
    }, [id]); // Runs when 'id' changes

    //this code checks if the film variable exists and renders different content based on its existence.
    // If it exists, one set of content is displayed; if it doesn't, another set of content is shown.
    return (
        <>
            {film ? (
                <div className="">
                    <img className="flex w-screen h-[25rem]" src={film.movie_banner} ></img>

                   <div className="relative flex bg-gradient-to-t from-GamePage to-NavbarColor text-white  text-xl font-body  h-[20rem]">
                    <img className="absolute flex bottom-[5rem] left-[15rem] w-[15rem] h-auto border-2" src={film.image} />
                       <h2 className="relative left-[37rem] top-5 text-2xl ">{film.title}</h2>
                       <div className="relative left-[28.5rem] w-[65rem] top-[4rem] tracking-[0.1rem]  ">
                           <p >Summary:</p>
                           <p > {film.description}</p>
                       </div>
                   </div>

                    <div className="relative grid grid-cols-3 bg-GamePage text-white font-body text-xl  h-[40rem]">

                        <div className="relative flex flex-col w-[15rem] h-fit p-4 left-[15rem] bg-FilmBg ">
                            <p className="text-textC text-2xl">Director</p>
                                    <p className="hover:text-hoverC">{film.director}</p>
                            <p className="text-textC text-2xl">Producer</p>
                                    <p className="hover:text-hoverC">{film.producer}</p>
                            <p className="text-textC text-2xl">Original Title</p>
                                <p>{film.original_title}</p>
                            <p className="text-textC text-2xl">Original Title Romanised</p>
                                <p>{film.original_title_romanised}</p>
                            <p className="text-textC text-2xl">Release Date</p>
                                <p>{film.release_date}</p>
                            <p className="text-textC text-2xl">Duration</p>
                                <p>{convertToHoursAndMinutes(film.running_time)}</p>
                            <p className="text-textC text-2xl">Score</p>
                                <p>{film.rt_score}</p>
                        </div >

                            <div className="relative text-white bg-FilmBg font-body text-xl h-fit p-3  w-[15rem]  bottom-[0rem] ">
                                <p className="text-textC text-2xl">Character:</p>
                                <ul className="w-fit" >
                                    {people.map(person => (
                                        <Link to={`/character/${person.name}`} key={person.id}>
                                            <li className="w-fit hover:text-hoverC cursor-pointer">
                                                {person.name}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative text-white bg-FilmBg font-body text-xl h-fit p-3 w-[15rem] bottom-[0rem]" >
                                <p className="text-textC text-2xl">Location:</p>
                                <ul className="w-fit" >
                                    {location.map(local =>(
                                        <Link to={`/location/${local.name}`} key={local.id}>
                                            <li className="w-fit hover:text-hoverC cursor-pointer">
                                                {local.name}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>



                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default FilmPageId;