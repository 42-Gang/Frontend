import Button_History_Off from '../../assets/image/ButtonHistoryOff.svg'
import Button_History_On from '../../assets/image/ButtonHistoryOn.svg'

interface ModeSelectorProps {
    mode: "1vs1" | "Tournament"
    setMode: (mode: "1vs1" | "Tournament") => void
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
    return (
        <div className="text-center">
            <h2 className="text-lg mb-4">Please select the mode</h2>
            <div className="flex gap-[90px] justify-center py-[10px]">
                <button
                    className="relative text-[13px] cursor-pointer"
                    onClick={() => setMode("1vs1")}
                >
                    <img
                        src={mode === "1vs1" ? Button_History_On : Button_History_Off}/>
                    <span className="absolute inset-0 flex justify-center items-center">
                        1 VS 1
                    </span>
                </button>
                <button
                    className="relative text-[13px] cursor-pointer"
                    onClick={() => setMode("Tournament")}
                >
                    <img
                        src={mode === "Tournament" ? Button_History_On : Button_History_Off}/>
                    <span className="absolute inset-0 flex justify-center items-center">
                        Tournament
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ModeSelector