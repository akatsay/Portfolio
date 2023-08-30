import {useEffect} from 'react'

interface IParams {
  target: string
}

export const useIntersectionObserver = ({target} : IParams ) => {
  useEffect(() => {
    // Create the IntersectionObserver in the effect hook
    const cards = document.querySelectorAll(target)
        
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in')
            observer.unobserve(entry.target)
          }
        })
      }, 
    )
    
    cards.forEach(card => {
      observer.observe(card)
    })
    
    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect()
    }
  }, []) // Empty dependency array to run the effect only once
}