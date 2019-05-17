import React, { Component } from 'react';
import Player from './components/player';



export default class App_music extends Component {
    render() {
        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        let music = this.props.navigation.state.params;
        const tracks = [
            {
                title: music.title_1,
                artist: music.artist_1,
                albumArtUrl: music.albumArtUrl_1,
                phim: music.phim_1,
            },
            {
                title: 'Instrumental',
                artist: 'Unknown',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516397981663232/571516550398345236/3-02_Rewrite_instrumental.mp3",
            },
            {
                title: 'Eruptible',
                artist: 'Unknown',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516397981663232/571516546367750212/1-21_Eruptible.mp3",
            },
            {
                title: 'Kappanbyou',
                artist: 'Unknown',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516397981663232/571516546539847690/1-18_Kappanbyou.mp3",
            },
            {
                title: 'Exploration',
                artist: 'Unknown',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516397981663232/571516528969777159/1-16_Exploration.mp3",
            },
        ];
        return <Player tracks={tracks} />
    }
}
