import style from "./MaxPontos.module.css"

type MaxPontosProps = {
    maxPontos: number
}

function MaxPontos({ maxPontos }: MaxPontosProps) {
    return (
        <header className={style.gameInfor}>
            <p>Aperte <strong>espaço</strong> para pular!</p>
            <div>
                Pontuação máxima: <strong>{maxPontos}</strong>
            </div>
        </header>
    )
}
export default MaxPontos
