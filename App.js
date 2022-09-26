import React,{useEffect, useState} from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View, ScrollView, ImageBackground, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCard from "./MyCard";

const image = {uri: 'https://media.gettyimages.com/vectors/luxury-wedding-invitation-and-greeting-card-vector-id1201370836?s=612x612'}
const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return(
    <View style={styles.container}  >
     <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
      
      <View style={{alignSelf: 'center', marginTop: 500, backgroundColor: 'black', height: 100, marginRight: -110, width: 280}}>
        <Pressable onPress={() => navigation.navigate('card')}>
           <Text style={{color: '#c8c12b', alignSelf: 'center', marginTop: 30, fontSize: 18,}}>Tap to view your card</Text>
           
        </Pressable>
        
       </View>
      <StatusBar style="auto" />
      
     </ImageBackground>
   </View>        
  )
}
export default function App(){
   return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name='card' component={MyCard}/>
        </Stack.Navigator>
      </NavigationContainer>
   )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
     width: '100%',
     height: '100%'
  }
});


