import VerifyButtonOff from '../../../assets/image/VerifyButtonOff.png'
import VerifyButtonOn from '../../../assets/image/VerifyButtonOn.png'

const Verify = () => {
	return (
		<button className="relative w-[116px] h-[41px] group cursor-pointer">
			<img src={VerifyButtonOff} alt="VerifyOff" className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"/>
			<img src={VerifyButtonOn} alt="VerifyOn" className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"/>
			<span className="font-['QuinqueFive'] text-white text-[10px] absolute inset-0 right-[20px] top-[11px]">verify</span>
		</button>
	)
}

export default Verify