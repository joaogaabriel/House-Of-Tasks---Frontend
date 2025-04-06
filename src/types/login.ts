export interface ILogin {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
