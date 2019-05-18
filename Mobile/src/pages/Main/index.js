import React, { Component } from 'react';
import { View,Text, Image, TextInput,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api';

import Styles from './styles';

import Logo from '../../assets/logo.png';

export default class Main extends Component {

  state ={
      newBox:""
  };
  async componentDidMount()
  {
    const box = await AsyncStorage.getItem("@ScootBox:box");
    if(box)
    {
      this.props.navigation.navigate("Box");
    }
  }
  handleSignIn = async() =>{
      const response = await api.post("boxes",{
      title: this.state.newBox
      });
      await AsyncStorage.setItem("@ScootBox:box", response.data._id);

      this.props.navigation.navigate("Box");
    }
  render() {
    return (
      <View style={Styles.container}>
        <Image style={Styles.logo} source={Logo}/>
        <TextInput
        style={Styles.input}
        placeholder="Crie um Box"
        placeholderTextColor="#000"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        value={this.state.newBox}
        onChangeText ={text => this.setState({newBox:text})}

        />
        <TouchableOpacity onPress={this.handleSignIn} style={Styles.button}>
          <Text style={Styles.TxtButton}>Criar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
