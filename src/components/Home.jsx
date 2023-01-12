import React from "react";
import Nft2 from "../assets/nft2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-pink-500 via-gray-900 to-gray-900"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-5/6 w-11/12" style={{marginRight:"15rem"}}>
                    <h2 className="text-4xl sm:text-4xl font-bold text-white">
                        The only NFT marketplace you need
                    </h2>
                    

                    <div className="flex flex-row  mt-10">
                        <div className="mr-2"><Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white shadow-lg shadow-pink-500/50 from-sky-500 to-pink-500 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  cursor-pointer"
                        >
                            Create Collection
                             
                        </Link></div>
                        <div className="ml-4">
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group shadow-lg shadow-pink-500/50 text-white from-gray-900 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r cursor-pointer"
                        >
                            Exploremarketplace
                        </Link>
                        </div>
                        
                    </div>
                </div>

                <div className="w-10/12">
                    <img
                        src={Nft2}
                        // src="/"
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    style={{height:"20rem"}}/>
                </div>
            </div>
        </div>
    );
};

export default Home;