//dependency
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

//dependency
import { NavLink } from 'react-router-dom';

//assets
import logo from '../assets/logo/ANDECT.png';
import githubLogo from '../assets/github.png'

export default function Navbar() {
    const [menu, setMenu] = useState(true);
    const isLarge = useMediaQuery({ query: `(min-width: 1024px)` });
    const menuOnClick = () => {
        if (menu) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }

    useEffect(() => {
        if (isLarge) {
            setMenu(true);
        }
    }, [isLarge]);

    return (
        <nav className="container mx-auto p-2 flex items-center justify-between flex-wrap bg-white">
            {/* Website icon and name*/}
            <NavLink to="/">
                <button className="flex items-center flex-shrink-0 mr-10 active navbar-item align-middle">
                    <img className="fill-current h-20 w-20 mr-1" src={logo} alt="ANDECT Logo"></img>
                    <span className="font-semibold text-4xl tracking-tight">ANDECT</span>
                </button>
            </NavLink>
            {/* Menu button for small width (unfinished) */}
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded border-yellow-400 hover:text-yellow-700 hover:border-yellow-600" onClick={menuOnClick}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            {/* List of links */}
            {menu &&
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-xl font-semibold lg:flex-grow">
                        <NavLink to="/" className={"block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-600 hover:bg-gray-50 p-2 mr-5 rounded align-middle"}>
                            Home
                        </NavLink >
                        <NavLink to="/test" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-600 hover:bg-gray-50 p-2 mr-5 rounded align-middle">
                            Test
                        </NavLink >
                    </div>
                </div>
            }
        </nav>
    )
}