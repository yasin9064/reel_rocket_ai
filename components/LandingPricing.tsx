const PLANS = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for trying out ReelRocket",
    features: ["3 scripts per day", "Basic script styles", "Instagram & TikTok"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹199",
    period: "per month",
    description: "For serious content creators",
    features: [
      "Unlimited scripts",
      "All script styles",
      "All platforms",
      "Save history",
      "Priority generation",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Creator Pro",
    price: "₹499",
    period: "per month",
    description: "For agencies and power users",
    features: [
      "Everything in Pro",
      "PDF export",
      "Multi-language",
      "Multiple save folders",
      "Priority support",
    ],
    cta: "Go Creator",
    highlighted: false,
  },
];

export default function LandingPricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              transparent pricing
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Start free, upgrade when you need more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-900/40 to-zinc-950 border-2 border-purple-600"
                  : "bg-zinc-950 border border-zinc-800"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 rounded-full text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-500 text-sm">{plan.period}</span>
                </div>
                <p className="text-zinc-400 text-sm mt-1">{plan.description}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-purple-400 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-zinc-300">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-purple-600 hover:bg-purple-500 text-white"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
