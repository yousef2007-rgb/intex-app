import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
export const UserInfoForm = ({
	PhoneNumberInputVisable,
	setPhone,
	setName,
	setLocation,
	handleSubmit,
	totalPrice,
}) => {
	const [city, setCity] = useState({ name: 'Amman', price: parseFloat(2.5) });
	const { lang } = useRouter().query;
	const total = parseFloat(totalPrice) + parseFloat(city.price);

	console.log(city);
	return (
		<div className="flex min-h-[60vh] max-w-[1200px] mx-auto sm:min-w-[600px]">
		<form
			className=" px-5 py-10  mx-auto w-full"
			
			onSubmit={handleSubmit}
		>
			<div className=" flex flex-1 flex-col justify-evenly font-bold">
				<label className="my-2" for="name">
					Enter your full name
				</label>
				<div className="flex h-8">
					<input
						className=" flex-1 border outline-none"
						type="text"
						id="name"
						name="name"
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<label className="my-2" for="phone">
					Enter your phone so we can contact you
				</label>
				<div className="flex h-8">
					<input
						className=" flex-1 border outline-none"
						type="tel"
						id="phone"
						name="phone"
						pattern="0?7[0-9]{8}"
	onChange={(e) => {
		const raw = e.target.value;
		if (/^07[0-9]{8}$/.test(raw)) {
			setPhone(raw.slice(1));
		}
	}}
						required
					/>
				</div>
				<small>Format: 791234567</small>
				<label className="mt-2" htmlFor="city-select">
					Choose a city:
				</label>
				<select
					name="city"
					id="city-select"
					onChange={(e) => setCity(JSON.parse(e.target.value))}
					className="my-2 border"
				>
					<option
						value={JSON.stringify({ name: 'Amman', price: 2.5 })}
					>
						Amman
					</option>
					<option value={JSON.stringify({ name: 'Zarqa', price: 3 })}>
						Zarqa
					</option>
					<option value={JSON.stringify({ name: 'Irbid', price: 4 })}>
						Irbid
					</option>
					<option
						value={JSON.stringify({ name: 'Jerash', price: 4 })}
					>
						Jerash
					</option>
					<option value={JSON.stringify({ name: 'Aqaba', price: 4 })}>
						Aqaba
					</option>
					<option
						value={JSON.stringify({ name: 'Ajloun', price: 4 })}
					>
						Ajloun
					</option>
					<option
						value={JSON.stringify({ name: 'Alsalt', price: 4 })}
					>
						Alsalt
					</option>
					<option
						value={JSON.stringify({ name: 'Almafraq', price: 4 })}
					>
						Almafraq
					</option>
					<option
						value={JSON.stringify({ name: 'Altafila', price: 4 })}
					>
						Altafila
					</option>
					<option
						value={JSON.stringify({ name: 'Alkarek', price: 4 })}
					>
						Alkarek
					</option>
					<option value={JSON.stringify({ name: 'Maan', price: 4 })}>
						Maan
					</option>
					<option
						value={JSON.stringify({ name: 'Madaba', price: 4 })}
					>
						Madaba
					</option>
					<option
						value={JSON.stringify({ name: 'Alagwar', price: 5 })}
					>
						Alagwar
					</option>
				</select>
				<small>Dilivery is {city.price}JOD</small>

				<label className="my-2" for="location">
					Enter your exact location
				</label>
				<div className="flex h-8">
					<input
						className=" flex-1 border outline-none"
						type="text"
						id="location"
						name="location"
						onChange={(e) =>
							setLocation(`${e.target.value} ${city.name}`)
						}
						required
					/>
				</div>
			</div>
			<h1 className=" mx-auto my-6 font-bold capitalize tablet:mx-0">
				total price with delivery is: {total}JOD
			</h1>
			<div className="mt-5">
				<input
					className="cursor-pointer  rounded-lg bg-secondery px-5 py-1 font-bold text-white"
					value={'submite'}
					type={'submit'}
				/>
			</div>
		</form>
		</div>
	);
};
