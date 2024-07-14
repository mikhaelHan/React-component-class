import { ISearchResult, ISearchItem } from '../models/Search.model';

const PATH = `https://swapi.dev/api/people/`;

export const APIListRequest = async (
  search: string,
): Promise<ISearchItem[] | null> => {
  const url = `${PATH}${search}`;

  try {
    const result: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!result.ok) return null;

    const response: ISearchResult = await result.json();

    return response.results;
  } catch (error) {
    return null;
  }
};

export const APIItemRequest = async (
  search: string,
): Promise<ISearchItem | null> => {
  const url = `${PATH}${search}`;

  try {
    const response: Response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    return null;
  }
};
