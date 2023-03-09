import "./App.css"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Presentation } from "./components/Presentation"
import { Codeducation } from "./components/Codeducation"
import { Codexperience } from "./components/Codexperience"
import { Technologies } from "./components/Technologies"

function App() {
  return (
    <div className="my-app">
      <Nav />
      <Presentation />
      <Codeducation />
      <Codexperience />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  )
}

export default App 