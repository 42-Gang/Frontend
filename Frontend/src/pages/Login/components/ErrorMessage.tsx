import { useEffect } from 'react'

const ErrorMessage = ({ message, setError }:{
	message: string, setError: (msg: string) => void
}) => {
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setError("")
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [message, setError])

  return (
    <div
      className={`text-red-500 font-['Galmuri7'] absolute left-1/2 -translate-x-1/2
      text-[20px] top-[10px] transition-opacity duration-500
      ${message ? "opacity-100" : "opacity-0"}`} // 메시지가 있을 때만 보이도록
    >
      {message}
    </div>
  )
}

export default ErrorMessage
