interface WinLossCounterProps {
	wins: number
	losses: number
}

const WinLossCounter: React.FC<WinLossCounterProps> = ({ wins, losses }) => {
	const formattedWins = Math.min(wins, 999)
	const formattedLosses = Math.min(losses, 999)

	return (
		<div className="text-white font-['Sixtyfour'] text-[40px] flex flex-col items-center mt-5">
			<div className="flex justify-center gap-[190px] ml-[-70px]">
				<h2 className="w-[80px] text-center">WIN</h2>
				<h2 className="w-[80px] text-center">LOSE</h2>
			</div>
			<div className="text-yellow-300 absolute flex -left-[15px] gap-[210px] top-[160px]">
				<div className="w-[80px] flex justify-center">
					<p>{formattedWins}</p>
				</div>
				<div className="w-[80px] flex justify-center">
					<p>{formattedLosses}</p>
				</div>
			</div>
		</div>
	)
}

export default WinLossCounter