import { useNavigate } from 'react-router-dom'
import Button_GameOption_Off from '../../assets/image/ButtonGameOptionOff.svg'
import Bullet from '../../assets/image/Bullet.svg'
import Button_GameOption_On from '../../assets/image/ButtonGameOptionOn.svg'

const Select_GameOption = () => {
	const navigate = useNavigate()

	const handleBackClick = () => {
		navigate('/Home')
	}

	const handleAutoClick = () => {
		navigate('/Select_GameMode_Auto')
	}

	const handleCustomClick = () => {
		navigate('/Select_GameMode_Custom')
	}

	return (
		<div className="flex justify-center items-center w-[800px] h-[600px] bg-black mx-auto">
			<div className="w-[800px] h-[600px] bg-black">
				<h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl mt-13 text-center">PING PONG</h1>
				<h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl mt-3 text-center">GANG</h1>
				<div className="flex flex-col items-center mt-1 gap-1 ml-[-105px] text-white font-['StWinterPixel24BoldDemoBold'] text-4xl tracking-[5px]">
					<button className="mt-6 cursor-pointer flex items-center relative group">
						<img
							src={Bullet}
							alt="Bullet Img"
							className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						/>
						<img
							src={Button_GameOption_Off}
							className="group-hover:hidden"
							alt="Default Icon"
						/>
						<img
							src={Button_GameOption_On}
							className="group-hover:block hidden"
							alt="Hover Icon"
							onClick={handleAutoClick}
						/>
						<span
							className="absolute right-25 group-hover:text-yellow-300"
							onClick={handleAutoClick}
						>
							AUTO
						</span>
					</button>
					<button className="mt-6 cursor-pointer flex items-center relative group">
						<img
							src={Bullet}
							alt="Bullet Img"
							className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						/>
						<img
							src={Button_GameOption_Off}
							className="group-hover:hidden"
							alt="Default Icon"
							onClick={handleCustomClick}
						/>
						<img
							src={Button_GameOption_On}
							className="group-hover:block hidden"
							alt="Hover Icon"
							onClick={handleCustomClick}
						/>
						<span
							className="absolute right-19 group-hover:text-yellow-300"
							onClick={handleCustomClick}
						>
							CUSTOM
						</span>
					</button>
					<button className="mt-6 cursor-pointer flex items-center relative group">
						<img
							src={Bullet}
							alt="Bullet Button"
							className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
						<img
							src={Button_GameOption_Off}
							className="group-hover:hidden"
							alt="Default Icon"
						/>
						<img
							src={Button_GameOption_On}
							className="group-hover:block hidden"
							alt="Hover Icon"
							onClick={handleBackClick}
						/>
						<span
							className="absolute right-25 group-hover:text-yellow-300"
							onClick={handleBackClick}
						>
							BACK
						</span>
					</button>
				</div>
				<div className="text-sm flex justify-center text-center mt-7 tracking-[5px] leading-[27px]">
					<p className="font-['QuinqueFive'] text-white">
					TH & C 1980 1993 NAMCO LTD.<br/>NAMCO LoginTEK, INC.<br/>LICENSED BY NINTENDO
					</p>
				</div>
			</div>
		</div>
	)
}

export default Select_GameOption