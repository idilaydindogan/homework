import Image from "next/image";
import Haberler from "./Components/Haberler";
import Fiyatlar from "./Components/Fiyatlar";
import Analizler from "./Components/Analizler";
import AylıkRaporlar from "./Components/AylıkRaporlar";
import { FaCartShopping } from "react-icons/fa6";

export default function Home() {
	return (
		<div className="min-h-screen my-10">
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
						<FaCartShopping size={20} />
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
