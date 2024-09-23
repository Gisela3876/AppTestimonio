import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Testimonio from './Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          style={styles.headerImage} 
          source={require('./imagenes/FreeCodeCamp_logo.png')} 
        />
      </View>

      <Text style={styles.title}>
        Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:
      </Text>

      <ScrollView style={styles.scrollContainer}>
        <Testimonio
          nombre="Toño"
          ubicacion="Nicaragua"
          posicion="Ingeniera en sistemas"
          empresa="CUR Chontales"
          cita="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
          imagen={require('./imagenes/Fotokennyantonio.jpg')}
        />

        <Testimonio
          nombre="Gisela Lamala"
          ubicacion="Juigalpa"
          posicion="Ingeniera en sistemas"
          empresa="CUR Chontales"
          cita="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro."
          imagen={require('./imagenes/Fotogiselapaola.jpg')}
        />

        <Testimonio
          nombre="Brayan"
          ubicacion="Santo Tomas"
          posicion="Ingeniera en sistemas"
          empresa="CUR Chontales"
          cita="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro."
          imagen={require('./imagenes/Fotobrayan.jpg')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: "#0A0A22",
  },
  headerImage: {
    width: '100%',
    height: 100,
    aspectRatio: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
