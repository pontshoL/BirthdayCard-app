import React,{useEffect, useState} from "react";
import {Text, View, Image } from "react-native";
import pic from './assets/Animated-Happy-Birthday-GIF_03270619.gif'
import img from './assets/R (1).jfif'


const MyCard = ({route}) =>{
    return(
    <> 
      <View style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
           <View style={{backgroundColor: 'white', width: '80%', height: '80%', alignSelf: 'center', marginTop: '20%'}}>
               <Image style={{width: '100%', height: '70%', }} resizeMode = 'stretch' source={pic}></Image>
               <Image style={{width: '100%', height: '30%',marginBottom: 80 }} source={img}></Image>
           </View>
      </View>
       
    </>
    )
}
export default MyCard;