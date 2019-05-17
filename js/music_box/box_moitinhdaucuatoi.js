import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableHighlight,
    StyleSheet, Image, Alert
} from 'react-native';
import mb from './main_box'
import {MoiTinhDauCuaToi} from '../screenNames'
import {Navigation} from "react-native-navigation";
import Swipeout2 from "react-native-swipeout";
import {insertNewTodoList} from "../databases/allSchemas";
class box_rewriteost extends Component{
    name:'';name2: '';name3:"";name4:"";
    render(): React.ReactNode {
        console.log(this.props.name);
        console.log(this.props.name2);
        console.log(this.props.name3);
        console.log(this.props.name4);
        console.log(this.props.onPress);

        let dataSendToDetail = {
            title_1: this.props.name,
            artist_1: this.props.name2,
            albumArtUrl_1: this.props.name3,
            phim_1: this.props.name4,
        };
        let Them = () => {
            Alert.alert(
                'Thêm',
                'Thêm vào danh sách yêu thích',
                [
                    {
                        text: 'No', onPress: () => { },//Do nothing
                        style: 'cancel'
                    },
                    {
                        text: 'Yes', onPress: () => {
                            const newTodoList = {
                                id: Math.floor(Date.now() / 1000),
                                name: this.props.name,
                                name2: this.props.name2,
                                name3: this.props.name3,
                                name4: this.props.name4,
                            };
                            insertNewTodoList(newTodoList).then().catch((error) => {
                                alert(`Insert new todoList error ${error}`);
                            });
                        }
                    },
                ],
                { cancelable: true }
            );
        };
        return (
            <Swipeout2 right={[
                {
                    text: 'Thêm',
                    backgroundColor: 'rgb(217, 80, 64)',
                    onPress: Them
                }
            ]} autoClose={true}>
            <TouchableHighlight onPress={() => {
                this.props.onPress(MoiTinhDauCuaToi,dataSendToDetail);}}
                                style={styles.button}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={{uri: this.props.name3}}
                    />
                    <View>
                        <Text style={{color:"black",paddingLeft:10 }}>{this.props.name}</Text>
                        <Text style={{color:"black",paddingLeft:10 }}>{this.props.name2}</Text>
                    </View>

                </View>
            </TouchableHighlight>
            </Swipeout2>
        );
    }
}
const styles = StyleSheet.create({
    button:{backgroundColor:"white",width:400,height:50,borderColor:"black",borderWidth:1},

});
export default box_rewriteost;