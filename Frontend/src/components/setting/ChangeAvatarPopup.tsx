import { useRef } from 'react'

interface ChangeAvatarPopupProps {
	onClose: () => void
	onChangeAvatar: (newImg: File | null) => void
}

const AvatarButton: React.FC<{ onClick: () => void; children: React.ReactNode}> = ({ onClick, children }) => (
	<button
		className="font-['Sixtyfour-Regular'] text-black text-2xl w-[550px] h-[80px] border-4 rounded-3xl cursor-pointer hover:border-red-500"
		onClick={onClick}
	>
		{children}
	</button>
)

const ChangeAvatarPopup: React.FC<ChangeAvatarPopupProps> = ({ onClose, onChangeAvatar }) => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const ChangeAvatarImg = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0]
			onChangeAvatar(file)
			onClose()
		}
	}
	const EditAvatarImg = () => {
		fileInputRef.current?.click()
	}
	const DeleteAvatarImg = () => {
		onChangeAvatar(null)
		onClose()
	}

	return (
		<div className="bg-white w-[602px] h-[346px] rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-6">
			{/* 이미지 삭제 */}
			<AvatarButton onClick={DeleteAvatarImg}>Delete</AvatarButton>
			{/* 이미지 변경 */}
			<AvatarButton onClick={EditAvatarImg}>
				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					className="hidden"
					onChange={ChangeAvatarImg}
				/>
				Edit
			</AvatarButton>
			{/* 선택 취소 */}
			<AvatarButton onClick={onClose}>Cancel</AvatarButton>
		</div>
	)
}

export default ChangeAvatarPopup