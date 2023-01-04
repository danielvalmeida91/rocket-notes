import { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/Noteitem';
import { Button } from '../../components/Button';

import {api} from '../../services/api'

import { Container, Form  } from './styles'

export function New(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [ links, setLinks ] = useState([])
  const [ newLink, setNewLink ] = useState("")

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState("")

  const navigate = useNavigate()

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted){
    setLinks( prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag(){
    setTags( prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags( prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleCreateNewNote(){
    if(!title){
      return alert("Please enter a title")
    }

    if(newLink){
      return alert("Você possui um link pendente para adicionar!")
    }

    if(newTag){
      return alert("Você possui uma tag pendente para adicionar!")
    }

    await api.post('/notes', {
      title, 
      description,
      tags,
      links
    })

    alert('Nota criada com sucesso!')
    navigate('/')

  }

  return(
    <Container>
      <Header />


      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to='/'>voltar</Link>
          </header>

          <Input 
            placeholder="Título"
            onChange={ e => setTitle(e.target.value)}
          />
          <Textarea 
            placeholder="Observações" 
            onChange={ e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map( (link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"  
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />    
                ))
              }
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}  
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleCreateNewNote}/>
        </Form>
      </main>
    </Container>
  );
}