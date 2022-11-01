import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput,TextInput1, TouchableOpacity, View } from "react-native";

const Charge = ()=>{
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('./assets/images/auth_bg.png')}/>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('./assets/images/logo.png')} resizeMode={'contain'} style={{width:'100%',   marginTop:20, marginBottom:10,height:200}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="DEPATURE : Kaluthara"/>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="ARRIVAL : Panadura"/>
                    </View>
                   
                   
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>ENTER</Text>
                        </TouchableOpacity>
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
        padding:3,
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

export default Charge;