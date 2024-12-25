import { useAppSelector } from "@/lib/hooks";


const WatchDescription = () => {
  const { collection, size, face , band, totalPrice } =
    useAppSelector((state: any) => state.watch);

  return (
    <div className="flex flex-col w-[70%] md:w-[60%]">
      <span className="text-[#6e6e73] font-proTextSemibold tracking-[-.01em] mb-[4px] text-xs">
        {collection}
      </span>
      <span className="text-[#1d1d1f] font-proTextSemibold  tracking-[-.016em] mb-[5px] overflow-hidden text-sm">
        {`${size} ${face.name} with ${band.name}`}
      </span>
      <span className="text-[#1d1d1f] font-semibold mb-[5px] tracking-[-.016em] overflow-hidden text-sm">
        {`From $${totalPrice}`}
      </span>
    </div>
  );
};

export default WatchDescription;