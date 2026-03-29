import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import LandingFeatures from "@/components/LandingFeatures";
import LandingTestimonials from "@/components/LandingTestimonials";
import LandingPricing from "@/components/LandingPricing";
import LandingCTA from "@/components/LandingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <LandingHero />
        <LandingFeatures />
        <LandingTestimonials />
        <LandingPricing />
        <LandingCTA />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M13.5 2L3 13.5h7V21l10-12h-7V2z" />
                </svg>
              </div>
              <span className="text-zinc-500 text-sm">
                ReelRocket AI — Turn ideas into viral content
              </span>
            </div>
            <p className="text-zinc-600 text-xs">
              © 2026 ReelRocket AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
