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
                    <button>
                        <img
                        className="cursor-pointer ml-[4px] mt-[6px]"
                        src={Button_Back}
                        onClick={handleBackClick}
                        />
                    </button>
                        <h1
                        className="text-4xl flex justify-center mt-5"
                        >Setting</h1>
                    <div className="flex items-center w-full mt-16">
                        <div className="relative">
                            <img src={ProfileSection_InSetting} className="ml-[70px]"/>
                            <button className="absolute bottom-2 right-2 cursor-pointer">
                                <img src={Button_Change_Profile}/>
                            </button>
                        </div>
                        <div className="text-white text-2xl space-y-2 ml-[80px] flex flex-col">
                            <div className="flex">
                                <span className="block">NickName:</span>
                                <button className="cursor-pointer ml-[130px]">
                                    <img src={Button_Change_NickName}/>
                                </button>
                            </div>
                            <span className="block">WIN:</span>
                            <span className="block">LOSE:</span>
                            <span className="block">Tournament:</span>
                        </div>
                    </div>
                    <button className="cursor-pointer group mt-17 ml-14 flex flex-col items-center">
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
                        <span className="tracking-[20px] text-red-600 mt-[-54px]">LogOut</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Setting;