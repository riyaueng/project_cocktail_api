import NavMenu from "../navMenu/NavMenu"
import "./Header.css"

export default function Header() {
  return (
    <>
      <section className="section_navbar">
        <div className="logo">
          {/* <img src="" alt="" /> */}
          <h4>Drinks&Chill</h4>
        </div>
        <NavMenu />
      </section>

      <section className="section_hero">
        <h1>Cocktails & Getränke!</h1>
        <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
      </section>

      <section className="section_searchfield">
        <input type="text" placeholder="type something" />
        <button>Search</button>
        <div className="div_arrow">
          <a href="#">
            <img src="../../../public/img/icon_arrows_down.svg" alt="Pfeil nach unten" />
          </a>
        </div>
      </section>
    </>
  )
}
