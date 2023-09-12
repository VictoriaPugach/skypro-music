//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div class="wrapper">
      <div class="container">
        <main class="main">
          <nav class="main__nav nav">
            <div class="nav__logo logo">
              <img class="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <div class="nav__burger burger">
              <span class="burger__line"></span>
              <span class="burger__line"></span>
              <span class="burger__line"></span>
            </div>
            <div class="nav__menu menu">
              <ul class="menu__list">
                <li class="menu__item">
                  <a href="#" class="menu__link">Главное</a>
                </li>
                <li class="menu__item">
                  <a href="#" class="menu__link">Мой плейлист</a>
                </li>
                <li class="menu__item">
                  <a href="../signin.html" class="menu__link">Войти</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="main__centerblock centerblock">
            <div class="centerblock__search search">
              <svg class="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                class="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 class="centerblock__h2">Треки</h2>
            <div class="centerblock__filter filter">
              <div class="filter__title">Искать по:</div>
              <div class="filter__button button-author _btn-text">
                исполнителю
              </div>
              <div class="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div class="filter__button button-genre _btn-text">жанру</div>
            </div>
            <div class="centerblock__content">
              <div class="content__title playlist-title">
                <div class="playlist-title__col col01">Трек</div>
                <div class="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div class="playlist-title__col col03">АЛЬБОМ</div>
                <div class="playlist-title__col col04">
                  <svg class="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div class="content__playlist playlist">
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Guilt <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">Nero</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Welcome Reality</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">4:44</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Elektro <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"
                        >Dynoro, Outwork, Mr. Gee</a
                      >
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">Elektro</a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >I’m Fire <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"
                        >Ali Bakgor</a
                      >
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">I’m Fire</a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Non Stop
                          <span class="track__title-span">(Remix)</span></a
                        >
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"
                        >Стоункат, Psychopath</a
                      >
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">Non Stop</a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">4:12</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Run Run
                          <span class="track__title-span"
                            >(feat. AR/CO)</span
                          ></a
                        >
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"
                        >Jaded, Will Clarke, AR/CO</a
                      >
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">Run Run</a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">2:54</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Eyes on Fire
                          <span class="track__title-span"
                            >(Zeds Dead Remix)</span
                          ></a
                        >
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"
                        >Blue Foundation, Zeds Dead</a
                      >
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Eyes on Fire</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">5:20</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Mucho Bien
                          <span class="track__title-span"
                            >(Hi Profile Remix)</span
                          ></a
                        >
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"
                        >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a
                      >
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://">Mucho Bien</a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">3:41</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Knives n Cherries
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Knives n Cherries
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Knives n Cherries
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Knives n Cherries
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Knives n Cherries
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Knives n Cherries
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Knives n Cherries
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >How Deep Is Your Love
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"
                        >Calvin Harris, Disciples</a
                      >
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >How Deep Is Your Love</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">3:32</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://"
                          >Morena <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://">Tom Boxer</a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"
                        >Soundz Made in Romania</a
                      >
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text">3:36</span>
                    </div>
                  </div>
                </div>

                <div class="playlist__item">
                  <div class="playlist__track track">
                    <div class="track__title">
                      <div class="track__title-image">
                        <svg class="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div class="track__title-text">
                        <a class="track__title-link" href="http://">
                          <span class="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div class="track__author">
                      <a class="track__author-link" href="http://"></a>
                    </div>
                    <div class="track__album">
                      <a class="track__album-link" href="http://"></a>
                    </div>
                    <div class="track__time">
                      <svg class="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span class="track__time-text"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main__sidebar sidebar">
            <div class="sidebar__personal">
              <p class="sidebar__personal-name">Sergey.Ivanov</p>
              <div class="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div class="sidebar__block">
              <div class="sidebar__list">
                <div class="sidebar__item">
                  <a class="sidebar__link" href="#">
                    <img
                      class="sidebar__img"
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div class="sidebar__item">
                  <a class="sidebar__link" href="#">
                    <img
                      class="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div class="sidebar__item">
                  <a class="sidebar__link" href="#">
                    <img
                      class="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div class="bar">
          <div class="bar__content">
            <div class="bar__player-progress"></div>
            <div class="bar__player-block">
              <div class="bar__player player">
                <div class="player__controls">
                  <div class="player__btn-prev">
                    <svg class="player__btn-prev-svg" alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div class="player__btn-play _btn">
                    <svg class="player__btn-play-svg" alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div class="player__btn-next">
                    <svg class="player__btn-next-svg" alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div class="player__btn-repeat _btn-icon">
                    <svg class="player__btn-repeat-svg" alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div class="player__btn-shuffle _btn-icon">
                    <svg class="player__btn-shuffle-svg" alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>

                <div class="player__track-play track-play">
                  <div class="track-play__contain">
                    <div class="track-play__image">
                      <svg class="track-play__svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div class="track-play__author">
                      <a class="track-play__author-link" href="http://"
                        >Ты та...</a
                      >
                    </div>
                    <div class="track-play__album">
                      <a class="track-play__album-link" href="http://">Баста</a>
                    </div>
                  </div>

                  <div class="track-play__like-dis">
                    <div class="track-play__like _btn-icon">
                      <svg class="track-play__like-svg" alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div class="track-play__dislike _btn-icon">
                      <svg class="track-play__dislike-svg" alt="dislike">
                        <use
                          xlinkHref="img/icon/sprite.svg#icon-dislike"
                        ></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bar__volume-block volume">
                <div class="volume__content">
                  <div class="volume__image">
                    <svg class="volume__svg" alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div class="volume__progress _btn">
                    <input
                      class="volume__progress-line _btn"
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer"></footer>
      </div>
    </div>


{/* signin */}
    <div class="container-enter">
        <div class="modal__block">
          <form class="modal__form-login" action="#">
            <a href="../">
              <div class="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              class="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              class="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button class="modal__btn-enter">
              <a href="../index.html">Войти</a>
            </button>
            <button class="modal__btn-signup">
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>


{/* signup */}
<div class="container-signup">
        <div class="modal__block">
          <form class="modal__form-login">
            <a href="../">
              <div class="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              class="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              class="modal__input password-first"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              class="modal__input password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button class="modal__btn-signup-ent">
              <a href="../index.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>



    </div> 
  );
}

export default App;
