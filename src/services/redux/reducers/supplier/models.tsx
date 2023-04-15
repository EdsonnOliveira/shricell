export interface IndexProps {
    data: DataSupplier;
}

type DataSupplier = {
    id: string | number;
    name: string;
}