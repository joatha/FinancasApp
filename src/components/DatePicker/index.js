import React , {useState } from 'react';
import { Platform,Button,TouchableOpacity  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Container,Header} from './styles';



export default function DatePicker({date,onClose,onChange}) {

    const [dateNow, setDateNow] = useState(new Date(date));

 return (
   <Container>
       {Platform.OS === 'ios' && (
           <Header>
               <TouchableOpacity onPress={onClose}>
                   <Text>Fechar</Text>
               </TouchableOpacity>
           </Header>
       )}
    <DateTimePicker
    value={dateNow}
    mode="date"
    display="default"
    onChange={(event, date)=>{
        const currentDate = date || dateNow;
        setDateNow(currentDate);
        onChange(currentDate);
   }}
    style={{backgroundColor:'white'}}
    />
   </Container>
  );
}