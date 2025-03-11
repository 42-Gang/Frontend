import { useNavigate } from 'react-router-dom';
import Button_Back from '../assets/image/Button_Back.svg';

const History_Home = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/Home');
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
            </div>
        </div>
    );
}

export default History_Home;