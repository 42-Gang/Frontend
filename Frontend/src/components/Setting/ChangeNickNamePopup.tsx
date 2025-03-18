import { useState } from 'react';
import Button_Close_NickNamePopUP from '../../assets/image/Button_Close_NickNamePopUp.svg';

interface ChangeNickNamePopupProps {
    onClose: () => void;
    onChangeNickName: (newNickName: string) => void;
}

const ChangeNickNamePopup: React.FC<ChangeNickNamePopupProps> = ({ onClose, onChangeNickName }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChangeNickName = () => {
            if (inputValue.trim().length > 0 && inputValue.length <= 10) {
                onChangeNickName(inputValue);
                onClose();
            }
    }

    return(
        <div className="absolute bg-white w-[602px] h-[256px] rounded-lg flex items-center justify-center">
            <div className="font-['Sixtyfour-Regular'] text-black flex flex-col items-center gap-6">
                <button
                className="cursor-pointer absolute top-4 right-4"
                onClick={onClose}
                >
                    <img src={Button_Close_NickNamePopUP}/>
                </button>
                <span className="absolute top-10 text-3xl">
                    Change NickName
                </span>
                <input
                className="border-3 rounded-xl w-[567px] h-[62px] font-['Inter'] text-xl text-center"
                placeholder="Maximum 6 characters allowed."
                maxLength={6}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                className="cursor-pointer absolute top-45 rounded-2xl bg-[var(--Change-NickName)] text-white w-[232px] h-[63px]"
                onClick={handleChangeNickName}
                >
                    Change
                </button>
            </div>
        </div>
    );
};

export default ChangeNickNamePopup;