
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text,  View } from "react-native";

const LimitError = ()=>{
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('./assets/images/auth_bg.png')}/>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('./assets/images/error.png')} resizeMode={'contain'} style={{width:'100%',   marginTop:70, marginBottom:40,height:300}}/>
                        </View>
                        <View style={styles.container}>
          <Text style={styles.myTitle}>Credit Limit Exceeded!</Text>
        </View>
           </View>
                                 <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },defaultBg:{
        width:'100%',
        height:120
    },formInput:{
        marginTop:20,
        padding:10,
        
    }, myTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      }, myTitle2: {
        fontSize: 18,
        borderColor:"#a7a7a7",
        fontWeight: 'bold',
        textAlign: 'center',
      },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },textInput1:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },defaultButton:{
        padding:15,
        marginTop:20,
        backgroundColor:'#14b53f',
        borderRadius:10,
    }
});

export default LimitError;