import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Eyebrow, FeatureCard, SectionHead } from "@/components/ui-bits";
import heroImg from "@/assets/snooker-hero.jpg";
import clubImg from "@/assets/snooker-club.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohid Snooker Club | Premium Snooker & Training in Johar Town" },
      { name: "description", content: "Lahore's premium snooker club in J3 Johar Town. Pro coaching, championship tables, Rs 250/frame, Rs 6,000/month training." },
      { property: "og:title", content: "Mohid Snooker Club" },
      { property: "og:description", content: "Lahore's premium snooker club — owned by Mohid Tanveer." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[88vh] grid place-items-center text-center px-6 py-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.18 0.03 155 / 0.55), oklch(0.14 0.03 155 / 0.95)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-3xl">
          <Eyebrow>★ Established Excellence</Eyebrow>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.05] mb-5">
            Where Every Shot{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-gold)" }}
            >
              Tells a Story
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-9">
            Step into Lahore's most refined snooker destination. Championship-grade tables, world-class coaching, and an atmosphere built for true players.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-primary-foreground transition-all hover:-translate-y-0.5"
              style={{ background: "var(--grad-gold)", boxShadow: "0 8px 24px -10px oklch(0.88 0.16 90 / 0.5)" }}
            >
              Book a Table →
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold border border-border text-foreground hover:border-[color:var(--gold-bright)] hover:text-[color:var(--gold-bright)] transition"
            >
              View Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { n: "8", l: "Pro Tables" },
              { n: "4", l: "Expert Coaches" },
              { n: "500+", l: "Members" },
              { n: "Rs 250", l: "Per Frame" },
            ].map((s) => (
              <div key={s.l} className="p-5 rounded-xl bg-card border border-border">
                <div className="text-3xl font-extrabold text-[color:var(--gold-bright)]" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionHead eyebrow="Why Choose Us" title="Craftsmanship Meets Competition" subtitle="Everything you need to play, learn, and master the green baize." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon="🎱" title="Pro-Grade Tables">Tournament-spec tables maintained daily — perfect cushions, flawless cloth, true rolls every time.</FeatureCard>
            <FeatureCard icon="🏆" title="Champion Trainers">Learn from four seasoned coaches who have shaped some of the city's finest cueists.</FeatureCard>
            <FeatureCard icon="💡" title="Perfect Lighting">Anti-glare overhead lighting calibrated for clarity, focus, and zero fatigue across long sessions.</FeatureCard>
            <FeatureCard icon="📍" title="Prime Location">Right in the heart of J3 Johar Town — easy parking, easier access, always open late.</FeatureCard>
            <FeatureCard icon="💰" title="Fair Pricing">Just Rs 250 per frame. Monthly training program at Rs 6,000 — pure value, no hidden fees.</FeatureCard>
            <FeatureCard icon="☕" title="Lounge Vibes">Refreshments, comfortable seating, and a community that respects the game.</FeatureCard>
          </div>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section className="px-6 py-24" style={{ background: "oklch(0.15 0.03 155)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={clubImg} alt="Mohid Snooker Club interior" width={1280} height={800} loading="lazy" className="rounded-xl border border-border w-full" style={{ boxShadow: "var(--shadow-elegant)" }} />
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built by a Player, for Players</h2>
            <p className="text-muted-foreground mb-3">
              Founded by <strong className="text-[color:var(--gold-bright)]">Mohid Tanveer</strong>, this club was born from a single belief: snooker deserves better. Better tables, better coaching, better company.
            </p>
            <p className="text-muted-foreground mb-5">
              From the moment you walk in, you'll feel the difference — the warm glow of the lights, the satisfying click of ivory on ivory, the focused calm of the room.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-primary-foreground"
              style={{ background: "var(--grad-gold)" }}
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto rounded-2xl p-10 md:p-14 text-center" style={{ background: "var(--grad-felt)", boxShadow: "var(--shadow-elegant)" }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Ready to Sharpen Your Game?</h3>
          <p className="text-foreground/80 mb-6">Join our monthly training program for just Rs 6,000 — taught by four of Lahore's best.</p>
          <Link to="/contact" className="inline-flex px-7 py-3 rounded-lg font-bold bg-background text-[color:var(--gold-bright)]">
            Enroll Today →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
