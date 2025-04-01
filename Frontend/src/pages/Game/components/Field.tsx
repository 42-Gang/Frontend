import Paddle from "./Paddle";
import Ball from "./Ball";

const Field = () => {
	return (
		<div
			className="w-[800px] h-[430px] bg-gray-600 border-white
				border-4 absolute left-1/2 -translate-x-1/2 bottom-[20px]">
			<div className="absolute left-1/2 top-0 h-full w-[2px] border-r-4 border-dashed border-white">
			</div>
				<Paddle side="left"/>
				<Paddle side="right"/>
				<Ball />
		</div>
	);
}

export default Field