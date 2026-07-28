import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Policies and Rates",
  description: "Review SolRise Learning Academy rates, cancellation, payment, photo release, and travel policies.",
  alternates: { canonical: "/policies" },
};

const policies = [
  { title:"Cancellation Policy", text:"To respect scheduled time, cancellations must be made at least 24 hours in advance. Cancellations made less than 24 hours before a session will be charged 50% of the session fee. No-shows will be charged the full session fee." },
  { title:"Payment Policy", text:"We currently accept cash, Apple Pay, Venmo, and PayPal. Payment is due on the day of the session. Families using the Step Up For Students scholarship should reserve funds in the EMA portal by the Sunday before the session." },
  { title:"Photo & Video Release", text:"We love celebrating our SolRisers and their growth. SolRise will always request written permission from a parent or guardian before taking or sharing photos or videos from a session. Choosing not to grant permission will never affect a student’s services." },
  { title:"Travel Policy", text:"In-home support is available within designated service areas. A travel fee may apply based on distance, and any travel fee will be clearly discussed and agreed upon before services begin." },
];

const rates = [["Private session","60 minutes","$70"],["Private session","30 minutes","$40"],["Group session","Per student","$45"]];

export default function PoliciesPage(){return <main><SiteHeader/><section className="page-hero"><p className="eyebrow">Policies & rates</p><h1>Clear expectations create a better experience.</h1><p>We believe families deserve straightforward information before services begin. Please review our current rates and policies below.</p></section>
<section className="rates section"><div className="section-heading"><div><p className="eyebrow">Current rates</p><h2>Choose the support that fits.</h2></div><p>Rates are discussed and confirmed before scheduling. Group sessions are priced per student.</p></div><div className="rate-grid">{rates.map(([name,duration,price])=><article key={duration}><span>{duration}</span><h3>{name}</h3><strong>{price}</strong></article>)}</div></section>
<section className="policy-grid section soft">{policies.map((policy,i)=><article key={policy.title}><span>{String(i+1).padStart(2,"0")}</span><h2>{policy.title}</h2><p>{policy.text}</p></article>)}</section>
<section className="policy-note section"><div><p className="eyebrow">Questions are welcome</p><h2>We want every detail to feel clear.</h2></div><div><p>If you have a question about payment, scholarship funds, travel, scheduling, or permissions, please reach out before your session. We&apos;re happy to talk it through.</p><div className="policy-contacts"><a href="mailto:solriselearning@gmail.com">solriselearning@gmail.com</a><a href="tel:+18138420668">(813) 842-0668</a></div></div></section>
<section className="page-cta"><h2>Ready to help your learner rise?</h2><a className="button button-light" href="/contact">Start a conversation</a></section><SiteFooter/></main>}