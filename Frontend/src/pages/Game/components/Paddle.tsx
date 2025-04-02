interface PaddleProps {
	ctx: CanvasRenderingContext2D
	side: "left" | "right"
}

const Paddle = ({ ctx, side }: PaddleProps) => {
	const paddleWidth = 5
	const paddleHeight = 80
	const x = side === "left" ? 6 : ctx.canvas.width - 6 - paddleWidth
	const y = ctx.canvas.height / 2 - paddleHeight / 2

	ctx.fillStyle = "white"
	ctx.fillRect(x, y, paddleWidth, paddleHeight)
}

export default Paddle