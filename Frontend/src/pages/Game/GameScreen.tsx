import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "./components/Container"
import MenuButton from '../../assets/image/Menu.svg'
import Score from "./components/Score"
import Field from "./components/Field"
import MenuPopup from "./components/MenuPopup"

const GameScreen = () => {
	const [isOpenMenuPopup, setIsOpenMenuPopup] = useState(false)

	const togglePopup = () => setIsOpenMenuPopup((prev) => !prev)

	return (
		<Container>
			<button onClick={togglePopup} className="absolute right-[30px] top-[30px]">
				<img src={MenuButton} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"/>
			</button>
			<Score />
			<Field />
			<AnimatePresence>
				{isOpenMenuPopup && (
					<>
						<motion.div 
							className="fixed inset-0 bg-black opacity-50"
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
						/>
						<motion.div 
							className="fixed inset-0 flex justify-center items-center"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<MenuPopup onClose={togglePopup}/>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</Container>
	)
}

export default GameScreen