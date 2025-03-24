import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../styles/Colors';

export default function Button() {
    const [firstValue, SetfirstValue] = useState('');
     const [DisplayValue, SetDisplayValue] = useState('');
      const [operator, SetOperator] = useState('');

  return (
    <View>
           <View style={styles.row}>
           <TouchableOpacity  style={[styles.button, { backgroundColor: Colors.btnRight }]}  onPress={()=>{}} >
           <Text style={{color: Colors.light, fontSize:30,}}>C</Text>
         </TouchableOpacity>
          <TouchableOpacity  style={[styles.button, { backgroundColor: Colors.btnRight }]}  onPress={()=>{}} >
           <Text style={{color: Colors.light, fontSize:30,}}>⌫</Text>
         </TouchableOpacity>
          <TouchableOpacity  style={[styles.button, { backgroundColor: Colors.btnRight }]}  onPress={()=>{}} >
           <Text style={{color: Colors.light, fontSize:30,}}>%</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.button, { backgroundColor: Colors.btnRight }]} onPress={() => {}}>
            <Text style={{ color: Colors.light, fontSize: 30 }}>÷</Text>
        </TouchableOpacity>
         </View>

            <View style={styles.row}>
           <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>7</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>8</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>9</Text>
         </TouchableOpacity>
          <TouchableOpacity  style={[styles.button, { backgroundColor: Colors.btnRight }]}  onPress={()=>{}} >
           <Text style={{color: Colors.light, fontSize:30,}}>x</Text>
         </TouchableOpacity>       
       </View>    

            <View style={styles.row}>
           <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>4</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>5</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>6</Text>
         </TouchableOpacity>
          <TouchableOpacity  style={[styles.button, { backgroundColor: Colors.btnRight }]}  onPress={()=>{}} >
           <Text style={{color: Colors.light, fontSize:30,}}>-</Text>
         </TouchableOpacity>       
       </View>    

        <View style={styles.row}>
           <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>1</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>2</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>3</Text>
         </TouchableOpacity>
          <TouchableOpacity  style={[styles.button, { backgroundColor: Colors.btnRight }]}  onPress={()=>{}} >
           <Text style={{color: Colors.light, fontSize:30,}}>+</Text>
         </TouchableOpacity>       
       </View>    

        <View style={styles.row}>
           <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>00</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>0</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>{}} >
           <Text style={{color: Colors.dark, fontSize:30,}}>.</Text>
         </TouchableOpacity>
          <TouchableOpacity  style={[styles.button, { backgroundColor: Colors.btnRight }]}  onPress={()=>{}} >
           <Text style={{color: Colors.light, fontSize:30,}}>=</Text>
         </TouchableOpacity>       
       </View>  
    </View>

 
  )
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    paddingVertical: 10
  },
  button:{
    height: 70,
    backgroundColor: Colors.gray,
    width: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
      },
 
      
})