import { useNavigate } from "react-router-dom" 
import SelectHighlight from '../../../assets/image/SelectHighlight.svg'

const ActionButton = () => {
  const navigate = useNavigate()

  const SignUpClick = () => {
    navigate('/Register')
  }
  const SignInClick = () => {
    navigate('/Home')
  }

  const buttonClass = "cursor-pointer flex gap-[10px] -ml-[30px] group"
  const imgClass = "opacity-0 group-hover:opacity-100 transition-opacity duration-300"

  return (
    <div className="text-white font-['QuinqueFive'] text-[15px] flex flex-col space-y-[10px]">
      <button onClick={SignInClick} className={buttonClass}>
        <img src={SelectHighlight} alt="SelectHighlight" className={imgClass}/>
        SIGN IN
      </button>
      <button onClick={SignUpClick} className={buttonClass}>
        <img src={SelectHighlight} alt="SelectHighlight" className={imgClass}/>
        SIGN UP
      </button>
    </div>
  )
}

export default ActionButton
