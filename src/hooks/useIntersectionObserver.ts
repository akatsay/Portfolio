import {useEffect} from 'react'

export const useIntersectionObserver = () => {
  useEffect(() => {
    // Create the IntersectionObserver in the effect hook
    const cards = document.querySelectorAll('.card')
        
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