import css from './notFoung.module.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className={css.wrapper}>
            <h1>{'Oops... Seems like something went wrong.'}</h1>
            <p>Here are some helpful links:</p>
            <ul>
                <li className={css.li}>
                    <Link to="/" className={css.link}>Home</Link>
                </li>

                <li className={css.li}>
                    <Link to="/movies">Movies</Link>
                </li>
            </ul>
        </div>
    )
}

export default NotFound;