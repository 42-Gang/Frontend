import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeProfilePopup from '../../components/Setting/ChangeProfilePopup';
import ChangeNickNamePopup from '../../components/Setting/ChangeNickNamePopup';
import ConfirmLogOutPopup from '../../components/Setting/ConfirmLogOutPopup';
import Button_Back from '../../assets/image/Button_Back.svg';
import Button_Change_NickName from '../../assets/image/Button_Change_NickName.svg';
import Button_Change_Profile from '../../assets/image/Button_Change_Profile.svg';
import profileSection_InSetting from '../../assets/image/profileSection_InSetting.svg';
import Button_LogOut_Off from '../../assets/image/Button_LogOut_Off.svg';
import Button_LogOut_On from '../../assets/image/Button_LogOut_On.svg';

const Setting = () => {
    const navigate = useNavigate();
    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
    const [isNickNamePopupOpen, setIsNickNamePopupOpen] = useState(false);
    const [isConfirmLogOutPopupOpen, setIsConfirmLogOutPopupOpen] = useState(false);
    const [nickName, setNickName] = useState("");
    const [profileImg, setProfileImg] = useState<string | null>(null);

    const handleBackClick = () => {
        navigate('/Home');
    };

    const handleOpenProfilePopup = () => {
        setIsProfilePopupOpen(true);
    };

    const handleCloseProfilePopup = () => {
        setIsProfilePopupOpen(false);
    };

    const handleOpenNickNamePopup = () => {
        setIsNickNamePopupOpen(true);
    };

    const handleCloseNickNamePopup = () => {
        setIsNickNamePopupOpen(false);
    };

    const handleOpenConfirmLogOutPopup = () => {
        setIsConfirmLogOutPopupOpen(true);
    };

    const handleCloseConfirmLogOutPopup = () => {
        setIsConfirmLogOutPopupOpen(false);
    };

    const handleProfileChange = (newProfile: string | null) => {
        setProfileImg(newProfile);
    };

    return (
        <div className="flex justify-center items-center w-[800px] h-[600px] bg-black mx-auto ">
            <div className="w-[800px] h-[600px] bg-black relative">
                <div
                className={`${isProfilePopupOpen ? "bg-gray-300 opacity-70" : ""}
                ${isNickNamePopupOpen ? "bg-gray-300 opacity-70" : ""}
                ${isConfirmLogOutPopupOpen ? "bg-gray-300 opacity-70" : ""}`}
                >
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
                        <div className="flex items-center w-full mt-[80px] ml-[50px]">
                            <div className="relative">
                                {profileImg ? (
                                    <img src={profileImg} className="w-[249px] h-[249px] rounded-full object-cover"/>
                                ) : (
                                    <img src={profileSection_InSetting} className="w-[249px] h-[249px] rounded-full object-cover"/>
                                )
                                }
                                <button
                                className="absolute bottom-2 right-2 cursor-pointer"
                                onClick={handleOpenProfilePopup}
                                >
                                    <img src={Button_Change_Profile}/>
                                </button>
                            </div>
                            <div className="text-white text-2xl space-y-2 ml-[80px] flex flex-col">
                                <div className="flex">
                                    <span className="block">NickName:{nickName}</span>
                                    <button
                                    className="cursor-pointer ml-[130px] absolute right-[20px]"
                                    onClick={handleOpenNickNamePopup}
                                    >
                                        <img src={Button_Change_NickName}/>
                                    </button>
                                </div>
                                <span className="block">WIN:</span>
                                <span className="block">LOSE:</span>
                                <span className="block">Tournament:</span>
                            </div>
                        </div>
                        <button
                        className="cursor-pointer group mt-16 ml-14 flex flex-col items-center"
                        onClick={handleOpenConfirmLogOutPopup}
                        >
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
            {isProfilePopupOpen && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <ChangeProfilePopup onClose={handleCloseProfilePopup} onChangeProfile={handleProfileChange}/>
                </div>
            )}
            {isNickNamePopupOpen && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <ChangeNickNamePopup onClose={handleCloseNickNamePopup} onChangeNickName={setNickName}/>
                </div>
            )}
            {isConfirmLogOutPopupOpen && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <ConfirmLogOutPopup onClose={handleCloseConfirmLogOutPopup}/>
                </div>
            )}
            </div>
        </div>
    );
};

export default Setting;