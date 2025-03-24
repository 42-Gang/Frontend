import { useNavigate } from "react-router-dom"

interface ConfirmLogoutPopupProps {
	onClose: () => void;
}

const ConfirmLogoutPopup: React.FC<ConfirmLogoutPopupProps> = ({ onClose }) => {
	const navigate = useNavigate();

	const handleLogoutClick = () => {
		localStorage.removeItem("token")
		navigate('/')
	}

	const baseButtonStyle = "font-['Sixtyfour-Regular'] text-black cursor-pointer w-[533px] h-[67px] text-xl border-4 rounded-3xl border-black hover:border-red-500"

	return (
		<div className="bg-white w-[602px] h-[256px] rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center ">
			<p className="font-['Sixtyfour-Regular'] text-black text-[20px] mt-[20px]" >
				Log Out?
			</p>
			<button
				className={`${baseButtonStyle} mt-6 mb-4`}
				onClick={handleLogoutClick}>
					OK
				</button>
				<button
				className={baseButtonStyle}
				onClick={onClose}>
					Cancel
				</button>
		</div>
	)
}

export default ConfirmLogoutPopup