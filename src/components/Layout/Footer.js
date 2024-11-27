const currentYear = new Date().getFullYear()

export default function Footer() {
    return (
        <footer>
            <p>&copy; {currentYear} Bruno Igal Tumedei - 8bitmd</p>
        </footer>
    )
}