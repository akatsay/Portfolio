import colors from '../constants/colors'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useRef } from 'react'
import { useDetectOutsideClick } from '../hooks/useDetectOutsideClick'

const Header = () => {

  const dropdownRef = useRef(null)
  const [open, setOpen] = useDetectOutsideClick(dropdownRef, false)
  const {width} = useWindowDimensions()

/* eslint-disable */
  //@ts-ignore
  const handleOpen = () => setOpen(!open)

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
          className='mt-3 mb-3'
        >
          <ul className='flex flex-row'>
            <a href='https://www.linkedin.com/in/alexandr-katsay-1779a721a/' rel="noreferrer" target='_blank' >
              <AiFillLinkedin className='navbar-item m-3 ml-10 text-3xl bold text-white' />
            </a>
            <a href='https://github.com/akatsay' rel="noreferrer" target='_blank' >
              <AiFillGithub className='navbar-item m-3 text-3xl bold text-white' />
            </a>
            <a href='https://www.instagram.com/_catsay_/' rel="noreferrer" target='_blank' >
              <AiFillInstagram className='navbar-item m-3 text-3xl bold text-white' />
            </a>
          </ul>
        </div>
        {
          width > 700 ?
            <div
              data-testid='header-links'
            >
              <ul className='flex flex-row h-full align-middle'>
                <li onClick={() => scrollIntoView('intro')} className='my-auto navbar-item menu-item m-3 text-xl bold text-white'>About me</li>
                <li onClick={() => scrollIntoView('projects')} className='my-auto navbar-item menu-item m-3 text-xl bold text-white'>My projects</li>
                <li onClick={() => scrollIntoView('footer')} className='my-auto navbar-item menu-item m-3 mr-10 text-xl bold text-white'>Contact me</li>
              </ul>
            </div>
            :
            <nav className="navbar my-auto mr-10">
              <div className={'dropdown'} ref={dropdownRef}>
                <button className={`dropdown-trigger ${open ? 'active' : ''}`} onClick={handleOpen}>
                  <span className="line line-1"></span>
                  <span className="line line-2"></span>
                  <span className="line line-3"></span>
                </button>
              
                <ul className={`dropdown-menu ${open ? 'show' : 'hide'}`}>
                    <li onClick={() => scrollIntoView('intro')} className='my-auto navbar-item menu-item m-3 text-xl bold text-white'>About me</li>
                    <li onClick={() => scrollIntoView('projects')} className='my-auto navbar-item menu-item m-3 text-xl bold text-white'>My projects</li>
                    <li onClick={() => scrollIntoView('footer')} className='my-auto navbar-item menu-item m-3 mr-10 text-xl bold text-white'>Contact me</li>
                </ul>
              </div>
            </nav>
        }

      </nav>
    </header>
  )
}
 
export default Header