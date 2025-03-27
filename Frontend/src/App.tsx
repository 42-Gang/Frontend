import "./index.css"
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyles"

{/* 혜주 파트 */}
import Login from "./pages/Login/Login.tsx"
import Register from "./pages/Register/Register.tsx"
import Home from "./pages/Home/Home.tsx"
import GameOptionSelect from "./pages/GameOptionSelect/GameOptionSelect.tsx"

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
				{/* 로그인 */}
				<Route path="/" element={<Login/>}/>
				<Route path="/Register" element={<Register/>}/>
				<Route path="/Home" element={<Home/>}/>
				<Route path="/GameOptionSelect" element={<GameOptionSelect/>}/>
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
