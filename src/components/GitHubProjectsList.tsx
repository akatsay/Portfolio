import colors from '../constants/colors'
import GitHubProject from './GitHubProject'

const GitHubProjectsList = () => {
  return ( 
    <>
      <h2 className='mx-auto text-white bold text-4xl'>My other projects:</h2>
      <div 
        id='projects'
        className="w-full min-h-screen flex flex-col justify-between align-middle p-24" 
        style={{backgroundColor: colors.blue}}
      >
        
        <GitHubProject 
          imgSrc='/assets/authPreview.jpg'
          url='https://github.com/akatsay/Authentication-base' 
          title='Authentication Base'
          description='- Base for website authentication mechanism + account settings' 
        />

      </div>
    </>
  )
}
 
export default GitHubProjectsList