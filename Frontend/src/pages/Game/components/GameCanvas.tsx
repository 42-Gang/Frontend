import { useRef, useEffect } from "react"
import Field from "./Field"
import Paddle from "./Paddle"

const GameCanvas = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return
		
		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			// 필드, 패들, 공 그리기
			Field(ctx)

			Paddle({ ctx, side: "left"})
			Paddle({ ctx, side: "right"})

			requestAnimationFrame(draw)
		}

		draw()
	})

	return (
		<canvas ref={canvasRef} width={800} height={430}/>
	)
}

export default GameCanvas