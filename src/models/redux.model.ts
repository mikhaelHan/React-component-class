export interface IRootStore {
  checkedCards: { cards: ICheckedCard[] };
}

export interface ICheckedCard {
  id: string;
  name: string;
  gender: string;
  height: string;
  mass: string;
  eye_color: string;
}
