import { useState } from "react"
import ButtonChangeAvatarImg from '../../assets/image/ButtonChangeAvatarImg.svg'
import ChangeAvatarPopup from '../../components/Setting/Popup/ChangeAvatarPopup'

const ProfileAvatarSection = () => {
    const [AvatarImg, setAvatarImg] = useState<string | null>(null)
    const [isChangeAvatarPopupOpen, setIsChangeAvatarPopupOpen] = useState(false)

    const ChangeAvatarImg = (newImg: string | null) => {
        setAvatarImg(newImg)
    }
    const OpenChangeAvatarPopup = () => {
        setIsChangeAvatarPopupOpen(true)
    }
    const CloseChangeAvatarPopup = () => {
        setIsChangeAvatarPopupOpen(false)
    }

    return (
        <div className="absolute top-[160px] left-[70px] flex items-end justify-end">
            {/* 프로필 아바타 사진 영역*/}
            {AvatarImg ? (
                <img
                    src={AvatarImg}
                    alt="Profile Img"
                    className="w-[249px] h-[249px] rounded-full bg-white"
                />
            ) : (
                <div
                    className="w-[249px] h-[249px] rounded-full bg-white">
                </div>
            )
            }
            {/* 프로필 아바타 사진 변경 버튼 */}
            <button
                className="absolute cursor-pointer opacity-90 hover:opacity-100"
                onClick={OpenChangeAvatarPopup}
            >
                <img
                    src={ButtonChangeAvatarImg}
                />
            </button>
            {/* 프로필 아바타 사진 설정 팝업 렌더링 */}
            {isChangeAvatarPopupOpen && (
                <ChangeAvatarPopup
                    onClose={CloseChangeAvatarPopup}
                    onChangeAvatar={setAvatarImg}
                    />
            )}
        </div>
    )
}

export default ProfileAvatarSection