import colors from '../constants/colors'

interface IProps {
  url: string
  title: string
  description: string
  imgSrc: string
  alt?: string
}

const GitHubProject = ({url, title, description, imgSrc, alt} : IProps ) => {
  return ( 
    <div style={{backgroundColor: colors.gray}} className='card rounded-xl' >
      <img 
        src={imgSrc} 
        alt={alt || 'Project preview'} 
        className='rounded-t-xl rounded-b-3xl'
      />
      <div className='p-4'>
        <p className=' font-extrabold text-3xl mt-5 break-words'>{title}</p>
        <p className='font-medium text-2xl mt-2 ml-5 break-words'>{description}</p>
        <a href={url} rel="noreferrer" target='_blank' >
          <p className='font-medium text-blue-700 text-2xl mt-2 break-words'>{'See source code </>'}</p>
        </a>
      </div>
    </div>
  )
}
 
export default GitHubProject