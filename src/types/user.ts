export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  tasks: string | null;
  tags: string | null;
  Category: string | null;
};

export type LoginUser = {
  id: string;
  name: string;
  email: string;
};
