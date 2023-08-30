import colors from '../constants/colors'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import useWindowDimensions from '../hooks/useWindowDimensions'
import GitHubProject from './GitHubProject'

const GitHubProjectsList = () => {
  
  const { width } = useWindowDimensions()

  useIntersectionObserver({target: '.card'})

  return ( 
    <>
      <h2 className='mx-auto my-5 text-white bold text-4xl'>My other projects:</h2>
      <div 
        id='projects'
        className={`w-full align-middle ${width > 700 ? 'p-24' : width > 500 ? 'p-12' : 'p-6'}`} 
        style={{backgroundColor: colors.blue}}
      >
        
        <GitHubProject 
          imgSrc='/assets/authPreview.jpg'
          url='https://github.com/akatsay/Authentication-base' 
          title='Authentication Base'
          description='This is a foundation layer for website authentication mechanism including account settings.' 
        />

      </div>
    </>
  )
}
 
export default GitHubProjectsList