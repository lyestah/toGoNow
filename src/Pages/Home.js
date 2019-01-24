// src/Page1.js

import React from 'react';
import { View, TouchableHighlight,Image,StyleSheet, Text } from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
     <Image source={require('../image/Group.png')}/>
     <Text style={styles.nometxt} >Francisco Júnior</Text>
     </View>
     <View style={styles.categorias} >
        <TouchableHighlight style={styles.box}  onPress={()=>navigation.navigate('Restaurante_list')} >
        <View style={styles.box}>
            <Image source={require('../image/dish.png')}/>
            <Text>Restaurantes</Text>
            </View>
        </TouchableHighlight>
         <TouchableHighlight style={styles.box}  onPress={()=>navigation.navigate('Pousada_list')} >
         <View style={styles.box}>
            <Image source={require('../image/hotel.png')}/>
            <Text>Pousadas</Text>
        </View>
        </TouchableHighlight>
         <TouchableHighlight style={styles.box}  onPress={()=>{alert("Clicou,mané!");}} >
          <View style={styles.box}>
            <Image source={require('../image/beer.png')}/>
            <Text>Bares</Text>
        </View>
        </TouchableHighlight>
         <TouchableHighlight style={styles.box}  onPress={()=>{alert("Clicou,mané!");}} >
          <View style={styles.box}>
            <Image source={require('../image/taxi.png')}/>
            <Text>Táxis</Text>
        </View>
        </TouchableHighlight>
         <TouchableHighlight style={styles.box}  onPress={()=>{alert("Clicou,mané!");}} >
          <View style={styles.box}>
            <Image source={require('../image/motorbike.png')}/>
            <Text>Mototáxis</Text>
        </View>
        </TouchableHighlight>
         <TouchableHighlight style={styles.box}  onPress={()=>{alert("Clicou,mané!");}} >
          <View style={styles.box}>
            <Image source={require('../image/hospital.png')}/>
            <Text>Emergências</Text>
        </View>
        </TouchableHighlight>
     </View>
     <View style={styles.meio}>
     <View style={styles.barra} >
         <Text>Novidades</Text>
     </View>
     <View style={styles.slide} >
         <View>
             <Text>Slide</Text>
         </View>
     </View>
     <View style={styles.footer} ></View>
     </View>
  </View>
);

Home.navigationOptions = {
  title: 'Home',
  header:null
};
const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor:'#F7F8FB',
       
        
    },
    meio:{
      flex:1
    },
    header:{
        height:200,
        justifyContent: 'center', 
        alignItems: 'center' ,
        backgroundColor:'#2d2d2d',
    },
    nometxt:{
        marginTop:5,
        color:'#fff'
    },
    txt:{
      fontSize:50
    },
    categorias:{
        flex:1,
        width:'98%',
        flexDirection:'row',
        backgroundColor:'#F7F8FB',
        justifyContent:'space-around',
        flexWrap:'wrap',
        padding:20,
        margin:10
        
    },
    box:{
        width:99,
        height:93,
        backgroundColor:'#fff',
        marginLeft:8,
        marginRight:8,
        marginTop:5,
        marginBottom:5,
        // padding:2,
        alignItems:'center',
        justifyContent:'center',
        elevation:3
    },
    barra:{
        padding:20,      
        height:40,
        marginTop:3,
        marginBottom:3,
        backgroundColor:'#fff'
    },
    slide:{

    },
    footer:{

    }
  })
export default Home;