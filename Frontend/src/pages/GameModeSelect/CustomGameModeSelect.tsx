import Container from "./components/Container"
import MainTitle from "./components/MainTitle"
import Cancel from "./components/Cancel"
import SelectMode from "./components/SelectMode"

const CustomGameModeSelect = () => {
  return (
    <Container>
      <Cancel/>
      <MainTitle/>
      <div className="absolute right-1/2 translate-x-1/2 bottom-[50px]">
        <SelectMode/>
      </div>
    </Container>
  )
}

export default CustomGameModeSelect