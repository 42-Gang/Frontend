import { useNavigate } from 'react-router-dom';
import Button_Back from '../assets/image/Button_Back.svg'
import Button_GameMode_Off from '../assets/image/Button_GameMode_Off.svg'
import Button_GameMode_On from '../assets/image/Button_GameMode_On.svg'
import Vs from '../assets/image/1Vs1.svg';
import Tournament from '../assets/image/Tournament.svg';

const Select_GameMode_Custom = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/Select_GameOption');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[800px] h-[600px] bg-black">
                <button>
                    <img
                    className="cursor-pointer ml-[4px] mt-[6px]"
                    src={Button_Back}
                    onClick={handleBackClick}
                    />
                </button>
                <h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl mt-2 text-center">PING PONG</h1>
                <h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl mt-3 text-center">GANG</h1>
                <div className="ml-[54px] mt-[30px] space-x-10 text-white font-['StWinterPixel24BoldDemoBold'] text-5xl ">
                    <button className="cursor-pointer relative group">
                        <img
                        src={Button_GameMode_Off}
                        className="group-hover:hidden"
                        alt="Default Icon"
                        />
                        <img
                        src={Button_GameMode_On}
                        className="group-hover:block hidden"
                        alt="Hover Icon"
                        />
                        <img src={Vs} className="absolute top-5 left-15"/>
                        <span
                        className="absolute bottom-10 left-28 group-hover:text-yellow-300"
                        >1VS1</span>
                    </button>
                    <button className="cursor-pointer relative group">
                    <img
                        src={Button_GameMode_Off}
                        className="group-hover:hidden"
                        alt="Default Icon"
                        />
                        <img
                        src={Button_GameMode_On}
                        className="group-hover:block hidden"
                        alt="Hover Icon"
                        />
                        <img src={Tournament} className="absolute top-8 right-18"/>
                        <span
                        className="absolute bottom-10 right-5 group-hover:text-yellow-300"
                        >Tournament</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Select_GameMode_Custom;