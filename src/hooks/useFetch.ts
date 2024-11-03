import { useEffect, useState } from 'react';

interface UseFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export function useFetch<T>(url: string, options?: UseFetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== 'AbortError') {
            setError(err as Error);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, error, loading };
}
