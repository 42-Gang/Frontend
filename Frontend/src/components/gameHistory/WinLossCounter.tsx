interface WinLossCounterProps {
	wins: number
	losses: number
};

const WinLossCounter: React.FC<WinLossCounterProps> = ({ wins, losses }) => {
	return (
		<div className="flex flex-col items-center mt-[20px]">
			<div className="flex justify-center gap-[145px] text-[40px] ml-[-65px]">
				<h2 className="w-[80px]">WIN</h2>
				<h2 className="w-[80px]">LOSE</h2>
			</div>
			<div className="flex justify-center gap-[170px] text-[60px] ml-[-10px] text-yellow-300">
				<div className="w-[80px] relative">
						<p className="absolute left-1/2 transform -translate-x-1/2">
							{Math.min(wins, 999)}
						</p>
					</div>
					<div className="w-[80px] relative">
						<p className="absolute left-1/2 transform -translate-x-1/2">
							{Math.min(losses, 999)}
						</p>
					</div>
			</div>
		</div>
	)
}

export default WinLossCounter