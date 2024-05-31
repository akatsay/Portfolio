import './styles/App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Footer from './components/Footer'
import LiveProjectsList from './components/LiveProjectsList'
// import GitHubProjectsList from './components/GitHubProjectsList'
import {Resume} from "./components/Resume";

function App() {

  return (
    <div 
      data-testid="App" 
      className="App flex flex-1 flex-col"
    >
      <Header />
      <Intro />
      <Resume />
      <LiveProjectsList />
      {/*<GitHubProjectsList />*/}
      <div className='w-screen h-12 bg-white mb-12' />
      <Footer />
    </div>
  )
}

export default App
