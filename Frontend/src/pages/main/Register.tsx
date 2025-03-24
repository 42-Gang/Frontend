import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonBack from '../../assets/image/ButtonBack.svg'
import Button_verify_Off from "../../assets/image/ButtonVerifyOff.svg"
import Button_verify_On from "../../assets/image/ButtonVerifyOn.svg"
import Selection from '../../assets/image/Selection.svg'

const Register = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [verifyCode, setVerifyCode] = useState('')
	// const [isEmailValid, setIsEmailValid] = useState(false)
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [nickName, setNickName] = useState('')

// Page Handler
	const handleRegisterClick = () => {
		navigate('/')
	}

	const handleBackClick = () => {
		navigate('/')
	}

// Email Handler
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputEmail = e.target.value
		setEmail(inputEmail)
	}

	const handleVerifyCode = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputVerifyCode = e.target.value
		setVerifyCode(inputVerifyCode)
	}

// Password Handler
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputPassword = e.target.value
		setPassword(inputPassword)
	}

	const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputConfirmPassword = e.target.value
		setConfirmPassword(inputConfirmPassword)
	}

// Nickname Handler
	const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputNickName = e.target.value
		setNickName(inputNickName)
	}

	return (
		<div className="flex justify-center items-center w-[800px] h-[600px] bg-black mx-auto">
			<div className="w-[800px] h-[600px] bg-black">
				<button onClick={handleBackClick}>
						<img
							className="cursor-pointer ml-[4px] mt-[6px]"
							src={ButtonBack}
							alt="Back Button"
						/>
				</button>
				<div className="mt-9">
					<h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl text-center">PING PONG</h1>
					<h1 className="MainTitleColor font-['SuperPixel'] sm:text-6xl mt-3 text-center">GANG</h1>
				</div>
				<div className="text-white font-['QuinqueFive'] flex justify-center mt-9 text-sm">
					<div className="flex items-center">
						<p>EMAIL:</p>
						<input
						className="bg-black w-[250px]"
						value={email}
						onChange={handleEmailChange}
						/>
					</div>
					<div className="flex items-center group">
						<button className="ml-3">
							<img
								src={Button_verify_Off}
								className="group-hover:hidden"
								alt="Default Icon"
							/>
							<img
								src={Button_verify_On}
								className="hidden group-hover:block"
								alt="Hover Icon"
							/>
						</button>
					</div>
				</div>
				<div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm relative left-[-115px]">
					<p>VERIFY-CODE:</p>
					<input
						className="bg-black w-[250px]"
						value={verifyCode}
						onChange={handleVerifyCode}
					/>
				</div>
				<div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm relative left-[-40px]">
					<div className="flex items-center">
					<p>PW:</p>
					<input
						className="bg-black w-[250px]"
						value={password}
						onChange={handlePasswordChange}
					/>
					</div>
				</div>
				<div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm relative left-[-65px]">
					<p>RE-PW:</p>
					<input
						className="bg-black w-[250px]"
						value={confirmPassword}
						onChange={handleConfirmPassword}
					/>
				</div>
				<div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm relative left-[-90px]">
					<p>NICKNAME:</p>
					<input
						className="bg-black w-[250px]"
						value={nickName}
						onChange={handleNickName}
					/>
				</div>
				<div className="flex flex-col items-center mt-8 text-sm space-y-4">
					<button
						className="w-[150px] text-white font-['QuinqueFive'] relative group translate-x-[-12px] flex justify-center items-center space-x-2 cursor-pointer"
						onClick={handleRegisterClick}
					>
					<img
						src={Selection}
						alt="Select Highlight"
						className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					/>
						REGISTER
					</button>
				</div>
			</div>
		</div>
	)
}

export default Register