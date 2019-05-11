import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import * as firebase from 'firebase'; 
import { Container, Form, Item, Label, Input } from 'native-base';

const firebaseConfig = {
  apiKey: "AIzaSyCSoAL0AitSJ-xNSVV_tDeQLBV7kJbNWWM",
  authDomain: "projet-demo-86a69.firebaseapp.com",
  databaseURL: "https://projet-demo-86a69.firebaseio.com",
  projectId: "projet-demo-86a69",
  storageBucket: "projet-demo-86a69.appspot.com",
  messagingSenderId: "270011034874",
  appId: "1:270011034874:web:1c7bae41d25a535a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = ({
            email:'',
            password:'',

        })
    }
    signUpUser = (email, password) =>{
       try { if (password.length < 6){
            alert('please enter at least 6 characters');
            return;

       }
       firebase.auth().createUserWithEmailAndPassword(email, password)

       }
       catch(error){console.log(error.toString());
       }
    }
    loginUser = (email, password) =>{
        try{
            firebase.auth().signInWithEmailAndPassword(email, password);
        }
        catch(error){console.log(error.toString());
    }

    render(){
        return(
            // <Container style={{
            //     flex: 1,
            //     justifyContent: 'center',
            //     backgroundColor: '#fff',
            //     padding: 10,
            //   }}>
            //     <Form >
            //         <Item floatingLabel >
            //             <Label> Email</Label>
            //             <Input
            //             onChangeText={(email) => this.setState.email({email})}
            //             autoCorrect={false}
            //             autoCapitalize="none"></Input>
            //         </Item>
            //         <Item floatingLabel >
            //             <Label> Password</Label>
            //             <Input
            //             onChangeText={(password) => this.setState.password({password})}
            //             secureTextEntry={true}
            //             autoCorrect={false}
            //             autoCapitalize="none"></Input>
            //         </Item>
            //         <Button style={{marginTop:10 }}
            //         title="Log in"
            //         rounded
            //         full
            //         success
            //         onPress={() => this.loginUser(this.state.email, this.state.password)}/>
                    
            //         <Button style={{marginTop:10 }}
            //         title="Sign Up"
            //         rounded
            //         full
            //         primary
            //         onPress={() => this.signUpUser(this.state.password,this.state.email)}/>
                    
            //     </Form>
            //     </Container>
                <View style={{margin: 30 }}>
                <Text>Email</Text>
                <TextInput
                        underlineColorAndroid='transparent'
                        placeholder=' '
                        onChangeText={(email) => this.setState({email})}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                <Text>Password</Text>
                <TextInput
                        underlineColorAndroid='transparent'
                        placeholder=' '
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.password}
                    />
                <Button style={{marginTop:10 }}
                    title="Log in"
                    rounded
                    full
                    success
                    onPress={() => this.loginUser(this.state.email, this.state.password)}/>
                <Button  style={{marginTop:10 }}
                    title="Sign Up"
                    rounded
                    full
                    primary
                    onPress={() => this.signUpUser(this.state.email,this.state.password)} />
                    </View>
            
        )
    }
}