import { LogoHeader } from "./logo-header";
import { NewLinkCard } from "./new-link-card";
import { MyLinksCard } from "./my-links-card";

export function StandartHomePage() {
	return (
		<div className="min-h-screen bg-gray-200 flex flex-col items-center">
			<div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
				<LogoHeader />
				<div className="flex flex-col lg:flex-row items-start gap-8 w-full mt-16 lg:mt-36">
					<NewLinkCard />
					<MyLinksCard />
				</div>
			</div>
		</div>
	);
}