import Image from "next/image";

export default function Future() {
  const list: { image: string; title: string; description: string }[] = [
    {
      image: "crown",
      title: "First time Pricing Errors",
      description:
        "Unmatched access to pricing errors before others. Be the first to capitalize with our exclusive technology and insider econnections.",
    },
    {
      image: "lightningbolt",
      title: "Instant Major Glitch Alerts",
      description:
        "Get real-time notifications on significant company glitches. Act quickly with our exclusive alerts, ahead of the crowd.",
    },
    {
      image: "gift",
      title: "Claim Free Products",
      description:
        "Access items mistakenly priced at $0.00. Receive alerts to get gadgets, apparel, and more without spending a penny.",
    },
    {
      image: "tea",
      title: "Enjoy Free Meals",
      description:
        "Track promotions and errors from top restaurants. Get codes for free meals and alerts on $0.00 food items, ensuring delicious deals.",
    },
    {
      image: "chatbubble",
      title: "Expert Mentoring Support",
      description:
        "Personalized advice when needed. Our experts provide tailored guidance through one-on-one mentoring, ensuring your success.",
    },
    {
      image: "heartnotification",
      title: "Helpful Member Network",
      description:
        "Engage with a supportive community. Get answers, share tips, and connect with like-minded members ready to assist.",
    },
  ];
  return (
    <section className="mt-20 flex flex-col items-center justify-center p-4 md:mt-40">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="max-w-[900px] text-5xl font-bold lg:text-7xl">
          Decide your future today and transform your life.
        </span>
        <span className="max-w-[700px] text-sm">
          Your future is in your hands. Choose financial independence and
          fulfillment.
          <br /> Make the right decision today and start building your dream
          life. Take control and embrace your potential.
        </span>
      </div>
      <div className="mt-10 flex max-w-[1300px] flex-wrap items-stretch justify-center gap-4">
        {list.map((e, i) => {
          return (
            <div
              key={i}
              className="flex max-w-[400px] flex-col items-start justify-center gap-2 rounded-md border border-neutral-800/10 p-4"
            >
              <div className="relative aspect-square h-10">
                <Image fill alt="" src={`/features/${e.image}.png`} />
              </div>
              <span className="text-lg">{e.title}</span>
              <span className="text-sm">{e.description}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
