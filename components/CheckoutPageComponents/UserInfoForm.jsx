export const UserInfoForm = ({
	PhoneNumberInputVisable,
	setPhone,
	setName,
	setLocation,
	handleSubmit,
}) => {
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
				<label className="my-2" for="location">
					Enter your full location
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
