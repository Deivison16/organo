import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

// Responsável por renderizar os componentes nas páginas
function App() {

  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },

    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [collaborators, setCollaborators] = useState([])

  const RegisterNewCollaborator = (collaborator) => {
    debugger
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.nome)} RegisteredCollaborator={collaborator => RegisterNewCollaborator(collaborator)} />
      {teams.map(team =><Team 
        key={team.nome} 
        nome={team.nome} 
        corPrimaria={team.corPrimaria} 
        corSecundaria={team.corSecundaria}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.nome)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;