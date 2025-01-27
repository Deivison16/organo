import './Footer.css'

export const Footer = () => {
    // JSX
    return(<footer className="footer"> 
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/fb.png" alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/img/tw.png" alt="Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/img/ig.png" alt="Instagram"/>
                        </a>
                    </li>
                </ul>
            </section> 
            <section>
                <img src="img/logo.png" alt="Logo"/>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>)
}

