export interface IndexProps {
    token: string;
    data: DataLogin;
}

export type LoginTypes = IndexProps;

type DataLogin = {
    id: number;
    name: string;
    email: string;
    type: 'admin' | 'customer'
}