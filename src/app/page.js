import Image from "next/image";
import Haberler from "./Components/Haberler";
import Fiyatlar from "./Components/Fiyatlar";
import Analizler from "./Components/Analizler";
import AylıkRaporlar from "./Components/AylıkRaporlar";

export default function Home() {
	return (
		<div className="min-h-screen max-w-screen-xl m-auto my-10">
			<div className="flex justify-center px-10">
				<section className="px-6 space-y-6 w-9/12">
					<Haberler />
					<div className="border-b border-[#242E49] opacity-45" />
					<Fiyatlar />
					<div className="border-b border-[#242E49] opacity-45" />
					<Analizler />
					<div className="border-b border-[#242E49] opacity-45" />
					<AylıkRaporlar />
				</section>
				<section className="w-3/12  text-[#242E49] h-full shadow-md p-2 ">
					<div className="bg-[#D0E4FF] h-20 w-full flex items-center justify-between px-3 rounded-md">
						<h3 className="text-[#242E49] font-semibold text-lg">Ara Toplam</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#242E49"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							/>
						</svg>
					</div>
					<div className="h-12 w-full flex items-center justify-center mt-2 rounded-md">
						<p className="text-sm text-[#508D4E]">
							Herhangi bir paket seçmediniz.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}
