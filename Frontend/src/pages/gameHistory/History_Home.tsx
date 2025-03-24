import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModeSelector from '../../components/gameHistory/ModeSelector'
import WinLossCounter from '../../components/gameHistory/WinLossCounter'
import TotalWins from '../../components/gameHistory/TotalWins'
import GameRecord from '../../components/gameHistory/GameRecord'
import ButtonBack from '../../assets/image/ButtonBack.svg'

const History_Home = () => {
	const navigate = useNavigate()
	const [mode, setMode] = useState<"1vs1" | "Tournament">("1vs1")

	const handleBackClick = () => {
		navigate('/Home')
	};

	const gameData1vs1 = {
		wins: 113,
		losses: 8,
		history: [
			{ player: "Jungslee", opponent: "PONG", result: "WIN" },
			{ player: "Inryu", opponent: "PONG", result: "WIN" },
			{ player: "Yeeunpar", opponent: "PONG", result: "LOSE" },
			{ player: "Hyehan", opponent: "PONG", result: "WIN" },
			{ player: "Wooshin", opponent: "PONG", result: "LOSE" },
			{ player: "Wooshin", opponent: "PONG", result: "WIN" },
			{ player: "Wooshin", opponent: "PONG", result: "LOSE" },
			{ player: "Yeeunpar", opponent: "PONG", result: "WIN" }
		],
	};

	const gameDataTournament = {
		totalWins: 106,
		history: [
			{ gameMode: "ROUND 4", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "WIN" },
			{ gameMode: "ROUND 8", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "LOSE" },
			{ gameMode: "ROUND 16", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "LOSE" },
			{ gameMode: "ROUND 2", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "LOSE" },
		],
	};

	return (
		<div className="flex justify-center items-center bg-black mx-auto">
			<div className="w-[800px] h-[600px] bg-black font-['Sixtyfour-Regular'] text-white">
				<button onClick={handleBackClick}>
						<img
						className="cursor-pointer ml-[4px] mt-[6px]"
						src={ButtonBack}
						alt="Back Button"
						/>
				</button>
				<ModeSelector mode={mode} setMode={setMode}/>
				{mode === "1vs1" ? (
					<>
						<WinLossCounter wins={gameData1vs1.wins} losses={gameData1vs1.losses}/>
						<GameRecord history={gameData1vs1.history}/>
					</>
				) : (
					<>
						<TotalWins totalWins={gameDataTournament.totalWins}/>
						<GameRecord history={gameDataTournament.history}/>
					</>
				)}
			</div>
		</div>
	)
}

export default History_Home