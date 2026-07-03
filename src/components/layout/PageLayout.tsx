import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";

export function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
