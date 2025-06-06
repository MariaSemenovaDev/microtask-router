import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";
import {S} from './components/pages/_styles.ts'

const PATH = {
    PAGE1 : '/page1',
    PAGE2 : '/page2',
    PAGE3 : '/page3',
    ERROR: '/error404',
} as const
// ставим as const чтобы значение нельзя было перезаписать
// as const делает объект или массив readonly (только для чтения)
// с фиксированными значениями.


export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Page 1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Page 2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Page 3</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>

                        {/* Главная страница и page1 ведут на PageOne */}
                        <Route path="/" element={<PageOne/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>

                        {/* Другие страницы */}
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        {/* Страница 404 */}
                        <Route path={PATH.ERROR} element={<Error404/>}/>

                        {/* Редирект для несуществующих путей */}
                        {/** - всё что угодно кроме вышеперечисленных*/}
                        <Route path="*" element={<Navigate to="/error404" replace/>}/>

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
