import { SetBoolean, SetText, SetVoid } from "@types/set";
import { LoginTypes } from "@redux/reducers/login/models";

export interface IndexProps {
    setToken: SetText;
    setData: ({ id, email, name, type }: LoginTypes['data']) => void;
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