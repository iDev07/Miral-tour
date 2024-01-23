import Image from "next/image";
import React from "react";
import { decrement, increment } from "../../store/features/cartSlice";
import { useAppDispatch } from "../../store/store";

const CartItemCard = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="">
      <Image
        src={cartItem.image}
        width={200}
        height={150}
        alt={cartItem.tour_name}
        className="rounded-md"
      />
      <p className="text-slate-600 text-center">{cartItem.tour_name}</p>
      <div className="flex flex-col items-center justify-center gap-3">
        <p>{cartItem.tour_price} $</p>
        <p>&#xd7;</p>
      </div>
    </div>
  );
};

export default CartItemCard;
