import {
    createContext,
    useContext,
    useEffect,
    type PropsWithChildren,
} from "react";
import { useStorageState } from "./useStorageState";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";

const AuthContext = createContext<{
    signIn: (arg1: any) => void;
    signOut: () => void;
    session?: any | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV === "production") {
        if (!value) {
            throw new Error(
                "useSession must be wrapped in a <SessinoProvider/>"
            );
        }
    }
    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState("session");

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                "241797999690-5d7gqo37970apjob9en4so1stfgkqhjm.apps.googleusercontent.com",
        });
    }, []);
    return (
        <AuthContext.Provider
            value={{
                signIn: (sessionData: JSON) => {
                    // Perform sign-in logic here
                    router.replace("/inicio");
                    setSession(sessionData);
                },
                signOut: async () => {
                    router.replace("/");
                    setSession(null);
                    try {
                        await GoogleSignin.revokeAccess();
                        await GoogleSignin.signOut();
                    } catch (err) {
                        console.error(err);
                    }
                },
                session,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
