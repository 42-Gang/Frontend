import { useNavigate } from "react-router-dom" 
import SelectHighlight from '../../../assets/image/SelectHighlight.svg'

const ActionButton = () => {
	const navigate = useNavigate()

	return (
		<div className="text-white font-['StWinterPixel'] text-[28px] flex flex-col">
			<button className="cursor-pointer flex gap-[10px] -ml-[30px] group">
				<img src={SelectHighlight} alt="SelectHighlight" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
				START GAME
			</button>
			<button className="cursor-pointer flex gap-[10px] -ml-[30px] group">
				<img src={SelectHighlight} alt="SelectHighlight" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
				GAME HISTORY
			</button>
			<button className="cursor-pointer flex gap-[10px] -ml-[30px] group">
				<img src={SelectHighlight} alt="SelectHighlight" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
				FRIEND
			</button>
			<button className="cursor-pointer flex gap-[10px] -ml-[30px] group">
				<img src={SelectHighlight} alt="SelectHighlight" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
				SETTING
			</button>
		</div>
	)
}

export default ActionButton
