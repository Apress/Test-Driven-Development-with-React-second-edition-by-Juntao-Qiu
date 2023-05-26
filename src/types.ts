export type Review = {
  id: number;
  bookId: number;
  name: string;
  date?: string;
  content: string;
};

export type Book = {
  id: number;
  name: string;
  description?: string;
  reviews?: Review[];
}