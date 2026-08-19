"use client";

import { FocusEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const US_PHONE_MESSAGE = "Enter a valid US phone number, including the 3-digit area code.";

function validateUsPhone(input: HTMLInputElement) {
  const phoneNumber = parsePhoneNumberFromString(input.value, "US");
  const isValidUsNumber = phoneNumber?.country === "US" && phoneNumber.isValid();
  input.setCustomValidity(input.value && !isValidUsNumber ? US_PHONE_MESSAGE : "");
  return isValidUsNumber ? phoneNumber : undefined;
}

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function handlePhoneBlur(event: FocusEvent<HTMLInputElement>) {
    const phoneNumber = validateUsPhone(event.currentTarget);
    if (phoneNumber) event.currentTarget.value = phoneNumber.formatNational();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const isTranslatedPage = window.location.hostname.endsWith(".translate.goog");
      const submissionUrl = isTranslatedPage
        ? "https://solriselearning.netlify.app/__forms.html"
        : "/__forms.html";
      const response = await fetch(submissionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        mode: isTranslatedPage ? "no-cors" : "same-origin",
      });

      if (!isTranslatedPage && !response.ok) throw new Error("Submission failed");
      if (isTranslatedPage) {
        const thankYouUrl = new URL("/thank-you/", window.location.origin);
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.forEach((value, key) => {
          if (key.startsWith("_x_tr_")) thankYouUrl.searchParams.append(key, value);
        });
        window.location.assign(thankYouUrl.href);
        return;
      }
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" name="student-inquiry" method="POST" action="https://solriselearning.netlify.app/__forms.html" onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="student-inquiry" />
      <p className="hidden-field"><label>Do not fill this out: <input name="bot-field" /></label></p>

      <fieldset>
        <legend><span>1</span> Tell us about you</legend>
        <div className="form-row">
          <label>Your name<input type="text" name="parent-name" autoComplete="name" required /></label>
          <label>Email address<input type="email" name="email" autoComplete="email" required /></label>
        </div>
        <div className="form-row">
          <label>Phone number<input type="tel" name="phone" autoComplete="tel-national" inputMode="tel" maxLength={18} placeholder="(813) 555-0123" onInput={(event) => validateUsPhone(event.currentTarget)} onBlur={handlePhoneBlur} onInvalid={(event) => validateUsPhone(event.currentTarget)} required /></label>
          <label>Best way to reach you
            <select name="contact-preference" defaultValue="Email">
              <option>Email</option><option>Phone call</option><option>Text message</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend><span>2</span> Tell us about your learner</legend>
        <div className="form-row">
          <label>Student&apos;s first name and last initial<input type="text" name="student-name" autoComplete="name" placeholder="Example: Jordan S." required /></label>
          <label>Current grade
            <select name="grade" defaultValue="" required>
              <option value="" disabled>Select grade</option>
              <option>Kindergarten</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option>
              <option>Grade 4</option><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option>
              <option>Grade 8</option><option>Grade 9</option><option>Grade 10</option><option>Grade 11</option>
              <option>Grade 12</option><option>College / Adult learner</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend><span>3</span> What support would help?</legend>
        <label>Primary area of interest
          <select name="service" defaultValue="" required>
            <option value="" disabled>Choose the closest match</option>
            <option>Math K–12+</option><option>Reading K–6</option><option>Spanish K–12+</option>
            <option>Math Test Prep</option>
            <option>Academic coaching &amp; transition support</option><option>Homeschool portfolio evaluation</option>
            <option>I&apos;m not sure yet</option>
          </select>
        </label>
        <div className="choice-group">
          <span>Preferred learning format</span>
          <div><label><input type="radio" name="format" value="In person" required /> In person</label><label><input type="radio" name="format" value="Online" /> Online</label><label><input type="radio" name="format" value="Either" /> Either works</label></div>
        </div>
        <label>What would you most like your learner to gain?
          <textarea name="goals" rows={5} placeholder="Share any challenges, goals, or questions. A few sentences is perfect." required />
        </label>
      </fieldset>
      <div className="choice-group">
        <span>Privacy and authorization</span>
        <div>
          <label>
            <input type="checkbox" name="privacy-authorization" value="Confirmed" required /> I confirm that I am the student&apos;s parent or legal guardian, or that I am an adult student, and I authorize SolRise Learning Academy to use this information to respond to my inquiry.
          </label>
        </div>
      </div>
      <p className="form-note">This form is intended for a parent, legal guardian, or adult student. Information submitted will be used only to respond to your inquiry and evaluate appropriate learning support. Please do not include Social Security numbers, medical records, or other sensitive information.</p>
      <p className="form-note">We&apos;ll review your message and follow up with a thoughtful next step. No commitment required.</p>
      {status === "error" && <p className="form-error" role="alert">We couldn&apos;t send your inquiry. Please try again, email solriselearning@gmail.com, or call (813) 842-0668.</p>}
      <button className="button button-light" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send my inquiry"}
      </button>
    </form>
  );
}
