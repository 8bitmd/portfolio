import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1 className={"decoration"}>8bitmd</h1>
            <nav>
                <Link to={"/projets"}><span aria-hidden={"true"}>[</span>projets<span aria-hidden={"true"}>]</span></Link>
                <a href={"https://github.com/8bitmd"}><span aria-hidden={"true"}>[</span>github<span aria-hidden={"true"}>]</span></a>
                <a href={"https://www.linkedin.com/in/brunotumedei/"}><span aria-hidden={"true"}>[</span>linkedin<span aria-hidden={"true"}>]</span></a>
                <a href={"mailto:bruno@tumedei.dev"}><span aria-hidden={"true"}>[</span>email<span aria-hidden={"true"}>]</span></a>
            </nav>
        </header>
    )
}