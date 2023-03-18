import { COIN_PRICE } from "../constants";

export const getPrice = (type) =>
  typeof parseInt(COIN_PRICE) === "number" && COIN_PRICE > 0
    ? COIN_PRICE
    : (COIN_PRICE * 20) / 100;
