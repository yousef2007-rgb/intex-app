//Imports Region
//	React Hooks
import React from 'react';
//	Redux Hooks
import { useDispatch, useSelector } from 'react-redux';
//	React Components
import PopUp from '../PopUp/PopUp';
import CartBody from './CartBody';
//	Redux Slices
import { tougleCart } from '../../../slices/cartVisabilitySlice';
//Ui Component Region
function CartContainer() {
	//Redux State Hooks
	const visability = useSelector((state) => state.cartVisability);
	//Functions
	const dispatch = useDispatch();

	return (
		<>
			<PopUp
				dispatch={dispatch}
				visability={visability}
				tougle={tougleCart}
				messege={
					<CartBody visability={visability} dispatch={dispatch} />
				}
			></PopUp>
		</>
	);
}

export default CartContainer;
