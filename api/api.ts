const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

type Props = {
  params?: Record<string, string | number>;
  path?: string;
};

export const api = async <T>({ path, params }: Props): Promise<T> => {
  try {
    if (!API_URL || !API_KEY)
      throw new Error("API credentials are not defined");

    const query = new URLSearchParams(params as Record<string, string>);
    const url = `${API_URL}/${path}${query && `?${query.toString()}`}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    });
    const data = await response.json();
    return data as T;
  } catch {
    throw Error("Failed to fetch dogs");
  }
};
