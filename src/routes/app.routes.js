import React from 'react';
import {createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';


const Drawer = createDrawerNavigator();


export default function AppRoutes() {

 return (

    <Drawer.Navigator
    drawerContent={(props)=> <CustomDrawer {...props}/>}

    screenOptions={{
      headerShown:false,
        drawerStyle:{
        backgroundColor:'#2b2f55',        
        
       
    },  
    drawerActiveTintColor:'#FFF',
    drawerActiveBackgroundColor:'#0b9159',  
    drawerInactiveBackgroundColor:'#000005',    
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