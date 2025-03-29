export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  userId: string;
  categoryId: string | null;
  tags: string | null;
  comment: string | null;
  isNew?: boolean;
};
