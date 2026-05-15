"use client";

import { useState } from "react";

type FAQ = { q: string; a: string };

const itFaqs: FAQ[] = [
  {
    q: "What does IT support for small businesses include?",
    a: "IT support for small businesses includes monitoring your systems for problems before they cause downtime, resolving technical issues when they come up, keeping your software and devices updated, and protecting your business from security threats. At Tech 4 Underdogs, it also means you reach a real person who already knows your setup — not a call center reading from a script.",
  },
  {
    q: "How much does IT support cost for a small business?",
    a: "Tech 4 Underdogs offers three tiers of IT support priced per user, per month — starting at $35/user/mo for our On Watch package. All packages include monitoring and real human support. There's a 3-user minimum. Pricing scales based on response time, security depth, and the level of access you need.",
  },
  {
    q: "Do I need managed IT support if I only have a few employees?",
    a: "Yes — and in many ways, small businesses need it more. A business with two or five employees doesn't have an IT department to catch problems early. A single outage, a ransomware attack, or a week of slow systems can cost far more than a monthly support plan. Managed IT support gives you the same protection a larger company gets, sized and priced for your operation.",
  },
  {
    q: "What cybersecurity protection do small businesses actually need?",
    a: "At minimum, small businesses need: active threat monitoring, safe email practices, regular software patches and updates, and a basic security policy. Many small businesses are targeted specifically because they're perceived as easier to breach than larger companies. At Tech 4 Underdogs, our security protection is layered and sized for your budget.",
  },
  {
    q: "What happens when something breaks? How fast do you respond?",
    a: "Response time depends on your support package. Our On Watch plan includes next-business-day response, On Guard responds within 4 business hours, and On Call delivers priority 1–2 hour response. In every case, you're reaching a real person who knows your business — not waiting on a ticket queue.",
  },
  {
    q: "Can I get IT support without a long-term contract?",
    a: "Yes. Tech 4 Underdogs IT support plans are month-to-month. We use a simple service agreement, but there's no long-term lock-in. We want to earn your trust over time — not hold it hostage.",
  },
];

const webFaqs: FAQ[] = [
  {
    q: "How much does a small business website cost?",
    a: "Our Ready to Run local SEO websites start at $179 per month — with hosting, maintenance, security, and ongoing updates included. There's no large upfront bill. For businesses that need a fully custom or WordPress build, pricing is based on scope; those sites require no ongoing contract and are yours outright.",
  },
  {
    q: "What is local SEO and does my small business website need it?",
    a: "Local SEO is the process of optimizing your website and online presence so your business shows up when someone nearby searches for what you offer — for example, 'plumber near me' or 'bakery in [your city].' If your business depends on local customers, local SEO is not optional.",
  },
  {
    q: "What's included in your website hosting and maintenance?",
    a: "Every website we build includes managed hosting on infrastructure we control, SSL security, uptime monitoring, regular software updates and patches, and ongoing maintenance. If something needs attention, you reach the same team that built your site — not a stranger reading from a ticket.",
  },
  {
    q: "What's the difference between a basic website and a local SEO website?",
    a: "A basic website exists online. A local SEO website is built specifically to rank in search results when local customers look for what you do — it loads fast, uses location-targeted keywords, is structured to signal relevance to Google, and includes a properly configured Google Business Profile connection.",
  },
  {
    q: "Do I own my website?",
    a: "For custom and WordPress builds — yes, the site is yours. No ongoing contract required. For our Ready to Run monthly plans, the site lives on our managed infrastructure as part of the service agreement. If you cancel, we'll discuss transition options. We're always transparent about this upfront.",
  },
];

const marketingFaqs: FAQ[] = [
  {
    q: "What is Google My Business and why does it matter for local businesses?",
    a: "Google Business Profile (formerly Google My Business) is the listing that appears when someone searches for your business or for businesses like yours near their location. An incomplete or neglected profile costs you customers every day. Tech 4 Underdogs optimizes and actively manages your profile.",
  },
  {
    q: "How much should a small business spend on Google Ads?",
    a: "Our Google Ads management starts at $399/mo (plus ad spend, which goes directly to Google with no markup). We set it up, manage it actively, and give you a plain-language report every month so you can see exactly what's working.",
  },
  {
    q: "What's the difference between Local SEO and Google Ads?",
    a: "Local SEO builds your organic presence over time — it's not instant, but it compounds. Google Ads delivers immediate visibility for people searching right now, but stops the moment you stop paying. We recommend Local SEO as the foundation and Google Ads as the accelerator when you need faster results.",
  },
  {
    q: "How do I know if my online marketing is actually working?",
    a: "You should be seeing it in calls, form submissions, and foot traffic — not just dashboard metrics you don't understand. At Tech 4 Underdogs, we provide clear monthly reporting in plain language. No mystery metrics. No agency-speak. We tell you what's working, what we're improving, and what we're seeing in your market.",
  },
  {
    q: "How long before I see results from local SEO?",
    a: "Honest answer: Local SEO is not an overnight solution. Most businesses begin seeing meaningful movement in 3–6 months, depending on your market, competition, and starting point. The businesses that see results fastest are the ones with consistent, quality work done every month.",
  },
];

const tabs = [
  { label: "IT Support & Security", faqs: itFaqs },
  { label: "Web Design & Hosting", faqs: webFaqs },
  { label: "Marketing & SEO", faqs: marketingFaqs },
];

function AccordionItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-navy/10">
      <button
        className="w-full flex items-center gap-4 text-left py-5 cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="text-orange font-extrabold text-base flex-shrink-0 w-5 text-center leading-none transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          +
        </span>
        <span className="font-exo font-bold text-navy text-[0.8rem] tracking-[0.12em] uppercase flex-1 leading-[1.5]">
          {faq.q}
        </span>
        <span
          className="text-navy/50 flex-shrink-0 text-base font-bold leading-none transition-transform duration-200"
          aria-hidden="true"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          &rsaquo;
        </span>
      </button>

      {/* Grid-rows trick for smooth height animation */}
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="font-exo font-medium text-navy/70 text-[0.95rem] leading-[1.75] pl-9 pb-5 pr-4">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleTabChange = (i: number) => {
    setActiveTab(i);
    setOpenItem(null);
  };

  return (
    <section className="bg-white section-y">
      <div className="section-container">

        {/* ── Heading row ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-10">
          <h2 className="h-compact">
            <span className="italic text-outlined-orange">Real</span>
            <span className="text-navy"> answers to the questions</span>
            <br />
            <span className="text-navy">small business owners </span>
            <span className="italic text-orange">ask most.</span>
          </h2>

          <p className="font-exo font-bold text-xs tracking-[0.22em] uppercase text-navy/40 flex items-center gap-2 flex-shrink-0 lg:mt-1.5">
            <span className="text-orange text-base" aria-hidden="true">✺</span>
            Frequently Asked Questions
          </p>
        </div>

        {/* ── Tab bar ─────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="FAQ categories">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => handleTabChange(i)}
              className={`font-exo font-extrabold text-xs tracking-[0.16em] uppercase px-5 py-3.5 min-h-[44px] rounded-md transition-colors cursor-pointer ${
                activeTab === i
                  ? "bg-orange text-white"
                  : "bg-navy text-white/80 hover:bg-navy/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── FAQ list ────────────────────────────────── */}
        <div role="tabpanel">
          {tabs[activeTab].faqs.map((faq, i) => (
            <AccordionItem
              key={`${activeTab}-${i}`}
              faq={faq}
              isOpen={openItem === i}
              onToggle={() => setOpenItem(openItem === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
