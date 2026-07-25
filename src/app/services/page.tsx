import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const items = [
  ["Math K–12","Build number sense, close skill gaps, strengthen coursework, and grow into a confident problem-solver through clear, personalized instruction.","Foundations · Algebra · Geometry · Homework support"],
  ["Reading K–6","Develop phonics, fluency, vocabulary, and comprehension through engaging lessons designed around each reader.","Early literacy · Comprehension · Writing connections"],
  ["Spanish K–12+","Learn practical communication and academic Spanish in a welcoming setting for beginners through advanced learners.","Conversation · Grammar · Coursework support"],
  ["Academic Success Coaching","Create reliable systems for organization, study habits, planning, and goal-setting so school feels more manageable.","Executive skills · Study plans · Accountability"],
  ["Homeschool Portfolio Evaluation","Receive a thoughtful, comprehensive review of your learner&apos;s academic work and documentation.","Portfolio review · Progress summary · Next steps"],
  ["Academic Transition Support","Navigate a move between homeschool and traditional school with guidance on planning, records, and curriculum alignment.","Planning · Documentation · Curriculum alignment"],
];
export default function ServicesPage(){return <main><SiteHeader/><section className="page-hero"><p className="eyebrow">Our services</p><h1>Personalized support for every step forward.</h1><p>Choose focused academic instruction, confidence-building coaching, or transition guidance—available in person and online.</p></section>
<section className="detail-grid section">{items.map(([title,text,meta],i)=><article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{text}</p><small>{meta}</small><a href={`/contact?service=${encodeURIComponent(title)}`}>Ask about this service →</a></article>)}</section>
<section className="content-split section soft"><div><p className="eyebrow">What to expect</p><h2>A clear plan, shaped around your learner.</h2></div><div><ol className="process-list"><li><strong>Connect</strong><span>Tell us about your learner, goals, and schedule.</span></li><li><strong>Plan</strong><span>We recommend the right service, format, and starting point.</span></li><li><strong>Grow</strong><span>Your learner receives focused support and encouraging feedback.</span></li></ol></div></section>
<section className="page-cta"><h2>Not sure which service fits?</h2><p>That&apos;s completely okay. Tell us what you&apos;re noticing and we&apos;ll help you choose.</p><a className="button button-light" href="/contact">Find the right support</a></section><SiteFooter/></main>}
