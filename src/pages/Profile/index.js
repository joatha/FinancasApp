import React, {useContext} from 'react';
import {useNavigation} from'@react-navigation/native';
import Header from '../../components/Header';

import {AuthContext} from '../../contexts/auth';

import {Container,Nome,NewLink,NewText,Logout,LogoutText } from './styles';

export default function Profile() {

  const navigation = useNavigation();

  const {user, SingOut} = useContext(AuthContext)

 return (
   <Container>
    <Header/>
      <Nome>
        {user && user.nome}
      </Nome>

       <NewLink onPress={()=> navigation.navigate('Registrar')}>
          <NewText>Registrar Gastos</NewText>          
       </NewLink>

       <Logout onPress={()=>SingOut()}>
         <LogoutText>Sair</LogoutText>
       </Logout>
       
   </Container>
  );
}



