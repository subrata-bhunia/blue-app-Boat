import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { 
    Icon,
    Input
} from 'react-native-elements';
import { back_img,logo_blue ,Colors, FontFamily, Sizes } from '../../Constants/Constants';
import { useNavigation } from '@react-navigation/core';


const SignUp=()=>{
    const Navigation = useNavigation();
    return(
        <View>
            <ImageBackground
             style={s.ImageBackground}
             source={back_img}
             imageStyle={s.ImageBackground_Img}
             >
                 <ScrollView>
                    <View style={s.Logo1}>
                       <Image source={logo_blue} style={s.Logo} />
                    </View>
                    {/* <Text style={s.Text1}>Boat Owner</Text> */}
                    <View style={{marginVertical:10}}>
                        <Input
                            placeholder="Name"
                            // containerStyle={s.Input}
                            // inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Email"
                            // containerStyle={s.Input}
                            // inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Mobile"
                            // containerStyle={s.Input}
                            // inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Password"
                            // containerStyle={s.Input}
                            // inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                        <Input
                            placeholder="Confirm Password"
                            // containerStyle={s.Input}
                            // inputContainerStyle={s.Input}
                            placeholderTextColor={Colors.white}
                            inputStyle={{color:Colors.white}}
                            />
                    </View>
                    <View>
                        <Text style={s.Text1}>
                            By sign up, you agree to our terms of service and privacy policy.
                        </Text>
                    </View>
                    <View style={{elevation:5}}>
                        <TouchableOpacity style={s.btn1}>
                            <Text style={s.btn1Text}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[s.Text1,{marginBottom:10}]}>
                            I have already account ?{" "}
                            <Text style={{
                                fontFamily:FontFamily.semi_bold,
                                color:Colors.white,
                                alignSelf:"center",
                                textDecorationLine:"underline"
                            }}
                                suppressHighlighting={true}
                                onPress={()=>Navigation.navigate("Login")}
                                >
                                 Login
                            </Text>
                        </Text>
                    </View>
                 </ScrollView>
             </ImageBackground>
        </View>
    )
}
const s = StyleSheet.create({
    ImageBackground:{
        height:"100%",
        width:Sizes.width,
        backgroundColor:Colors.black
    },
    ImageBackground_Img:{
        opacity:0.5
    },
    Logo:{
        height:120,
        width:120,
        borderRadius:20,
        backgroundColor:Colors.orange,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:0
    },
    Logo1:{
        height:120,
        width:120,
        borderRadius:20,
        backgroundColor:Colors.orange,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:60
    },
    Text1:{
        textAlign:"center",
        fontFamily:FontFamily.default,
        color:Colors.white,
        fontSize:16
    },
    Input1:{
        borderBottomColor:Colors.white,
        width:Sizes.width*0.46,
        marginLeft:-5
    },
    Input:{
        borderBottomColor:Colors.white,
        marginTop:-15
    },
    btn1:{
        height:48,
        width:"95%",
        backgroundColor:Colors.orange,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12,
        marginVertical:10,
        elevation:5
    },
    btn1Text:{
        fontSize:20,
        fontFamily:FontFamily.semi_bold,
        color:Colors.white
    }
})
export default SignUp;