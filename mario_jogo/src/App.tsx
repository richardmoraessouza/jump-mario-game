
import { useEffect, useRef, useState } from "react"
import style from "./App.module.css"
import Menu from "./components/Menu/Menu"
import MaxPontos from "./components/MaxPontos/MaxPontos"
function App() {
  const [marioJump, setMarioJump] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)

  const [pontos, setPontos] = useState<number>(0)
  const [maxPontos, setMaxPontos] = useState<number>(0)
  
  const hasScoredRef = useRef(false)

  const pipeRef = useRef<HTMLImageElement>(null)
  const marioRef = useRef<HTMLImageElement>(null)


  const handleJump = () => {
    if (!marioJump) {
      setMarioJump(true)

      setTimeout(() => {
        setMarioJump(false)
      },500)
    }
  }

  useEffect(() => {
    const storedMax = localStorage.getItem("maxPontos")
    if (storedMax) {
      const parsed = parseInt(storedMax, 10)
      if (!Number.isNaN(parsed)) setMaxPontos(parsed)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.code === "Space") {
        handleJump()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  },[])

  useEffect(() => {
    if (pontos > maxPontos) {
      setMaxPontos(pontos)
      localStorage.setItem("maxPontos", String(pontos))
    }
  }, [pontos, maxPontos])

  useEffect(() => {
    const loop = setInterval(() => {
      const pipe = pipeRef.current
      const mario = marioRef.current

      if(!pipe || !mario) return;

      const pipeLeft = pipe.offsetLeft
      const marioBottom = parseInt(
        window.getComputedStyle(mario).bottom.replace("px", "")
      )

      if (pipeLeft < 0 && !hasScoredRef.current) {
        setPontos(prev => prev + 1);
        hasScoredRef.current = true;
      }

      if (pipeLeft > 300) {
        hasScoredRef.current = false;
      }


      if (pipeLeft <= 120 && pipeLeft > 0 && marioBottom < 90) {
        console.log("💥 COLISÃO!")
        pipe.style.animationPlayState = 'paused'

        mario.style.animationPlayState = 'paused'
        mario.style.bottom = `${marioBottom}px`
        mario.src="image/game-over.png"
        mario.style.width = `75px`
        mario.style.marginLeft = `50px`
        setGameOver(true)
        clearInterval(loop)
      }
      
    }, 10)
    
    return () => {
      clearInterval(loop)
      }
  }, [gameOver])

  
  return (
    <>
      <MaxPontos maxPontos={maxPontos}/>
      <main className={style.gameBoard}>
        <img src="image/clouds.png" alt="Nuvens" className={style.clounds}/>
        <img src="image/pipe.png" alt="Pipe" className={style.pipe} ref={pipeRef}/>
        <img src="image/mario.gif" alt="Mario" ref={marioRef} className={`${style.mario} ${marioJump ? style.jump : ''}`} onClick={handleJump}/>
        <Menu pipe={pipeRef.current} mario={marioRef.current} gameOver={gameOver} setGameOver={setGameOver} pontos={pontos} setPontos={setPontos}/>
      </main>
    </>
  )
}

export default App
