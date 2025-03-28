import { useNavigate } from "react-router-dom"

interface GameMenuPopupProps {
	onClose: () => void
}

const MenuPopup: React.FC<GameMenuPopupProps> = ({ onClose }) => {
	const navigate = useNavigate();

	const YesClick = () => {
		localStorage.removeItem("token")
		navigate('/')
	}

	return (
		<div className="bg-black w-[630px] h-[161px]">
			<div className="font-['Sixtyfour'] text-white text-center">
				<p className="mt-[30px]">
					You will lose the game if you leave.
					Are you sure you want to leave?
				</p>
				<div className="mt-[30px] space-x-40">
					<button onClick={YesClick} className="cursor-pointer">
						Yes
					</button>
					<button onClick={onClose} className="cursor-pointer">
						No
					</button>
				</div>
			</div>
		</div>
	);
}

export default MenuPopup