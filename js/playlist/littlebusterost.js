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

import Box_LittleBusterOst from '../music_box/box_littlebusterost'

export default class ThirdComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Box_LittleBusterOst
                    name="Heroic Battle"
                    name2='KEY Sounds Label'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516651175018506/571516919262478347/02_-_KEY_Sounds_Label_-_Heroic_Battle.mp3"
                    onPress={navigation.navigate}
                />
                <Box_LittleBusterOst
                    name="La La La"
                    name2='KEY Sounds Label'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516651175018506/571516965257084953/03_-_KEY_Sounds_Label_-_.mp3"
                    onPress={navigation.navigate}
                />
                <Box_LittleBusterOst
                    name="Faraway instrumental"
                    name2='KEY Sounds Label'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516651175018506/571517177417433098/14_-_KEY_Sounds_Label_-_Faraway_instrumental.mp3"
                    onPress={navigation.navigate}
                />
                <Box_LittleBusterOst
                    name="Shojotachi no Gogo 4 Jihan"
                    name2='KEY Sounds Label'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516651175018506/571517196413698048/14_-_KEY_Sounds_Label_-_Shojotachi_no_Gogo_4_Jihan.mp3"
                    onPress={navigation.navigate}
                />
            </View>
        );
    }
}