import { useNavigate } from 'react-router-dom';
import Button_Back from '../assets/image/Button_Back.svg';
import Button_Change_NickName from '../assets/image/Button_Change_NickName.svg';
import Button_Change_Profile from '../assets/image/Button_Change_Profile.svg';
import ProfileSection_InSetting from '../assets/image/ProfileSection_InSetting.svg';
import Button_LogOut_Off from '../assets/image/Button_LogOut_Off.svg';
import Button_LogOut_On from '../assets/image/Button_LogOut_On.svg';

const Setting = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/Home');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[800px] h-[600px] bg-black">
                <div className="font-['Sixtyfour-Regular'] text-white text-2xl leading-15">
                        <h1
                        className="text-4xl flex justify-center mt-16"
                        >Setting</h1>
                    <button className="cursor-pointer">
                        <img
                        src={Button_Change_NickName}
                        className="absolute top-130 right-60"
                        />
                    </button>
                    <div className="absolute top-127 right-90">
                        <span className="block">NickName:</span>
                        <span className="block">WIN:</span>
                        <span className="block">LOSE:</span>
                        <span className="block">Tournament:</span>
                    </div>
                    <button>
                        <img
                        className="absolute top-82 left-55 cursor-pointer"
                        src={Button_Back}
                        onClick={handleBackClick}
                        />
                    </button>
                    <img
                    src={ProfileSection_InSetting}
                    className="absolute top-125 left-70"
                    />
                    <button className="cursor-pointer">
                        <img
                        src={Button_Change_Profile}
                        className="absolute bottom-120 left-110"
                        />
                    </button>
                    <button className="cursor-pointer absolute bottom-90 left-67  group">
                        <img
                        src={Button_LogOut_Off}
                        className="group-hover:hidden"
                        alt="Default Icon"
                        />
                        <img
                        src={Button_LogOut_On}
                        className="group-hover:block hidden"
                        alt="Hover Icon"
                        />
                        <span className="tracking-[20px] absolute bottom-[-4px] left-5/15 text-red-600">LogOut</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Setting;