import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Learning Resources for Families",
  description: "Trusted math, reading, Spanish, test-prep, wellness, and parent resources selected for SolRise families.",
  alternates: { canonical: "/resources" },
};

const groups = [
  { title:"Math", intro:"Build skills, review concepts, and practice at your learner’s pace.", links:[
    ["Khan Academy Math","Free lessons and practice from early math through calculus.","https://www.khanacademy.org/math"],
    ["IXL Math","Grade-level math practice with personalized skill recommendations.","https://www.ixl.com/math"],
  ]},
  { title:"Reading", intro:"Support fluency, vocabulary, comprehension, and confident reading habits.", links:[
    ["IXL Language Arts","Reading and language arts practice organized by grade and skill.","https://www.ixl.com/ela"],
    ["ReadWriteThink","Free literacy activities and resources for families and educators.","https://www.readwritethink.org/"],
  ]},
  { title:"Spanish", intro:"Practice vocabulary, listening, and everyday communication.", links:[
    ["Conjuguemos","Interactive Spanish vocabulary, grammar, and verb practice.","https://conjuguemos.com/"],
    ["Language Transfer Spanish","A free audio course focused on understanding how Spanish works.","https://www.languagetransfer.org/complete-spanish"],
  ]},
  { title:"Test Prep", intro:"Use official practice tools to understand each test and prepare with purpose.", links:[
    ["College Board SAT Practice","Official SAT practice, Bluebook tests, and preparation resources.","https://satsuite.collegeboard.org/sat/practice-preparation"],
    ["ACT Test Prep","Official free ACT practice tests, quizzes, and study resources.","https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html"],
    ["Florida FAST Sample & Released Tests","Practice in Florida’s testing platform and access released FAST questions.","https://flfast.org/families.html"],
    ["CLT Practice Tests","Official Classic Learning Test practice and preparation resources.","https://www.cltexam.com/practice/"],
  ]},
];

const tips=[["Build a simple rhythm","Choose a consistent, short practice time. Ten focused minutes often works better than an occasional hour."],["Praise the process","Notice strategies, persistence, and thoughtful questions—not only correct answers."],["Let mistakes teach","Ask “What did this teach us?” and give your learner time to revise before stepping in."],["Read and talk together","Ask what surprised them, what changed, and what they predict. Conversation grows comprehension."],["Protect healthy habits","Sleep, movement, hydration, and balanced meals all support attention and memory."],["Reach out early","A little targeted support can prevent frustration from becoming avoidance or self-doubt."]];

export default function ResourcesPage(){return <main><SiteHeader/><section className="page-hero"><p className="eyebrow">Family resource hub</p><h1>Trusted tools for learning beyond the session.</h1><p>Explore educator-selected practice sites, official test-prep tools, and practical ideas that help learning feel more manageable at home.</p></section>
<section className="resource-groups section">{groups.map(group=><article className="resource-group" key={group.title}><div><p className="eyebrow">Explore</p><h2>{group.title}</h2><p>{group.intro}</p></div><div className="resource-links">{group.links.map(([name,text,href])=><a href={href} target="_blank" rel="noopener noreferrer" key={name}><div><h3>{name}</h3><p>{text}</p></div><span aria-hidden="true">↗</span></a>)}</div></article>)}</section>
<section className="tips-section section soft"><div className="section-heading"><div><p className="eyebrow">Academic tips for parents</p><h2>Small habits make a meaningful difference.</h2></div><p>Your role isn&apos;t to recreate school at home. Create a supportive rhythm, show interest, and help your learner ask for what they need.</p></div><div className="tips-grid">{tips.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
<section className="healthy-habits section"><div><p className="eyebrow">Healthy daily habits</p><h2>Well-being supports learning.</h2><p>Healthy routines can strengthen focus, energy, and confidence. A link to Yamilka&apos;s Vital Health supplement line will be added here as soon as it is available.</p></div><div className="habit-list"><span>Rest</span><span>Hydration</span><span>Movement</span><span>Balanced nutrition</span></div></section>
<section className="page-cta"><h2>Need guidance for a specific challenge?</h2><a className="button button-light" href="/contact">Ask an educator</a></section><SiteFooter/></main>}