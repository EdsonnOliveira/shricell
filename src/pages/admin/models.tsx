import { SetBoolean, SetText, SetVoid } from "@typing/set";
import { LoginTypes } from "@redux/reducers/login/models";

export interface IndexProps {
    setToken: SetText;
    setDataLogin: ({ id, email, name, type }: LoginTypes['data']) => void;
}

export interface ViewProps {
    email: string;
    setEmail: SetText;
    password: string;
    setPassword: SetText;
    clickLogin: SetVoid;
    modalError: boolean;
    setModalError: SetBoolean;
}

export default function Return() {
    return <></>
}