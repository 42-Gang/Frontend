import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button_Back from '../../assets/image/Button_Back.svg';
import Button_History_On from '../../assets/image/Button_History_On.svg';
import Button_History_Off from '../../assets/image/Button_History_Off.svg';

const History_Home = () => {
    const navigate = useNavigate();
    const [clickedButton, setClickedButton] = useState<number | null>(null);

    const handleBackClick = () => {
        navigate('/Home');
    };

    const handleButtonClick = (buttonIndex: number) => {
        setClickedButton(buttonIndex);
    };

    return (
        <div className="flex justify-center items-center w-[800px] h-[600px] bg-black mx-auto">
            <div className="w-[800px] h-[600px] bg-black font-['Sixtyfour-Regular'] text-white">
                <button>
                    <img
                    className="cursor-pointer ml-[4px] mt-[6px]"
                    src={Button_Back}
                    onClick={handleBackClick}
                    />
                </button>
                <span className="text-xl flex justify-center mt-10">
                    Please select the mode
                </span>
                <div className="flex justify-center mt-[30px] gap-[100px]">
                    <button onClick={() => handleButtonClick(1)}>
                        <img
                            src={clickedButton === 1 ? Button_History_On : Button_History_Off}
                        />
                    </button>
                    <button onClick={() => handleButtonClick(2)}>
                        <img
                            src={clickedButton === 2 ? Button_History_On : Button_History_Off}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default History_Home;