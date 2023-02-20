import tilimg from './images/rus.png';
import logo from './images/logo.svg';
import vector from './images/Vector.png';
import lupa from './images/lupa.png';
import banner from './images/nrg-banner.png';
import vectorc from './images/Vector-c.png';
import vector1 from './images/Vector (1)-b.png';
import vector2 from './images/Vector (2)-a.png';
import googleplay from './images/googlePlay-w 1.png';
import applestore from './images/appleStore-w 1.png';
import namangan from './images/NAMANGANLIKLAR24.png';
import btnImg from './images/Vector (2).png';

import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header>
        <div className="container">
          <section className="title">
            <div className="title-left">
              <img src={logo} alt="" />
              <ul>
                <li><span>$</span>10137.2</li>
                <li><span>P</span>138.26</li>
                <li><span>E</span>10988.72</li>
              </ul>
            </div>
            <div className="title-right">
              <input type="text" placeholder="Nima qidiramiz?" />
              <button className="btn-1"><img src={lupa} alt="" /></button>
              <div className="language">
                <img src={tilimg} alt="" />
                <select name="" id="">
                  <option value="РУ">РУ</option>
                  <option value="UZ">UZ</option>
                </select>
              </div>
              <button><img src={vector} alt="" /> Подписатся</button>

            </div>
          </section>
          <nav>
            <ul>
              <li>Узбекистана</li>
              <li> Мир </li>
              <li> Экономика </li>
              <li> Политика </li>
              <li> Общество</li>
              <li> Технологии </li>
              <li> Спорт</li>
              <li>Культура</li>
              <li> Происшествия </li>
              <li>Туризм</li>
            </ul>
          </nav>
          <img src={banner} alt="" />
        </div>
      </header>
      <div className="container">
        <h1 className="h1">Напишите нам
        </h1>
        <div className="main">
          <form>
            <input type="text" name="name" id="" placeholder="Имя"/>
              <input type="email" name="" id="" placeholder="Электронная почта"/>
                <input type="tel" name="" id="" placeholder="Номер телефона"/>
                  <input type="text" name="" id="" placeholder="Тема"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Текст"></textarea>
                    <div className="main-end">
                      <input type="text" placeholder="Прикрепить файл" />
                      <div><input type="text" placeholder="Код" /> <span>4 k 7 Z a</span></div>
                      <button>Отправить</button>
                    </div>
                  </form>
                  <div className="main-right">
                    <img src={logo} alt="" />
                    <div className="main-right-title">

                      <ul>
                        <li>Электронная почта</li>
                        <li>Социальные сети</li>
                        <li>Телеграм канал</li>
                        <li>Мобильная приложение</li>
                      </ul>

                      <div className="main-item-right">
                        <a href="#">info@namanganliklar24.uz</a>
                        <div>
                          <img src={vectorc} alt="" />
                          <img src={vector1} alt="" />
                          <img src={vector2} alt="" />
                        </div>
                        <button><img src={vector} alt="" /> Подписатся</button>
                        <div>
                          <img className="icon" src={googleplay} alt="" />
                          <img src={applestore} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer>
                <div className="container">
                  <div className="footer-start">
                    <img src={namangan} alt="" />
                    <div className="footer-start-right">
                      <p>Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</p>
                      <button><img src={btnImg} alt="" />Подписатся</button>
                    </div>
                  </div>
                  <hr />
                  <div className="footer-end">
                    <div className="footer-end-left">
                      <h1>О сайте </h1>
                      <p>Воспроизводство, копирование, тиражирование, распростране ние и иное использование информации с
                        сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.
                      </p>
                    </div>
                    <ul>
                      <li>Информация о сайте</li>
                      <li>Напишите нам</li>
                      <li>Реклама</li>
                      <li>Прислать новость</li>
                    </ul>
                    <ul>
                      <li>Использование материалов</li>
                      <li>Темы дня</li>
                      <li>Наша команда</li>
                    </ul>
                  </div>

                </div>
              </footer>

            </div>
            );
}

            export default App;
