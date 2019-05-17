import React, { Component } from 'react';
import Player from './components/player';
import { updateTodoList, deleteTodoList, queryAllTodoLists } from './databases/allSchemas';
import realm from "./databases/allSchemas";
import {FlatList} from "react-native";


export default class App_music extends Component {
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

        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        let music = this.props.navigation.state.params;
        let data = this.state.todoLists;
        const tracks = [
            {
                title: music.title_1,
                artist: music.artist_1,
                albumArtUrl: music.albumArtUrl_1,
                phim: music.phim_1,
            },
        ];

        return <Player tracks={tracks} />
    }
}
