import { useState } from "react";
import Container from "./components/Container"
import Cancel from "./components/Cancel"
import ModeSelector from "./components/ModeSelector";
import WinLossCounter from "./components/WinLossCounter";
import GameRecord from "./components/GameRecord";
import TotalWinsCounter from "./components/TotalWinsCounter";

const GameHistory = () => {
	const [mode, setMode] = useState<"1vs1" | "Tournament">("1vs1")

	const gameData1vs1 = {
		wins: 13,
		losses: 15,
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
		totalWins: 112,
		history: [
			{ gameMode: "ROUND 4", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "WIN" },
			{ gameMode: "ROUND 4", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "LOSE" },
			{ gameMode: "ROUND 4", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "LOSE" },
			{ gameMode: "ROUND 4", team: ["Jungslee", "Ping", "Pong", "Inryu"], result: "LOSE" },
		],
	};

	return (
		<Container>
			<Cancel/>
			<div className="absolute left-1/2 -translate-x-1/2 top-[60px]">
				<ModeSelector mode={mode} setMode={setMode}/>
				{mode === "1vs1" ? (
					<>
						<WinLossCounter wins={gameData1vs1.wins} losses={gameData1vs1.losses}/>
						<div className="absolute top-[240px] left-1/2 -translate-x-1/2">
							<GameRecord history={gameData1vs1.history}/>
						</div>
					</>
				) : (
					<>
						<TotalWinsCounter totalWins={gameDataTournament.totalWins}/>
						<div className="absolute top-[240px] left-1/2 -translate-x-1/2">
							<GameRecord history={gameDataTournament.history}/>
						</div>
					</>
				)}
			</div>
		</Container>
	)
}

export default GameHistory