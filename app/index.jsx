import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  Button, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import MainStyles from '../styles/main';
import ImageStyles from '../styles/image';
import Assets from '../assets/Assets';
import ButtonStyles from '../styles/buttons';
import ActionBtn from '../components/buttons/ActionBtn';

export default function App() {
     const router = useRouter();
     return (
          <View style={MainStyles.mainScreen}>
               <Image source={Assets.images.h1Rb} style={ImageStyles.absoluteImage} />
               <View style={MainStyles.homeContentContainer}>
                    <Text style={MainStyles.welcomeText}>Welcome to my Book library.</Text>
                    <StatusBar style="auto" />
                    <ActionBtn title="View My Books" action={() => router.push('/books')} />
               </View>
          </View>
     );
}


