import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1e1e1e',
        paddingVertical: 20,
        paddingHorizontal: 15,
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
    },
    title: {
        fontSize: 60,
        color: '#eaeaea',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    line: {
        height: 1,
        backgroundColor: '#eaeaea3f',
        width: '90%'
    },
    topic: {
        marginTop: 10,
        fontSize: 16,
        color: '#2ab4ab',
        marginBottom: 15,
    },
    bigTopic: {
        fontSize: 24,
        color: '#2ab4ab',
        marginBottom: 20,
        marginTop: 2,
    },
    articleTitle: {
        color: '#EAEAEA',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '100%',
    },
    fullArticleTitle: {
        color: '#EAEAEA',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '100%',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    description: {
        color: '#EAEAEA',
        fontSize: 20,
        marginBottom: 10,
    },
    moreContainer: {
        paddingVertical: 10,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    moreText: {
        fontSize: 16,
        color: '#2ab4ab',
    },
    articleSeparator: {
        height: 1,
        backgroundColor: '#eaeaea',
        marginVertical: 20,
    },
    center: {
        alignItems: 'center',
        marginBottom: 10,
        width: '100%'
    },
    selectionBox: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#252525',
        color: '#eaeaea',
        border: 'none',
    },
    post_cont: {
        marginTop: '3vh',
        backgroundColor: '#ffffff02',
        width: '80vw',
        height: '40vh',
        display: 'flex',
    },
    bar_top: {
        height: '2vh',
        backgroundColor: 'green'
    },
    text: {
        color: 'white'
    },
    post_title: {
        fontSize: 30,
        color: '#eaeaea',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default styles;
