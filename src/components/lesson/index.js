import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Lesson = () => {
    return (
        <View>

            <Link href="/home/lesson/Movies" asChild>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.menuText}>
                        Киноны жагсаалт
                    </Text>
                </TouchableOpacity>
            </Link>
            <Link href="/home/lesson/TicTac" asChild  >
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.menuText}>
                        Тик так тоглоом
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default Lesson

const styles = StyleSheet.create({
    menuText: {
        fontSize: 32
    },
    menu: {
        backgroundColor: "pink",
        marginBottom: 5,
        padding: 8,
        borderRadius: 20,
        alignItems: 'center'
    }
})