import React from 'react';
import {createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';


const Drawer = createDrawerNavigator();


export default function AppRoutes() {

 return (

    <Drawer.Navigator
    screenOptions={{
      headerShown:false,
        drawerStyle:{
        backgroundColor:'#171717',        
       
    },  
    drawerActiveTintColor:'#FFF',
    drawerActiveBackgroundColor:'#00b94a',  
    drawerInactiveBackgroundColor:'#000',    
    drawerInactiveTintColor:'#DDD',
    

    drawerItemStyle:{
      marginVertical:5,
    }
    
    }}
    
    >

        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Registrar" component={New}/>
        <Drawer.Screen name="Perfil" component={Profile}/>
    </Drawer.Navigator>
  );
}