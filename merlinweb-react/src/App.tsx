import { useLayoutEffect } from 'react'
import { initHomeAnimations } from './animations/home'

function App() {
  useLayoutEffect(() => {
    const cleanup = initHomeAnimations()
    return () => cleanup()
  }, [])

  return null
}

export default App
