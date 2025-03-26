import { useState } from 'react'
import Score from "../../components/game/Score"
import Field from "../../components/game/gameField/Field"
import ButtonMenu from '../../assets/image/ButtonMenu.svg'
import GameMenu from "../../components/game/Popup/GameMenuPopup"

const	GameScreen = () => {
	const [isGameMenuPopupOpen, setIsGameMenuPopupOpen] = useState(false);

	const handleOpenGameMenuPopup = () => {
		setIsGameMenuPopupOpen(true);
	}
	const handleCloseGameMenuPopup = () => {
		setIsGameMenuPopupOpen(false);
	}

	return (
		<div className="w-[800px] h-[600px] bg-black relative">
			<button
				className="absolute right-[30px] top-[30px]"
				onClick={handleOpenGameMenuPopup}
			>
				<img
					className="opacity-80 hover:opacity-100 cursor-pointer"
					src={ButtonMenu}
					alt="Menu"
					/>
			</button>
			<Score />
			<Field />
			{isGameMenuPopupOpen && (
				<>
					<div className="fixed inset-0 bg-black opacity-50"/>
					<div className="fixed inset-0 flex justify-center items-center">
						<GameMenu onClose={handleCloseGameMenuPopup}/>
					</div>
				</>
			)}
		</div>
	)
}

export default GameScreen