import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Themes } from '../../assets/Themes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Body = () => {
    return (
        <View style={styles.body}>
            <View style={styles.profilePicBox}>
                <Image style={styles.profilePic} source={require('../../assets/Profiles/mtl.jpg')}></Image>
                <Text style={styles.cardName}>MTL</Text>
                <Text style={styles.profileDistance}>2 miles away</Text>
            </View>
            <View style={styles.audioBox}>
                <View style={styles.audioTextBox}>
                    <Text style={styles.audioText}>My hottest take</Text>
                </View>

                <View style={styles.audioImagesBox}>

                    <Image style={styles.playButton} source={require('../../assets/Icons/player_light.png')}></Image>

                    <Image style={styles.waveForm} source={require('../../assets/Icons/audio_waveform_light.png')}></Image>

                </View>
            </View>
        </View>
    );
}

export default Body;

const styles = StyleSheet.create({
    body: {
        flex: 5,
    },
    profilePicBox: {
        flex: 2,
        padding: windowWidth * 0.02,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
    },
    profilePic: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 10,
    },
    cardName: {
        fontFamily: 'Sydney',
        color: Themes.light.textSecondary,
        fontSize: windowHeight * .04,
        top: '7%',
        left: '7%',
        position: 'absolute'
    },
    profileDistance: {
        color: Themes.light.textSecondary,
        fontFamily: 'Sydney',
        fontSize: windowHeight * .02,
        position: 'absolute',
        left: '7%',
        bottom: '7%'
    },
    audioBox: {
        flex: 1,
        backgroundColor: Themes.light.bgSecondary,
        borderRadius: 30,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOffset: Themes.light.shadows.shadowOffset,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
    },
    audioText: {
        fontFamily: 'Sydney',
        fontSize: windowWidth * 0.06,
    },
    audioTextBox: {
        marginLeft: 40,
        marginTop: 20
    },
    audioImagesBox: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        width: '100%'
    },
    playButton: {
        flex: 1,
        height: '100%',
        marginLeft: 15,
        marginRight: 5,
        resizeMode: 'contain',
    },
    waveForm: {
        flex: 4,
        height: '100%',
        marginRight: 12,
        resizeMode: 'contain',

    },
})