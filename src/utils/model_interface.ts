export interface IPost {
  _id: string;
  title: string;
  desc: string;
  image: string;
  username: string;
}

export type IUser = {
  name: string;
  email: string;
  password: string;
};
