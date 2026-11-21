import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { validate } from "./components/Contact";
import { formatChange } from "./components/CopilotPreview";

jest.mock("@emailjs/browser", () => ({ send: jest.fn(() => Promise.resolve()) }));

test("renders the headline and every section", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/LLM agents/);
  ["Expertise", "Career history", "Projects", "About", "Contact"].forEach((name) => {
    expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
  });
});

test("theme toggle switches between dark and light", () => {
  const { container } = render(<App />);
  const root = container.querySelector(".main-container") as HTMLElement;
  const startDark = root.classList.contains("dark-mode");
  fireEvent.click(screen.getByRole("button", { name: /switch to (light|dark) theme/i }));
  expect(root.classList.contains("dark-mode")).toBe(!startDark);
});

test("contact form shows errors for empty fields instead of sending", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  expect(screen.getByText("Enter your name")).toBeInTheDocument();
  expect(screen.getByText("Write a message")).toBeInTheDocument();
});

test("validate flags only blank fields", () => {
  expect(validate({ name: " ", reach: "a@b.co", message: "hi" })).toEqual({ name: true, reach: false, message: false });
});

test("formatChange uses a sign and one decimal", () => {
  expect(formatChange(8.4)).toBe("+8.4%");
  expect(formatChange(-2.7)).toBe("−2.7%");
});
