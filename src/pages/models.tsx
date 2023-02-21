export interface ViewProps extends LoginProps, RegisterProps, AttachmentProps {
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
    clickAttachment: () => void;
}

export interface AttachmentProps {
    haveAccount: () => void;
    clickFinalize: () => void;
}

export type Steps = 'login' | 'register' | 'attachment' | 'success'
type SetText = (value: string) => void;