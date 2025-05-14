import logoUrl from "../utils/Logo.svg";

export function LogoHeader() {
	return (
		<div className="mt-20 left-44">
			<img src={logoUrl} alt="brev.ly logo" width={96.67} height={24} />
		</div>
	);
}
