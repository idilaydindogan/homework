import React from "react";

const Haberler = () => {
	return (
		<div className="text-[#242E49] shadow-md p-2  ">
			<div className="bg-[#D0E4FF] h-20 w-full flex items-center justify-center rounded-md">
				<h1 className="text-[#242E49] font-semibold text-2xl">HABERLER</h1>
			</div>
			<div className="bg-[#D0E4FF] h-12 w-full flex items-center justify-center mt-2 rounded-md">
				<p className="text-[#242E49] text-sm">
					Piyasa fiyatlari ve trendler, üretim haberleri, arz-talebi etkileyen
					diger gelismeler, ve daha fazlasi...
				</p>
			</div>
			<div className="grid grid-cols-2 gap-2 ">
				<div className="box_container">
					<h3 className="bg-[#D0E4FF] mt-2 mx-2 py-2 rounded-lg text-lg font-semibold">
						Günlük Haberler
					</h3>
					<h5 className="font-semibold text-2xl shadow-sm mx-8">
						$ 131 <span className="text-xs">/Ay</span>
					</h5>
					<div className="mx-2 mb-4">
						<button className="bg-[#242E49] w-1/2 rounded-lg text-white  py-2 mb-4 hover:border-2 hover:border-[#508D4E] hover:bg-white hover:text-[#508D4E]">
							Seçiniz
						</button>
					</div>
				</div>
				<div className="box_container">
					<h3 className="bg-[#D0E4FF] mt-2 mx-2 py-2 rounded-lg text-lg font-semibold">
						Günlük Haberler + 120 Kredi
					</h3>
					<div className="flex justify-center items-center space-x-4 shadow-sm mx-8">
						<div className="bg-red-500 rounded-full p-1 text-white font-semibold">
							<p className="text-sm -top-24">-50%</p>
						</div>
						<h5 className="font-semibold text-2xl ">
							$ 131 <span className="text-xs">/Ay</span>
						</h5>
					</div>
					<div className="mx-2 mb-4">
						<button className="bg-[#242E49] w-1/2 rounded-lg text-white  py-2 mb-4 hover:border-2 hover:border-[#508D4E] hover:bg-white hover:text-[#508D4E]">
							Seçiniz
						</button>
					</div>
				</div>
			</div>

			<div className="text-center text-sm bg-[#D0E4FF] h-12 w-full flex items-center justify-center mt-2 rounded-md">
				<div className="flex items-center justify-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="#508D4E"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
						/>
					</svg>

					<p>
						İlk alimdan sonraki ilave alimlarda avantajli ek ürün fiyatlarindan
						faydalanin. <span className="text-xl font-semibold">$49</span>{" "}
						<span className="text-xs">/Ay</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Haberler;
