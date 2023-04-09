import { TR } from "@atomic/constants/table";
import { ItemStep } from "@atomic/constants/steps";

export interface ViewProps {
    items: TR[];
    steps: ItemStep[]
}