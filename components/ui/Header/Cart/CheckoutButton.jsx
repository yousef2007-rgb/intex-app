//Redux Hooks
import { useDispatch, useSelector } from 'react-redux';

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
	const content = useSelector((state) => state.language);
	return (
		<Link
			className=" w-full rounded-xl border-2 border-secondery
			 bg-secondery py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-secondery"
			href={`/Checkout?lang=${lang == 'arabic' ? 'arabic' : 'english'}`}
			onClick={() => dispatch(tougleCart())}
		>
			{content.Cart.checkoutButton}
		</Link>
	);
}
