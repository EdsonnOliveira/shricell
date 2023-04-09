import { SetBoolean, SetText, SetVoid } from "@types/set";

export interface ViewProps {
    email: string;
    setEmail: SetText;
    password: string;
    setPassword: SetText;
    clickLogin: SetVoid;
    modalError: boolean;
    setModalError: SetBoolean;
}