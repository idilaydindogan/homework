import React from "react";
import { TbDiscount } from "react-icons/tb";

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
					<p>Kontör ile fiyatlara, analizlere ve raporlara ulasabilirsiniz.</p>
				</div>
			</div>
		</div>
	);
};

export default Haberler;
