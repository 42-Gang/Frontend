import { useState } from 'react'
import HistoryButtonOff from '../../../assets/image/HistoryButtonOff.svg'
import HistoryButtonOn from '../../../assets/image/HistoryButtonOn.svg'

interface ModeSelectorProps {
	mode: "1vs1" | "Tournament"
	setMode: (mode: "1vs1" | "Tournament") => void
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
	const [isHovered1vs1, setIsHovered1vs1] = useState(false)
	const [isHoveredTournament, setIsHoveredTournament] = useState(false)

	return (
		<div className="text-white font-['Sixtyfour'] text-[16px]">
			<h2>Please select the mode</h2>
			<div className="flex justify-center gap-[40px] mt-[10px]">
				<button
					onMouseEnter={() => setIsHovered1vs1(true)}
					onMouseLeave={() => setIsHovered1vs1(false)}
					onClick={() => setMode("1vs1")}
					className="cursor-pointer
				">
					<img src={isHovered1vs1 || mode === "1vs1" ? HistoryButtonOn : HistoryButtonOff} alt="1vs1 History Button"/>
					<span className="text-[12px] absolute left-[45px] top-[44px]">
						1 VS 1
					</span>
				</button>
				<button
					onMouseEnter={() => setIsHoveredTournament(true)}
					onMouseLeave={() => setIsHoveredTournament(false)}
					onClick={() => setMode("Tournament")}
					className="cursor-pointer
				">
					<img src={isHoveredTournament || mode === "Tournament" ? HistoryButtonOn : HistoryButtonOff} alt="Tournament History Button"/>
					<span className="text-[12px] absolute left-[208px] top-[44px]">
						Tournament
					</span>
				</button>
			</div>
		</div>
	)
}

export default ModeSelector