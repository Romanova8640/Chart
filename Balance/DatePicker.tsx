import React, {useState} from "react";
import {View, Button, Text, TouchableOpacity, TextInput} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { stylesDate} from './styles/datePickerStyle'
import { format } from "date-fns";



const Example = () => {
  const [date, setDate] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [value, setValue]=useState('');


  return (
    <View>
      <TouchableOpacity activeOpacity={1}
      onPress={() => setVisible(true)}
      style={stylesDate.touchable}>
      <TextInput
      editable={false}
      value={value}
      style={stylesDate.input}/>
      </TouchableOpacity>
      <DateTimePickerModal
  isVisible={isVisible}
  onConfirm={(date) => {
    setVisible(false);
    var formattedDate = format(date, "dd/MMM/yyyy");
    setValue(formattedDate);
  }}
  onCancel={() => setVisible(false)}
  
/>
    </View>
  );
};

export default Example;