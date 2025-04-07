export type Category = {
    id: string;
    name: string;
    description: string | null;
    userId: number;
    isNew?: boolean;
}