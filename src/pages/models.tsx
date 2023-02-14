export interface ViewProps extends LoginProps, RegisterProps {
    steps: Steps;
    title: string;
}

export interface LoginProps {
    email: string;
    setEmail: SetText;
    password: string;
    setPassword: SetText;
    clickRegister: () => void;
}

export interface RegisterProps {
    dunsNumber: string;
    setDunsNumber: SetText;
    haveAccount: () => void;
}

export type Steps = 'login' | 'register' | 'attachment' | 'success'
type SetText = (value: string) => void;