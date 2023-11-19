import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import {NavbarItems} from "./Items/NavbarItems.jsx";
//import Logo from "./../assets/LOGOMLG.png";
//import Logo2 from "./../assets/ESL_.png";
//import Logo3 from "./../assets/Studio.png";
import Dropdownmenu from "./Items/Dropdown.jsx";
//  <img src={Logo2} alt="Image description"  className="w-[3.8rem] h-auto " />
// <img src={Logo} alt="Image description"  className="w-[11rem] h-auto " />
function Navbar() {
    const [Dropdown, setDropdown] = useState(false);


    return (
        <>

            <nav className="flex relative justify-end font-body text-[1.4rem] bg-NavbarColor  h-[5rem] ">
                <div className="flex relative bg-NavbarColor2 rotate-45 left-[4rem]  w-[15rem] h-[5rem] -top-[4.55rem] "></div>
                <div className="flex absolute left-0   ">

                </div>

                <div className="flex  bg-NavbarColor2 w-[30rem] justify-end">

                <ul className="flex relative space-x-5 text-white mt-5 mr-5 h-fit ">
                    {NavbarItems.map((item) => {
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



                        return (
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

