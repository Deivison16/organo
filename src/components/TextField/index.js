import './TextField.css'

// Arrow Function para retornar os "props" as propriedades do componente
const TextField = (props) => {
    
    const placeholderModified = `${props.placeholder}...`

    const Typing = (evento) => {
        props.Altered(evento.target.value)
    }

    return (
        <div className="textfield">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={Typing} required={props.mandatory} placeholder={placeholderModified}/>
        </div>
    )
}

// Exporta o componente
export default TextField