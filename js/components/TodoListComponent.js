import React, { Component } from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, Image, TouchableHighlight} from 'react-native';
import { updateTodoList, deleteTodoList, queryAllTodoLists } from '../databases/allSchemas';
import realm from '../databases/allSchemas';
import Swipeout from 'react-native-swipeout';
import PopupDialogComponent from './PopupDialogComponent';
import {App_favorite} from "../screenNames";
let FlatListItem = props => {
    const { navigation } = props;
    const { itemIndex, id, name, name2, name3, name4, popupDialogComponent, onPressItem } = props;

    showDeleteConfirmation = () => {
        Alert.alert(
            'Delete',
            'Delete a todoList',
            [
                {
                    text: 'No', onPress: () => { },//Do nothing
                    style: 'cancel'
                },
                {
                    text: 'Yes', onPress: () => {
                        deleteTodoList(id).then().catch(error => {
                            alert(`Failed to delete todoList with id = ${id}, error=${error}`);
                        });
                    }
                },
            ],
            { cancelable: true }
        );
    };
    return (
        <Swipeout right={[
            {
                text: 'Delete',
                backgroundColor: 'rgb(217, 80, 64)',
                onPress: showDeleteConfirmation
            }
        ]} autoClose={true}>
            <TouchableHighlight onPress={onPressItem} style={styles.button}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={{uri: name3}}
                    />
                    <View>
                        <Text style={{color:"black",paddingLeft:10 }}>{name}</Text>
                        <Text style={{color:"black",paddingLeft:10 }}>{name2}</Text>
                    </View>

                </View>
            </TouchableHighlight>
        </Swipeout >
    );
}

export default class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: []
        };
        this.reloadData();
        realm.addListener('change', () => {
            this.reloadData();
        });
    }
    reloadData = () => {
        queryAllTodoLists().then((todoLists) => {
            this.setState({ todoLists });
        }).catch((error) => {
            this.setState({ todoLists: [] });
        });
        console.log(`reloadData`);
    }
    render() {
        const {navigation}= this.props;
        return (<View style={styles.container}>
            <View style={styles.tieude2}>
                <Text style={styles.tieude1}>FAVORITES LIST</Text>
            </View>
            <FlatList
                style={styles.flatList}
                data={this.state.todoLists}
                renderItem={({ item, index }) =>
                    <FlatListItem {...item} itemIndex={index} name={item.name} name2={item.name2} name3={item.name3}
                                  name4={item.name4} creationDate={item.creationDate} id={item.id}
                                  onPressItem={() => {
                                      let dataSendToDetail = {
                                          title_1: item.name,
                                          artist_1: item.name2,
                                          albumArtUrl_1: item.name3,
                                          phim_1: item.name4,
                                      };
                                      navigation.navigate(App_favorite,dataSendToDetail)
                                  }}
                                  popupDialogComponent={this.refs.popupDialogComponent }
                    />}
                keyExtractor={item => item.id}
            />
            <PopupDialogComponent ref={"popupDialogComponent"} />
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    flatList: {
        flex: 1,
        flexDirection: 'column',
    },
    tieude1:{
        color:'#ffffff',
        fontSize:20,
        padding: 15,
        textAlign: 'center',
    },
    tieude2:{
        backgroundColor:'#ff6f40',
        height:50,
        width:410
    },
});
