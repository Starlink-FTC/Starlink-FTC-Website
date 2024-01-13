import {Link} from "react-router-dom";

import {arrow} from "../assets/icons";

const HomeInfo = ({currentStage}) => {
    if (currentStage === 1) 
        return (
            <h1
                className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Welcome To The {/* <span className='font-semibold mx-2 text-white'>Adrian</span> */}

                <br/>
                <span className='font-semibold mx-3 text-lime-400 text-[24px]'>STARLINK STATION</span>
                <br/>
                <span className='font-semibold mx-3 text-white text-[15px]'>Drag Sideways To Explore</span>
            </h1>
        );
    
    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    THE LIVING QUARTERS
                    <br/>
                    <span className="text-[15px]">| About The Team |</span>
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Enter
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    THE ASTRAL FORGE
                    <br/>
                    <span className="text-[15px]">| About The Bot |</span>
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Enter
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    THE INVESTORS HUB
                    <br/>
                    <span className="text-[15px]">| Our Stellar Sponsors |</span>
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Enter
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
