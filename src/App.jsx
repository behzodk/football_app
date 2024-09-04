import './app.css'
import {AppBar} from "./components/AppBar.jsx";
import {UpcomingGames} from "./components/UpcomingGames.jsx";

function App() {
  return (
    <>
        <div className="content">
            <UpcomingGames/>
        </div>
        <AppBar />
    </>
  )
}

export default App
