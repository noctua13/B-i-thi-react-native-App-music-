import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mail';
const KEYS_TO_FILTERS = ['user.name'];
import Box from '../music_box/box'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render() {
        const { navigation } = this.props;
        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <View style={styles.container}>
                <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Type a message to search"
                />
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                            /*<TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                                <View>
                                    <Text>{email.user.name}</Text>
                                    <Text style={styles.emailSubject}>{email.subject}</Text>
                                </View>
                            </TouchableOpacity>*/
                            <Box
                                name={email.user.name}
                                name2={email.subject.name2}
                                name3={email.subject.name3}
                                name4={email.subject.name4}
                                onPress={navigation.navigate}
                            />
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
    }
});