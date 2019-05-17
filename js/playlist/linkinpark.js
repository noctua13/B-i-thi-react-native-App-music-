import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Text, View,
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

import Box_LinkinPark from '../music_box/box_linkinpark'

export default class ThirdComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Box_LinkinPark
                    name="Numb"
                    name2='Linkin Park'
                    name3="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176"
                    name4="https://cdn.discordapp.com/attachments/562646459762212893/562647377106698260/Numb_Official_Video_-_Linkin_Park.mp3"
                    onPress={navigation.navigate}
                />
                <Box_LinkinPark
                    name="What I've Done"
                    name2='Linkin Park'
                    name3="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176"
                    name4="https://cdn.discordapp.com/attachments/562646459762212893/562647423588237334/What_Ive_Done_Official_Video_-_Linkin_Park.mp3"
                    onPress={navigation.navigate}
                />
                <Box_LinkinPark
                    name="In The End"
                    name2='Linkin Park'
                    name3="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176"
                    name4="https://cdn.discordapp.com/attachments/562646459762212893/562647386178977810/In_The_End_Official_Video_-_Linkin_Park.mp3"
                    onPress={navigation.navigate}
                />
                <Box_LinkinPark
                    name="Leave Out All The Rest"
                    name2='Linkin Park'
                    name3="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/54729769_337764823611762_1222420195784523776_n.jpg?_nc_cat=110&_nc_oc=AQnVFvumJdgAVFWfrDzx0dL-SIZfqOdasJ1HBHrBFQ-lxn7D9hf7kRaonPKWeBb6mIBPelOIcwSgJV2BX0N-twom&_nc_ht=scontent.fsgn2-3.fna&oh=2e3bfef1be1476e553b00ff00f35bf4e&oe=5D04E176"
                    name4="https://cdn.discordapp.com/attachments/562646459762212893/562647411923877918/Leave_Out_All_The_Rest_Official_Video_-_Linkin_Park.mp3"
                    onPress={navigation.navigate}
                />
            </View>
        );
    }
}