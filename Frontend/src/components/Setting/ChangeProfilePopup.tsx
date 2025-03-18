import { useState, useRef } from 'react';

interface ChangeProfilePopupProps {
    onClose: () => void;
    onChangeProfile: (newProfile: string | null) => void;
}

const ChangeProfilePopup: React.FC<ChangeProfilePopupProps> = ({ onClose, onChangeProfile }) => {
    const [profileImg, setProfileImg] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setProfileImg(file);
            const imageUrl = URL.createObjectURL(file);
            onChangeProfile(imageUrl);
            onClose();
        }
    }

    const handleEditImg = () => {
        fileInputRef.current?.click();
    }

    const handleDeleteImg = () => {
        setProfileImg(null);
        onChangeProfile(null);
        onClose();
    }

    return(
        <div className="absolute bg-white w-[602px] h-[346px] rounded-lg flex items-center justify-center">
            <div className="font-['Sixtyfour-Regular'] text-black text-2xl flex flex-col items-center gap-6">
                <button
                className="cursor-pointer w-[550px] h-[80px] border-4 rounded-3xl hover:border-red-500"
                onClick={handleDeleteImg}
                >
                    Delete
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleChangeImg}
                />
                <button
                className="cursor-pointer w-[550px] h-[80px] border-4 rounded-3xl hover:border-red-500"
                onClick={handleEditImg}>
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