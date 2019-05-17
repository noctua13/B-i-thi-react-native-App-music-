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
                title: 'Shojotachi no Gogo 4 Jihan',
                artist: 'KEY Sounds Label',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516651175018506/571517196413698048/14_-_KEY_Sounds_Label_-_Shojotachi_no_Gogo_4_Jihan.mp3",
            },
            {
                title: 'La La La',
                artist: 'KEY Sounds Label',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516651175018506/571516965257084953/03_-_KEY_Sounds_Label_-_.mp3",
            },
            {
                title: 'Faraway instrumental',
                artist: 'KEY Sounds Label',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516651175018506/571517177417433098/14_-_KEY_Sounds_Label_-_Faraway_instrumental.mp3",
            },
            {
                title: 'Heroic Battle',
                artist: 'KEY Sounds Label',
                albumArtUrl: "1",
                phim: "https://cdn.discordapp.com/attachments/571516651175018506/571516919262478347/02_-_KEY_Sounds_Label_-_Heroic_Battle.mp3",
            },
        ];
        return <Player tracks={tracks} />
    }
}
