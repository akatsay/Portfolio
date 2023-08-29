import colors from '../constants/colors'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return ( 
    <footer 
      id='footer'
      style={{backgroundColor: colors.red}} 
      className='w-full flex justify-between align-middle'
    >
      <div className="flex flex-col m-5">
        <p className="text-2xl bold text-white">Contact me:</p>
        <a href="tel:228-148-8888" data-type="phone" className="menu-item ml-5 m-2 text-xl bold text-white">+1-646-867-5682</a>
        <a href="mailto:info@loremIpsumCakery.org" data-type="email" className="menu-item ml-5 m-2 text-xl bold text-white">akatsay2@gmail.com</a>
      </div>
      <div className="flex flex-col m-5">        
        <p className="text-2xl bold text-white">Follow me:</p>
        <div className='flex flex-row'>
          <a href='https://www.linkedin.com/in/alexandr-katsay-1779a721a/' rel="noreferrer" target='_blank' >
            <AiFillLinkedin className='follow-me-item m-3 ml-10 text-5xl bold text-white' />
          </a>
          <a href='https://github.com/akatsay' rel="noreferrer" target='_blank' >
            <AiFillGithub className='follow-me-item m-3 text-5xl bold text-white' />
          </a>
          <a href='https://www.instagram.com/_catsay_/' rel="noreferrer" target='_blank' >
            <AiFillInstagram className='follow-me-item m-3 text-5xl bold text-white' />
          </a>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer