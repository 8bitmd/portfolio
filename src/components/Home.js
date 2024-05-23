import DocumentTitle from "./DocumentTitle";
import {Link} from "react-router-dom";

export default function Home() {
    DocumentTitle("8bitmd")
    return (
        <section className={"accueil"}>
            <h2>👋 Je suis <span className={"decoration"}>8bitmd</span>, Bruno Igal Tumedei dans la vraie vie.</h2>
            <p>Passionné par la couleur jaune et tout ce qui est numérique, en incluant le hardware, je me suis finalement spécialisé dans le développement web.</p>
            <p>Je suis également passionné par les langues, ce qui m'a permis d'étudier en Angleterre et de décrocher une Licence en Langues Étrangères Appliquées, tout en découvrant de nouvelles cultures et en apprenant à communiquer efficacement dans un monde globalisé.</p>
            <p>Ici vous pourrez découvrir la plupart des projets sur lesquels j'ai travaillé, ou je travaille toujours.</p>
            <p>Pour en savoir un peu plus sur moi, <Link to={"#"}>c'est par là</Link> (en construction).</p>
            <h2>Mes projets</h2>
            <p>Pour avoir un aperçu des projets sur lesquels j'ai travaillé, ou mes projets en cours, vous pouvez <Link to={"/projets"}>cliquer ici</Link>.</p>
            <p></p>
            <h2>Contact</h2>
            <p>Il n'y a rien de plus simple pour me contacter.</p>
            <p><a href={"https://www.linkedin.com/in/brunotumedei/"}>Cliquez ici</a> pour accéder à mon LinkedIn, mais si vous préférez les e-mails <a href={"mailto:bruno@tumedei.dev"}>c'est par là</a> (bruno@tumedei.dev).</p>
        </section>
    )
}