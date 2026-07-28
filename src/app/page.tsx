import ContactForm from "@/components/ContactForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const services = [
  {
    number: "01",
    title: "Math K–12",
    text: "Personalized math support that meets students where they are, strengthens foundational skills, and builds confident problem-solvers.",
  },
  {
    number: "02",
    title: "Reading K–6",
    text: "Engaging, age-appropriate instruction that develops fluency, comprehension, vocabulary, and a lasting love of reading.",
  },
  {
    number: "03",
    title: "Spanish K–12+",
    text: "Supportive Spanish instruction for beginners through advanced learners, focused on practical communication and academic success.",
  },
  {
    number: "04",
    title: "Academic Success",
    text: "Coaching for organization, study habits, goal-setting, and school transitions so students can move forward with clarity.",
  },
];

const posts = [
  {
    tag: "Reading",
    title: "Boost Your Child's Reading Skills with Effective Tutoring",
    text: "Discover how personalized instruction can strengthen skills, reduce frustration, and renew a child's confidence.",
    href: "https://www.solriselearning.org/post/boost-your-child-s-reading-skills-with-effective-tutoring",
  },
  {
    tag: "Mathematics",
    title: "Top Tips for K–12 Math Success at Home",
    text: "Practical ways families can create a positive learning environment and help math skills grow at home.",
    href: "https://www.solriselearning.org/post/top-tips-for-k-12-math-success-at-home",
  },
  {
    tag: "Wellness",
    title: "Nourishing Young Minds: Healthy Eating for Academic Growth",
    text: "Explore the connection between nutrition, concentration, cognitive function, and academic performance.",
    href: "https://www.solriselearning.org/post/nourishing-young-minds-healthy-eating-for-academic-growth",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Personalized learning. Lifelong confidence.</p>
          <h1>Where confidence <em>rises</em> and minds shine.</h1>
          <p className="hero-intro">
            Engaging tutoring, academic coaching, and enrichment that helps every
            student build skills, believe in themselves, and discover their full potential.
          </p>
          <div className="hero-actions">
            <a className="button" href="#services">Explore services</a>
            <a className="button button-secondary" href="/about">Why families choose SolRise <span>→</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>K–12+</strong><span>Learning support</span></div>
            <div><strong>20+</strong><span>Years of experience</span></div>
            <div><strong>2 ways</strong><span>In person & online</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="sun-shape" />
          <div className="hero-media">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster="/solrise-hero-poster.avif"
              aria-label="SolRise Learning Academy students learning together"
            >
              <source src="/solrise-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="floating-note">Learning designed around <strong>your child.</strong></div>
        </div>
      </section>

      <section className="mission" id="about">
        <p className="eyebrow">Why SolRise</p>
        <h2>Learning should feel personal, empowering, and full of possibility.</h2>
        <p>
          We are passionate educators who want to continue serving students and
          families beyond the traditional classroom. In a supportive and caring
          environment, we help students strengthen skills, build confidence, and
          become curious, resilient learners.
        </p>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">Our services</p><h2>Support for every step forward.</h2></div>
          <p>Thoughtful, student-centered instruction tailored to individual strengths, goals, and learning styles.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact" aria-label={`Ask about ${service.title}`}>Ask about this service <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="student-moments section">
        <div className="section-heading"><div><p className="eyebrow">SolRisers in action</p><h2>Practice becomes progress.</h2></div><p>Focused instruction, useful tools, and encouraging moments help learners turn effort into confidence.</p></div>
        <div className="moments-grid">
          <figure className="moment moment-wide"><div style={{backgroundImage:"url('/students-math-practice.jpg')"}} role="img" aria-label="Two SolRise students practicing math together" /><figcaption>Learning side by side</figcaption></figure>
          <figure className="moment"><div style={{backgroundImage:"url('/student-whiteboard-practice.jpg')"}} role="img" aria-label="Student solving math problems on a whiteboard" /><figcaption>Thinking made visible</figcaption></figure>
          <figure className="moment"><div style={{backgroundImage:"url('/student-math-confidence.jpg')"}} role="img" aria-label="Smiling SolRise student with completed math practice" /><figcaption>Confidence worth celebrating</figcaption></figure>
          <figure className="moment moment-wide"><div style={{backgroundImage:"url('/student-digital-learning.jpg')"}} role="img" aria-label="Student smiling during a digital learning activity" /><figcaption>Tools that keep learning engaging</figcaption></figure>
        </div>
      </section>
      <section className="educators section">
        <div className="educator-intro">
          <p className="eyebrow">Our dedicated educators</p>
          <h2>High expectations. Personal support. A whole lot of heart.</h2>
          <p>Meet the educators helping students rise academically while fostering resilience, self-belief, and lifelong success.</p>
        </div>
        <article className="educator-card">
          <div className="portrait dianne" role="img" aria-label="Dianne Gonzalez" />
          <div>
            <span>FOUNDER</span>
            <h3>Dianne Gonzalez</h3>
            <p>Dianne Gonzalez is the founder of SolRise Learning Academy and a highly respected certified math educator who believes that every student has the ability to learn, grow, and thrive. With a passion for education and a heart for student success, Dianne is dedicated to creating meaningful learning experiences that build confidence, strengthen skills, and inspire a love of learning. Her student-centered approach combines high expectations with personalized support, empowering learners to overcome challenges, reach their goals, and realize their full potential. Through SolRise, Dianne is committed to helping students rise academically while fostering resilience, self-belief, and lifelong success.</p>
          </div>
        </article>
        <article className="educator-card reverse">
          <div className="portrait yamilka" role="img" aria-label="Yamilka Delgardo" />
          <div>
            <span>EDUCATOR</span>
            <h3>Yamilka Delgardo, M.Ed.</h3>
            <p>Yamilka Delgardo, M.Ed. is a certified educator with over 20 years of experience and a passion for helping students reach their full potential. Known for her energetic and engaging teaching style, she excels at finding the perfect balance between meaningful learning and fun. Yamilka believes that every student can succeed and is committed to creating a supportive environment where learners build confidence, develop strong academic skills, and discover a genuine love for learning. With high expectations and a student-centered approach, she challenges students to grow while providing the encouragement and guidance they need to thrive.</p>
          </div>
        </article>
      </section>

      <section className="transitions">
        <div>
          <p className="eyebrow light">Academic excellence</p>
          <h2>Clear guidance for seamless transitions.</h2>
        </div>
        <div className="transition-list">
          <article><span>01</span><div><h3>Homeschool Portfolio Evaluation</h3><p>Comprehensive assessment of your child&apos;s academic journey to help ensure their portfolio is complete, rigorous, and ready for the next step.</p></div></article>
          <article><span>02</span><div><h3>Academic Transition Management</h3><p>Expert guidance through the move from homeschooling to a traditional school setting, including logistics, planning, and curriculum alignment.</p></div></article>
        </div>
      </section>

      <section className="learning section" id="learning">
        <div className="section-heading"><div><p className="eyebrow">Flexible by design</p><h2>Learn in the way that works best.</h2></div></div>
        <div className="learning-grid">
          <article className="learning-card in-person">
            <div className="learning-image" />
            <div><span>01</span><h3>In-Person Learning</h3><p>Face-to-face support in a focused academic studio, with personalized attention and space for collaborative learning.</p><a href="#contact">Book a session →</a></div>
          </article>
          <article className="learning-card online">
            <div className="learning-image" />
            <div><span>02</span><h3>Online Sessions</h3><p>Flexible, high-tech learning from home with seamless connectivity and interactive tools for busy families and homeschoolers.</p><a href="#contact">Explore online →</a></div>
          </article>
        </div>
      </section>

      <section className="family-stories section">
        <div className="review-summary"><strong>100%</strong><span>recommend SolRise</span><small>Based on 11 Facebook recommendations shared by families</small></div>
        <div className="section-heading"><div><p className="eyebrow">Family feedback</p><h2>Progress families can see and feel.</h2></div><p>Families consistently share that focused support helps improve skills, reduce homework stress, and rebuild confidence.</p></div>
        <div className="review-grid">
          <blockquote><span>★★★★★</span><p>“She helped my daughter bring her grade back up in a very short amount of time. We couldn&apos;t be happier.”</p><cite>— Jennifer Ragland</cite></blockquote>
          <blockquote><span>★★★★★</span><p>“After just one hour, we noticed a significant improvement in her confidence. She is looking forward to her next tutoring session.”</p><cite>— Jennifer Lee</cite></blockquote>
          <blockquote><span>★★★★★</span><p>“Her support led to noticeable improvements in his math skills and significantly reduced the stress associated with homework.”</p><cite>— Angela Alvarez</cite></blockquote>
          <blockquote><span>★★★★★</span><p>“What was once a source of frustration has become a subject of confidence and pride. Our girls feel comfortable asking questions and making mistakes.”</p><cite>— Cassandra Griffin</cite></blockquote>
          <blockquote><span>★★★★★</span><p>“He looked forward to summer math tutoring and is heading into sixth grade with a strong foundation and a positive attitude toward math.”</p><cite>— Gabriella McColeman</cite></blockquote>
          <blockquote><span>★★★★★</span><p>“She explains how it all works, makes sure he understands what he is looking at, and will also be tutoring him for SAT preparation.”</p><cite>— Adrianna Ball</cite></blockquote>
        </div>
      </section>
      <section className="resources section" id="resources">
        <div className="section-heading">
          <div><p className="eyebrow">Learning & wellness</p><h2>Ideas to help young minds flourish.</h2></div>
          <p>Educational guidance and wellness tips for families supporting an academic journey.</p>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <a className="post-card" href={post.href} key={post.title} target="_blank" rel="noreferrer">
              <span>{post.tag}</span><h3>{post.title}</h3><p>{post.text}</p><strong>Read article →</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro">
          <p className="eyebrow light">Start the conversation</p>
          <h2>Ready to help your student rise?</h2>
          <p>Tell us a little about your learner and what support you&apos;re looking for. We&apos;ll help you find a thoughtful next step.</p>
          <div className="contact-links"><a href="mailto:solriselearning@gmail.com">solriselearning@gmail.com</a><a href="tel:+18138420668">(813) 842-0668</a></div>
        </div>
        <ContactForm />
      </section>

      <SiteFooter />
    </main>
  );
}
