import { useState } from 'react';
export const UserInfoForm = ({
	PhoneNumberInputVisable,
	setPhone,
	setName,
	setLocation,
	handleSubmit,
}) => {
	const [city, setCity] = useState('Amman');
	return (
		<form
			className="fixed top-[50%] left-1/2 flex w-[90%] max-w-xs  -translate-y-1/2 -translate-x-1/2 flex-col rounded-xl bg-white p-5 shadow-2xl "
			style={{
				display: PhoneNumberInputVisable,
			}}
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
						pattern="[0-9]{9}"
						onChange={(e) => setPhone(e.target.value)}
						required
					/>
				</div>
				<small>Format: 791234567</small>
				<label htmlFor="city-select">Choose a city:</label>
				<select
					name="city"
					id="city-select"
					onChange={(e) => setCity(e.target.value)}
					className="my-2"
				>
					<option value={2.5}>Amman</option>
					<option value={3}>Zarqa</option>
					<option value={4}>Irbid</option>
					<option value={4}>Jerash</option>
					<option value={4}>Aqaba</option>
					<option value={4}>Ajloun</option>
					<option value={4}>Alsalt</option>
					<option value={4}>Almafraq</option>
					<option value={4}>Altafila</option>
					<option value={4}>Alkarek</option>
					<option value={4}>Maan</option>
					<option value={4}>Madaba</option>
					<option value={5}>Alagwar</option>
				</select>
				<small>Dilivery is {city}JOD</small>

				<label className="my-2" for="location">
					Enter your exact location
				</label>
				<div className="flex h-8">
					<input
						className=" flex-1 border outline-none"
						type="text"
						id="location"
						name="location"
						onChange={(e) => setLocation(e.target.value)}
						required
					/>
				</div>
			</div>
			<div className="mt-5">
				<input
					className="cursor-pointer  rounded-lg bg-secondery px-5 py-1 font-bold text-white"
					value={'submite'}
					type={'submit'}
				/>
			</div>
		</form>
	);
};
