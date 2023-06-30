import { View, Text } from 'react-native';
import styles from '../../style/style';

function Post(obj) {
    return (
        <View style={styles.post_cont}>
            <View style={styles.bar_top}></View>
            <View style={styles.title_cont}>
                <Text style={styles.post_title}>{obj.title}</Text>
            </View>
            <View style={styles.center}><View style={styles.line}></View></View>
            <View style={styles.text_cont}>
                <Text style={styles.text}>{obj.text}</Text>
            </View>

        </View>
    );
}

export default Post;