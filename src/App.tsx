import './styles/App.css'
import Header from './components/Header'
import Intro from './components/Intro'

function App() {
  return (
    <div 
      data-testid="App" 
      className="App flex flex-1 flex-col"
    >
      <Header />
      <Intro />
    </div>
  )
}

export default App
