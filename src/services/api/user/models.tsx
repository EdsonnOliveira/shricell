export type IndexType = {
    email: string;
    password: string;
}

export interface LoginProps {
    accessToken: string;
    token_type: string;
    expiresIn: number;
    user: {
        id: number;
        name: string;
        email: string;
        emailVerifiedAt: string;
        createdAt: string;
        updatedAt: string;
    }
}