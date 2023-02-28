export interface ViewProps extends LoginProps, RegisterProps, AttachmentProps {
    steps: Steps;
}

export interface LoginProps {
    email: string;
    setEmail: SetText;
    password: string;
    setPassword: SetText;
    clickLogin: () => void;
    clickRegister: () => void;
}

export interface RegisterProps {
    dunsNumber: string;
    setDunsNumber: SetText;
    haveAccount: () => void;
    clickAttachment: () => void;
}

export interface AttachmentProps {
    certificate: FileList | null
    setCertificate: (file: FileList | null) => void;
    haveAccount: () => void;
    clickFinalize: () => void;
}

export type Steps = 'login' | 'register' | 'attachment' | 'success'
type SetText = (value: string) => void;