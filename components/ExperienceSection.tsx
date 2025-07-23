import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
import { Github, Globe } from "lucide-react";

const ExperienceSection = () => {
  return (
    <div className="mt-20">
      <p className="text-5xl font-bold text-center mb-28">Experience</p>
      <div className="flex flex-col gap-40">
        {/* Azodha */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-start">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-2 mb-4">
                <Image
                  src="https://azodha.com/logo1.svg"
                  alt="Azodha Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <LinkPreview url="https://azodha.com">
                <div className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-3 py-2 cursor-pointer mb-4">
                  <Globe className="h-5 w-5 text-white" />
                  <p className="text-sm text-white">Website</p>
                </div>
              </LinkPreview>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">SDE Intern (Backend) Dec 2024 – Present</h3>
              <p className="text-lg mb-4">Azodha Pune, India (Hybrid)</p>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-100">
            <li>Assisted with the integration of <strong className="underline underline-offset-2">OpenEMR and ECW</strong> systems into our platform for smooth data sharing.</li>
            <li>Developed custom logic for <strong className="underline underline-offset-2">Welkin EMR</strong>, allowing automatic creation of <strong className="underline underline-offset-2">100ms links</strong> for patient sessions.</li>
            <li>Contributed to building <strong className="underline underline-offset-2">Voice Agents</strong> with LiveKit, Deepgram, and OpenAI&apos;s realtime model for automating reminders and verifying users.</li>
            <li>Helped design and deploy <strong className="underline underline-offset-2">RBAC middleware</strong> to protect patient information, maintaining <strong className="underline underline-offset-2">HIPAA</strong> standards and blocking unauthorized entry in EMR setups.</li>
            <li>Set up a <strong className="underline underline-offset-2">token caching system for Lambda using DynamoDB</strong> to optimize expenses.</li>
            <li>Worked together on integrating <strong className="underline underline-offset-2">Zoho Desk and CRM</strong> with our system.</li>
            <li>Created <strong className="underline underline-offset-2">automated processes</strong> for handling Zoho ticket generation and scheduling recurring appointments.</li>
            <li>Engaged in <strong className="underline underline-offset-2">production support</strong> and troubleshooting with <strong className="underline underline-offset-2">DataDog</strong> and <strong className="underline underline-offset-2">Signoz</strong> logs, aiding in fixing key problems.</li>
            <li>Improved database efficiency by examining Prisma queries via <strong className="underline underline-offset-2">explain analyze</strong>, boosting response times by <strong className="underline underline-offset-2">20%</strong> through better indexing.</li>
            <li><strong className="underline underline-offset-2">Refactored</strong> legacy code to meet <strong className="underline underline-offset-2">industry best practices</strong> and teamed up with experienced engineers on designing features and architecture.</li>
          </ul>
        </div>
        {/* YourBot */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-start">
            <div className="flex flex-col items-center">
              <svg width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <rect width="40" height="40" rx="8" fill="#3B82F6"/>
                <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 28C17.7909 28 16 26.2091 16 24C16 21.7909 17.7909 20 20 20C22.2091 20 24 21.7909 24 24C24 26.2091 22.2091 28 20 28Z" fill="white"/>
              </svg>
              <div className="flex gap-2">
                <LinkPreview url="https://yourbot.ayushoswal.live">
                  <div className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-3 py-2 cursor-pointer">
                    <Globe className="h-5 w-5 text-white" />
                    <p className="text-sm text-white">Live</p>
                  </div>
                </LinkPreview>
                <LinkPreview url="https://github.com/ayush-oswal/Yourbot">
                  <div className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-3 py-2 cursor-pointer">
                    <Github className="h-5 w-5 text-white" />
                    <p className="text-sm text-white">Github</p>
                  </div>
                </LinkPreview>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">YourBot</h3>
              <p className="text-lg mb-4">System Design, AWS Lambda, S3, SQS, ECR, SAM, FastAPI, Pinecone, PostgreSQL</p>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-100">
            <li>Designed a <strong className="underline underline-offset-2">serverless microservices</strong> setup with <strong className="underline underline-offset-2">3 AWS Lambda services</strong> via <strong className="underline underline-offset-2">SAM templates</strong> and <strong className="underline underline-offset-2">ECR</strong>, cutting infrastructure costs by <strong className="underline underline-offset-2">600%</strong>.</li>
            <li>Created <strong className="underline underline-offset-2">custom shell scripts</strong> to adapt <strong className="underline underline-offset-2">Prisma binaries</strong> for Lambda compatibility and implemented AWS Lambda web adapter for <strong className="underline underline-offset-2">streaming responses</strong>.</li>
            <li>Built an advanced <strong className="underline underline-offset-2">RAG pipeline</strong> using <strong className="underline underline-offset-2">JinaAI embeddings</strong> and <strong className="underline underline-offset-2">Pinecone vector database</strong> for semantic searches, handling PDF/text with a <strong className="underline underline-offset-2">0.20 similarity threshold</strong>.</li>
            <li>Added a <strong className="underline underline-offset-2">multi-LLM fallback system</strong> with <strong className="underline underline-offset-2">DeepSeek</strong> as main and <strong className="underline underline-offset-2">Gemini 2.0</strong> as secondary to maintain service during rate limits.</li>
            <li>Developed a full <strong className="underline underline-offset-2">token economy system</strong> providing <strong className="underline underline-offset-2">25,000 default tokens</strong> per user, tracking usage, and sending alerts through <strong className="underline underline-offset-2">SMTP email</strong>.</li>
            <li>Implemented an <strong className="underline underline-offset-2">API key-based</strong> chatbot integration with an analytics dashboard for monitoring interactions and easy website embedding.</li>
            <li>Incorporated <strong className="underline underline-offset-2">SQS queues</strong> featuring <strong className="underline underline-offset-2">retry mechanisms</strong> and <strong className="underline underline-offset-2">DLQs</strong> for reliable, fault-tolerant operations.</li>
            <li>Introduced a <strong className="underline underline-offset-2">contextualized chunking</strong> approach with <strong className="underline underline-offset-2">50</strong> chunk overlap to preserve chunk relationships and enhance retrieval speed by <strong className="underline underline-offset-2">25%</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection; 