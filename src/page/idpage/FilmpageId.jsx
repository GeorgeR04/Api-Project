import React, {useEffect, useState} from "react";
import {fetchGhibliFilms} from "../../Component/api/api.jsx";
import {Link, useParams} from "react-router-dom";
import {fetchGhibliPeople} from "../../Component/api/api.jsx";
import {fetchGhiblilocation} from "../../Component/api/api.jsx";

function FilmPageId() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [people, setPeople] = useState([]);
    const [location,setlocation]=useState([]);
    const convertToHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}min`;
    };

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
                                <Link to={`/staff/${film.director}`} >
                                    <p className="hover:text-hoverC">{film.director}</p>
                                </Link>
                            <p className="text-textC text-2xl">Producer</p>
                                <Link to={`/staff/${film.producer}`} >
                                    <p className="hover:text-hoverC">{film.producer}</p>
                                </Link>
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