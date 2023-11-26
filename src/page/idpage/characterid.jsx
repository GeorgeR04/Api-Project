import React, {useEffect, useState} from "react";
import {fetchGhibliFilms} from "../../Component/api/api.jsx";
import {Link, useParams} from "react-router-dom";
import {fetchGhibliPeople} from "../../Component/api/api.jsx";
import {fetchGhiblilocation} from "../../Component/api/api.jsx";

//Same methode as Filmpage but for character
function FilmcharactereId() {
    const { id } = useParams();
    const [people, setPeople] = useState([]);
    const [film, setFilm] = useState([]);
    const [location,setlocation]=useState([]);



    useEffect(() => {
        const fetchData = async () => {

            const peopleData = await fetchGhibliPeople();
            const foundPeople = peopleData.find(people => people.name === id);
            setPeople(foundPeople);

            const filmsData =await fetchGhibliFilms();
            const RelatedFilms =filmsData.filter(film =>film.url.includes(foundPeople.films));
            setFilm(RelatedFilms);

            const LocationData =await fetchGhiblilocation();
            const RelatedLocation =LocationData.filter(location =>location.residents.includes(foundPeople.url));
            setlocation(RelatedLocation);
        };

        fetchData();
    }, [id]); // Runs when 'id' changes

    return (
        <>

            
            {people ? (
                    <div className="relative grid grid-cols-3 bg-gradient-to-t from-GamePage to-NavbarColor text-white  text-xl font-body  h-[60rem]">
                            <div className="relative flex flex-col w-[15rem] h-fit p-4 left-[15rem] bg-FilmBg ">
                          <p className="text-textC text-2xl">Name:</p>
                            <p>{people.name}</p>
                          <p className="text-textC text-2xl">Gender:</p>
                            <p> {people.gender}</p>
                          <p className="text-textC text-2xl">Age:</p>
                            <p>{people.age}</p>
                          <p className="text-textC text-2xl">Eye Color:</p>
                            <p>{people.eye_color}</p>
                          <p className="text-textC text-2xl">Hair Color:</p>
                            <p>{people.hair_color}</p>
                      </div>
                        <div className="relative flex flex-col w-[15rem] h-fit p-4 left-[15rem] bg-FilmBg ">
                            <p className="text-textC text-2xl">Film Related:</p>
                            {film.map(Item => (
                                <Link key={Item.id} to={`/film/${Item.title}`} >
                                        <p className="hover:text-hoverC ">
                                            {Item.title}
                                        </p>
                                </Link>
                            ))}
                        </div>

                        <div className="relative flex flex-col w-[15rem] h-fit p-4 left-[15rem] bg-FilmBg ">
                            <p className="text-textC text-2xl">Location Related:</p>
                            {location.map(Loc => (
                                <p key={Loc.id}>
                                    {Loc.name}
                                </p>
                            ))}
                        </div>
                    </div>





            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default FilmcharactereId;