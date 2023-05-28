import { useParams } from "react-router-dom";

function CoinPage() {
  const params = useParams();
  console.log(params);

  return <div>Coin</div>;
}

export default CoinPage;
