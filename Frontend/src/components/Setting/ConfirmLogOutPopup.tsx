import { useNavigate } from 'react-router-dom';

interface ConfirmLogOutPopupProps {
    onClose: () => void;
}

const ConfirmLogOutPopup: React.FC<ConfirmLogOutPopupProps> = ({ onClose }) => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/');
    };

    return(
        <div className="absolute bg-white w-[602px] h-[256px] rounded-lg flex items-center justify-center">
            <div className="font-['Sixtyfour-Regular'] text-black flex flex-col items-center gap-4">
                <span className="absolute top-7 text-2xl">
                    Log Out?
                </span>
                <button
                className="cursor-pointer w-[533px] h-[67px] border-4 rounded-3xl hover:border-red-500 mt-14 text-xl"
                onClick={handleRegisterClick}>
                    OK
                </button>
                <button
                className="cursor-pointer w-[533px] h-[67px] border-4 rounded-3xl hover:border-red-500 text-xl"
                onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ConfirmLogOutPopup;