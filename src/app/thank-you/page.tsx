import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="thank-you">
      <div>
        <p className="eyebrow">Message received</p>
        <h1>Thank you for reaching out.</h1>
        <p>
          We&apos;re excited to learn more about your student. A member of the
          SolRise team will follow up with you soon.
        </p>
        <Link className="button" href="/#top">Return home</Link>
      </div>
    </main>
  );
}
