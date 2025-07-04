import NoteBoard from "./components/NoteBoard"
import { ColorProvider } from "./provider/ColorProvider"

function App() {
  return (
    <ColorProvider>
      <div className="app-container">
        <h1>🗒️ Sticky Notes</h1>
        <NoteBoard />
      </div>
    </ColorProvider>
  )
}

export default App
