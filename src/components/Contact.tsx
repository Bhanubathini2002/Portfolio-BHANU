import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";
import Icon, { IconName } from "./Icon";
import { links } from "../data/content";

type FormState = { name: string; reach: string; message: string };
type Status = "idle" | "sending" | "sent" | "failed";

const EMPTY: FormState = { name: "", reach: "", message: "" };

const ERROR_TEXT: Record<keyof FormState, string> = {
  name: "Enter your name",
  reach: "Enter an email or phone number",
  message: "Write a message",
};

const STATUS_TEXT: Record<Status, string> = {
  idle: "",
  sending: "Sending",
  sent: "Message sent",
  failed: `Could not send. Email ${links.email} directly.`,
};

const reachLinks: { icon: IconName; label: string; href: string; external?: boolean }[] = [
  { icon: "mail", label: links.email, href: `mailto:${links.email}` },
  { icon: "phone", label: links.phoneLabel, href: `tel:${links.phoneHref}` },
  { icon: "github", label: "GitHub", href: links.github, external: true },
  { icon: "linkedin", label: "LinkedIn", href: links.linkedin, external: true },
];

export function validate(form: FormState): Record<keyof FormState, boolean> {
  return {
    name: form.name.trim() === "",
    reach: form.reach.trim() === "",
    message: form.message.trim() === "",
  };
}

function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState({ name: false, reach: false, message: false });
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: false }));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("sending");
    try {
      await emailjs.send(
        "service_214yk41",
        "template_c47d30c",
        { name: form.name, email: form.reach, message: form.message },
        { publicKey: "i8IEKmZnyv_M2hWht" }
      );
      setForm(EMPTY);
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS failed:", err);
      setStatus("failed");
    }
  };

  const field = (key: keyof FormState, label: string, multiline = false) => (
    <div className={`field${errors[key] ? " err" : ""}`}>
      <label htmlFor={`f-${key}`}>{label}</label>
      {multiline ? (
        <textarea id={`f-${key}`} value={form[key]} onChange={update(key)} aria-invalid={errors[key]} />
      ) : (
        <input id={`f-${key}`} value={form[key]} onChange={update(key)} aria-invalid={errors[key]} />
      )}
      <span className="hint">{errors[key] ? ERROR_TEXT[key] : ""}</span>
    </div>
  );

  return (
    <section className="block" id="contact" aria-labelledby="contact-heading">
      <div className="wrap contact">
        <div>
          <h2 id="contact-heading">Contact</h2>
          <p className="contact-lede">Send a note about a project or a role.</p>
          <ul className="reach">
            {reachLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <Icon name={item.icon} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} noValidate>
          <div className="pair">
            {field("name", "Name")}
            {field("reach", "Email or phone")}
          </div>
          {field("message", "Message", true)}
          <div className="form-foot">
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>Send message</button>
            <span className="form-status" role="status">{STATUS_TEXT[status]}</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
