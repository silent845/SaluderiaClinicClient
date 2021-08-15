import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from './components/Styles';
import NavSelector from './navigation/NavSelector';
import Store from './stores/Store';

export default function App() {
  Store.load()


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor={COLORS.ACCENT} />
      <NavSelector />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
