import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable
} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { RootStackParamList } from '../AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'NavBarScreen'>;

const NavBarScreen: React.FC<Props> = ({ navigation }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    'Showcase',
    'Docs',
    'Blog',
    'Analytics',
    'Commerce',
    'Templates',
    'Enterprise',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AEON</Text>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
            <Icon name="search" size={20} color="#000" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
            <Text style={styles.hamburgerIcon}>{menuOpen ? '✕' : '☰'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showSearch && (
        <View style={styles.dropdown}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>
      )}
      {menuOpen && (
        <View style={styles.dropdownMenu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Pressable onPress={() => navigation.pop()} style={styles.backButton} >
        <Text style={styles.buttonText}>Go To Home Page</Text>
      </Pressable>
    </View>
  );
};

export default NavBarScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    paddingHorizontal: 10,
  },
  hamburgerIcon: {
    fontSize: 24,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  dropdown: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 20,
    marginTop:20
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16
  }
});