import GameBall from '../../../assets/image/PingPongBullet.svg'

const Ball = () => {
  return (
    <img
      src={GameBall}
      alt="Ball"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  )
}

export default Ball