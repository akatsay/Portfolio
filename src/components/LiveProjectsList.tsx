import colors from '../constants/colors'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const LiveProjectsList = () => {

  useIntersectionObserver()

  return ( 
    <div 
      id='projects'
      className="w-full min-h-screen flex flex-col justify-between align-middle p-24" 
      style={{backgroundColor: colors.blue}}
    >

      <div className='flex flex-row m-auto mb-24 justify-center align-middle'>
        <div className="livenow mr-8 mt-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2 className='text-white bold text-4xl'>My live projects:</h2>
      </div>

      <iframe
        src='https://loremcakery.org/'
        className='card h-screen rounded-xl'
        loading='lazy'
      />

      <iframe
        src='https://congratsy.info/'
        className='card h-screen mt-32 rounded-xl'
        loading='lazy'
      />

      <iframe
        src='https://next-joke-generator.vercel.app/'
        className='card h-screen mt-32 rounded-xl'
        loading='lazy'
      />

    </div>
  )
}
 
export default LiveProjectsList