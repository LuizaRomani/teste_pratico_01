import { LogoHeader } from "./logo-header";
import { NewLinkCard } from "./new-link-card";
import { MyLinksCard } from "./my-links-card";

export function EmptyHomePage() {
	return (
		<div className="bg-gray-200 flex flex-col items-center justify-center p-6 ">
			<LogoHeader />
			<div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-5xl mt-36">
				<NewLinkCard />
				<MyLinksCard />
			</div>
		</div>
	);
}