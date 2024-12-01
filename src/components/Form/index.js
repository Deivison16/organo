import { useState } from 'react'
import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'

// Arrow Function para retornar os "props" as propriedades do componente
const Form = (props) => {

    // const para armazenar o "estado" dos componentes do formulário usando o useState()
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('Programação')

    // função para previnir o recarregamento da página ao enviar o formulário
    const onSave = (evento) => {
        evento.preventDefault()
        props.RegisteredCollaborator({
            nome,
            cargo,
            imagem,
            team
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTeam('')
    }

    return(
        // Faz a instância dos outros componentes dentro do formulário
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome} 
                    Altered={valor => setNome(valor)}
                />
                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo} 
                    Altered={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    Altered={valor => setImagem(valor)}
                />
                <DropdownList 
                    mandatory={true} 
                    label="Times" 
                    items={props.teams}
                    valor={team}
                    Altered={valor => setTeam(valor)}
                />
                <Button children="Criar Card"/>
            </form>
        </section>
    )
}

// Exporta o componente
export default Form