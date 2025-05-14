import logoUrl from "../utils/Logo.svg";

export function LogoHeader() {
	return (
		<div className="w-full flex justify-center lg:justify-start mt-8 lg:mt-20">
			<img src={logoUrl} alt="brev.ly logo" className="w-[96.67px] h-6" />
		</div>
	);
}
