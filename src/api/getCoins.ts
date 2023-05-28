import { Coin } from "@type/coin";
import { useQuery } from "react-query";

import { api } from "./config";

interface CoinParams {
  activePage: number;
}

export function useCoins({ activePage }: CoinParams) {
  console.log(activePage);

  return useQuery({
    queryKey: ["coins"],
    queryFn: async (): Promise<Array<Coin>> => {
      const { data } = await api.get("coins/markets", {
        params: {
          vs_currency: "usd",
          per_page: 50,
          page: activePage
        }
      });
      return data;
    }
  });
}
