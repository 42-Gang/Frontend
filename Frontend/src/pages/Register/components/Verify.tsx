import { useState } from 'react'
import VerifyButtonOff from '../../../assets/image/VerifyButtonOff.svg'
import VerifyButtonOn from '../../../assets/image/VerifyButtonOn.svg'

const Verify = () => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div>
			<button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="cursor-pointer">
				<img src={isHovered ? VerifyButtonOn : VerifyButtonOff} alt="Verify Button"/>
			</button>
		</div>
	)
}

export default Verify