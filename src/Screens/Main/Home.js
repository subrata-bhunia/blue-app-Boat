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
    ActivityIndicator
} from 'react-native';
import {
    Icon,
    Input,
    Card,
    AirbnbRating
} from 'react-native-elements';
import Header from '../../Components/Header';
import { back_img3, boat_img1, Colors, FontFamily, Sizes } from '../../Constants/Constants';
import Ad from '../../Data/Ad';
import Outgoing from '../../Data/Outgoing';
import Upcoming from '../../Data/Upcoming';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';

const Home = () => {
    const [btn1Style,setBtn1Style]=useState({
        backColor:Colors.orange,
        textCOlor:Colors.white
    })
    const [btn2Style,setBtn2Style]=useState({
        backColor:Colors.white,
        textCOlor:Colors.black
    });
    const OutgoingData = Outgoing ;
    const UpcomingData = Upcoming ;
    const [data,setData]=useState(OutgoingData);
    // --------------------------------------- //
    const OutgoingBtn=()=>{
        setBtn2Style({
            backColor:Colors.white,
            textCOlor:Colors.black
        })
        setBtn1Style({
            backColor:Colors.orange,
            textCOlor:Colors.white
        })
        setData(OutgoingData)
    };
    // -------------------------------------- //
    const UpcomingBtn =()=>{
        setBtn1Style({
            backColor:Colors.white,
            textCOlor:Colors.black
        })
        setBtn2Style({
            backColor:Colors.orange,
            textCOlor:Colors.white
        })
        setData(UpcomingData)
    };
// --------------------------------- //
var images=[
  require('../../Images/back.jpg'),
require('../../Images/back1.jpg'),
require('../../Images/back2.jpg'),
require('../../Images/back3.jpg'),
require('../../Images/back4.jpg')
]
    return(

        <View style={{backgroundColor:Colors.white,flex:1}}>
            <Header
             imgBack={true}
             notiBtn={true}
             searchBtn={true}
             headerHeight={300}
            //  name="Home"
             />
             {/* Buttons */}
             <View style={{position:"absolute",alignItems:"center",width:"100%",top:100}}>
             <View style={s.btn_1}>
                 <TouchableOpacity
                  style={[s.btn1,{backgroundColor:btn1Style.backColor}]}
                  onPress={()=>OutgoingBtn()}
                  activeOpacity={0.8}
                  >
                    <Image source={require("../../../assets/icons/white-boat.png")} style={{height:40,width:40,resizeMode:'contain'}} />
                     <Text style={[s.btn1Text,{color:btn1Style.textCOlor}]}>
                         Tour
                     </Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                  style={[s.btn1,{backgroundColor:btn2Style.backColor}]}
                  onPress={()=>UpcomingBtn()}
                  activeOpacity={0.8}
                  >
                    <Image source={require("../../../assets/icons/active-1.png")} style={{height:40,width:40,resizeMode:'contain'}} />
                     <Text style={[s.btn1Text,{color:btn2Style.textCOlor}]}>
                         Fishing
                     </Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                  style={[s.btn1,{backgroundColor:btn2Style.backColor}]}
                  onPress={()=>UpcomingBtn()}
                  activeOpacity={0.8}
                  >
                    <Image source={require("../../../assets/icons/active-1.png")} style={{height:40,width:40,resizeMode:'contain'}} />
                     <Text style={[s.btn1Text,{color:btn2Style.textCOlor}]}>
                         Aniversary
                     </Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                  style={[s.btn1,{backgroundColor:btn2Style.backColor}]}
                  onPress={()=>UpcomingBtn()}
                  activeOpacity={0.8}
                  >
                    <Image source={require("../../../assets/icons/active-1.png")} style={{height:40,width:40,resizeMode:'contain'}} />
                     <Text style={[s.btn1Text,{color:btn2Style.textCOlor}]}>
                         Sporting
                     </Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                  style={[s.btn1,{backgroundColor:btn2Style.backColor}]}
                  onPress={()=>UpcomingBtn()}
                  activeOpacity={0.8}
                  >
                    <Image source={require("../../../assets/icons/active-1.png")} style={{height:40,width:40,resizeMode:'contain'}} />
                     <Text style={[s.btn1Text,{color:btn2Style.textCOlor}]}>
                         Tour
                     </Text>
                     <Text style={[{color:btn2Style.textCOlor,fontSize:10}]}>
                         320 Boats
                     </Text>
                 </TouchableOpacity>
             </View>
             </View>
             {/* View */}
             <View style={s.SEC2}>
               <ScrollView style={{marginTop:30,}}>
               <View
                style={{
                  flexDirection:"row",
                  justifyContent:'space-between',
                  margin:13,
                  width:"95%",
                  alignSelf:'center'
                  }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          textDecorationStyle:'dashed',
                          textDecorationLine:'underline',
                          fontFamily:FontFamily.default,
                          color:Colors.orange
                          }}>
                        Promotion
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text
                        style={{
                          textDecorationStyle:'dashed',
                          textDecorationLine:'underline',
                          fontFamily:FontFamily.default,
                          color:Colors.orange
                          }}>
                        View All
                      </Text>
                    </TouchableOpacity>
               </View>
             <SliderBox
                ImageComponent={FastImage}
                images={images}
                sliderBoxHeight={200}
                onCurrentImagePressed={index =>
                  console.warn(`image ${index} pressed`)
                }
                //currentImageEmitter={index => console.warn(`image ${index} pressed`)}
                dotColor={Colors.orange}
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                paginationBoxStyle={{
                  position: 'absolute',
                  bottom: -30,
                  padding: 0,
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  // borderRadius: 5,
                  marginHorizontal: 0,
                  padding: 0,
                  margin: 0,
                  backgroundColor: 'rgba(128, 128, 128, 0.92)',
                  transform: [{ rotate: "45deg" }]
                }}
                // autoplay
                // circleLoop
                ImageComponentStyle={{borderRadius: 0, width: '95%', marginTop: 5}}
                imageLoadingColor="#2196F3"
              />
              <View
                style={{
                  flexDirection:"row",
                  justifyContent:'space-between',
                  marginTop:20,
                  width:"95%",
                  alignSelf:'center'
                  }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          textDecorationStyle:'dashed',
                          textDecorationLine:'underline',
                          fontFamily:FontFamily.default,
                          color:Colors.orange
                          }}>
                        Popular Destination
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text
                        style={{
                          textDecorationStyle:'dashed',
                          textDecorationLine:'underline',
                          fontFamily:FontFamily.default,
                          color:Colors.orange
                          }}>
                        View All
                      </Text>
                    </TouchableOpacity>
               </View>
            <View>
            <FlatList
            data={Ad}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{
              return(
                <View style={{padding:5}}>
                  <Card containerStyle={{padding:0,borderRadius:15,paddingHorizontal:0,margin:7.5,marginHorizontal:10,elevation:5}}>
                  <ImageBackground
                   style={s.ImageBackground}
                   imageStyle={s.imgStyle}
                   source={{uri:item.img}}
                   >
                     {/* Discount */}
                     <View style={[{
                       justifyContent:'center'
                       },s.trapezoid_discount]}>
                       <Text style={{
                         position:"absolute",
                         fontFamily:FontFamily.semi_bold,
                         fontSize:11,
                         alignSelf:"center",
                         color:Colors.white
                         }}>
                         {item.discount} OFF
                       </Text>
                     </View>
                     {/* Three dots */}
                     <TouchableOpacity style={{position:"absolute",right:10,top:10}}>
                       <Icon name="heart-outlined" type="entypo" color={Colors.white} />
                     </TouchableOpacity>
                     <TouchableOpacity style={{position:"absolute",right:50,top:10}}>
                       <Icon name="share" type="entypo" color={Colors.white} />
                     </TouchableOpacity>
                     {/* Price */}
                     <View
                      style={[{
                       height:40,
                      //  width:97,
                       backgroundColor:Colors.white,
                       flexDirection:"row",
                       alignItems:"center",
                       justifyContent:"space-around",
                       position:"absolute",
                       right:20,
                       bottom:-1,
                       paddingHorizontal:10,
                       borderTopLeftRadius:12,
                       borderTopRightRadius:12
                       }]}
          
                       >
                       <Text style={s.place}>
                          KWD {item.price}
                       </Text>
                     </View>
                  </ImageBackground>
                  {/*  */}
                  <View style={s.SEC3}>
                    <View style={{}}>
                      <Text style={s.title}>
                        {item.name}
                      </Text>
                      <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
                        <Image style={{
                          height:40,
                          width:40,
                          borderRadius:20,
                          resizeMode:"cover",
                          }} 
                          source={{uri:'https://source.unsplash.com/400x400/?face'}}
                          PlaceholderContent={<ActivityIndicator size={30} color={Colors.orange} style={{alignSelf:"center"}} />} 
                          />
                        <View style={{marginLeft:5}}>
                          <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:14,fontFamily:FontFamily.default}}>{item.type}</Text>
                          <AirbnbRating 
                           showRating={false}
                           size={12}
                           isDisabled
                           defaultRating={4}
                           starContainerStyle={{alignSelf:"flex-start"}}
                            />
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:12,fontFamily:FontFamily.default}}>
                        Destination
                      </Text>
                      <View style={{flexDirection:'row',alignItems:"center",alignSelf:'flex-end'}}>
                      <Icon name="person" size={14} />  
                      <Text style={{color:"rgba(51, 51, 51, 1)",fontSize:10,fontFamily:FontFamily.default}}>10 Person</Text>
                      </View>
                    </View>
                  </View>
                  </Card>
              </View>
              )
            }}
            keyExtractor={(i,ind)=>ind}
              style={{
                  // marginTop:30
              }}
              contentInsetAdjustmentBehavior="automatic"
              contentContainerStyle={{ 
                   paddingBottom: 10,
                  //  height:"100%"
                }}
            />
                </View>
                </ScrollView>
             </View>
        </View>
    )
}
const s= StyleSheet.create({
  SEC2:{
      backgroundColor:Colors.white,
      borderTopLeftRadius:30,
      borderTopEndRadius:30,
      marginTop:-40,
    //   marginBottom:40,
      flex:1
  },
  btn1:{
    height:90,
    width:60,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:7,
    elevation:5,
    margin:7
},
  btn1Text:{
    fontSize:10,
    fontFamily:FontFamily.semi_bold,
  },
  btn_1:{
      flexDirection:"row",
      justifyContent:"space-around",
  },
  Card:{
      borderRadius:20,
      elevation:3,
      marginHorizontal:10,
      marginTop:0,
      marginBottom:15
  },
  name:{
      fontFamily:FontFamily.semi_bold,
      fontSize:16,
      marginBottom:3
  },
  type:{
      fontFamily:FontFamily.default,
      fontSize:12,
      marginBottom:3,
    //   opacity:0.5
    color:Colors.gray1
  },
  id:{
      fontFamily:FontFamily.semi_bold,
      fontSize:13,
      marginBottom:3
  },
  price:{
      marginBottom:10,
      fontFamily:FontFamily.semi_bold,
      fontSize:15,
      color:Colors.price,
      textAlign:"right"
  },
  status:{
      color:Colors.orange,
      fontFamily:FontFamily.default,
      fontWeight:"500",
      fontSize:14,
      textAlign:"right"
  },
  ImageBackground:{
    height:215,
    width:"100%",
    borderRadius:15,
    alignSelf:"center",
    // marginHorizontal:10,
    elevation:0
  },
  imgStyle:{
    borderRadius:15,
    height:215,
    width:"100%",
    alignSelf:"center"
  },
  SEC3:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    paddingHorizontal:20,
    alignItems:'center'
  },
  title:{
    fontFamily:FontFamily.semi_bold,
    fontSize:18,
    color:Colors.orange,
    // lineHeight:20
  },
  type:{
    fontFamily:FontFamily.default,
    fontSize:15,
    lineHeight:20,
    color:Colors.black1
  },
  no:{
    fontFamily:FontFamily.default,
    fontSize:12,
    lineHeight:20,
    color:Colors.black1
  },
  dis:{
    fontFamily:FontFamily.default,
    fontSize:13,
    color:Colors.black1
  },
  place:{
    fontFamily:FontFamily.default,
    fontSize:16,
    color:Colors.orange
  },
  trapezoid_discount: {
    width: 115,
    height: 0,
    borderBottomWidth: 25,
    borderBottomColor: Colors.orange,
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightWidth: 25,
    borderRightColor: "transparent",
    borderStyle: "solid",
    backgroundColor:'transparent',
    alignItems:"center",
    transform:[{rotate:"-45deg"}],
    marginTop:19.2,
    marginLeft:-26
  },
})
export default Home;
