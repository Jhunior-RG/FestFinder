import { Text, TextInput } from "react-native";
import LoginGoogle from "./LoginGoogle";

const Login = () => {
    return (
        <>
            <Text >e-mail</Text>
            <TextInput
                className="  border border-black/20 rounded-md px-4 text-neutral-950"
                placeholder="example@example"
            />
            <Text>Password</Text>
            <TextInput
                className=" border border-black/20 rounded-md px-4 text-neutral-950"
                placeholder="your password"
                secureTextEntry={true}
                
            />
            <LoginGoogle />
        </>
    );
};

export default Login;
