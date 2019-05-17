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

import Box_RewriteOST from '../music_box/box_RewriteOST'

export default class ThirdComponent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Box_RewriteOST
                    name="Exploration"
                    name2='Unknown'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516397981663232/571516528969777159/1-16_Exploration.mp3"
                    onPress={navigation.navigate}
                />
                <Box_RewriteOST
                    name="Eruptible"
                    name2='Unknown'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516397981663232/571516546367750212/1-21_Eruptible.mp3"
                    onPress={navigation.navigate}
                />
                <Box_RewriteOST
                    name="Kappanbyou"
                    name2='Unknown'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516397981663232/571516546539847690/1-18_Kappanbyou.mp3"
                    onPress={navigation.navigate}
                />
                <Box_RewriteOST
                    name="Instrumental"
                    name2='Unknown'
                    name3="1"
                    name4="https://cdn.discordapp.com/attachments/571516397981663232/571516550398345236/3-02_Rewrite_instrumental.mp3"
                    onPress={navigation.navigate}
                />
            </View>
        );
    }
}