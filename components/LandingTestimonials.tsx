const TESTIMONIALS = [
  {
    quote:
      "I used to spend hours writing scripts. Now I generate one in 30 seconds and my reels are performing better than ever.",
    name: "Sarah Chen",
    handle: "@sarahchen_",
    initials: "SC",
  },
  {
    quote:
      "The hook suggestions alone are worth it. My avg watch time went up 40% after using ReelRocket for my YouTube Shorts.",
    name: "Marcus Williams",
    handle: "@marcusw_",
    initials: "MW",
  },
  {
    quote:
      "Perfect for my faceless content page. I just pick a topic, generate, film, and post. Couldn't be simpler.",
    name: "Priya Sharma",
    handle: "@priyabuilds",
    initials: "PS",
  },
];

export default function LandingTestimonials() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              creators
            </span>{" "}
            everywhere
          </h2>
          <p className="text-zinc-400 text-lg">
            Join thousands of creators saving hours every week
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.handle}
              className="bg-black border border-zinc-800 rounded-2xl p-6 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-purple-400 text-4xl font-serif leading-none mb-4">
                "
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
