import DocumentTitle from "./DocumentTitle";
import {Link} from "react-router-dom";

export default function Home() {
    DocumentTitle("8bitmd")
    return (
        <section className={"accueil"}>
            <h2>👋 Je suis <span className={"decoration"}>8bitmd</span>, Bruno Igal Tumedei dans la vie réelle.</h2>
            <p>Depuis toujours, le numérique me fascine, et c’est cette passion qui m’a naturellement orienté vers le développement web, un domaine où je peux mêler créativité et expertise technique. Mon intérêt pour le hardware et les nouvelles technologies enrichit constamment ma manière de travailler et me permet de toujours apprendre davantage.</p>
            <p>J’ai également une grande passion pour les langues, ce qui m’a permis de partir étudier en Angleterre, où j’ai obtenu une Licence en Langues Étrangères Appliquées. Cette expérience m’a offert l’opportunité de découvrir de nouvelles cultures et de renforcer mes compétences en communication dans un monde de plus en plus connecté.</p>
            <p>Ici, vous pourrez découvrir une sélection des projets sur lesquels j’ai travaillé, ou sur lesquels je suis actuellement impliqué.</p>
            <h2>Compétences et parcours</h2>
            <h3>Formation Intégrateur Web - <em>OpenClassrooms</em></h3>
            <ul>
                <li>Langages front-end:
                <ul>
                    <li>HTML, JavaScript, CSS/Sass</li>
                </ul></li>
                <li>Frameworks:
                    <ul>
                        <li>React (avec Router, Redux)</li>
                    </ul>
                </li>
                <li>Compétences supplémentaires:
                    <ul>
                        <li>SEO: bonnes pratiques pour l'indexation et le référencement</li>
                        <li>Optimisation des performances</li>
                        <li>Responsive design: création d'interfaces adaptées à tous les appareils</li>
                    </ul>
                </li>
            </ul>
            <h3>Licence LEA anglais/espagnol - <em>Université Paris Cité, University of Birmingham</em></h3>
            <h3>Baccalauréat L (anglais renforcé) - <em>Lycée Lakanal, Sceaux</em></h3>
            <h3>Langues</h3>
            <ul>
                <li>Anglais - bilingue, avec une expérience de vie et d'études en environnement anglophone</li>
                <li>Français - bilingue, langue d'usage quotidien</li>
                <li>Espagnol - langue maternelle</li>
                <li>Italien - langue maternelle</li>
            </ul>
            <h2>Mes projets</h2>
            <p>Pour avoir un aperçu des projets sur lesquels j'ai travaillé, ou mes projets en cours, vous pouvez <Link to={"/projets"}>cliquer ici</Link>.</p>
            <p></p>
            <h2>Contact</h2>
            <p>Vous pouvez consulter mon LinkedIn <a href={"https://www.linkedin.com/in/brunotumedei/"} target={"_blank"} rel="noreferrer">en cliquant ici</a>. Pour m'envoyer un e-mail, <a href={"mailto:bruno@tumedei.dev"}>cliquez ici</a> (bruno@tumedei.dev).</p>
        </section>
    )
}