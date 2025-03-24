import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import { ThemeContext} from './context/ThemeContext';
import { Colors} from './styles/Colors';

export default function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SafeAreaView style={[
        styles.container, 
        { backgroundColor: Colors[theme].background }
      ]}>
       <StatusBar 
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'} 
          backgroundColor={Colors[theme].headerBackground}
        />
        <View style={styles.content}>
          <Calculator />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
  }
});