import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Twitter Términos de servicio</Text>
        <Text style={styles.text}>Estos Términos de servicio (los “Términos”) rigen su acceso y uso de nuestros servicios, incluyendo nuestras distintas páginas web, SMS, API, notificaciones de correo electrónico, aplicaciones, botones widgets, anuncios, servicios de comercio y nuestros demás servicios (https://help.twitter.com/es/rules-and-policies/twitter-services-and-corporate-affiliates) vinculados a estos Términos (denominados de forma colectiva los “Servicios”), y cualquier información, texto, enlace, gráfico, foto, audio, vídeo o material o disposición de material cargados o que aparezcan en los Servicios (denominados de forma colectiva el “Contenido”). Al hacer uso de estos Servicios, usted accede a vincularse a estos Términos.</Text>
        <Text style={styles.subtitle}>1. Quién puede hacer uso de los Servicios</Text>
        <Text style={styles.text}>
          Puede hacer uso de los Servicios solo si accede a firmar un contrato vinculante con Twitter y no es usted una persona vetada para hacer uso de los servicios de conformidad con la legislación de su jurisdicción aplicable. En cualquier caso, usted deberá tener al menos 13 años, o 16 años en el caso de Periscope, para hacer uso de los Servicios. Si acepta estos Términos y usa los Servicios en nombre de una empresa, organización, gobierno u otra entidad jurídica, afirma y garantiza que está autorizado a hacerlo y cuenta con los poderes necesarios para obligarla al cumplimiento de estos Términos, en cuyo caso el uso de las palabras "usted", "su" y "sus" en estos Términos hará referencia a dicha entidad jurídica.
        </Text>
        <Text style={styles.subtitle}>2. Privacidad</Text>
        <Text style={styles.text}>
        Nuestra Política de privacidad (https://www.twitter.com/es/privacy) describe cómo manejamos la información que nos proporciona al hacer uso de nuestros Servicios. Comprende que mediante el uso que usted hace de nuestros Servicios, usted consiente a la recopilación y uso (tal y como se recoge en la Política de privacidad) de esta información, incluida su transferencia a los Estados Unidos, Irlanda y/o a otros países para su almacenamiento, procesamiento y uso por parte de Twitter y sus filiales.
        </Text>
        <Text style={styles.subtitle}>3. Contenido de los Servicios</Text>
        <Text style={styles.text}>
        Usted es responsable de su uso de los Servicios y de cualquier Contenido que proporcione, incluyendo el cumplimiento con las leyes, reglas y normas aplicables. Solo debe proporcionarnos contenido que desee compartir con otros.

          Cualquier confianza que deposite en cualquier Contenido o material publicado por medio de los Servicios u obtenido mediante los mismos, o cualquier uso que haga de ellos, lo hace por su propia cuenta y riesgo. No ratificamos, apoyamos, reafirmamos ni garantizamos la compleción, veracidad, precisión o fiabilidad de ningún Contenido o comunicación publicada por medio de los Servicios, ni ratificamos ninguna opinión expresada por medio de los Servicios. Comprende que al hacer uso de los Servicios, puede exponerse a Contenido que puede resultar ofensivo, dañino, inexacto o inapropiado de cualquier otra forma, o en algunos casos, a publicaciones que puedan haber sido interpretadas erróneamente o que puedan ser engañosas de cualquier otra forma. Todo el Contenido es responsabilidad única de la persona que lo produce. No monitorizamos ni controlamos el Contenido publicado por medio de los Servicios, y no podemos hacernos responsables de dicho Contenido.

          Nos reservamos el derecho a retirar Contenido que incumpla el Acuerdo de usuario, como por ejemplo, violaciones de derechos de autor o de marcas comerciales o cualesquiera otros usos indebidos de propiedad intelectual, suplantación de identidad, conducta ilícita o acoso. Encontrará a información relativa a políticas específicas y al proceso para notificar o impugnar incumplimientos en nuestro Centro de ayuda (https://support.twitter.com/ articles/15789#specific-violations y https://support.twitter.com/articles/15790).
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    marginTop:90,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#14171A',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 14,
    color: '#1DA1F2',
  },
  text: {
    fontSize: 14.8,
    lineHeight: 23,
    color: '#14171A',
  }
});
