import "./index.css"
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyles"

{/* 혜주 파트 */}
import Login from "./pages/Login/Login.tsx"
import Register from "./pages/Register/Register.tsx"
import Home from "./pages/Home/Home.tsx"
import GameOptionSelect from "./pages/GameOptionSelect/GameOptionSelect.tsx"
import AutoGameModeSelect from "./pages/GameModeSelect/AutoGameModeSelect.tsx"
import CustomGameModeSelect from "./pages/GameModeSelect/CustomGameModeSelect.tsx"
import GameHistory from "./pages/GameHistory/GameHistory.tsx"
import Setting from "./pages/Setting/Setting.tsx"

{/* 예은 파트 */}
import Tournament from "./pages/Tournament/Tournament.tsx"
import Waiting from "./pages/Tournament/Waiting.tsx"
import Invitation from "./pages/Tournament/Invitation.tsx"
import Matching from "./pages/Tournament/Matching.tsx"
import MatchResult from "./pages/Tournament/MatchResult.tsx"

const App = () => {
	useEffect(() => {
		const lockWindowSize = () => {
		window.resizeTo(800, 600)
	}

	window.addEventListener("resize", lockWindowSize)
	lockWindowSize() // 실행 시 즉시 크기 고정

	return () => {
		window.removeEventListener("resize", lockWindowSize)
	}
	}, [])

	return (
	<>
		<GlobalStyle />
		<Router>
			<Routes>
				{/* 로그인 페이지 */}
				<Route path="/" element={<Login/>}/>
				{/* 회원가입 페이지 */}
				<Route path="/Register" element={<Register/>}/>
				{/* 메인 홈페이지 */}
				<Route path="/Home" element={<Home/>}/>
				{/* 게임 옵션 선택 페이지 */}
				<Route path="/GameOptionSelect" element={<GameOptionSelect/>}/>
				{/* 오토 게임 모드 선택 페이지 */}
				<Route path="/AutoGameModeSelect" element={<AutoGameModeSelect/>}/>
				{/* 커스텀 게임 모드 선택 페이지 */}
				<Route path="/CustomGameModeSelect" element={<CustomGameModeSelect/>}/>
				{/* 히스토리 페이지 */}
				<Route path="/GameHistory" element={<GameHistory/>}/>
				{/* 세팅 페이지 */}
				<Route path="/Setting" element={<Setting/>}/>
				{/* 토너먼트 */}
				<Route path="/Tournament" element={<Tournament />} />
				<Route path="/Waiting" element={<Waiting />} />
				<Route path="/Invitation" element={<Invitation />} />
				<Route path="/TournamentMain" element={<Matching />} />
				<Route path="/MatchResult" element={<MatchResult />} />
			</Routes>
		</Router>
	</>
	)
}

export default App
