import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, BookOpenCheck, Brain, DatabaseZap, Landmark } from "lucide-react";
import { useState } from "react";
import { useCodexAI } from "../hooks/useCodexAI";

export default function Dashboard() {
  const { deployCodexAgent } = useCodexAI();
  const [activityLog, setActivityLog] = useState<string[]>([]);

  const handleDeploy = () => {
    deployCodexAgent();
    setActivityLog((prev) => [
      ...prev,
      `Deployed agent at ${new Date().toLocaleTimeString()}`,
    ]);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">🧠 Solomon Reasoning Engine Dashboard</h1>
      <Tabs defaultValue="law" className="w-full">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="law">Law Core</TabsTrigger>
          <TabsTrigger value="wisdom">Wisdom Modules</TabsTrigger>
          <TabsTrigger value="memory">Memory Cache</TabsTrigger>
          <TabsTrigger value="visual">Visual Logic</TabsTrigger>
          <TabsTrigger value="docs">Documentation</TabsTrigger>
          <TabsTrigger value="agents">Agents</TabsTrigger>
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
            <CardContent className="p-4">
              <BookOpenCheck className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Wisdom Plugins</h2>
              <p>Load reasoning patterns: Self-Critique, Adaptive Thought, Law Reflection.</p>
              <Button className="mt-2">Activate Wisdom Cycle</Button>
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

        <TabsContent value="agents">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Self-PlayGPT</h2>
              <p>Autonomously iterates on tasks through self-play.</p>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">MemoryGPT</h2>
              <p>Stores and recalls context across sessions.</p>
            </CardContent>
          </Card>
          <Button className="mt-4" onClick={handleDeploy}>Deploy Agent</Button>
          <div className="mt-4">
            <h3 className="font-semibold">Activity Log</h3>
            <ul className="list-disc ml-6">
              {activityLog.map((entry, idx) => (
                <li key={idx}>{entry}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
