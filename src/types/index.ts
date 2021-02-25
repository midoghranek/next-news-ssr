export interface PostType {
  _id: string;
  source: {
    title: string;
    url: string;
  };
  title: string;
  created_at: string;
  keywords: {
    name: string;
    _id: string;
  }[];
}
