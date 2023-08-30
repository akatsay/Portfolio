import colors from '../constants/colors'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import useWindowDimensions from '../hooks/useWindowDimensions'
import LiveProject from './LiveProject'

interface IProject {
  title: string
  description: string
  src: string
}

const LiveProjectsList = () => {

  const { width } = useWindowDimensions()

  useIntersectionObserver({target: '.card'})

  const liveProjects: IProject[] = [
    {title: 'Lorem Cakery', description: 'Landing page for Non-existing Cakery :)', src: 'https://loremcakery.org/'},
    {title: 'Congratsy', description: 'Web application for searching greeting cards, my first react project.', src: 'https://congratsy.info/'},
    {
      title: 'Next Joke Generator',
      description: 'My first application with Next.js embracing SSR features. (I\'ve also done it with React-Native and Expo previously)',
      src: 'https://next-joke-generator.vercel.app/'},
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
        liveProjects.map((item, i) => {
          return (
            i === 0 ?
              <LiveProject key={item.src} src={item.src} title={item.title} description={item.description} />
              :
              <LiveProject key={item.src} src={item.src} className='mt-32' title={item.title} description={item.description} />
          )
        })
      }

    </div>
  )
}
 
export default LiveProjectsList