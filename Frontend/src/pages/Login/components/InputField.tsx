interface InputFieldProps {
  label: string
  type: string
  width: string
}

const InputField = ({ label, type, width }: InputFieldProps) => {
  return (
    <div className="text-white font-['QuinqueFive'] text-[15px] flex gap-[8px]">
      <p className="flex-shrink-0 w-[110px] text-right">{label}:</p>
      <input style={{ width }} type={type}/>
    </div>
  )
}

export default InputField