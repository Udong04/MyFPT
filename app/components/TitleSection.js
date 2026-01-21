import { StyleSheet, Text, View } from 'react-native';

function TitleSection(props){
    return (
        <View style={styles.wrap}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

export default TitleSection;


const styles = StyleSheet.create({
  wrap: {
    padding: 2,
    backgroundColor: '#EFEDF0',
    
  },
  text: {
    color: '#C7C4C9',
    textTransform: 'uppercase'
  }
});


