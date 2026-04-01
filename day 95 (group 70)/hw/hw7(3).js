import { deposit, withdraw } from "./transactions.js";

export function transfer(user, type, amount) {
  if (type === "deposit") deposit(user, amount);
  else if (type === "withdraw") withdraw(user, amount);
  else console.log("Unknown transaction type");
}