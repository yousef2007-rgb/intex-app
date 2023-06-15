//Redux Hooks
import { useDispatch } from 'react-redux';

//Redux Actions
import { tougleCart } from '../../../../slices/cartVisabilitySlice';

//NextJs Components
import Link from 'next/link';
import { useRouter } from 'next/router';

//Main Component
export default function CheckoutButton() {
	//Redux Hooks
	const dispatch = useDispatch();
	const { lang } = useRouter().query;
	return (
		<Link
			className=" w-full rounded-xl border-2 border-secondery
			 bg-secondery py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-secondery"
			href={`/Checkout?lang=${lang == undefined ? 'english' : 'arabic'}`}
			onClick={() => dispatch(tougleCart())}
		>
			CheckOut
		</Link>
	);
}
