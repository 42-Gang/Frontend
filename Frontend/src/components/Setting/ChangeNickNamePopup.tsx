import Button_Close_NickNamePopUP from '../../assets/image/Button_Close_NickNamePopUp.svg';

interface ChangeNickNamePopupProps {
    onClose: () => void;
}

const ChangeNickNamePopup: React.FC<ChangeNickNamePopupProps> = ({ onClose }) => {
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
                placeholder="Maximum 10 characters allowed."
                />
                <button className="cursor-pointer absolute top-45 rounded-2xl bg-[var(--Change-NickName)] text-white w-[232px] h-[63px]">
                    Change
                </button>
            </div>
        </div>
    );
};

export default ChangeNickNamePopup;