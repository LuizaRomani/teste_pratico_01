import logoUrl from "../utils/Logo.svg";

export function LogoHeader() {
	return (
		<div className="absolute left-[250px] top-[115px]">
			<img src={logoUrl} alt="brev.ly logo" width={96.67} height={24} />
		</div>
	);
}
