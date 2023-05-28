import { useCoins } from "@api/getCoins";
import { Pagination, ScrollArea } from "@mantine/core";

import Coin from "./component/coin";

function HomePage() {
  const { data } = useCoins();

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      {/* SECTION: coins list */}
      <ScrollArea className="w-full">
        <div className="grid w-full grid-cols-1 gap-4 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((coin) => (
            <Coin
              key={coin.id + coin.name}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
            />
          ))}
        </div>
      </ScrollArea>

      {/* pagination */}
      <div className="flex items-center justify-center p-3">
        <Pagination total={10} />
      </div>
    </div>
  );
}

export default HomePage;
