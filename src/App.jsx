import { useState, useEffect } from 'react'

function Component() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      console.log('Setting state on Component')
      setLoading(false)
    }, 5000)
    return () => console.log('Component unmounted')
  }, [])

  return <h1>{loading ? 'Loading...' : '😯'}</h1>
}

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button
        onClick={() => {
          console.log('Will not show')
          setShow(false)
        }}
      >
        Click me to not show the Component
      </button>
      {show ? <Component /> : <h1>Nothing to see here</h1>}
    </div>
  )
}

export default App
