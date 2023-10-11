import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style ={{
      flex:1,
      backgroundColor:'yellow',
     
    }}>
    <View style={{
      flex:1,
      backgroundColor:'red',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    }}>
    <View style={{
        height:75,
        width:75,
        borderRadius:75/2,
        backgroundColor:'white',
       justifyContent:'center',
       alignItems:'center',
          marginLeft:50,
          marginTop:30,
    }}>
     <Image style={{
      width:55,
      height:60,
     }}
    source={require('./assets/Hat.png')}/>
      </View>
      
    <Text style={{
      color:'white',
      fontsize:40,
      fontweight:'bold',
      alignSelf:'center',
       }}>
    Food For{'\n'}Everyone
     </Text>
     </View>
      <View style={{
        flex:3,
        backgroundColor:'red',
        borderBottomLeftRadius:30,
      borderBottomRightRadius:30,

       }}>
      <Image style={{
        height:400,
        width:400,
      
       }}
      source={require('./assets/people.png')}/>
      <TouchableOpacity style={{
        height:40,
        width:150,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:30,
       justifyContent:'center',
       marginTop:10,
      }}>
        <Text style={{
          color:'red',
          fontsize:50,
          fontWeight:'bold',
          alignSelf:'center',  
          //position:'absolute',
          //bottom:0,
            
        }}>Get Started</Text>
      </TouchableOpacity>

      
      </View>
      </View>
     )
}

export default App

const styles = StyleSheet.create({})