import { useEffect, useMemo, useState } from "react";

export default function PythonRequestCard() {
  const snippets = [
    // SNIPPET 1
    [
      { text: "# Initialize Salvion session\n", className: "text-[#21483E]" },
      { text: "import ", className: "text-[#A78BFA]" },
      { text: "salvion_sdk ", className: "text-white" },
      { text: "as ", className: "text-[#A78BFA]" },
      { text: "sv\n", className: "text-white" },
      { text: "client = sv.", className: "text-white" },
      { text: "Client", className: "text-[#22D3EE]" },
      { text: "(\n", className: "text-white" },
      { text: "  api_key=", className: "text-white" },
      { text: '"sv_live_••••••••"\n', className: "text-[#FACC15]" },
      { text: ")\n", className: "text-white" },
      { text: "session = client.sessions.", className: "text-white" },
      { text: "create", className: "text-[#22D3EE]" },
      { text: '("real_time")\n', className: "text-[#FACC15]" },
    ],

    // SNIPPET 2
    [
      { text: "# Streaming data\n", className: "text-[#21483E]" },
      { text: "with ", className: "text-[#A78BFA]" },
      { text: "session.", className: "text-white" },
      { text: "stream", className: "text-[#22D3EE]" },
      { text: "() as stream:\n", className: "text-white" },
      { text: "  for ", className: "text-[#A78BFA]" },
      { text: "frame ", className: "text-white" },
      { text: "in ", className: "text-[#A78BFA]" },
      { text: "video_source:\n", className: "text-white" },
      { text: "    insight = stream.", className: "text-white" },
      { text: "push_frame", className: "text-[#22D3EE]" },
      { text: "(frame)\n", className: "text-white" },
    ],

    // SNIPPET 3
    [
      { text: "# Analyze result\n", className: "text-[#21483E]" },
      { text: "if ", className: "text-[#A78BFA]" },
      { text: "insight.risk_score:\n", className: "text-white" },
      { text: "  ", className: "text-white" },
      { text: "print", className: "text-[#22D3EE]" },
      { text: "(", className: "text-white" },
      { text: 'f"Risk: ', className: "text-[#FACC15]" },
      { text: "{insight.risk_score:.2f}", className: "text-white" },
      { text: '"', className: "text-[#FACC15]" },
      { text: ")\n", className: "text-white" },
    ],
  ];

  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tokens = snippets[snippetIndex];

  // 🔥 flatten jadi karakter
  const characters = useMemo(() => {
    return tokens.flatMap((token) =>
      token.text.split("").map((char) => ({
        char,
        className: token.className,
      })),
    );
  }, [tokens]);

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      // typing
      if (charIndex < characters.length) {
        // let delay = Math.random() * 60 + 60;
        let delay = 60;

        // delay lebih lama kalau newline
        if (characters[charIndex]?.char === "\n") delay = 200;

        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1400);
      }
    } else {
      // deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 20);
      } else {
        setIsDeleting(false);

        // random snippet
        setSnippetIndex((prev) => {
          let next;
          do {
            next = Math.floor(Math.random() * snippets.length);
          } while (next === prev);
          return next;
        });
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, characters]);

  return (
    <div className="w-full flex">
      <div className="relative w-full rounded-xl bg-[#0A0F1A] border border-[#1B2A3A] shadow-[0_0_120px_20px_rgba(0,255,255,0.25)]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1B2A3A] bg-[#0B1220] rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs tracking-widest text-gray-400 ml-3">
              PYTHON · REQUESTS
            </span>
          </div>

          <div className="w-5 h-5 rounded border border-gray-500 opacity-60" />
        </div>

        {/* Code */}
        <div className="p-5 h-[200px] font-mono text-xs leading-6 whitespace-pre-wrap">
          {characters.slice(0, charIndex).map((c, i) => (
            <span key={i} className={c.className}>
              {c.char}
            </span>
          ))}

          <span className="animate-pulse text-white">|</span>
        </div>
      </div>
    </div>
  );
}
