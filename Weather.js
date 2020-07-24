import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
// import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function Weather({temp}){
 return (
  <View style={styles.container}>
      <View style={styles.halfcontainer}>
        {/* <MaterialCommunityIcons size={96} name={iconName(temp)} /> */}
        <Feather size={96} name={iconName(temp)} />
        <Text style={styles.temp}>{temp}c</Text>
    </View>
    <View style={styles.halfcontainer} />
  </View>
 );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "clear",
      "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
 container: {
      flex: 1, 
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#eee"
    },
    halfcontainer: {
      flex: 1, 
      justifyContent: "center",
      alignItems:"center"
    },
    temp:{
      fontSize:42
    }
});
const iconName = (condition)=>{
  switch(condition){
    case "Thunderstorm": return "cloud-lightning";
    case "Drizzle": return "cloud-drizzle";
    case "Rain": return "cloud-rain";
    case "Snow": return "cloud-snow";
    //case "Atmosphere": return "weather-lightning-rainy";
    case "clear": return "sun";
    case "Clouds": return "cloud";
    default:return "x";
  }
}