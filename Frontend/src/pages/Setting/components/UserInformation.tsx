import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import ChangeNicknameButton from '../../../assets/image/ChangeNicknameButton.svg'
import ChangeNicknamePopup from './ChangeNicknamePopup'

interface UserInformationProps {
	nickname: string
	wins: number
	losses: number
	tournamentWins: number
	onChangeNickname: (newNickname: string) => void
}

const UserInformation: React.FC<UserInformationProps> = ({ nickname, wins, losses, tournamentWins, onChangeNickname}) => {
	const [isOpenNicknamePopup, setIsOpenNicknamePopup] = useState(false)
	
	const stats = [
		{ label: 'win', value: wins},
		{ label: 'Lose', value: losses},
		{ label: 'Tournament Wins', value: tournamentWins}
	]

	const formattedValue = (value: number) => Math.min(value, 999)
	const togglePopup = () => setIsOpenNicknamePopup((prev) => !prev)

	return (
		<div className="font-['Sixtyfour'] text-white text-[19px] flex flex-col gap-y-[15px] z-0">
			<div className="relative flex items-center gap-x-2">
				<span>Nickname:{nickname}</span>
				<button onClick={togglePopup} className="cursor-pointer opacity-60 hover:opacity-100 absolute -right-[10px] -top-[2px] transition-opacity duration-300">
					<img src={ChangeNicknameButton} alt="ChangeNicknameButton"/>
				</button>
			</div>
			{stats.map(({ label, value }) => (
				<div key={label}>
					<span>{label}:{formattedValue(value)}</span>
				</div>
			))}
			<AnimatePresence>
				{isOpenNicknamePopup && (
					<>
						<motion.div 
							className="fixed inset-0 bg-black opacity-50 z-30"
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
						/>
						<motion.div 
							className="fixed inset-0 flex justify-center items-center z-30"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<ChangeNicknamePopup onClose={togglePopup} onChangeNickname={onChangeNickname}/>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}

export default UserInformation