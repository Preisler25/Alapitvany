import React from 'react';
import { View, Text } from 'react-native';
import Post from '../components/post/post'
import styles from '../style/style'

function PostPage() {
    return (
        <View style={styles.container}>
            <Text>mainPage</Text>
            <View>{Post({ title: alma })}</View>
        </View>
    );
}

export default PostPage;