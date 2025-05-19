import { LogoHeader } from "./logo-header";
import { NewLinkCard } from "./new-link-card";
import { MyLinksCard } from "./my-links-card";

export function StandartHomePage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4">
			<div className="w-full max-w-5xl mx-auto flex flex-col space-y-7">
				<LogoHeader />
				<div className="flex flex-col lg:flex-row items-start gap-8 w-full mt-8 lg:mt-20">
					<NewLinkCard />
					<MyLinksCard />
				</div>
			</div>
		</div>
	);
}