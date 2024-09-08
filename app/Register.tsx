import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "../globalStyles/styles";
import { Link } from "@react-navigation/native";


const Register = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title} >Registrarse</Text>
      <TextInput
        placeholder="Nombre"
        placeholderTextColor="purple"
        style={Styles.input}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="purple"
        style={Styles.input}
      />
      <TextInput
        placeholder="Telefono"
        placeholderTextColor="purple"
        style={Styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        placeholderTextColor="purple"
        style={Styles.input}
      />
      <TextInput
        placeholder="Confirmación de contraseña"
        secureTextEntry={true}
        placeholderTextColor="purple"
        style={Styles.input}
      />
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          console.log("PRUEBA DE QUE FUNCIONA");
        }}
      >
        <Text style={Styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <View style={Styles.linkContainer}>
        <Text>Ya tienes una cuenta? </Text>
        <Link to="/login" style={Styles.linkText}>
          Iniciar sesion
        </Link>
      </View>
    </View>
  )
}

export default Register