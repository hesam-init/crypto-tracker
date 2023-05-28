import { useCoins } from "@api/getCoins";

function HomePage() {
  const { data } = useCoins();

  return (
    <div>
      {data?.map((coin) => (
        <h1 key={coin.id}>{coin.current_price}</h1>
      ))}
    </div>
  );
}

export default HomePage;
