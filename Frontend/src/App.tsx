import "./index.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Login from "./pages/main/Login.tsx";
import Register from "./pages/main/Register.tsx";
import Home from "./pages/main/Home.tsx";
import Select_GameOption from "./pages/gameSelect/Select_GameOption.tsx";
import Select_GameMode_Auto from "./pages/gameSelect/Select_GameMode_Auto.tsx";
import Select_GameMode_Custom from "./pages/gameSelect/Select_GameMode_Custom.tsx";
import Setting from "./pages/setting/Setting.tsx";
import History_Home from "./pages/gameHistory/History_Home.tsx";
// import History_1vs1 from "./pages/GameHistory/History_1vs1.tsx";
import Tournament from "./pages/Tournament/Tournament.tsx";
import Waiting from "./pages/Tournament/Waiting.tsx";
import Invitation from "./pages/Tournament/Invitation.tsx"

const App = () => {
	useEffect(() => {
    const lockWindowSize = () => {
	window.resizeTo(800, 600);
    };

    window.addEventListener("resize", lockWindowSize);
    lockWindowSize(); // 실행 시 즉시 크기 고정

    return () => {
		window.removeEventListener("resize", lockWindowSize);
    };
	}, []);

	return (
    <>
	<GlobalStyle />
	<Router>
		<Routes>
			{/* 메인 홈페이지 */}
			<Route path="/" element={<Login />} />
			<Route path="/Register" element={<Register />} />
			<Route path="/Home" element={<Home />} />
			{/* 게임 선택 홈페이지 */}
			<Route path="/Select_GameOption" element={<Select_GameOption />} />
			<Route
				path="/Select_GameMode_Auto"
				element={<Select_GameMode_Auto />}
			/>
			<Route
				path="/Select_GameMode_Custom"
				element={<Select_GameMode_Custom />}
			/>
			{/* 사용자 관련 유틸 */}
			<Route path="/Setting" element={<Setting />} />
			<Route path="/History_Home" element={<History_Home />} />
			{/* <Route path="/History_1vs1" element={<History_1vs1 />} /> */}
			{/* 토너먼트 */}
			<Route path="/Tournament" element={<Tournament />} />
			<Route path="/Waiting" element={<Waiting />} />
			<Route path="/Invitation" element={<Invitation />} />
		</Routes>
	</Router>
    </>
	);
};

export default App;
