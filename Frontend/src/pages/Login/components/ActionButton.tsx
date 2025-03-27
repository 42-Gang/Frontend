import { useNavigate } from "react-router-dom" 
import SelectHighlight from '../../../assets/image/SelectHighlight.svg'

const ActionButton = () => {
	const navigate = useNavigate()

	const SignupClick = () => {
		navigate('/Register')
	}

	return (
		<div className="text-white font-['QuinqueFive'] text-[15px] flex flex-col space-y-[10px]">
			<button className="cursor-pointer flex gap-[10px] -ml-[30px] group">
				<img src={SelectHighlight} alt="SelectHighlight" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
				SIGN IN
			</button>
			<button onClick={SignupClick} className="cursor-pointer flex gap-[10px] -ml-[30px] group">
				<img src={SelectHighlight} alt="SelectHighlight" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
				SIGN UP
			</button>
		</div>
	)
}

export default ActionButton
