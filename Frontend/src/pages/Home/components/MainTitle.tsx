import Gun from '../../../assets/image/Gun.svg'

const MainTitle = () => {
	return (
		<div className="ColorC96565 font-['SuperPixel'] w-[450px] text-6xl text-center absolute right-1/2 translate-x-1/2 top-[90px] space-y-[12px]">
			<h1>PING PONG</h1>
			<h1>GANG</h1>
			<img src={Gun} alt="Gun" className="absolute top-[20px] -left-[140px]"/>
			<img src={Gun} alt="Gun" className="flip-image absolute top-[20px] left-[320px]"/>
		</div>
	)
}

export default MainTitle