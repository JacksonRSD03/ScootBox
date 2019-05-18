import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import{distanceInWords} from "date-fns";
import pt from "date-fns/locale/pt";
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import ImagePicker from "react-native-image-picker";

export default class Box extends Component {
 state = {box:{}};
  async componentDidMount(){

    const box = await AsyncStorage.getItem('@ScootBox:box');
    const response = await api.get(`boxes/${box}`);

    this.setState({box: response.data});
  }
  handleUpload=()=> {
    ImagePicker.launchImageLibrary({},async upload=>{
      if(upload.error)
      {
        console.log('Image picker error');
      }
      else if(upload.didCancel)
      {
        console.log('Canceled by user');
      }
      else
      {
        const data = new FormData();
         
        const [prefix,suffix]= upload.fileName.split('.');
        const ext = suffix.toLowerCase()== 'heic'? 'jpg': suffix;

        data.append('file',{
          uri: upload.uri,
          type: upload.type,
          name:`${prefix}.${ext}`
        })
        api.post(`boxes/${this.state.box._id}`, data);
      }
    });
  };
  renderItem =({item})=>(
    <TouchableOpacity
    onPress={()=>{}}
    style={Styles.file}
    >
    <View style={Styles.fileInfo}>
       <Icon name= "insert-drive-file" size={24} color="#34D35F"/>
      <Text style={Styles.fileTitle}>{file.title}</Text>
    </View>
      <Text style={Style.fileDate}>
        há {distanceInWords(file.createdAt, new Date(),{
          locale:pt
        })}
      </Text>
    </TouchableOpacity>

  );

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.boxTitle}>{this.state.box.title} </Text>

      <FlatList
         style={Styles.list}
         data ={this.state.box.files}
         keyExtractor={file=>file._id}
         ItemSeparatorComponent={()=> <View style={Styles.separator}/>}
         renderItem={this.renderItem}
      />
       <TouchableOpacity style={styles.fab} onPress={this.handleUpload}>
          <Icon name="cloud-upload" size={24} color="#34D35F"/>
       </TouchableOpacity>
      </View>
    );
  }
}
