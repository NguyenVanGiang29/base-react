export type Item = {
  createdAt: string;
  updatedAt: string;
  id: string;
  title: string;
  status: string;
  author: {
    id: string;
    username: string;
  };
  categories: Category[];
  completeAt: string | null;
};

export type Category = {
  id: string;
  name: string;
};
