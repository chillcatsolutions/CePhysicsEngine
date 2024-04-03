import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const draw = (canvasElement: any) => {
  const ctx = canvasElement.getContext('2d')

  ctx.beginPath()
  ctx.arc(100, 100, 20, 0, 2*Math.PI)
  ctx.stroke()
}

function App() {
  const canvasRef = useRef(null)

  if (canvasRef.current) {
    draw(canvasRef.current)
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>CPhysicsEngine</h3>
      <canvas id="canvas" width={640} height={480} ref={canvasRef}></canvas>
    </>
  )
}

export default App
