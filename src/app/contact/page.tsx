import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
export const metadata: Metadata = {
  title: "Contact SolRise",
  description: "Tell us about your learner and connect with a SolRise educator to find the right tutoring or academic support.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage(){return <main><SiteHeader/><section className="page-hero compact"><p className="eyebrow">Start the conversation</p><h1>Tell us how we can help.</h1><p>No need to know the perfect service. Share what&apos;s going on, and we&apos;ll help you identify a thoughtful next step.</p></section>
<section className="contact contact-page"><div className="contact-intro"><p className="eyebrow light">What happens next</p><h2>A simple, supportive first step.</h2><ol className="contact-steps"><li><span>1</span><p><strong>Send your inquiry</strong>Tell us about your learner and what you hope will improve.</p></li><li><span>2</span><p><strong>Hear from an educator</strong>We&apos;ll follow up to clarify needs and answer questions.</p></li><li><span>3</span><p><strong>Choose your next step</strong>If we&apos;re a good fit, we&apos;ll recommend a service and format.</p></li></ol><a href="mailto:hello@solriselearning.org">hello@solriselearning.org</a></div><ContactForm/></section><SiteFooter/></main>}
