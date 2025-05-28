import Container from "@/components/ui/Container";
import React from "react";

export default function Page() {
  return (
    <main>
      <Container className="my-10 max-w-3xl mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
          Full Stack Web Developer | React.js, Next.js, Nest.js, Express.js | Passionate about Building & Sharing Code | Open to Remote Projects
        </h1>

        {/* Description as bullet points */}
        <ul className="text-gray-700 text-left list-disc list-inside space-y-4 leading-relaxed text-sm sm:text-base">
          <li>
            Hi, I'm a Full Stack Web Developer with a passion for building clean, high-performance, and scalable web applications. My stack revolves around React.js, Next.js, Nest.js, Express.js.
          </li>
          <li>
            I specialize in creating responsive UIs and robust backend systems, always aiming to deliver smooth user experiences and optimized performance.
          </li>
          <li>
            Outside of development, I create short programming content on Instagram, sharing beginner-friendly tips, clean code snippets, and real-world examples. I love making tech accessible to everyone!
          </li>
          <li>
            I am always open to freelance projects, remote collaborations, or just connecting with like-minded developers. Let’s build something amazing together!
          </li>
        </ul>
      </Container>
    </main>
  );
}