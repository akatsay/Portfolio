import colors from '../constants/colors'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Header = () => {

  const scrollIntoView = (id: string) => {
    const targetSection = document.getElementById(id)
    targetSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return ( 
    <header
      data-testid='header'
      style={{backgroundColor: colors.black}}
      className='w-full' >
      <nav className='flex justify-between align-middle'>

        <div
          data-testid='header-icons'
        >
          <ul className='flex flex-row'>
            <a href='https://www.linkedin.com/in/alexandr-katsay-1779a721a/' rel="noreferrer" target='_blank' >
              <AiFillLinkedin className='navbar-item m-3 ml-10 text-3xl bold text-white' />
            </a>
            <a href='https://github.com/akatsay' rel="noreferrer" target='_blank' >
              <AiFillGithub className='navbar-item m-3 text-3xl bold text-white' />
            </a>
          </ul>
        </div>

        <div
          data-testid='header-links'
        >
          <ul className='flex flex-row h-full align-middle'>
            <li onClick={() => scrollIntoView('intro')} className='navbar-item menu-item m-3 text-xl bold text-white'>About me</li>
            <li className='navbar-item menu-item m-3 text-xl bold text-white'>My projects</li>
            <li className='navbar-item menu-item m-3 mr-10 text-xl bold text-white'>Contact me</li>
          </ul>
        </div>

      </nav>
    </header>
  )
}
 
export default Header