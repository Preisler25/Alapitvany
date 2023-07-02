import React from 'react';
import { View, Text } from 'react-native';
import Post from '../components/post/post'
import styles from '../style/style'

function PostPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>mainPage</Text>
            <View style={styles.center}><View style={styles.line}></View></View>
            <View style={styles.post_cont}>
                {Post({ title: 'alma', text: 'almas' })}
                {Post({ title: 'alma', text: 'almas' })}
            </View>
        </View>
    );
}

export default PostPage;