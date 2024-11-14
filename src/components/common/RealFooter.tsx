import logoG from '../../assets/img/logoG.png'
import '../../App.css'

export function RealFooter() {

  return (
    <div className="contenedor-footer">
        <h4 className="titleF">
           T H E 〰️  D O
          <img width={50} height={50} src={logoG} className="logo logof" alt="Game logo" />
          A M E 〰️
        </h4>
    </div>
  )
}