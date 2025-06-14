import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";
import {S} from './components/pages/_styles.ts'
import {Model} from "./components/pages/Model.tsx";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/model',
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
                    {/*Когда использовать? Когда нужно сделать кнопку или ссылку, которая ведет на другой маршрут.*/}
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>ABIBAS</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        {/*Когда использовать? Когда нужно связать путь (path) с компонентом (element).*/}

                        {/* Главная страница и page1 ведут на Adidas */}
                        <Route path="/" element={<Navigate to="/adidas"/>}/>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>

                        {/* Другие страницы */}
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>

                        {/* Страница 404 */}
                        <Route path={PATH.ERROR} element={<Error404/>}/>

                        {/* Редирект для несуществующих путей */}
                        {/** - всё что угодно кроме вышеперечисленных*/}
                        <Route path="*" element={<Navigate to="/error404" replace/>}/>


                        {/*для перехода на отдельную модель кроссовка*/}
                        {/*<Route path={`${PATH.ADIDAS}/:id`} element={<Model />} />*/}

                        <Route path="/:model/:id" element={<Model/>}/>
                        {/* в console.log(params); {model: 'adidas', id: '2'}*/}
                        {/*/:model/:id  - здесь задаем ключи */}
                        {/*а в компоненте Adidas - в строке <Link key={adidas.id} to={`/adidas/${adidas.id}`}> - значения*/}
                        {/*Часть :id — это динамический параметр. React Router автоматически извлекает значение из URL и передаёт его в useParams().*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}