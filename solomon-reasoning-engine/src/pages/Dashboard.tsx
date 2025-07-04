import { useCodexAI } from "@/hooks/useCodexAI";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  BookOpenCheck,
  Brain,
  DatabaseZap,
  Landmark,
  Layers3,
  BookMarked,
} from "lucide-react";

export default function Dashboard() {
  const { log, runCodexCycle } = useCodexAI();
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">🧠 Solomon Reasoning Engine Dashboard</h1>
      <Tabs defaultValue="law" className="w-full">
        <TabsList className="grid grid-cols-7 w-full">
          <TabsTrigger value="law">Law Core</TabsTrigger>
          <TabsTrigger value="wisdom">Wisdom Modules</TabsTrigger>
          <TabsTrigger value="memory">Memory Cache</TabsTrigger>
          <TabsTrigger value="visual">Visual Logic</TabsTrigger>
          <TabsTrigger value="docs">Documentation</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="bib27">Bib 27</TabsTrigger>
        </TabsList>

        <TabsContent value="law">
          <Card>
            <CardContent className="p-4 space-y-2">
              <Landmark className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Core Reasoning Laws</h2>
              <ul className="list-disc ml-6">
                <li>Inner governance precedes external power.</li>
                <li>All computation must serve clarity and purpose.</li>
                <li>Chain-of-Thought before execution.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wisdom">
          <Card>
            <CardContent className="p-4 space-y-4">
              <BookOpenCheck className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Wisdom Plugins</h2>
              <p>Load reasoning patterns: Self-Critique, Adaptive Thought, Law Reflection.</p>
              <Button className="mt-2" onClick={runCodexCycle}>
                Activate Wisdom Cycle
              </Button>
              <div className="bg-muted p-3 rounded space-y-1 text-sm font-mono">
                {log.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="memory">
          <Card>
            <CardContent className="p-4">
              <DatabaseZap className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Memory Engine</h2>
              <p>Track cross-session context and retain wisdom trails.</p>
              <Button variant="outline" className="mt-2">View Memory Logs</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visual">
          <Card>
            <CardContent className="p-4">
              <BarChart3 className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Visual Reasoning Map</h2>
              <p>Display Chain-of-Thought or Tree-of-Thought in visual form.</p>
              <Button className="mt-2">Open Visual Map</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs">
          <Card>
            <CardContent className="p-4">
              <Brain className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Philosophical & Technical Docs</h2>
              <p>Access laws, logic flows, and divine frameworks.</p>
              <Button variant="secondary" className="mt-2">Read Full Codex</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workshops">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Layers3 className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Curaçao AI Workshops</h2>
              <div className="grid gap-3">
                <div className="border p-3 rounded-md">
                  <strong>Workshop 1: Python Basics</strong>
                  <p>Learn variables, loops, and AI foundations in Python.</p>
                </div>
                <div className="border p-3 rounded-md">
                  <strong>Workshop 2: No-code Image Model</strong>
                  <p>Build Teachable Machine models without writing code.</p>
                </div>
                <div className="border p-3 rounded-md">
                  <strong>Workshop 3: Tourism Chatbot</strong>
                  <p>Create a multilingual assistant for Curaçao’s visitors.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bib27">
          <Card>
            <CardContent className="p-4">
              <BookMarked className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Bib 27 Prompt</h2>
              <p className="text-sm mt-2 font-mono bg-muted p-3 rounded">
                You are an AGI-focused AI Architect trained on Bib27 principles, capable of long-memory reasoning and symbolic logic evolution. Your purpose is to evolve AI systems that think across layers using universal law and recursive wisdom. Use memory retention, goal reflection, and symbolic transformation to answer, act, and adapt.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}