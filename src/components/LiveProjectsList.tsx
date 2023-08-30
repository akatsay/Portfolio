import colors from '../constants/colors'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import useWindowDimensions from '../hooks/useWindowDimensions'
import IFrame from './IFrame'
import LiveProject from './LiveProject'

const LiveProjectsList = () => {

  const { width } = useWindowDimensions()

  useIntersectionObserver()

  const projectURLs: string[] = [
    'https://loremcakery.org/',
    'https://congratsy.info/',
    'https://next-joke-generator.vercel.app/'
  ]

  return ( 
    <div 
      id='projects'
      className={`w-full min-h-screen flex flex-col justify-between align-middle ${width > 700 ? 'p-24' : width > 500 ? 'p-12' : 'p-6'} `} 
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

      {
        projectURLs.map((item, i) => {
          return (
            i === 0 ?
              <LiveProject key={item} src={item} title={item} description={item} />
              :
              <LiveProject key={item} src={item} className='mt-32' title={item} description={item} />
          )
        })
      }

    </div>
  )
}
 
export default LiveProjectsList