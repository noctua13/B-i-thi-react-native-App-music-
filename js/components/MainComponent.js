/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MainComponent
*/
import React, { Component } from 'react';
import {man_hinh_chinh,search} from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View,Image
} from 'react-native';


export default class MainComponent extends Component {
    render() {           
        const { navigation } = this.props; 
        let dataSendToDetail = {
            name: "Star Wars",
            releaseYear: 1977
        };    
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                    <Image source={require('../hinh/images.png')}/>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#ff6d1c',justifyContent:'center' }}>
                        Music For Fun
                    </Text>




                <View style={{paddingTop:300, paddingLeft:200}}>

                        <Button
                            containerStyle={{ padding:10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'white' }}
                            style={{ fontSize: 18, color: '#000000' }}
                            onPress={() => {
                                navigation.navigate(man_hinh_chinh);
                            }}>
                            Bắt đầu nghe nhạc >>
                        </Button>


                </View>

            </View>
        );
    }
}