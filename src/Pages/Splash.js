import React, { Component } from 'react';
import {

  StyleSheet,
  Text,  View
} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  static navigationOptions={
      header:null
  }

  componentDidMount(){
    setTimeout(()=>{
        const { navigate } = this.props.navigation;
        navigate('Home');
    },2000)
}

  render() {
    return (
    	<View style={styles.container}>
        <Text style={styles.welcome}>VIA DIRECT</Text>
      </View>
    );
  }
}
// const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2d2d2d',
    },
    welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color: '#fff',
      fontWeight:'bold',
      fontFamily:'Poppins'
    }
  });