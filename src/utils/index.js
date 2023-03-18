import { COIN_PRICE } from "../constants";

export const getPrice = (type) =>
  typeof parseInt(type) === "number" && type > 0
    ? COIN_PRICE
    : (COIN_PRICE * 20) / 100;
