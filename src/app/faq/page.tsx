import type { Metadata } from "next";
import FAQHero from "@/components/FAQHero";
import FAQCategorySection, { type FAQItem } from "@/components/FAQCategorySection";
import FAQReassurance from "@/components/FAQReassurance";
import FAQFinalCTA from "@/components/FAQFinalCTA";

export const metadata: Metadata = {
  title: "FAQ | Tech 4 Underdogs",
  description:
    "Straightforward answers about IT support pricing, local SEO timelines, website ownership, and Google Ads management for small businesses.",
};

const itFaqs: FAQItem[] = [
  {
    q: "What does IT support for small businesses include?",
    a: "IT support for small businesses includes monitoring your systems for problems before they cause downtime, resolving technical issues when they come up, keeping your software and devices updated, and protecting your business from security threats. We handle email, hosting and website maintenance, cloud backups and more. At Tech 4 Underdogs, it also means you reach a real person who already knows your setup — not a call center reading from a script.",
  },
  {
    q: "How much does IT support cost for a small business?",
    a: "Tech 4 Underdogs offers three tiers of IT support priced per user, per month — starting at $56/user/mo for our On Watch package. All packages include monitoring and real human support. There's a 3-user minimum. Pricing scales based on response time, security depth, and the level of access you need. Schedule a conversation and we'll help you figure out what makes sense for your business.",
  },
  {
    q: "Do I need managed IT support if I only have a few employees?",
    a: "Yes — and in many ways, small businesses need it more. A business with two or five employees doesn't have an IT department to catch problems early. A single outage, a ransomware attack, or a week of slow systems can cost far more than a monthly support plan. Managed IT support gives you the same protection a larger company gets, sized and priced for your operation.",
  },
  {
    q: "What cybersecurity protection do small businesses actually need?",
    a: "At minimum, small businesses need active threat monitoring, safe email practices, regular software patches and updates, and a basic security policy. Many small businesses are targeted specifically because they're perceived as easier to breach than larger companies. Our security protection is layered and sized for your budget — not an enterprise checklist you'll never actually use.",
  },
  {
    q: "What happens when something breaks? How fast do you respond?",
    a: "Response time depends on your support package. Our On Watch plan includes next-business-day response, On Guard responds within 4 business hours, and On Call delivers priority 1–2 hour response. In every case, you're reaching a real person who knows your business — not waiting on a ticket queue to be claimed by someone unfamiliar with your setup.",
  },
  {
    q: "Can I get IT support without a long-term contract?",
    a: "Yes. Tech 4 Underdogs IT support plans are month-to-month. We use a simple service agreement, but there's no long-term lock-in. We want to earn your trust over time — not hold it hostage.",
  },
];

const webFaqs: FAQItem[] = [
  {
    q: "How much does a small business website cost?",
    a: "Our Ready to Run local SEO websites start at $149 per month (under 15 pages) — with hosting, maintenance, security, and ongoing updates included. There's no large upfront bill. For businesses that need a fully custom or WordPress build, pricing is based on scope; those sites require no ongoing contract and are yours outright. Either way, one flat monthly cost covers everything.",
  },
  {
    q: "What is local SEO and does my small business website need it?",
    a: "Local SEO is the process of optimizing your website and online presence so your business shows up when someone nearby searches for what you offer — for example, 'plumber near me' or 'bakery in [your city].' If your business depends on local customers, local SEO is not optional. Without it, you're invisible to the people most likely to buy from you.",
  },
  {
    q: "What's included in your website hosting and maintenance?",
    a: "Every website we build includes managed hosting on infrastructure we control, SSL security, uptime monitoring, regular software updates and patches, and ongoing maintenance. If something needs attention, you reach the same team that built your site — not a stranger reading from a ticket. Content changes are handled on an ongoing basis based on your plan, including unlimited text and photo updates upon request.",
  },
  {
    q: "How long does it take to build a small business website?",
    a: "Our Ready to Run local SEO websites are designed for fast turnaround — typically within a few weeks depending on how quickly we can gather your content and approvals. Custom WordPress or full-stack builds take longer based on complexity. In every case, we don't disappear after launch — the same team that builds your site stays with it.",
  },
  {
    q: "What's the difference between a basic website and a local SEO website?",
    a: "A basic website exists online. A local SEO website is built specifically to rank in search results when local customers look for what you do — it loads fast, uses location-targeted keywords, is structured to signal relevance to Google, and includes a properly configured Google Business Profile connection. Every site we build is SEO-ready from day one.",
  },
  {
    q: "Do I own my website?",
    a: "For custom and WordPress builds — yes, the site is yours. For our Ready to Run monthly plans, the site lives on our managed infrastructure as part of the service agreement. If you cancel, we don't hold you hostage. We'll discuss transition options and offer a fair buyout should you want to gain control and move your site. We're always transparent about this upfront — no surprises.",
  },
];

const marketingFaqs: FAQItem[] = [
  {
    q: "How do I get my small business to show up on Google?",
    a: "Two main ways: Local SEO (organic search) and Google Ads (paid search). Local SEO involves optimizing your website and Google Business Profile so Google understands where you are, who you serve, and what you offer. Google Ads puts your business in front of people actively searching right now, even before you've built organic rankings. For most small businesses, the right answer is both — starting with a strong local SEO foundation for organic growth.",
  },
  {
    q: "What is Google My Business and why does it matter for local businesses?",
    a: "Google Business Profile (formerly Google My Business) is the listing that appears when someone searches for your business or for businesses like yours near their location. It shows your hours, location, reviews, photos, and contact information. An incomplete or neglected profile costs you customers every day. Tech 4 Underdogs actively manages, updates and optimizes your profile — so it's always accurate, current, and working in your favor.",
  },
  {
    q: "How much should a small business spend on Google Ads?",
    a: "There's no one-size-fits-all answer — it depends on your market, competition, and goals. What we do know is that Google Ads without proper management wastes money fast. Our Google Ads management service is $399/mo (plus ad spend, which goes directly to Google with no markup). We set it up, manage it actively, and give you a plain-language report every month so you can see exactly what's working.",
  },
  {
    q: "What's the difference between Local SEO and Google Ads?",
    a: "Local SEO builds your organic presence over time — it's not instant, but it compounds. Google Ads delivers immediate visibility for people searching right now, but stops the moment you stop paying. For small businesses, we recommend Local SEO as the foundation and Google Ads as the accelerator when you need faster results. Together, they cover both short-term and long-term local visibility.",
  },
  {
    q: "How do I know if my online marketing is actually working?",
    a: "You should be seeing it in calls, form submissions, and foot traffic — not just dashboard metrics you don't understand. We provide clear monthly reporting in plain language. No mystery metrics. No agency-speak. We tell you what's working, what we're improving, and what we're seeing in your market — every single month.",
  },
  {
    q: "How long before I see results from local SEO?",
    a: "Honest answer: Local SEO is not an overnight solution. Most businesses begin seeing meaningful movement in 3–6 months, depending on your market, competition, and starting point. The businesses that see results fastest are the ones with consistent, quality work done every month — which is exactly how we operate. We stay close to your results and adjust based on what the data shows.",
  },
];

const allFaqs = [...itFaqs, ...webFaqs, ...marketingFaqs];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQHero />

      <FAQCategorySection
        id="it-support-faq"
        bg="white"
        eyebrow="IT Support & Security"
        headline={
          <>
            <span>IT support questions, </span>
            <span className="italic text-orange">answered plainly.</span>
          </>
        }
        faqs={itFaqs}
        ctaIntro="Have a question that's not here?"
        primaryCta={{ label: "Talk to a Real Person", href: "/contact" }}
      />

      <FAQCategorySection
        id="web-design-faq"
        bg="sky"
        eyebrow="Web Design & Hosting"
        headline={
          <>
            <span>Website questions, </span>
            <span className="italic text-outlined-navy">no runaround.</span>
          </>
        }
        faqs={webFaqs}
        ctaIntro="Ready to talk about your website?"
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/#services" }}
      />

      <FAQCategorySection
        id="online-marketing-faq"
        bg="white"
        eyebrow="Online Marketing"
        headline={
          <>
            <span>Marketing questions from owners </span>
            <span className="italic text-orange">who&apos;ve been burned before.</span>
          </>
        }
        faqs={marketingFaqs}
        ctaIntro="Want to see what straightforward marketing looks like?"
        primaryCta={{ label: "Talk to a Real Person", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/#services" }}
      />

      <FAQReassurance />
      <FAQFinalCTA />
    </>
  );
}
