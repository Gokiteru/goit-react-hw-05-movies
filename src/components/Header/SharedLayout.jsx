import css from './sharedLayout.module.css'
import { Suspense } from "react";
import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div className={css.container}>
            <header className={css.header}>
                <NavLink className={css.navlink} to="/">Home</NavLink>
                <NavLink className={css.navlink} to="/movies">Movies</NavLink>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default SharedLayout;