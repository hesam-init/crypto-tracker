import { Coin } from "@type/coin";
import { useQuery } from "react-query";

import { api } from "./config";

export function useCoins() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<Coin[]> => {
      const { data } = await api.get(
        "coins/markets?vs_currency=usd&per_page=250&page=1"
      );
      return data;
    }
  });
}
