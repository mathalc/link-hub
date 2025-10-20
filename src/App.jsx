import "./App.css";
import wppImage from "./assets/img/whatsapp.svg";
import instagramImage from "./assets/img/instagram.svg";
import tiktokImage from "./assets/img/tiktok.svg";
import locationImg from "./assets/img/location.svg";
import ebookImg from "./assets/img/book.svg";
import catalogImg from "./assets/img/magazine.svg";
import backgroudImg from "./assets/img/background-img.jpg";
import thabataImg from "./assets/img/tha.png";
import right from "./assets/img/right.png";

function App() {
  return (
    <>
      <div className="header">
        <div className="background">
          <img src={backgroudImg} alt="Mármore" />
        </div>
        <div className="main">
          <div className="personal-infos">
            <img src={thabataImg} alt="Thábata Chaves" />
            <h1>Thábata Chaves</h1>
            <p>Beauty Studio</p>
          </div>
          <div className="midia-links">
            <a target="_blank" href="https://www.instagram.com/studiothabatachaves?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img src={instagramImage} alt="INSTAGRAM: @studiothabatachaves" />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@studio.thabatachaves?_t=8sALdUBTFxu&_r=1">
              <img
                src={tiktokImage}
                alt="TIKTOK: Dicas sobre empreendedorismo e marketing"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="main-links">
        <div className="link wpp">
          <a href="https://wa.me/5541985253779" target="_blank">
            <img className="main-img" src={wppImage} alt="Agendar horário" />
            Agendar Horário
            <img src={right} alt="Ir" />
          </a>
        </div>
        <div className="link location">
          <a href="https://maps.app.goo.gl/pvBGs3rauGqCFHti9" target="_blank">
            <img className="main-img" src={locationImg} alt="Localização" />
            Localização
            <img src={right} alt="Ir" />
          </a>
        </div>
        <div className="link catalog">
          <a href="x" target="_blank">
            <img className="main-img" src={catalogImg} alt="Catálogo" />
            Catálogo
            <img src={right} alt="Ir" />
          </a>
        </div>
        <div className="link ebook">
          <a href="https://pay.kiwify.com.br/YEJyeHR" target="_blank">
            <img className="main-img" src={ebookImg} alt="E-book: Descomplica, empreendedora!" />
            E-book: Descomplica, empreendedora!
            <img src={right} alt="Ir" />
          </a>
        </div>

      </div>
    </>
  );
}

export default App;
