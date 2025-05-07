import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p>Want to get in touch?</p>
      <ul className="mt-4 space-y-2">
        <li>Email: <a className="text-blue-600 underline" href="mailto:randywong1993@gmail.com">your.email@example.com</a></li>
        <li>GitHub: <a className="text-blue-600 underline" href="https://github.com/randy-wong">github.com/yourgithub</a></li>
        <li>LinkedIn: <a className="text-blue-600 underline" href="https://www.linkedin.com/in/randy-wong-9915b154/">linkedin.com/in/yourlinkedin</a></li>
      </ul>
    </main>
  );
}
