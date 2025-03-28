import { useState } from "react"
import ConfirmLogoutPopup from "./components/ConfirmLogoutPopup"

const ConfirmLogout = () => {
	const [isOpenConfirmLogout, setIsOpenConfirmLogout] = useState(false)

	const togglePopup = () => setIsOpenConfirmLogout((prev) => !prev)

	return (
		<div className="text-red-600 font-['Sixtyfour'] text-[22px] flex justify-center mt-[80px] z-30">
		<button
			onClick={togglePopup}
			className="cursor-pointer border-white border-4 rounded-3xl w-[691px] h-[53px] hover:bg-gray-700 duration-300"
		>
			Log out
		</button>
		{isOpenConfirmLogout && (
			<>
			<div className="bg-black opacity-50 fixed inset-0"/>
			<div>
				<ConfirmLogoutPopup onClose={togglePopup}/>
			</div>
		</>
		)}
	</div>
	)
}

export default ConfirmLogout