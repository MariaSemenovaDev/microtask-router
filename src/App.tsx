import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";
import {Navigate} from "react-router-dom";

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          Здесь будет навигация
        </div>
        <div className={styles.content}>
            <Routes>

                {/* Главная страница и page1 ведут на PageOne */}
                <Route path="/" element={<PageOne />} />
                <Route path="/page1" element={<PageOne />} />

                {/* Другие страницы */}
                <Route path="/page2" element={<PageTwo />} />
                <Route path="/page3" element={<PageThree />} />

                {/* Страница 404 */}
                <Route path="/error404" element={<Error404 />} />

                {/* Редирект для несуществующих путей */}
                {/** - всё что угодно кроме вышеперечисленных*/}
                <Route path="*" element={<Navigate to="/error404" replace />} />

            </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
