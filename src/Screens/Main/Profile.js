import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    I18nManager
} from 'react-native';
import {
    Icon,
    Input,
    Card,
    Rating,
    AirbnbRating
} from 'react-native-elements';
import { s } from '../../Components/Header';
import { back_img4, Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';

const CustomHeader=({name})=>{
    const nav=useNavigation();
    
    return(
        <ImageBackground
        style={[s.ImageBackground,{height:300}]}
        source={back_img4}
        imageStyle={[s.ImageBackground_Img,{opacity:0.8}]}
        >
            <View style={{width:"90%",marginTop:30,alignSelf:"center",backgroundColor:"transparent",alignItems:"center"}}>
                <Text style={{fontFamily:FontFamily.semi_bold,color:Colors.white,textAlign:"center"}}>
                    {name}
                </Text>
            </View> 
        </ImageBackground>
    )
}

const Profile=()=>{
    const navigation=useNavigation();
    const gotoWithdraw=()=>{
        navigation.navigate("MyWithdraw");
    }
    const gotoWallet=()=>{
        navigation.navigate("MyWallet");
    }
    const gotoRatings=()=>{
        navigation.navigate("Ratings")
    }
    const gotoSettings=()=>{
        navigation.navigate("Settings")
    }
    const gotoEditProfile=()=>{
        navigation.navigate("Edit_Profile")
    }
    return(
        <View style={{flex:1,backgroundColor:Colors.white}}>
            <CustomHeader name="Profile" />
            <View style={sb.SEC2}>
                <Image
                 source={{uri:"https://bestprofilepictures.com/wp-content/uploads/2020/06/Anonymous-Profile-Picture-1024x1024.jpg"}}
                 style={{
                     height:150,
                     width:150,
                     borderRadius:20,
                     alignSelf:"center",
                     marginTop:-100
                 }} />
                 <View style={{alignSelf:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontFamily:FontFamily.semi_bold}}>
                        Jhon Patrick
                    </Text>
                    <Text style={[sb.Text,{fontSize:13,fontStyle:"italic",color:"#333",opacity:0.4}]}>
                    abc@gmail.com
                    </Text>
                    <Text style={[sb.Text,{fontSize:14}]}>
                    #5985462101
                    </Text>
                 </View>
                 <ScrollView showsVerticalScrollIndicator={false}>                     
                     <View>
                         {/* 1 option */}
                        <TouchableOpacity onPress={()=>gotoEditProfile()}>
                            <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Icon name="settings" type="octicon"  />
                                    <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                        Edit Profile
                                    </Text>
                                </View>
                                <Icon name="arrow-right" type="evilicon"  />
                                </View>
                            </Card>
                        </TouchableOpacity>
                        {/* 2 */}
                        <TouchableOpacity onPress={()=>gotoSettings()}>
                            <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Icon name="settings" type="octicon"  />
                                    <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                        Settings
                                    </Text>
                                </View>
                                <Icon name="arrow-right" type="evilicon"  />
                                </View>
                            </Card>
                        </TouchableOpacity>
                        {/* 3 */}
                        <TouchableOpacity onPress={()=>gotoWallet()}>
                            <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Icon name="settings" type="octicon"  />
                                    <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                        My Wallet
                                    </Text>
                                </View>
                                <Icon name="arrow-right" type="evilicon"  />
                                </View>
                            </Card>
                        </TouchableOpacity>
                        {/* 4 */}
                        <TouchableOpacity>
                            <Card containerStyle={{height:50,paddingVertical:2,justifyContent:"center",borderRadius:12}}>
                                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Icon name="settings" type="octicon"  />
                                    <Text style={{fontSize:14,fontFamily:FontFamily.semi_bold,marginHorizontal:7}}>
                                        Log Out
                                    </Text>
                                </View>
                                <Icon name="arrow-right" type="evilicon"  />
                                </View>
                            </Card>
                        </TouchableOpacity>
                        {/*  */}
                     </View>
                 </ScrollView>
            </View>
        </View>
    )
}
const sb=StyleSheet.create({
    SEC2:{
        backgroundColor:Colors.white,
        marginTop:-50,
        borderTopLeftRadius:30,
        borderTopEndRadius:30,
        flex:1
      },
      Text:{
          fontFamily:FontFamily.default
      }
})
export default Profile;