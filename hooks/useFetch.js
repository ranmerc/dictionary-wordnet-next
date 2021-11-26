import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error);
  }
  return res.json();
};

export default function useFetch(url) {
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  };
}
