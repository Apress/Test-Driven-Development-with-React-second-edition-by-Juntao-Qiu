import {useEffect, useState} from "react";
import {Book} from "./types";
import axios from "axios";

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [])

  return {
    loading,
    error,
    books
  }
}

export default useBooks;