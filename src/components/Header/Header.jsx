import Link from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div>
                <Link to="/Home">Home</Link>
                <Link to="/Galeria">Galeria</Link>
                <Link to="/Contato">Contato</Link>
            </div>

        </>
    )
}