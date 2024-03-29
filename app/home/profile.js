import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
const proImg = require('../../src/assets/img/pro.png')
const Profile = () => {
    return (
        <View style={styles.container}>
            {/* Толгой хэсэг: Зураг, дагагч */}
            <View style={styles.proHeader}>
                <Image source={proImg} style={styles.proImg} />
                <View style={styles.follower}>
                    <View style={styles.followerItem}>
                        <Text style={styles.followerText}>10</Text>
                        <Text style={styles.followerText}>Post</Text>
                    </View>
                    <View style={styles.followerItem}>
                        <Text style={styles.followerText}>19</Text>
                        <Text style={styles.followerText}>Post</Text>
                    </View>
                    <View style={styles.followerItem}>
                        <Text style={styles.followerText}>620</Text>
                        <Text style={styles.followerText}>Post</Text>
                    </View>

                </View>
            </View>
            {/* Bio */}
            <View style={styles.bio}>
                <Text style={styles.bioName}>kioe</Text>
                <Text style={styles.bioDesc}></Text>
                <Text style={styles.bioDesc}></Text>
            </View>
            {/* Edit section */}
            <View style={styles.edit}>
                <TouchableOpacity style={styles.editBtn}>
                    <Text style={styles.editText}>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editBtn}>
                    <Text style={styles.editText}>
                        Folow
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    proHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    proImg: {
        width: 107,
        height: 107,
        borderRadius: 107 / 2,
        flex: 1
    },
    follower: {

        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    followerText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    followerItem: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    bio: {
        marginBottom: 8
    },
    bioName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bioDesc: {
        fontSize: 20
    },
    editBtn: {
        borderWidth: 1,
        paddingVertical: 8,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5
    },
    editText: {
        fontSize: 18,
        fontWeight: '400',

    },
    edit: {
        flexDirection: 'row',

    }
})