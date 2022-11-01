
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet,TouchableOpacity, Text,  View } from "react-native";

const PayDetails = ()=>{
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('./assets/images/auth_bg.png')}/>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('./assets/images/Suc.jpg')} resizeMode={'contain'} style={{width:'100%',  marginTop:20, marginBottom:40,height:300}}/>
                        </View>
                        <View style={styles.container}>
          <Text style={styles.myTitle}>Successfully Scan!</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.myTitle1}>250.00 LKR</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.myTitle2}>Kaluthara - Panadura</Text>
        </View>
        <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>CREDIT  BALANCE</Text>
                        </TouchableOpacity>
                    </View>
                   
                   
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>RECHARGE</Text>
                        </TouchableOpacity>
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
        marginTop:10,
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
      },myTitle1: {
        fontSize: 35,
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
        padding:10,
        marginTop:0,
        backgroundColor:'#14b53f',
        borderRadius:10,
    }
});

export default PayDetails;