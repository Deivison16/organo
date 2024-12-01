import './Banner.css'

/* 
    Outra maneira de exportar os "props" as propriedades do componente 
    utilizando a Arrow Function diretamente no export
*/
export const Banner = () => {
    // JSX
    return(
        <header className="banner">  
            <img src="/img/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    )
}