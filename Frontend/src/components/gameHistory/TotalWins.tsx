interface TotalWinsProps {
	totalWins: number
}

const TotalWins: React.FC<TotalWinsProps> = ({ totalWins }) => {
	return (
		<div className="flex flex-col items-center mt-[20px]">
			<div className="text-[40px]">
				<h2 className="w-[400px]">TOTAL WINS</h2>
			</div>
			<div className="flex justify-center text-[60px] text-yellow-300">
				<div className="w-[80px] relative">
						<p className="absolute left-1/2 transform -translate-x-1/2">
							{Math.min(totalWins, 999)}
						</p>
				</div>
			</div>
		</div>
	)
}

export default TotalWins