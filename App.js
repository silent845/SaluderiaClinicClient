import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from './components/Styles';
import NavSelector from './navigation/NavSelector';
import Store from './stores/Store';

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Store.prepare();
      } catch (error) {
        console.warn(error)
      } finally {
        setReady(true);
      }
    }
    prepare();
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor={COLORS.ACCENT} animated={true} translucent={false} />
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
