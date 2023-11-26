import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import {NavbarItems} from "./Items/NavbarItems.jsx";
import Dropdownmenu from "./Items/Dropdown.jsx";
import Dropdownmenun from "./Items/Dropdownn.jsx";
//This is the code that display the navbar
function Navbar() {

    const [Dropdown, setDropdown] = useState(false);//set a variable to the dropdown1
    const [Dropdownn,setDropdownn]=useState(false);//set a variable to the dropdown2

    return (
        <>

            <nav className="flex relative justify-end font-body text-[1.4rem] bg-NavbarColor  h-[5rem] ">
                <div className="flex relative bg-NavbarColor2 rotate-45 left-[4rem]  w-[15rem] h-[5rem] -top-[4.55rem] "></div>
                <div className="flex absolute left-0   ">

                </div>

                <div className="flex  bg-NavbarColor2 w-[30rem] justify-end">

                <ul className="flex relative space-x-5 text-white mt-5 mr-5 h-fit ">
                    {NavbarItems.map((item) => {
                        //check to see if there is an element name that is =to a specific element and if is then check if the mouse is on the elements if it is display the dropdown
                        if (item.title === "Film") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.className}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {Dropdown && <Dropdownmenu />}



                                </li>
                            );

                        }

                        if (item.title === "Character") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.className}
                                    onMouseEnter={() => setDropdownn(true)}
                                    onMouseLeave={() => setDropdownn(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {Dropdownn && <Dropdownmenun />}



                                </li>
                            );

                        }


                        return (
                            //display all the elements of the navbar
                            <li key={item.id} className={item.className}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}

                </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

