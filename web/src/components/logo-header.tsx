import logoUrl from "../utils/Logo.svg";

export function LogoHeader() {
  return (
    <div className="mb-8 ml-8  ">
      <img src={logoUrl} alt="brev.ly logo" width={97} height={24} />
    </div>
  );
}