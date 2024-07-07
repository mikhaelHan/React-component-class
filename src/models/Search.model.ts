export interface ISearchItem {
  birth_year?: string;
  created?: string;
  edited?: string;
  eye_color: string;
  films?: string[];
  gender: string;
  hair_color?: string;
  height: string;
  homeworld?: string;
  mass: string;
  name: string;
  skin_color?: string;
  species?: unknown[];
  starships?: unknown[];
  url?: string;
  vehicles?: unknown[];
}

export interface ISearchResult {
  count: number;
  next: unknown;
  previous: unknown;
  results: ISearchItem[];
}
