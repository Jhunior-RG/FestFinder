import { Text, TextInput } from "react-native";
import LoginGoogle from "./LoginGoogle";

const Login = () => {
    return (
        <>
            <Text >e-mail</Text>
            <TextInput
                
                placeholder="example@example"
            />
            <Text>Password</Text>
            <TextInput
                placeholder="your password"
                secureTextEntry={true}
                
            />
            <LoginGoogle />
        </>
    );
};

export default Login;
