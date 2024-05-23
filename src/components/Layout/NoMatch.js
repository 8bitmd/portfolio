import {Link} from "react-router-dom";

export default function NoMatch() {
    return (
        <div className={"nomatch"}>
            <h1>404</h1>
            <p>Cette page n'existe pas.</p>
            <Link to={"/"}>[Retourner à l'accueil]</Link>
        </div>
    )
}