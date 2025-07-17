import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewcard: {
        flex: 1
    },
    viewimg: {
        flex: 1,
    }
});
