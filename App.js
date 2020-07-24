import React from 'react';
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import Loading from "./Loading";
// import Test from "./Test";
import Weather from "./Weather";
import axios from 'axios';
const API_KEY ="70b994cd5cfac721ba6a65a8a7d2d44e";
export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude,longitude)=>{
    const {
      data : {
          main:{temp},
          weather
      }
    
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading:false,
      temp,
      condition:weather[0].main
    });
  }
  getLocation = async()=>{
    try {
      const response = await Location.requestPermissionsAsync();
     // console.log(response);
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      //console.log(latitude,longitude);
      this.getWeather(latitude,longitude);
     
    } catch (error) {
      Alert.alert("위치를 찾을 수 없어요ㅠ",'슬퍼용');
     // console.log(error);
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading,temp,condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
  } 
}