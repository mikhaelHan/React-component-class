export type CheckedCard = {
  id: string;
  name: string;
  gender: string;
  height: string;
  mass: string;
  eye_color: string;
};

export type CheckedCardState = {
  cards: CheckedCard[];
  IdCards: string[];
};
