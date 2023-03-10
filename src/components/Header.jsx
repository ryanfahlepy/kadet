import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    //setting nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <>
            {/* <div
                className="
                bg-blue-500
                sm:bg-green-500
                md:bg-yellow-500
                lg:bg-orange-500
                xl:bg-red-500"

            >
                Screen Width Test{" "}
            </div> */}

            {/* Header */}
            <div className={color ? 'z-10  fixed w-full bg-red-900 bg-opacity-90 transition duration-700 ease-in-out' : 'z-10  fixed w-full transition duration-700 ease-in-out'}>
                <nav className="">
                    <div className="mx-2 max-w-full px-4 lg:px-6 xl:px-20">
                        <div className="flex h-18 sm:h-20 md:h-28 xl:h-32">
                            <div className="flex w-full items-center justify-between">
                                <Link className="flex-shrink-0" to="/">
                                    <img
                                        className="h-16 sm:h-20 md:h-28 xl:h-32"
                                        src="images/logo.png"
                                        alt="logo"
                                    />
                                </Link>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link
                                            className="px-3 py-2 font-bold text-yellow-500  hover:text-yellow-200 focus:text-yellow-200 active:text-yellow-500  md:text-base lg:text-xl"
                                            to="/"
                                        >
                                            Beranda
                                        </Link>
                                        <div className="dropdown relative ">
                                            <button
                                                className="px-3 py-2 font-bold text-yellow-500 hover:text-yellow-200 focus:text-yellow-200 active:text-yellow-500  md:text-base lg:text-xl "
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Struktur Organisasi
                                            </button>
                                            <div className="dropdown-menu absolute hidden">
                                                <ul
                                                    className={color ? " flex flex-col space-y-4 rounded-lg  bg-red-900 bg-opacity-80 p-2 text-center font-bold text-yellow-500 md:text-base lg:text-lg transition duration-700 ease-in-out" : " flex flex-col space-y-4 rounded-lg  bg-black bg-opacity-80 p-2 text-center font-bold text-yellow-500 md:text-base lg:text-lg transition duration-700 ease-in-out"}
                                                    aria-labelledby="dropdownMenuButton1"
                                                >
                                                    <li className="rounded-lg transition  hover:text-yellow-200 ">
                                                        <Link
                                                            className="dropdown-item active:bg-transparent "
                                                            to="/resimenkadet"
                                                        >
                                                            Resimen Kadet Mahasiswa
                                                        </Link>
                                                    </li>
                                                    <li className="rounded-lg transition  hover:text-yellow-200 ">
                                                        <Link
                                                            className="dropdown-item active:bg-transparent "
                                                            to="/resimenkorps"
                                                        >
                                                            Resimen Korps Kadet Mahasiswa
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Link
                                            className="px-3 py-2 font-bold text-yellow-500 hover:text-yellow-200 focus:text-yellow-200 active:text-yellow-500  md:text-base lg:text-xl"
                                            to="/galeri"
                                        >
                                            Galeri
                                        </Link>
                                        <Link
                                            className="px-3 py-2 font-bold text-yellow-500 hover:text-yellow-200 focus:text-yellow-200 active:text-yellow-500  md:text-base lg:text-xl"
                                            to="/berita"
                                        >
                                            Berita
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-yellow-500 hover:text-yellow-200 focus:outline-none active:text-yellow-500"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="h-8 w-8"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>



                    <div className={`md:hidden  ${isOpen ? "" : "hidden"}`}>
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            <Link
                                className="block px-3 py-2 text-lg font-bold text-yellow-500 hover:text-yellow-200 active:text-yellow-500 "
                                to="/"
                            >
                                Beranda
                            </Link>
                            <div className="dropdown relative ">
                                <button
                                    className="block px-3 py-2 text-lg font-bold text-yellow-500 hover:text-yellow-200 focus:text-yellow-200 active:text-yellow-500 "
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Struktur Organisasi
                                </button>
                                <div className="dropdown-menu absolute hidden">
                                    <ul
                                        className={color ? " flex flex-col space-y-4 rounded-lg  bg-red-900 bg-opacity-80 p-2 text-center font-bold text-yellow-500 md:text-base lg:text-lg transition duration-700 ease-in-out" : " flex flex-col space-y-4 rounded-lg  bg-black bg-opacity-80 p-2 text-center font-bold text-yellow-500 md:text-base lg:text-lg transition duration-700 ease-in-out"}
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li className="block rounded-lg transitio hover:text-yellow-200">
                                            <Link
                                                className="dropdown-item active:bg-transparent "
                                                to="/resimenkadet"
                                            >
                                                Resimen Kadet Mahasiswa
                                            </Link>
                                        </li>
                                        <li className="block rounded-lg transitio hover:text-yellow-200">
                                            <Link
                                                className="dropdown-item active:bg-transparent "
                                                to="/resimenkorps"
                                            >
                                                Resimen Korps Kadet Mahasiswa
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link
                                className="block px-3 py-2 text-lg font-bold text-yellow-500 hover:text-yellow-200 active:text-yellow-500 "
                                to="/galeri"
                            >
                                Galeri
                            </Link>
                            <Link
                                className="block px-3 py-2 text-lg font-bold text-yellow-500 hover:text-yellow-200 active:text-yellow-500 "
                                to="/berita"
                            >
                                Berita
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
