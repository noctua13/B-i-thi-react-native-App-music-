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

import Search from './search';
import {linkinpark, rewriteost, littlebusterost, dungnguoisaithoidiem,moitinhdaucuatoi,noo} from "../screenNames";
import Box from '../music_box/box'
import {App_music} from '../screenNames'
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mail';
const KEYS_TO_FILTERS = ['user.name'];
export default class Scroll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render(): React.ReactNode {
        const { navigation } = this.props;
        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <View style={styles.container}>
                <View style={styles.tieude3}>
                    <Text style={styles.tieude1}>MUSIC</Text>
                </View>
                <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Type a name of music to search"
                />
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                            <View>
                                <Box
                                    name={email.user.name}
                                    name2={email.subject.name2}
                                    name3={email.subject.name3}
                                    name4={email.subject.name4}
                                    onPress={navigation.navigate}
                                />
                            </View>

                        );
                    })}
                </ScrollView>

            </View>

        );
    }
}
const styles =StyleSheet.create({
    tieude1:{
        color:'#ffffff',
        fontSize:20,
        padding: 15,
        textAlign: 'center',
    },
    tieude3:{
        backgroundColor:'#33BDFF',
        height:50

    },
    tieude2:{
        backgroundColor:'#ff6f40',
        height:50,
        width:410
    },
    playlist:{
        borderWidth:4,
        borderColor:'white'
    }
});