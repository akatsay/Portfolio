import colors from '../constants/colors'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import useWindowDimensions from '../hooks/useWindowDimensions'
import LiveProject from './LiveProject'

interface ICategory {
  category: string
  bulletPoints: string[]
}
export interface IFullDescription {
  fullDescription: ICategory[]
}
interface IProject {
  title: string
  description: string
  src: string
  fullDescription?: IFullDescription
}

const LiveProjectsList = () => {

  const { width } = useWindowDimensions()

  useIntersectionObserver({target: '.card'})

  const liveProjects: IProject[] = [
    {
      title: 'Lorem Cakery',
      description: 'Landing page for Non-existing Cakery :)',
      src: 'https://loremcakery.org/',
      fullDescription: {fullDescription: [
          {
            category: "Features",
            bulletPoints: [
              "Contact form after submitting which an email is sent to email of the owner and data is saved\n" +
              "to database",
              "Review cards",
              " Admin routes, that enable authorized admin user to add, edit and delete items in the gallery\n" +
              "page"
            ]
          },
          {
            category: "Technology and tools used",
            bulletPoints: [
              "REST API based on express.js",
              "node mailer",
              "express-validator",
              "JWT token and Bearer authentication.",
              "MongoDB",
              "Cloudinary API for storing images for product items in the gallery",
              "React",
              "React Context API",
              "YUP for forms validation",
              "SCSS",
            ]
          }
        ]}
    },
    {
      title: 'TicTacToe Multiplayer',
      description: 'Multiplayer game to play with friends :)',
      src: 'https://tictactoebysasha.online',
      fullDescription: {fullDescription: [
          {
            category: "Features",
            bulletPoints: [
              "JWT token and Bearer authentication mechanism",
              "User settings to change account info / delete account",
              "Real time Web-Socket communication between clients with chat",
            ]
          },
          {
            category: "Technology and tools used",
            bulletPoints: [
              "REST API based on Nest.js",
              "Web sockets - Socket.io",
              "JWT token.",
              "MySQL",
              "TypeORM",
              "React",
              "Redux",
              "Webpack",
              "Babel",
              "SCSS",
            ]
          }
        ]}
    },
    {
      title: 'Congratsy',
      description: 'Web application for searching greeting cards.',
      src: 'https://congratsy.info/',
      fullDescription: {fullDescription: [
          {
            category: "Technology and tools used",
            bulletPoints: [
              "google-image-search library",
              "Express.js",
              "React",
              "i18Next npm package for multilingualism"
            ]
          }
        ]}
    },
    {
      title: 'Next Joke Generator',
      description: 'My first application with Next.js embracing SSR features.',
      src: 'https://next-joke-generator.vercel.app/',
      fullDescription: {fullDescription: [
          {
            category: "Features",
            bulletPoints: [
              "Displays a list of 10 random jokes",
              "Generates an image visualising the joke"
            ]
          },
          {
            category: "Technology and tools used",
            bulletPoints: [
              "Next.js",
              "OpenAI API",
              "SSR"
            ]
          }
        ]}
    }
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
              <LiveProject key={item.src} src={item.src} title={item.title} description={item.description} fullDescription={item.fullDescription} />
              :
              <LiveProject key={item.src} src={item.src} className='mt-32' title={item.title} description={item.description} fullDescription={item.fullDescription}/>
          )
        })
      }

    </div>
  )
}
 
export default LiveProjectsList
