import React, { useState } from "react";

const objectionScenarios = [
  {
    title: "We already do our own lead generation",
    response: `That's great — what method are you using, and how is it working for you? Many of our clients started with CRMs and cold calling too, but Kevin's system handles high-volume email (3k/day) with strong deliverability. Let’s get you on a quick call with him so he can show how your current system compares live, and share real prospects.`,
  },
  {
    title: "This sounds complicated",
    response: `It might sound like a lot at first, but once it's set up, the entire system is automated and requires just ~20 minutes a week. Kevin trains your team personally, and handles everything from server setup to copywriting.`,
  },
  {
    title: "We’re tight on money",
    response: `Understood. Let’s start with seeing your prospect list and hearing what Kevin has to say. From there, he can walk you through flexible options based on your setup. We’re focused on ROI — 3k emails/day means serious volume and opportunity.`,
  },
];

export default function App() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="p-6 max-w-2xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">SDR Objection Handling</h1>
      {objectionScenarios.map((scenario, idx) => (
        <div key={idx} className="mb-4 border rounded-xl shadow p-4">
          <button
            className="w-full text-left font-semibold text-lg"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            {scenario.title}
          </button>
          {expanded === idx && (
            <p className="mt-2 text-gray-700 whitespace-pre-line">
              {scenario.response}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}