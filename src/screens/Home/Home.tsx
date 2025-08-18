import React,{useState} from "react";
import {Text, View, TextInput} from "react-native";
import styles from './Style'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {

  const [isActive, setisActive] = useState(false);
  const [isFormActive, setisFormActive] = useState(false);
  
  function goToHomePage(){
    setisActive((oldValue: boolean) => {return !oldValue})
    if (isFormActive) {setisFormActive((oldValue: boolean) => {return !oldValue})}
  }

  function gotoForm(){
    if (isActive) {setisActive((oldValue: boolean) => {return !oldValue})} 
    else {setisFormActive((oldValue: boolean) => {return !oldValue})}
  }

  return (
  <>
    <View style={{...styles.homeContainer, display: isFormActive ? "none" : "flex"}}>
      <View style={styles.logoHomeContainer}>
        <BatLogo isActive={isActive} isFormActive={isFormActive}/>
      </View>
      <View style={{flex:1}}>
        <BatButton onPress={gotoForm} isActive={isActive} isFormActive={isFormActive} />
      </View>
    </View>
    <View style={{...styles.formContainer, display: isFormActive ? "flex" : "none"}}>
      <View style={styles.logoFormContainer}>
        <BatLogo isActive={isActive} isFormActive={isFormActive}/>
      </View>      
      <View style={styles.formContainer}>
        <Text style={styles.formText}>Nome</Text>
          <TextInput style={styles.formInput}/>
          <Text style={styles.formText}>Telefone para contato</Text>
          <TextInput keyboardType='phone-pad' style={styles.formInput}/>
          <Text style={styles.formText}>Localização atual</Text>
          <TextInput numberOfLines={2} scrollEnabled={true} multiline={true} style={styles.formInput}/>
          <Text style={styles.formText}>Observação</Text>
          <TextInput numberOfLines={5} scrollEnabled={true} multiline={true} style={styles.formInput}/>
          <BatButton onPress={goToHomePage} isActive={isActive} isFormActive={isFormActive}/>     
      </View>
    </View>
  </>
  );
}