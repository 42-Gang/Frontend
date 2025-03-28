import { useState } from "react"
import ChangeProfileImg from '../../../assets/image/ChangeProfileImg.svg'
import ChangeProfilePopup from "./ChangeProfilePopup"

const Profile = () => {
	const [profileImg, setProfileImg] = useState<File | null>(null)
	const [isOpenProfilePopup, setIsOpenProfilePopup] = useState(false)

	const togglePopup = () => setIsOpenProfilePopup((prev) => !prev)
	
	return (
		<div className="relative">
			{profileImg ? (
				<img src={URL.createObjectURL(profileImg)} alt="Profile Img" className="w-[249px] h-[249px] rounded-full object-cover"/>
			) : (
				<img className="w-[249px] h-[249px] rounded-full bg-white"/>
			)}
			<button onClick={togglePopup} className="absolute bottom-[1px] left-[160px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300">
				<img src={ChangeProfileImg} alt="ChangeProfileImg"/>
			</button>
			{isOpenProfilePopup && (
				<>
					<div className="bg-black opacity-50 fixed inset-0"/>
					<div>
						<ChangeProfilePopup onClose={togglePopup} onChangeProfileImg={setProfileImg}/>
					</div>
				</>
			)}
		</div>
	)
}

export default Profile