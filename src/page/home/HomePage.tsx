/* eslint-disable object-curly-newline */
import { useCoins } from "@api/getCoins";
import Error from "@component/error";
import { LoadingOverlay, Pagination, ScrollArea } from "@mantine/core";
import { useEffect, useState } from "react";

import Coin from "./component/coin";

function HomePage() {
  const [activePage, setPage] = useState<number>(1);

  const {
    data,
    isFetching,
    isError,
    isLoadingError,
    refetch: fetchCoins
  } = useCoins({
    activePage
  });

  useEffect(() => {
    fetchCoins();
  }, [activePage, fetchCoins]);

  if (isLoadingError) {
    return <Error refetch={fetchCoins} />;
  }

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      {/* SECTION: coins list */}
      <ScrollArea className="h-full w-full">
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
        <LoadingOverlay
          loaderProps={{ size: "lg", color: "blue", variant: "bars" }}
          overlayOpacity={0.5}
          visible={isFetching}
        />
      </ScrollArea>

      {/* SECTION: pagination */}
      <div className="flex items-center justify-center p-3">
        <Pagination
          disabled={isFetching}
          value={activePage}
          onChange={setPage}
          total={100}
        />
      </div>
    </div>
  );
}

export default HomePage;
