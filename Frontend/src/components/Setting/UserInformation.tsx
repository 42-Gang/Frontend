import { useState } from 'react'
import ButtonChangeNickname from '../../assets/image/ButtonChangeNickname.svg'
import ChangeNicknamePopup from './Popup/ChangeNicknamePopup';

const UserInformation = () => {
    const [nickname, setNickname] = useState("");
    const [isChangeNicknamePopupOpen, setIsChangeNicknamePopupOpen] = useState(false);
    const example1 = {
        Nickname: "Jone",
        Win: 999,
        Lose: 20,
        Tournament: 460
    }

    const OpenNicknamePopup = () => {
        setIsChangeNicknamePopupOpen(true);
    }
    const CloseNicknamePopup = () => {
        setIsChangeNicknamePopupOpen(false);
    }

    return (
        <div className="text-white font-['Sixtyfour-Regular'] text-[22px] flex flex-col absolute right-[190px] bottom-[220px] gap-3 z-50">
            {/* 닉네임 설정 */}
            <div className="flex">
                <span>Nickname:</span>
                <span className="absolute left-[200px]">{nickname || example1.Nickname}</span>
            </div>
            <button
                className="cursor-pointer absolute right-[-175px]"
                onClick={OpenNicknamePopup}
                >
                <img src={ButtonChangeNickname}/>
            </button>
            {/* 1 VS 1 우승 횟수 */}
            <div className="flex">
                <span>Win:</span>
                <span className="absolute left-[90px]">{Math.min(example1.Win, 999)}</span>
            </div>
            {/* 1 VS 1 패배 횟수 */}
            <div className="flex">
                <span>Lose:</span>
                <span className="absolute left-[110px]">{Math.min(example1.Lose, 999)}</span>
            </div>
            {/* 토너먼트 우승 횟수 */}
            <div className="flex">
                <span>Tournament:</span>
                <span className="absolute left-[244px]">{Math.min(example1.Tournament,999)}</span>
            </div>
            {/* 닉네임 설정 팝업 렌더링 */}
            {isChangeNicknamePopupOpen && (
                <ChangeNicknamePopup
                    onClose={CloseNicknamePopup}
                    onChangeNickname={setNickname}
                />
            )}
        </div>
    )
}

export default UserInformation