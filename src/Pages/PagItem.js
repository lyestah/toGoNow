import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,FlatList,Image,TouchableOpacity,
  View
} from 'react-native';
// import Header from './componentes/Header';
// import Footer from './componentes/Footer';

export default class PagItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
       descri:'Como uma bela borboleta de cores fortes você voa de jardim em jardim, tão linda a irmã, leva consigo os pólens de um pro outro e ajudam a brotar, caráter, força, determinação, garra!',
      
    };
  }
  render() {
  	let dados = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
      {/* <Header navigation={this.props.navigation} />   */}
      <View style={styles.visual}>
      <Image style={styles.imgPagItem} source={{uri:dados.foto}}/>
      <View style={styles.descHeader} >
       <Text style={styles.titulo} >{dados.nome}</Text>
        <Text style={styles.desc} >{this.state.descri}</Text>
        </View>
      </View>
      {/* <Footer /> */}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FB',
    
  },
  visual:{
  },
  imgPagItem:{
    width:null,
    height:300,
    resizeMode:'cover',
  },
  descHeader:{
     marginTop:20,
     marginRight:20,
     marginLeft:20,
     padding:10,
     backgroundColor:'#fff',
     elevation:2,
    //  height:'100%'
  },
  titulo:{
    fontSize:22,
    fontWeight:'800',
    color:'#6E6E6E'
  },
   desc: {
    fontSize:12,
      fontWeight:'200',
      color:'#6E6E6E'
    
  }
});