export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center pt-24 pb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Social Media Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Get alerts when your{" "}
          <span className="text-[#58a6ff]">brand is mentioned</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor social media for brand mentions in real time. Instant alerts with AI-powered sentiment analysis and ready-to-use response suggestions — so you never miss a conversation.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Monitoring — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="text-white font-semibold mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified via email or webhook the moment your brand is mentioned anywhere online.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-white font-semibold mb-1">Sentiment Analysis</h3>
            <p className="text-sm text-[#8b949e]">AI scores every mention as positive, neutral, or negative so you can prioritize responses.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💬</div>
            <h3 className="text-white font-semibold mb-1">Response Suggestions</h3>
            <p className="text-sm text-[#8b949e]">Auto-generated reply drafts tailored to the tone of each mention, ready to copy and send.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-sm pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your brand reputation.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {["Unlimited brand keywords","Multi-platform monitoring","Real-time email & webhook alerts","AI sentiment scoring","Auto response suggestions","30-day mention history"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-2xl pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which platforms are monitored?</h3>
            <p className="text-[#8b949e] text-sm">We monitor Twitter/X, Reddit, and public web mentions. More platforms are added regularly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How fast are the alerts?</h3>
            <p className="text-[#8b949e] text-sm">Mentions are scanned every few minutes. Most alerts arrive within 5–10 minutes of a mention being posted.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your billing portal with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="pb-8 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Brand Mention Alerter. All rights reserved.
      </footer>
    </main>
  );
}
