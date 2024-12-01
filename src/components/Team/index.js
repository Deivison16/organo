import Collaborator from '../Collaborator'
import './Team.css'

// Arrow Function para retornar os "props" as propriedades do componente
const Team = (props) => {

    // const da cor de fundo do componente
    const css = { backgroundColor:props.corSecundaria}

    return (
        (props.collaborators.length > 0) ? <section className='team' style={css}>

            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>

            <div className='collaborator'>
                {props.collaborators.map(collaborator => <Collaborator key={collaborator.nome} cordeFundo={props.corPrimaria} nome={collaborator.nome} cargo={collaborator.cargo} imagem={collaborator.imagem}/>)}
            </div>

        </section>

        : ''

    )

}

// Exporta o componente 
export default Team