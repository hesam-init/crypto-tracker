/* eslint-disable object-curly-newline */
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CoinProps {
  name: string;
  price: number;
  image: string;
  symbol: string;
}

function Coin({ name, price, image, symbol }: CoinProps) {
  return (
    <div className="flex flex-col rounded-xl bg-[#1A1C22] p-3">
      <div className="flex items-center gap-2">
        <div>
          <LazyLoadImage className="rounded-full" width={50} src={image} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-white">{name}</h1>
          <h2 className="text-xs text-white/50">{symbol.toUpperCase()}</h2>
        </div>
      </div>
    </div>
  );
}

export default Coin;
