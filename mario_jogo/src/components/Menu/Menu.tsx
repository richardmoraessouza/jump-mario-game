import style from "./Menu.module.css"
type MenuProps = {
    pipe: HTMLImageElement | null;
    mario: HTMLImageElement | null;
    gameOver: boolean;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    pontos: number
    setPontos: React.Dispatch<React.SetStateAction<number>>
  };

function Menu ( {pipe, mario, gameOver, setGameOver, pontos, setPontos}: MenuProps ) {

    const handleRestart = () => {
        setGameOver(false)
        if (!pipe || !mario) return
        mario.src = "image/mario.gif";
        mario.style.bottom = "0px";
        mario.style.animationPlayState = "running";
        mario.style.width = "150px";
        mario.style.marginLeft = "0";
    
        pipe.style.animation = "none";
      
        void pipe.offsetWidth;
        pipe.style.animation = "";
        pipe.style.animationPlayState = "running";
        
        setPontos(0)
      }

    return (
        <div>
          <section className={style.menu} style={{ display: gameOver ? "flex" : "none" }}>
            <div className={style.menuBox}>
              <h1 className={style.title}>Game Over</h1>
              <p className={style.subtitle}>Você perdeu!</p>
              <h2 className={style.score}>Pontos: {pontos}</h2>
              <button className={style.button} onClick={handleRestart}>Jogar Novamente</button>
            </div>
          </section>

        </div>
    )
}
export default Menu