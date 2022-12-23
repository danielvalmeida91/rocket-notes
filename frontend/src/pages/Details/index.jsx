import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details(){
  
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde praesentium vitae provident expedita sunt eveniet, quam exercitationem quis mollitia corrupti harum dolor! Accusamus facilis quibusdam, nam illum exercitationem suscipit.
          </p>
          
          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
      
    </Container>
  )

}
