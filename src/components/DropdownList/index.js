import './DropdownList.css'

// Arrow Function para retornar os "props" as propriedades do componente
const DropdownList = (props) => {
    return(
        <div className="dropdownlist">
            <label>{props.label}</label>
            <select onChange={evento => props.Altered(evento.target.value)} required={props.mandatory} value={props.valor}>
                <option value=""></option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

// Exporta o componente 
export default DropdownList