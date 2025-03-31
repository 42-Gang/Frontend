import HistoryButtonOff from '../../../assets/image/HistoryButtonOff.png'
import HistoryButtonOn from '../../../assets/image/HistoryButtonOn.png'

interface ModeSelectorProps {
	mode: "1vs1" | "Tournament"
	setMode: (mode: "1vs1" | "Tournament") => void
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
	const imgClass = "absolute inset-0 transition-opacity duration-300"
	const hoverOn = "opacity-100 group-hover:opacity-100"
	const hoverOff = "opacity-100 group-hover:opacity-0"

	return (
		<div className="text-white font-['Sixtyfour'] text-[16px]">
			<h2>Please select the mode</h2>
			<div className="flex justify-center gap-[40px] mt-[10px]">
				<button
					onClick={() => setMode("1vs1")}
					className="cursor-pointer relative group w-[149px] h-[37px]">
					<img
						src={HistoryButtonOn}
						alt="Button off"
						className={`${imgClass} ${
							mode === "1vs1" ? "opacity-100" : hoverOn}`}/>
					<img
						src={HistoryButtonOff}
						alt="Button on"
						className={`${imgClass} opacity-0 ${
							mode === "1vs1" ? "opacity-0" : hoverOff}`}/>
					<span className="text-white font-['Sixtyfour'] text-[12px] absolute top-[10px] right-[50px]">1vs1</span>
				</button>
				<button
					onClick={() => setMode("Tournament")}
					className="cursor-pointer relative group w-[149px] h-[37px]">
					<img
						src={HistoryButtonOn}
						alt="Button off"
						className={`${imgClass} ${
							mode === "Tournament" ? "opacity-100" : hoverOn}`}/>
					<img
						src={HistoryButtonOff}
						alt="Button on"
						className={`${imgClass} opacity-0 ${
							mode === "Tournament" ? "opacity-0" : hoverOff}`}/>
					<span className="text-white font-['Sixtyfour'] text-[12px] absolute top-[10px] right-[16px]">Tournament</span>
				</button>
			</div>
		</div>
	)
}

export default ModeSelector
