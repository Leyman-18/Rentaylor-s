import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="nav-bar">
          <div>
            <img className="img-logo" src="./images/R.png" alt="" />
            <a href="" className="logo">
              Rentaylor's
            </a>
          </div>
          <div className="navigation">
            <div className="nav-items">
              <a href="#"> The largest luxury rental in COL®</a>
            </div>
          </div>
        </div>
      </header>

      <section className="home" id="inicio">
        <div className="media-icons">
          <a href="https://www.facebook.com/profile.php?id=100091639043714&_rdc=1&_rdr">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/rentaylor_s/">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="mailto:rentaylor.s.reservas@gmail.com">
            <i className="uil uil-envelope-alt"></i>
          </a>
        </div>
        <div className="swiper bg-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="images/bg1.jpg" alt="" />
              <div className="text-content">
                <h2 className="title">
                  Hola! <span>Nueva aventura?</span>
                </h2>
                <p>
                  Viajar te brinda la oportunidad de experimentar nuevas
                  culturas, probar comida deliciosa, conocer gente nueva y
                  descubrir lugares increíbles. ¡No te pierdas la oportunidad de
                  crear recuerdos inolvidables a través del viaje!
                </p>
                <button
                  className="read-btn"
                  role="link"
                  onclick="window.location='https://wa.me/+573009085293'"
                >
                  Te interesa? <i className="uil uil-arrow-right"></i>{" "}
                </button>
              </div>
            </div>
            <div className="swiper-slide dark-layer">
              <img src="images/bg2.jpg" alt="" />
              <div className="text-content">
                <h2 className="title">¿Quienes somos? </h2>
                <p>
                  Somos una "Startup" en la prestación de servicios de
                  transporte y alojamiento de alta calidad. Ofrecemos transporte
                  y alojamiento de alta calidad, desde automóviles
                  convencionales hasta opciones exclusivas como islas privadas.
                  Nos enfocamos en la satisfacción del cliente para brindar
                  servicios de primer nivel.
                </p>
                <button
                  className="read-btn"
                  role="link"
                  onclick="window.location='https://wa.me/+573009085293'"
                >
                  Te interesa? <i className="uil uil-arrow-right"></i>{" "}
                </button>
              </div>
            </div>
            <div className="swiper-slide dark-layer">
              <img src="images/bg3.jpg" alt="" />
              <div className="text-content">
                <h2 className="title">Servicios </h2>
                <p>
                  No encontramos ubicados en{" "}
                  <mark>Cartagena y Santa-Marta</mark> disponibilidad 24/7,
                  donde ofrecemos los siguientes servicios:
                  <br />
                  <br />
                  • Automoviles y camionetas convencionales <br />
                  • Camionetas blindadas y autos deportivos <br />
                  • Embarcaciones, lanchas, yates, catamarán, buques <br />
                  • Apartamentos, Pent house, gamplíng, fincas <br />• Islas
                  privadas
                </p>
                <button
                  className="read-btn"
                  role="link"
                  onclick="window.location='https://wa.me/+573009085293'"
                >
                  Te interesa? <i className="uil uil-arrow-right"></i>{" "}
                </button>
              </div>
            </div>
            <div className="swiper-slide dark-layer">
              <img src="images/bg4.jpg" alt="" />
              <div className="text-content">
                <h2 className="title">Te esperamos! </h2>
                <p>
                  Ven a vivir con nosotros una experiencia inolvidable, donde te
                  brindaremos un servicio de primera calidad, con la mejor
                  atención y el mejor trato. 😍❤️
                  <br />
                </p>
                <button
                  className="read-btn"
                  role="link"
                  onclick="window.location='https://wa.me/+573009085293'"
                >
                  Te interesa? <i className="uil uil-arrow-right"></i>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slider-thumbs">
          <div className="swiper-wrapper thumbs-container">
            <img src="images/bg1.jpg" className="swiper-slide" alt="" />
            <img src="images/bg2.jpg" className="swiper-slide" alt="" />
            <img src="images/bg3.jpg" className="swiper-slide" alt="" />
            <img src="images/bg4.jpg" className="swiper-slide" alt="" />
          </div>
        </div>
      </section>

      <footer className="about section">
        <h3>Rentaylor_s</h3>
        <p>
          Copyright &#169: 2023 Rentaylor's, Inc, and{" "}
          <u>
            <a href="https://github.com/Leyman-18">Leyman Carrillo</a>
          </u>
          .
        </p>
      </footer>

      
    </div>
  );
}

export default App;
