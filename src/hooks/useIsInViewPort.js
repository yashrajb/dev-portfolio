import React, { useState, useEffect } from "react"
const useIsInViewPort = (ref) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          ref?.current && observer.unobserve(ref.current)
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return isVisible
}

export default useIsInViewPort
