import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonBack from '../../assets/image/ButtonBack.svg'
import ButtonChangeAvatarImg from '../../assets/image/ButtonChangeAvatarImg.svg'
import ButtonChangeNickname from '../../assets/image/ButtonChangeNickname.svg'
import ChangeAvatarPopup from '../../components/setting/ChangeAvatarPopup'
import ChangeNicknamePopup from '../../components/setting/ChangeNicknamePopup'
import ConfirmLogoutPopup from '../../components/setting/ConfirmLogoutPopup'

const Setting = () => {
	const navigate = useNavigate()
	const [avatarImg, setAvatarImg] = useState<File | null>(null)
	const [nickname, setNickname] = useState("")
	const [isChangeAvatarPopupOpen, setIsChangeAvatarPopupOpen] = useState(false)
	const [isChangeNicknamePopupOpen, setIsChangeNicknamePopupOpen] = useState(false)
	const [isConfirmLogoutPopupOpen, setIsConfirmLogoutPopupOpen] = useState(false)

	const example1 = {
		Nickname: "Jone",
		Win: 919,
		Lose: 20,
		Tournament: 545
	}
	const handleBackClick = () => {
		navigate('/Home')
	}
	const handleOpenChangeAvatarPopup = () => {
		setIsChangeAvatarPopupOpen(true)
	}
	const handleCloseChangeAvatarPopup = () => {
		setIsChangeAvatarPopupOpen(false)
	}
	const handleOpenChangeNicknamePopup = () => {
		setIsChangeNicknamePopupOpen(true)
	}
	const handleCloseChangeNicknamePopup = () => {
		setIsChangeNicknamePopupOpen(false)
	}
	const handleOpenConfirmLogoutPopup = () => {
		setIsConfirmLogoutPopupOpen(true)
	}
	const handleCloseConfirmLogoutPopup = () => {
		setIsConfirmLogoutPopupOpen(false)
	}

	return (
		<div className="bg-black w-[800px] h-[600px]">
			{/* 뒤로 가기 버튼 */}
			<button
				className="font-['Sixtyfour-Regular'] text-white text-2xl"
				onClick={handleBackClick}
			>
				<img
					className="absolute top-[2px] left-[2px] cursor-pointer"
					src={ButtonBack}
					alt="Back Button"
				/>
			</button>
			{/* 페이지 이름 */}
			<h1 className="font-['Sixtyfour-Regular'] text-white text-4xl flex justify-center mt-[40px]">Setting</h1>
			<div className="flex items-center gap-x-8 w-full justify-start mt-[10px]">
				{/* 프로필 아바타 영역 */}
				<div className="mt-[70px] ml-[60px] relative">
					{ avatarImg? (
						<img
							src={URL.createObjectURL(avatarImg)}
							alt="Profile Img"
							className="w-[249px] h-[249px] rounded-full object"
						/>
					) : (
						<img
							className="w-[249px] h-[249px] rounded-full bg-white"
						/>
					)
					}
					{/* 프로필 아바타 이미지 변경 버튼 */}
					<button
						className="absolute bottom-[1px] left-[160px]"
						onClick={handleOpenChangeAvatarPopup}
					>
						<img
							src={ButtonChangeAvatarImg}
							alt="Change Avatar Button"
						/>
					</button>
				</div>
				{/* 유저 정보 영역 */}
				<div className="text-white font-['Sixtyfour-Regular'] text-[22px] flex flex-col gap-y-2 mt-[75px] ml-[20px]">
					{/* 닉네임 설정 */}
					<div className="gap-x-10">
						<span>Nickname:</span>
						<span>{nickname || example1.Nickname}</span>
					<button
						className="cursor-pointer absolute right-[25px]"
						onClick={handleOpenChangeNicknamePopup}
					>
						<img
							src={ButtonChangeNickname}
							alt="Change Nickname Button"
						/>
					</button>
					</div>
					{/* 1 VS 1 우승 횟수 */}
					<div>
						<span>Win:</span>
						<span>{Math.min(example1.Win, 999)}</span>
					</div>
					{/* 1 VS 1 패배 횟수 */}
					<div>
						<span>Lose:</span>
						<span>{Math.min(example1.Lose, 999)}</span>
					</div>
					{/* 토너먼트 우승 횟수 */}
					<div>
						<span>Tournament:</span>
						<span>{Math.min(example1. Tournament, 999)}</span>
					</div>
				</div>
			</div>
			{/* 로그아웃 버튼 */}
			<div className="text-red-600 font-['Sixtyfour-Regular'] text-[22px] flex justify-center mt-[80px]">
				<button
					className="cursor-pointer border-white border-4 rounded-3xl w-[691px] h-[53px] hover:bg-gray-700 duration-300"
					onClick={handleOpenConfirmLogoutPopup}
				>
					Log out
				</button>
			</div>
			{/* 팝업 렌더링 */}
			{isChangeAvatarPopupOpen && (
				<>
					{/* 전체 화면을 덮는 오버레이 */}
					<div className="fixed inset-0 bg-black opacity-50"/>
					{/* 팝업 컨테이너 */}
					<div className="fixed inset-0 flex justify-center items-center">
					<ChangeAvatarPopup
						onClose={handleCloseChangeAvatarPopup}
						onChangeAvatar={setAvatarImg}
					/>
					</div>
				</>
			)}
			{isChangeNicknamePopupOpen && (
				<>
					{/* 전체 화면을 덮는 오버레이 */}
					<div className="fixed inset-0 bg-black opacity-50"/>
					{/* 팝업 컨테이너 */}
					<div className="fixed inset-0 flex justify-center items-center">
					<ChangeNicknamePopup
						onClose={handleCloseChangeNicknamePopup}
						onChangeNickname={setNickname}
					/>
					</div>
				</>
			)}
			{isConfirmLogoutPopupOpen && (
			<>
				{/* 전체 화면을 덮는 오버레이 */}
				<div
					className="fixed inset-0 bg-black opacity-50"
				/>
				{/* 팝업 컨테이너 */}
				<div className="fixed inset-0 flex justify-center items-center">
					<ConfirmLogoutPopup onClose={handleCloseConfirmLogoutPopup} />
				</div>
			</>
			)}
		</div>
	)
}

export default Setting