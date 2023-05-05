//Redux Hooks
import { useDispatch, useSelector } from 'react-redux';

//Redux Actions
import { removeCartItem } from '../../../../slices/cartSlice';
import { tougleCart } from '../../../../slices/cartVisabilitySlice';

//Assets
import Trash from '../../../../public/Assets/icons/TrashIcon';

//NextJs Components
import Link from 'next/link';

//Main Comopnent
export default function CardItem({ item, quantity }) {
	//Redux Hooks
	const dispatch = useDispatch();

	return (
		<div className=" flex items-center  p-5 font-bold">
			<Link
				onClick={() => {
					dispatch(tougleCart());
				}}
				className=" flex flex-1 items-center"
				href={`/Product/${item.nid}`}
			>
				<img
					className=" aspect-square h-12 w-12 rounded-xl object-cover "
					src={item.image}
					alt={item.discription}
				/>
				<section className="mx-5 flex-1">
					<h1 className=" whitespace-wrap text-blue_gray">
						{item.discription}
					</h1>
					<h2 className=" text-black">
						{item.price} x {quantity} = {item.price * quantity}
						JOD
					</h2>
				</section>
			</Link>
			<div
				onClick={() => dispatch(removeCartItem(item.label))}
				className=" h-6 w-6 fill-blue-300 transition-all hover:fill-red-600"
			>
				<Trash />
			</div>
		</div>
	);
}
