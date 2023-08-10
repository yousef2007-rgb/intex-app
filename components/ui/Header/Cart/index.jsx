//Components
import CartContainer from './CartContainer';
import CartButton from './CartButton';

//Main Component
export default function Cart() {
	return (
		<div className=" mx-2 flex h-full w-8 cursor-pointer items-center border-t-4 border-transparent hover:border-secondery desktop:relative ">
			<CartButton />
			<CartContainer />
		</div>
	);
}
