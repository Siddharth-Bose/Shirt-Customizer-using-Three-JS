import CanvasModel from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"


function App() {
 

  return (
    <>
      <main className="app trainsition-all ease-in">
        <Home />
        <CanvasModel />
        <Customizer />
      </main>
    </>
  )
}

export default App
