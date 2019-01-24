import React, { Component } from 'react';
import {StyleSheet,Text,FlatList,Image,TouchableOpacity,View} from 'react-native';
// import { Header } from 'react-native-elements';
// import Header from './componentes/Header';
// import Footer from './componentes/Footer';

export default class Restaurante_list extends Component {
    static navigationOptions = {
        
        header:null
      };
	constructor(props) {
	  super(props);
	  this.state = {
      animal:'Tatu',
      descri:'Como uma bela borboleta de cores fortes você voa de jardim em jardim, tão linda a irmã, leva consigo os pólens de um pro outro e ajudam a brotar, caráter, força, determinação, garra!',
	  	flatData:[
	  	{key:"1",nome:'Restaurante Kananga do Japão',descricao:'Restaurante Kananga do Japão',idade:40,foto:'http://fazendavisconde.com.br/images/Carduelis_Yarrellii_Pintassilgo_Bahianinho_nordeste_Passaro_Ornamental_-2.jpg'},
        {key:"2",nome:'Restaurante Kananga do Japão',descricao:'Restaurante Kananga do Japão',idade:40,foto:'http://fazendavisconde.com.br/images/Carduelis_Yarrellii_Pintassilgo_Bahianinho_nordeste_Passaro_Ornamental_-2.jpg'},
	  	
	  	]
	  };
    this.clic=this.clic.bind(this);
	}
	
	flatRender(item){
		return(
			<TouchableOpacity onPress={() => this.props.navigation.navigate('PagItem',item)}>
			  <View style={styles.flat}>
                <View style={styles.flatheader} >
                    <View >
                        <Image source={require('../image/dish.png')} />
                    </View>
                    <Text style={styles.borderleft} ></Text>
                    <View>
                        <Text style={styles.titulotxt} >{item.nome}</Text>
                        <Text style={styles.descricaotxt} >{item.descricao}</Text>
                    </View>
                </View>
              </View>
			</TouchableOpacity>
			
			);
	}
clic(){
  alert("Clicou!!!!");
}
  render() {
    return (
      <View style={styles.container}>  
       <FlatList data={this.state.flatData}  renderItem={({item})=>this.flatRender(item)}/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FB',
  },
  borderleft:{
    borderWidth:1,
    borderColor:'#ccc',
    marginLeft:15,
    marginRight:15
  },
  flat:{
     
      padding: 10,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius:5,
      height: 'auto',
    //   justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight:10,
      marginBottom: 1,
      marginTop: 1,
      elevation:1
  },
  flatheader:{
      flexDirection:'row',
      
  },
  titulotxt:{
      fontSize:14,
      fontWeight:'800',
      color:'#6E6E6E'
  },
  descricaotxt:{
    fontSize:12,
    fontWeight:'200',
    color:'#6E6E6E'
  }
});