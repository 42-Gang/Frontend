type PaddleProps = {
	side: "left" | "right"
}

const Paddle = ({ side }: PaddleProps) => {
	const position = side === "left" ? "left-[6px]" : "right-[6px]"
	
	return (
		<div className={`${position} w-[5px] h-[80px] bg-white absolute top-1/2 -translate-y-1/2`}>
		</div>
	)
}

export default Paddle