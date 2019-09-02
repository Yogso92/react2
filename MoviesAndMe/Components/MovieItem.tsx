import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

import {getImageFromApi} from '../API/TMDBapi'

class MovieItem extends React.Component {
    film : any;
    render () {
        const film = this.props.film
        return (
            <View style= {styles.main_container}>
                <Image style= {styles.img_style} 
                source = {{uri : getImageFromApi(film.poster_path)}} />
                <View style ={styles.text_container}>
                    <View style = {styles.title_rating_container}>
                        <Text style = {styles.title_text} numberOfLines={2}>{film.original_title} </Text>
                        <Text style = {styles.rating_text}>{film.vote_average}</Text>
                    </View>
                    <Text style= {styles.description} numberOfLines ={6}>{film.overview}</Text>    
                    <Text style= {styles.released}>Sorti le {film.release_date}</Text> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        main_container: {
            marginTop: 5,
            flex: 0.3,
            flexDirection: 'row',
            backgroundColor: "#dddddd",
            alignItems: "stretch"
        
        },
        title_text: {
            fontWeight: "bold",
            fontSize: 24,
            flex: 3,
            flexWrap: "wrap"
        },
        rating_text: {
            fontWeight: "bold",
            fontSize: 24,
            flex: 1,
            textAlign : "right"
            
        },
        img_style: {
            aspectRatio: 0.6,
            flex: 1
        }, 
        text_container: {
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: 5,
            flex: 2,
            justifyContent: "space-between"
        },
        title_rating_container: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        description: {
            fontStyle: "italic",
            fontSize: 12,
            flex: 7
        },
        released: {
            fontSize: 13,
            textAlign:'right'
        }
    }
)

export default MovieItem