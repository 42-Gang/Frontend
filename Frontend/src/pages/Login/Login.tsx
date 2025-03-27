import Container from "./components/Container"
import MainTitle from "./components/MainTitle"
import InputField from "./components/InputField"
import ActionButton from "./components/ActionButton"
import Credit from "./components/Credit"

const Login = () => {
	return (
		<Container>
			<MainTitle/>
			<div className="flex flex-col items-center justify-center space-y-[26px] absolute left-1/2 -translate-x-1/2 top-[270px]">
				<InputField label="EMAIL:" type="text" width="255px"/>
				<InputField label="PW:" type="password" width="200px"/>
			</div>
			<div className="absolute left-1/2 -translate-x-1/2 top-[370px]">
				<ActionButton />
			</div>
			<div className="absolute right-1/2 w-[630px] translate-x-1/2 bottom-[35px]">
				<Credit />
			</div>
		</Container>
	)
}

export default Login