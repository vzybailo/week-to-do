import { useRef, useEffect } from "react"

function ToTop () {
  const btnRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    const handlerScroll = () => {
      const btn = btnRef.current
      if (!btn) return

      btn.style.opacity = window.scrollY > 100 ? '1' : '0'
    }
    
    window.addEventListener('scroll', handlerScroll);
    return () => window.removeEventListener('scroll', handlerScroll)
  }, [])

  function scrollToTop (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <a 
      ref={btnRef} 
      onClick={scrollToTop} 
      href="" 
      className="fixed bottom-20 right-6 p-2 opacity-0 bg-blue-600 text-white flex items-center justify-center"
      style={{transition: "opacity 0.3s ease"}}
    >
      Back To Top
    </a>
  )
}

export default ToTop