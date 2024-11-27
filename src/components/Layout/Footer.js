const currentYear = new Date().getFullYear()
document.getElementById("year").innerHTML = currentYear

export default function Footer() {
    return (
        <footer>
            <p>&copy; <span id="year"></span> Bruno Igal Tumedei - 8bitmd</p>
        </footer>
    )
}