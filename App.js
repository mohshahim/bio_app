import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { MaterialIcons, FontAwesome5 , Entypo} from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>My Bio</Text>

      {/* Profile Image */}
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGV4ZKEDJHKvQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685683931120?e=1739404800&v=beta&t=KZVW78FeOvuxn4ilRMz7P-6VknAtu3-7rvSkVoYzkZw', 
        }}
      />

      {/* Bio Information */}
      <View style={styles.infoContainer}>
        {/* Name */}
        <View style={styles.infoRow}>
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={styles.infoText}>Name : Muhammed Shahim Vakkattil</Text>
        </View>

        {/* Contact */}
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={styles.infoText}>email : shaashahim@gmail.com</Text>
        </View>

          {/* Phone Number */}
          <View style={styles.infoRow}>
            <Entypo name="phone" size={24} color="black" />
            <Text style={styles.infoText}>Phone: +1 234 567 890</Text>
          </View>

        {/* Interests */}
        <View style={styles.infoRow}>
          <FontAwesome5 name="heart" size={24} color="red" />
          <Text style={styles.infoText}>Interests : Mobile Development, Gaming</Text>
        </View>

        {/* Skills */}
        <View style={styles.infoRow}>
          <MaterialIcons name="code" size={24} color="black" />
          <Text style={styles.infoText}>Skills : React Native, JavaScript, Node.js</Text>
        </View>
      </View>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
