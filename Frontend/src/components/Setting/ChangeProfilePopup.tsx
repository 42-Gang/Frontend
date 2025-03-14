interface ChangeProfilePopupProps {
    onClose: () => void;
}

const ChangeProfilePopup: React.FC<ChangeProfilePopupProps> = ({ onClose }) => {
    return(
        <div className="absolute bg-white w-[602px] h-[346px] rounded-lg flex items-center justify-center">
            <div className="font-['Sixtyfour-Regular'] text-black text-2xl flex flex-col items-center gap-6">
                <button
                className="cursor-pointer w-[550px] h-[80px] border-4 rounded-3xl hover:border-red-500">
                    Delete
                </button>
                <button
                className="cursor-pointer w-[550px] h-[80px] border-4 rounded-3xl hover:border-red-500">
                    Edit
                </button>
                <button
                className="cursor-pointer w-[550px] h-[80px] border-4 rounded-3xl hover:border-red-500"
                onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ChangeProfilePopup;