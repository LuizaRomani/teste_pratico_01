// src/components/EmptyHomePage.tsx
import { LogoHeader } from "./logo-header";
import { NewLinkCard } from "./new-link-card";
import { MyLinksCard } from "./my-links-card";

export function EmptyHomePage() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-6">
      <LogoHeader />
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <NewLinkCard />
        <MyLinksCard />
      </div>
    </div>
  );
}
