import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Learning Resources for Families",
  description: "Trusted math, reading, Spanish, test-prep, wellness, and parent resources selected for SolRise families.",
  alternates: { canonical: "/resources" },
};

const groups = [
  { title:"Math", intro:"Build skills, review concepts, and practice at your learner’s pace.", links:[
    ["Math Mammoth Multiplication Tables","Practice one multiplication table, selected combinations, or all tables with immediate feedback.","https://www.mathmammoth.com/practice/multiplication"],
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

const articles = [
  ["Reading","Helping Your Child Become a Reader","Practical ways families can build language, reading habits, and literacy confidence at home.","https://www.readingrockets.org/topics/articles/helping-your-child-become-reader"],
  ["Reading","How Can I Improve My Child’s Reading?","Research-informed ideas for encouraging reading practice through everyday routines and interests.","https://www.readingrockets.org/topics/early-literacy-development/articles/how-can-i-improve-my-childs-reading"],
  ["Mathematics","How to Help Your Child with Math","Stress-free strategies for supporting math learning, confidence, and communication with teachers.","https://www.understood.org/en/articles/how-to-help-your-child-with-math"],
  ["Mathematics","Math Manipulatives: What They Are and How They Work","Learn how simple hands-on objects can make abstract math ideas easier to understand.","https://www.understood.org/en/articles/math-manipulatives"],
  ["Wellness","Ten Tips for Your Child’s Success in School","Healthy habits, family routines, and communication practices that support students throughout the school year.","https://www.healthychildren.org/English/ages-stages/gradeschool/school/pages/Ten-Tips-for-Your-Childs-Success-in-School.aspx"],
  ["Wellness","Why Rest Matters for Your Child","How healthy sleep supports focus, memory, behavior, emotional health, and learning.","https://www.healthychildren.org/English/healthy-living/sleep/Pages/Sleep-and-Mental-Health.aspx"],
];
export default function ResourcesPage(){return <main><SiteHeader/><section className="page-hero"><p className="eyebrow">Family resource hub</p><h1>Trusted tools for learning beyond the session.</h1><p>Explore educator-selected practice sites, official test-prep tools, and practical ideas that help learning feel more manageable at home.</p></section>
<section className="resource-groups section">{groups.map(group=><article className="resource-group" key={group.title}><div><p className="eyebrow">Explore</p><h2>{group.title}</h2><p>{group.intro}</p></div><div className="resource-links">{group.links.map(([name,text,href])=><a href={href} target="_blank" rel="noopener noreferrer" key={name}><div><h3>{name}</h3><p>{text}</p></div><span aria-hidden="true">↗</span></a>)}</div></article>)}</section>
<section className="resources section resource-articles"><div className="section-heading"><div><p className="eyebrow">Learning & wellness</p><h2>Ideas to help young minds flourish.</h2></div><p>Trusted educational guidance and wellness articles for families supporting an academic journey.</p></div><div className="post-grid">{articles.map(([tag,title,text,href])=><a className="post-card" href={href} key={title} target="_blank" rel="noopener noreferrer"><span>{tag}</span><h3>{title}</h3><p>{text}</p><strong>Read article →</strong></a>)}</div></section>
<section className="tips-section section soft"><div className="section-heading"><div><p className="eyebrow">Academic tips for parents</p><h2>Small habits make a meaningful difference.</h2></div><p>Your role isn&apos;t to recreate school at home. Create a supportive rhythm, show interest, and help your learner ask for what they need.</p></div><div className="tips-grid">{tips.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
<section className="resource-video section soft"><div><p className="eyebrow">Featured video</p><h2>Einstein Kids introduction</h2><p>Explore this short introduction shared by the SolRise team as part of our growing collection of resources for families.</p><a className="text-link" href="https://youtu.be/eHCtHvaBB7s" target="_blank" rel="noopener noreferrer">Watch on YouTube →</a></div><div className="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/eHCtHvaBB7s" title="Einstein Kids introduction" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></section>
<section className="healthy-habits section"><div><p className="eyebrow">Healthy daily habits</p><h2>Well-being supports learning.</h2><p>Healthy routines can strengthen focus, energy, and confidence. Families interested in Yamilka&apos;s Vital Health supplement line can explore the collection below.</p><a className="button vital-health-link" href="https://my.vitalhealthglobal.com/yamidelgardo/shop" target="_blank" rel="noopener noreferrer">Visit Vital Health</a></div><div className="habit-list"><span>Rest</span><span>Hydration</span><span>Movement</span><span>Balanced nutrition</span></div></section>
<section className="page-cta"><h2>Need guidance for a specific challenge?</h2><a className="button button-light" href="/contact">Ask an educator</a></section><SiteFooter/></main>}
