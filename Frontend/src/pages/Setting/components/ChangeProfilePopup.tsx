import { useRef } from "react"

interface ChangeProfileImgPopupProps {
	onClose: () => void
	onChangeProfileImg: (newImg: File | null) => void
}

const SelectButton: React.FC<{ onClick: () => void; children: React.ReactNode}> = ({ onClick, children }) => (
	<button
		className="font-['Sixtyfour'] text-black text-2xl w-[550px] h-[80px]
			border-4 rounded-3xl cursor-pointer hover:border-red-500"
		onClick={onClick}
	>
		{children}
	</button>
)

const ChangeProfilePopup: React.FC<ChangeProfileImgPopupProps> = ({ onClose, onChangeProfileImg }) => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const ChangeProfileImg = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0]
			onChangeProfileImg(file)
			onClose()
		}
	}
	const EditProfileImg = () => {
		fileInputRef.current?.click()
	}
	const DeleteProfileImg = () => {
		onChangeProfileImg(null)
		onClose()
	}

	return (
		<div className="bg-white w-[602px] h-[346px] rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 \
				-translate-y-1/2 flex flex-col justify-center items-center gap-6 z-20">
			<SelectButton onClick={DeleteProfileImg}>Delete</SelectButton>
			<SelectButton onClick={EditProfileImg}>
				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					className="hidden"
					onChange={ChangeProfileImg}
				/>
				Edit
			</SelectButton>
			<SelectButton onClick={onClose}>Cancel</SelectButton>
		</div>
	)
}

export default ChangeProfilePopup