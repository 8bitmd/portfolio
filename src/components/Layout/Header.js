import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to={"/"}>
                <h1 className={"decoration"}>8bitmd</h1>
            </Link>
            <nav>
                <Link to={"/projets"}><span aria-hidden={"true"}>[</span>projets<span aria-hidden={"true"}>]</span></Link>
                <a href={"https://github.com/8bitmd"} target={"_blank"} rel="noreferrer"><span aria-hidden={"true"}>[</span>github<span aria-hidden={"true"}>]</span></a>
                <a href={"https://www.linkedin.com/in/brunotumedei/"} target={"_blank"} rel="noreferrer"><span aria-hidden={"true"}>[</span>linkedin<span aria-hidden={"true"}>]</span></a>
                <a href={"mailto:bruno@tumedei.dev"}><span aria-hidden={"true"}>[</span>e-mail<span aria-hidden={"true"}>]</span></a>
            </nav>
        </header>
    )
}