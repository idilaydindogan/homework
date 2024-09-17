import React from "react";
import { GrAnnounce } from "react-icons/gr";
const Analizler = () => {
	return (
		<div className="text-[#242E49] shadow-md p-2 ">
			<div className="bg-[#D0E4FF] h-20 w-full flex items-center justify-center rounded-md">
				<h1 className="text-[#242E49] font-semibold text-2xl">ANALİZLER</h1>
			</div>
			<div className="bg-[#D0E4FF] h-12 w-full flex items-center justify-center mt-2 rounded-md">
				<p className="text-[#242E49] text-sm">
					Haftalik pazar degerlendirmesi, fiyatlar ve gelecek görünüm
				</p>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<div className="box_container">
					<h3 className="bg-[#D0E4FF] mt-2 mx-2 py-2 rounded-lg text-lg font-semibold">
						Haftalk Ürün Analizi
					</h3>
					<div className="space-x-2">
						<select
							name=""
							id=""
							className="border border-[#242E49] p-2 rounded-md text-sm hover:border-[#508D4E]  hover:text-[#508D4E]"
						>
							<option value="">Pazar Seçiniz</option>
						</select>
						<select
							name=""
							id=""
							className="border border-[#242E49] p-2 rounded-md text-sm hover:border-[#508D4E]  hover:text-[#508D4E]"
						>
							<option value="">Ürün Seçiniz</option>
						</select>
					</div>
					<h5 className="font-semibold text-2xl shadow-sm mx-8">
						$ 49 <span className="text-xs">/Ay</span>
					</h5>
					<div className="mx-2 mb-4">
						<button className="bg-[#242E49] w-1/2 rounded-lg text-white  py-2 mb-4 hover:border-2 hover:border-[#508D4E] hover:bg-white hover:text-[#508D4E]">
							Seçiniz
						</button>
					</div>
				</div>
				<div className="box_container">
					<h3 className="bg-[#D0E4FF] mt-2 mx-2 py-2 rounded-lg text-lg font-semibold">
						Haftalik Pazar Analizi
					</h3>
					<div className="">
						<select
							name=""
							id=""
							className="border border-[#242E49] p-2 rounded-md text-sm hover:border-[#508D4E]  hover:text-[#508D4E]"
						>
							<option value="">Ürün Seçiniz</option>
						</select>
					</div>
					<h5 className="font-semibold text-2xl shadow-sm mx-8">
						$ 49 <span className="text-xs">/Ay</span>
					</h5>
					<div className="mx-2 mb-4">
						<button className="bg-[#242E49] w-1/2 rounded-lg text-white  py-2 mb-4 hover:border-2 hover:border-[#508D4E] hover:bg-white hover:text-[#508D4E]">
							Seçiniz
						</button>
					</div>
				</div>
				<div className="box_container">
					<h3 className="bg-[#D0E4FF] mt-2 mx-2 py-2 rounded-lg text-lg font-semibold">
						Haftalik Ürün Özeti
					</h3>
					<div className="">
						<select
							name=""
							id=""
							className="border border-[#242E49] p-2 rounded-md text-sm hover:border-[#508D4E]  hover:text-[#508D4E]"
						>
							<option value="">Ürün Seçiniz</option>
						</select>
					</div>
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
						Haftalik Pazar Özeti
					</h3>
					<div className="">
						<select
							name=""
							id=""
							className="border border-[#242E49] p-2 rounded-md text-sm hover:border-[#508D4E]  hover:text-[#508D4E]"
						>
							<option value="">Ürün Seçiniz</option>
						</select>
					</div>
					<h5 className="font-semibold text-2xl shadow-sm mx-8">
						$ 49 <span className="text-xs">/Ay</span>
					</h5>
					<div className="mx-2 mb-4">
						<button className="bg-[#242E49] w-1/2 rounded-lg text-white  py-2 mb-4 hover:border-2 hover:border-[#508D4E] hover:bg-white hover:text-[#508D4E]">
							Seçiniz
						</button>
					</div>
				</div>
			</div>
			<div className="text-center text-sm bg-[#D0E4FF] h-12 w-full flex items-center justify-center mt-2 rounded-md">
				<div className="flex items-center justify-center space-x-2">
					<GrAnnounce size={24} className="text-[#508D4E]" />
					<p>
						İlk alimdan sonraki ilave alimlarda avantajli ek ürün fiyatlarindan
						faydalanin. <span className="text-lg font-semibold">$ 49</span>{" "}
						<span className="text-xs">/Ay</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Analizler;
