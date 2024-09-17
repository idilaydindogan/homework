import React from "react";

const Navbar = () => {
	return (
		<div className="bg-[#242E49] h-full py-8 flex flex-col justify-center items-center space-y-4 ">
			<div className="text-center">
				<h3 className="font-semibold text-xl pb-2">
					Sadece ihtiyaciniz olan için ödeyin
				</h3>
				<h4>
					Sadece ihtiyaciniz olan bölümü seçin. Ilave alimlarda avantajli ek
					ürün fiyatlarindan faydalanin.
				</h4>
			</div>

			<div>
				<ul className="flex space-x-8 font-semibold cursor-pointer text-lg">
					<li className="hover:underline hover:underline-offset-2">Haberler</li>
					<li className="hover:underline hover:underline-offset-2">Fiyatlar</li>
					<li className="hover:underline hover:underline-offset-2">
						Analizler
					</li>
					<li className="hover:underline hover:underline-offset-2">Raporlar</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

// 5BC0DE
