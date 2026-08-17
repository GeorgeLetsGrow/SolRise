import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Tutoring and Academic Services",
  description: "Explore personalized math, reading, Spanish, test prep, academic coaching, homeschool evaluation, and transition support—in person and online.",
  alternates: { canonical: "/services" },
};

const items = [
  { title:"Math K–12", text:"Build number sense, close skill gaps, strengthen coursework, and grow into a confident problem-solver through clear, personalized instruction.", meta:"Foundations · Algebra · Geometry · Homework support", image:"/student-whiteboard-practice.jpg" },
  { title:"Reading K–6", text:"Develop phonics, fluency, vocabulary, and comprehension through engaging lessons designed around each reader.", meta:"Early literacy · Comprehension · Writing connections", image:"/service-reading-online.jpeg" },
  { title:"Spanish K–12+", text:"Learn practical communication and academic Spanish in a welcoming setting for beginners through advanced learners.", meta:"Conversation · Grammar · Coursework support", image:"/yamilka-spanish-circle.jpg" },
  { title:"Test Prep", text:"Prepare with a focused plan, targeted skill review, practice questions, and test-taking strategies that build confidence.", meta:"SAT · ACT · FAST · CLT", image:"/service-test-prep.jpeg" },
  { title:"Academic Coaching & Transition Support", text:"Build reliable systems for organization, study habits, planning, and goal-setting while receiving guidance through transitions between homeschool and traditional school.", meta:"Executive skills · Accountability · Transition planning", image:"/service-academic-coaching-transitions.jpeg" },
  { title:"Homeschool Portfolio Evaluation", text:"Receive a thoughtful, comprehensive review of your learner’s academic work and documentation.", meta:"Portfolio review · Progress summary · Next steps", image:"/service-homeschool-portfolio.jpeg" },
];

export default function ServicesPage(){return <main><SiteHeader/><section className="page-hero"><p className="eyebrow">Our services</p><h1>Personalized support for every step forward.</h1><p>Choose focused academic instruction, confidence-building coaching, test preparation, or transition guidance.</p></section>
<section className="detail-grid service-detail-grid section">{items.map(({title,text,meta,image},i)=><article key={title}><div className="service-image" style={{backgroundImage:`url('${image}')`}} role="img" aria-label={`${title} learning support`} /><div className="service-detail-copy"><span>0{i+1}</span><h2>{title}</h2><p>{text}</p><small>{meta}</small><a href={`/contact?service=${encodeURIComponent(title)}`}>Ask about this service →</a></div></article>)}</section>
<section className="format-grid section soft"><article><span>01</span><h2>In-person learning</h2><p>A calm, focused environment with direct guidance, hands-on practice, and space to think aloud. Located in Florida, we serve Riverview, Apollo Beach, Ruskin, Tampa, Town &amp; Country, Carrollwood, and surrounding areas. Any applicable travel fee is discussed before services begin.</p><ul><li>Personalized, real-time support</li><li>Hands-on learning tools</li><li>Individual and small-group options</li></ul></article><article><span>02</span><h2>Online sessions</h2><p>Convenient, interactive instruction from home using shared screens, digital whiteboards, and engaging resources.</p><ul><li>Flexible location and scheduling</li><li>Interactive digital tools</li><li>Seamless family convenience</li></ul></article></section>
<section className="content-split section"><div><p className="eyebrow">What to expect</p><h2>A clear plan, shaped around your learner.</h2></div><div><ol className="process-list"><li><strong>Connect</strong><span>Tell us about your learner, goals, and schedule.</span></li><li><strong>Plan</strong><span>We recommend the right service, format, and starting point.</span></li><li><strong>Grow</strong><span>Your learner receives focused support and encouraging feedback.</span></li></ol></div></section>
<section className="page-cta"><h2>Not sure which service fits?</h2><p>That&apos;s completely okay. Tell us what you&apos;re noticing and we&apos;ll help you choose.</p><a className="button button-light" href="/contact">Find the right support</a></section><SiteFooter/></main>}
