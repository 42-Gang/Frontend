import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ChangeProfileImg from '../../../assets/image/ChangeProfileImg.svg'
import ChangeProfilePopup from "./ChangeProfilePopup"

const Profile = () => {
	const [profileImg, setProfileImg] = useState<File | null>(null)
	const [isOpenProfilePopup, setIsOpenProfilePopup] = useState(false)

	const togglePopup = () => setIsOpenProfilePopup((prev) => !prev)
	
	return (
		<div className="relative">
			{profileImg ? (
				<img
					src={URL.createObjectURL(profileImg)}
					alt="Profile Img"
					className="w-[249px] h-[249px] rounded-full object-cover"/>
			) : (
				<img className="w-[249px] h-[249px] rounded-full bg-white"/>
			)}
			<button
				onClick={togglePopup}
				className="absolute bottom-[1px] left-[160px] cursor-pointer
					opacity-80 hover:opacity-100 transition-opacity duration-300">
				<img src={ChangeProfileImg} alt="ChangeProfileImg"/>
			</button>
			<AnimatePresence>
				{isOpenProfilePopup && (
					<>
						<motion.div 
							className="fixed inset-0 bg-black opacity-50 z-40"
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
						/>
						<motion.div 
							className="fixed inset-0 flex justify-center items-center z-40"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<ChangeProfilePopup onClose={togglePopup} onChangeProfileImg={setProfileImg}/>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Profile