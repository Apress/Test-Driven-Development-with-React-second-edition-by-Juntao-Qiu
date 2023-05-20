import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Book } from "./types";
import axios from "axios";

export const useBook = () => {
  const { id } = useParams<string>();
  const [book, setBook] = useState<Book>({ id: 0, name: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await axios.get(`http://localhost:8080/books/${id}`);
        setBook(book.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return {
    book,
    loading,
    error,
  };
};
