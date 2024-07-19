import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/query/react';

export interface IStore {
  getCardsByParam: QueryDefinition<
    string | number,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      unknown,
      FetchBaseQueryMeta
    >,
    never,
    unknown,
    ''
  >;
  getCardDetail: QueryDefinition<
    string | number,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      unknown,
      FetchBaseQueryMeta
    >,
    never,
    unknown,
    ''
  >;
  checkedCards: {
    cards: ICheckedCard[];
    IdCards: string[];
  };
}

export interface ICheckedCard {
  id: string;
  name: string;
  gender: string;
  height: string;
  mass: string;
  eye_color: string;
}
