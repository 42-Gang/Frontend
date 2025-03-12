import { useNavigate } from 'react-router-dom';
import Gun from '../assets/image/Gun.svg';
import Selection from '../assets/image/Selection.svg';
import History_Home from './History_Home';

const Home = () => {
    const navigate = useNavigate();

    const handleStartGameClick = () => {
        navigate('/Select_GameOption');
    };

    const handleSettingClick = () => {
        navigate('/Setting');
    };

    const handleGameHistoryClick = () => {
        navigate('/History_Home');
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[800px] h-[600px] bg-black">
                <h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl mt-20 text-center">PING PONG</h1>
                <div className="flex justify-center">
                    <img src={Gun} className="mt-[-40px]"/>
                    <h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl mt-3 text-center">GANG</h1>
                    <img src={Gun} className="flip-image mt-[-30px]"/>
                </div>
                <div className="flex flex-col items-center text-[27px] space-y-1 mt-[-128px] ml-[-7px]">
                    <button
                    className="w-[180px] text-white font-['StWinterPixel24BoldDemoBold'] relative group flex items-center justify-start space-x-2 ml-[-20px] cursor-pointer"
                    onClick={handleStartGameClick}
                    >
                    <img src={Selection} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    START GAME
                    </button>
                    <button
                    className="w-[200px] text-white font-['StWinterPixel24BoldDemoBold'] relative group flex items-center justify-start space-x-2 cursor-pointer"
                    onClick={handleGameHistoryClick}
                    >
                    <img src={Selection} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    GAME HISTORY
                    </button>
                    <button
                    className="w-[100px] text-white font-['StWinterPixel24BoldDemoBold'] relative group flex items-center justify-start space-x-2 ml-[-100px] cursor-pointer"
                    >
                    <img src={Selection} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    FRIEND
                    </button>
                    <button
                    className="w-[120px] text-white font-['StWinterPixel24BoldDemoBold'] relative group flex items-center justify-start space-x-2 ml-[-82px] cursor-pointer"
                    onClick={handleSettingClick}
                    >
                    <img src={Selection}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    SETTING
                    </button>
                </div>
                <div className="text-sm flex justify-center text-center mt-15 tracking-[5px] leading-[27px]">
                    <p className="font-['QuinqueFive'] text-white">
                    TH & C 1980 1993 NAMCO LTD.<br/>NAMCO LoginTEK, INC.<br/>LICENSED BY NINTENDO
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;