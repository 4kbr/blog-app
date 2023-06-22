export interface IPost {
  _id: string;
  title: string;
  desc: string;
  image: string;
  username: string;
  content: string;
}

export type IUser = {
  _id: string;
  name: string;
  email: string;
  password?: string;
};
