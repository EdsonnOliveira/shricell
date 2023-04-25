export interface IndexProps {
    data: Data;
}

export type CustomersTypes = IndexProps;

type Data = {
    id: string | number;
    name: string;
}