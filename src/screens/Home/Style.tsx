import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoHomeContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoFormContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
    height: '15%'
  },
  formInput: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    padding: 5
  },
  formText: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25
  }
});

export default styles;