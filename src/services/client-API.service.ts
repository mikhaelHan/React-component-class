import { ISearchResult, ISearchItem } from '../models/Search.model';

const PATH = `https://swapi.dev/api/people/`;

const APIrequest = async (search: string): Promise<ISearchItem[] | null> => {
  const url = `${PATH}?search=${search}`;
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

export default APIrequest;
