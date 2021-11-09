import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';


const AuthStack = createStackNavigator();



export default function AuthRoutes() {
 return (
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="SingIn" 
        component={SingIn}
        options={{headerShown:false}}
        />
        
        <AuthStack.Screen 
        name="SingUp" 
        component={SingUp}
        options={{
          headerStyle:{
            backgroundColor:'#131313',
            borderBottomWidth:1,
            borderBottomColor: '#00b94a',

          },
          headerTintColor:'#FFF',
          headerBackTitleVisible:false,
          headerTitle:'Voltar'
          
        }}
       
        />
      
      
    </AuthStack.Navigator>
  );
}