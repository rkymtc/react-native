import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todos</Text>
        </View>
    )
}
const styles=StyleSheet.create({
header:{
    height:80,
    paddingTop:38,
    backgroundColor:'pink'
},
title:{
    alignSelf:"center",
    color:"white",
    fontSize:30,
    fontWeight:'bold',

}
});