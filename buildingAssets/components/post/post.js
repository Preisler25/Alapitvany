import { View, Text } from 'react-native';
import styles from '../../style/style';

function Post(obj) {
    return (
        <View style={styles.post_cont}>
            <View style={styles.bar_top}></View>
            <View style={styles.topic}>
                <Text>{obj.title}</Text>
            </View>
        </View>
    );
}

export default Post;