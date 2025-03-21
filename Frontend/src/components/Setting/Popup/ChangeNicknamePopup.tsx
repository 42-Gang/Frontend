import { useState } from 'react'
import ButtonCloseNicknamePopup from '../../../assets/image/ButtonCloseNicknamePopUp.svg'

interface ChangeNicknamePopupProps {
    onClose: () => void
    onChangeNickname: (newNickname: string) => void
}

const ChangeNicknamePopup: React.FC<ChangeNicknamePopupProps> = ({ onClose, onChangeNickname }) => {
    const [inputValue, setInputValue] = useState("");

    const ChangeNickname = () => {
        if (inputValue.trim().length > 0 && inputValue.length <= 8) {
            onChangeNickname(inputValue);
            onClose();
        }
    }

    return (
        <div className="bg-white w-[602px] h-[256px] rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-6">
            <button
                className="cursor-pointer absolute top-[6px] right-[6px]"
                onClick={onClose}
            >
                <img src={ButtonCloseNicknamePopup}/>
            </button>
            <span className="font-['Sixtyfour-Regular'] text-black absolute top-[20px]">
                Change Nickname
            </span>
            <input
                className="text-black font-['Inter'] border-3 rounded-xl w-[567px] h-[62px] text-xl text-center"
                placeholder="Maximum 8 characters allowed."
                maxLength={8}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className="cursor-pointer absolute top-45 rounded-2xl bg-[var(--Change-NickName)] text-white w-[232px] h-[63px] opacity-90 hover:opacity-100"
                onClick={ChangeNickname}
            >
                Change
            </button>
        </div>
    );
}

export default ChangeNicknamePopup