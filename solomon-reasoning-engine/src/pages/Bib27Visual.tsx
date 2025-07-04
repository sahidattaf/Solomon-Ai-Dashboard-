import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

const wisdomThreads = [
  {
    id: 1,
    title: "Genesis of Reason",
    tags: ["@Covenant", "@Creation"],
    text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
  },
  {
    id: 2,
    title: "Law as Structure",
    tags: ["@Law", "@Order"],
    text: "The law of the Lord is perfect, reviving the soul.",
  },
  {
    id: 3,
    title: "Prophetic Flow",
    tags: ["@Prophecy", "@Voice"],
    text: "Your sons and daughters shall prophesy, your old men shall dream dreams...",
  },
  {
    id: 4,
    title: "Wisdom Embodied",
    tags: ["@Wisdom", "@Messiah"],
    text: "Christ the power of God and the wisdom of God.",
  },
];

export default function Bib27Visual() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {wisdomThreads.map((thread, index) => (
        <motion.div
          key={thread.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Card
            className={`rounded-2xl shadow-md p-4 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              selected === thread.id ? "bg-indigo-100" : "bg-white"
            }`}
            onClick={() => setSelected(thread.id === selected ? null : thread.id)}
          >
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{thread.title}</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {thread.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              {selected === thread.id && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-700 text-sm"
                >
                  {thread.text}
                </motion.p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

