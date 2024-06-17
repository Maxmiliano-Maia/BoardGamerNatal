import  Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return (
        <>
            <nav className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col p-3">
                        <Image 
                        src="/assets/imagens/logo.jpeg"
                        alt="LOGO"
                        width={50}
                        height={50}
                        />
                        <span className="ms-3 text-info">Boardgamers Potiguares</span>
                        <span className="mx-2">|</span>
                        <span>Natal/RN</span>
                    </div>
                    <div className="col p-3 text-end align-self-center">
                        <Link href="/" className="link">Home</Link>
                        <Link href="/points" className="link">Gamers</Link>
                        <Link href="/map" className="link">Mapa</Link>
                    </div>
                </div>
            </nav>
        
        </>
    )
}