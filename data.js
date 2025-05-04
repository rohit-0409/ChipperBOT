const tools = [
    {
        name: "ChatGPT",
        description: "General-purpose AI writer and assistant.",
        developer: "OpenAI",
        likes: 0,
        keywords: ["chatbot", "assistant", "writing", "language", "AI"],
        link: "https://chat.openai.com",
        HaveLiked: false
    },
    {
        name: "Jasper",
        description: "AI writing for blogs, ads, and emails.",
        developer: "Jasper AI",
        likes: 0,
        keywords: ["writing", "copy", "marketing", "blog", "AI"],
        link: "https://www.jasper.ai",
        HaveLiked: false
    },
    {
        name: "Copy.ai",
        description: "Instant AI copy generation for marketers.",
        developer: "CopyAI",
        likes: 0,
        keywords: ["copywriting", "marketing", "content", "generation"],
        link: "https://www.copy.ai",
        HaveLiked: false
    },
    {
        name: "GrammarlyGO",
        description: "Context-aware AI writing assistant.",
        developer: "Grammarly",
        likes: 0,
        keywords: ["writing", "grammar", "assistant", "editor"],
        link: "https://www.grammarly.com/grammarlygo",
        HaveLiked: false
    },
    {
        name: "QuillBot",
        description: "Paraphrasing and grammar correction.",
        developer: "QuillBot",
        likes: 0,
        keywords: ["paraphrasing", "writing", "grammar", "editor"],
        link: "https://quillbot.com",
        HaveLiked: false
    },
    {
        name: "INK Editor",
        description: "SEO-friendly AI writing tool.",
        developer: "INK",
        likes: 0,
        keywords: ["SEO", "writing", "editor", "content"],
        link: "https://inkforall.com",
        HaveLiked: false
    },
    {
        name: "Writesonic",
        description: "Content generator with marketing focus.",
        developer: "Writesonic",
        likes: 0,
        keywords: ["writing", "marketing", "content", "AI"],
        link: "https://writesonic.com",
        HaveLiked: false
    },
    {
        name: "Rytr",
        description: "Lightweight AI content assistant.",
        developer: "Rytr",
        likes: 0,
        keywords: ["writing", "assistant", "content", "generator"],
        link: "https://rytr.me",
        HaveLiked: false
    },
    {
        name: "Sudowrite",
        description: "Creative writing assistant for authors.",
        developer: "Sudowrite",
        likes: 0,
        keywords: ["writing", "creative", "author", "story"],
        link: "https://www.sudowrite.com",
        HaveLiked: false
    },
    {
        name: "HyperWrite",
        description: "AI that writes and completes emails or essays.",
        developer: "HyperWrite",
        likes: 0,
        keywords: ["writing", "email", "assistant", "essay", "AI"],
        link: "https://www.hyperwriteai.com",
        HaveLiked: false
    },
    // Continues with #11–50 in same structure...
    {
        name: "DALL·E 2",
        description: "AI that generates images from text prompts.",
        developer: "OpenAI",
        likes: 0,
        keywords: ["image", "generation", "art", "text-to-image"],
        link: "https://openai.com/dall-e",
        HaveLiked: false
    },
    {
        name: "Midjourney",
        description: "Artistic image generation bot (Discord-based).",
        developer: "Midjourney",
        likes: 0,
        keywords: ["image", "generation", "art", "creative"],
        link: "https://www.midjourney.com",
        HaveLiked: false
    },
    {
        name: "Canva Magic Design",
        description: "Auto-generates designs from a prompt.",
        developer: "Canva",
        likes: 0,
        keywords: ["design", "image", "generator", "graphics"],
        link: "https://www.canva.com/magic-design",
        HaveLiked: false
    },
    {
        name: "RunwayML",
        description: "Image and video editing with AI tools.",
        developer: "Runway",
        likes: 0,
        keywords: ["image", "video", "editing", "inpainting", "AI"],
        link: "https://runwayml.com",
        HaveLiked: false
    },
    {
        name: "Adobe Firefly",
        description: "Text-to-image and style transfer tool.",
        developer: "Adobe",
        likes: 0,
        keywords: ["image", "style", "transfer", "generation"],
        link: "https://firefly.adobe.com",
        HaveLiked: false
    },
    {
        name: "Craiyon",
        description: "Free image generation with text input.",
        developer: "Craiyon",
        likes: 0,
        keywords: ["image", "generation", "free", "creative"],
        link: "https://www.craiyon.com",
        HaveLiked: false
    },
    {
        name: "Artbreeder",
        description: "Mix and evolve faces and artworks.",
        developer: "Artbreeder",
        likes: 0,
        keywords: ["image", "faces", "art", "blend"],
        link: "https://www.artbreeder.com",
        HaveLiked: false
    },
    {
        name: "Fotor AI Image Generator",
        description: "Easy-to-use creative image generation tool.",
        developer: "Fotor",
        likes: 0,
        keywords: ["image", "generation", "creative", "design"],
        link: "https://www.fotor.com/features/ai-image-generator/",
        HaveLiked: false
    },
    {
        name: "Remove.bg",
        description: "Automatically removes image backgrounds.",
        developer: "Kaleido AI",
        likes: 0,
        keywords: ["image", "background", "removal", "editing"],
        link: "https://www.remove.bg",
        HaveLiked: false
    },
    {
        name: "Let's Enhance",
        description: "Upscale and improve photo quality with AI.",
        developer: "Let's Enhance",
        likes: 0,
        keywords: ["image", "enhancement", "upscale", "quality"],
        link: "https://letsenhance.io",
        HaveLiked: false
    },
    {
        name: "Synthesia",
        description: "Create AI avatars that talk from your script.",
        developer: "Synthesia",
        likes: 0,
        keywords: ["video", "avatar", "talking", "presentation"],
        link: "https://www.synthesia.io",
        HaveLiked: false
    },
    {
        name: "Pictory",
        description: "Convert text or blog posts to videos.",
        developer: "Pictory",
        likes: 0,
        keywords: ["video", "text", "conversion", "content"],
        link: "https://pictory.ai",
        HaveLiked: false
    },
    {
        name: "Lumen5",
        description: "Turn articles into animated video summaries.",
        developer: "Lumen5",
        likes: 0,
        keywords: ["video", "summary", "article", "content"],
        link: "https://www.lumen5.com",
        HaveLiked: false
    },
    {
        name: "Descript",
        description: "Video/audio editor with AI voiceovers and transcripts.",
        developer: "Descript",
        likes: 0,
        keywords: ["video", "audio", "editor", "transcript", "voiceover"],
        link: "https://www.descript.com",
        HaveLiked: false
    },
    {
        name: "Animoto",
        description: "Drag-and-drop AI video builder.",
        developer: "Animoto",
        likes: 0,
        keywords: ["video", "builder", "drag-and-drop", "content"],
        link: "https://animoto.com",
        HaveLiked: false
    },
    {
        name: "Fliki",
        description: "Text-to-video using realistic voiceovers.",
        developer: "Fliki",
        likes: 0,
        keywords: ["video", "text", "voiceover", "realistic"],
        link: "https://fliki.ai",
        HaveLiked: false
    },
    {
        name: "HeyGen",
        description: "Generate talking avatar videos.",
        developer: "HeyGen",
        likes: 0,
        keywords: ["video", "avatar", "talking", "AI"],
        link: "https://www.heygen.com",
        HaveLiked: false
    },
    {
        name: "Rephrase.ai",
        description: "Personalized video generation.",
        developer: "Rephrase.ai",
        likes: 0,
        keywords: ["video", "personalized", "AI", "avatar"],
        link: "https://www.rephrase.ai",
        HaveLiked: false
    },
    {
        name: "Wave.video",
        description: "Marketing videos and live streaming with AI tools.",
        developer: "Wave.video",
        likes: 0,
        keywords: ["video", "marketing", "live", "streaming"],
        link: "https://wave.video",
        HaveLiked: false
    },
    {
        name: "Otter.ai",
        description: "Transcribe meetings and generate summaries.",
        developer: "Otter.ai",
        likes: 0,
        keywords: ["transcription", "summary", "meeting", "voice"],
        link: "https://otter.ai",
        HaveLiked: false
    },
    {
        name: "Notion AI",
        description: "Write, brainstorm, and organize your workspace with AI.",
        developer: "Notion",
        likes: 0,
        keywords: ["productivity", "notes", "workspace", "assistant"],
        link: "https://www.notion.so/product/ai",
        HaveLiked: false
    },
    {
        name: "Trello + Butler Bot",
        description: "Auto-assign and sort tasks on boards.",
        developer: "Atlassian",
        likes: 0,
        keywords: ["tasks", "automation", "boards", "organization"],
        link: "https://trello.com/butler-ai",
        HaveLiked: false
    },
    {
        name: "Motion AI",
        description: "Smart calendar & project planning assistant.",
        developer: "Motion",
        likes: 0,
        keywords: ["calendar", "planning", "scheduling", "project"],
        link: "https://www.usemotion.com",
        HaveLiked: false
    },
    {
        name: "Zapier",
        description: "Automate workflows across apps.",
        developer: "Zapier",
        likes: 0,
        keywords: ["automation", "workflow", "integration", "apps"],
        link: "https://zapier.com",
        HaveLiked: false
    },
    {
        name: "Slackbot",
        description: "Automate reminders, notes, and messages.",
        developer: "Slack",
        likes: 0,
        keywords: ["automation", "chat", "reminder", "productivity"],
        link: "https://slack.com",
        HaveLiked: false
    },
    {
        name: "Calendly AI",
        description: "Smart meeting scheduler.",
        developer: "Calendly",
        likes: 0,
        keywords: ["calendar", "scheduling", "meeting", "AI"],
        link: "https://calendly.com",
        HaveLiked: false
    },
    {
        name: "Tactiq",
        description: "AI meeting summary & insights from Google Meet.",
        developer: "Tactiq",
        likes: 0,
        keywords: ["meeting", "summary", "Google Meet", "notes"],
        link: "https://tactiq.io",
        HaveLiked: false
    },
    {
        name: "Magical",
        description: "Autofill forms and type repetitive tasks faster.",
        developer: "Magical",
        likes: 0,
        keywords: ["productivity", "automation", "forms", "tasks"],
        link: "https://www.getmagical.com",
        HaveLiked: false
    },
    {
        name: "SaneBox",
        description: "Email management and filtering assistant.",
        developer: "SaneBox",
        likes: 0,
        keywords: ["email", "filter", "productivity", "inbox"],
        link: "https://www.sanebox.com",
        HaveLiked: false
    },
    {
        name: "SciSpace Copilot",
        description: "Read & simplify scientific papers.",
        developer: "Typeset",
        likes: 0,
        keywords: ["science", "research", "papers", "summarize"],
        link: "https://typeset.io/copilot",
        HaveLiked: false
    },
    {
        name: "Khanmigo",
        description: "AI tutor for math, science, and humanities.",
        developer: "Khan Academy",
        likes: 0,
        keywords: ["education", "tutor", "learning", "AI"],
        link: "https://www.khanacademy.org/khan-labs",
        HaveLiked: false
    },
    {
        name: "AskYourPDF",
        description: "Chat with your PDFs and extract info.",
        developer: "AskYourPDF",
        likes: 0,
        keywords: ["PDF", "chat", "documents", "reader"],
        link: "https://askyourpdf.com",
        HaveLiked: false
    },
    {
        name: "You.com AI Tools",
        description: "Search assistant with coding, writing, and summarizing.",
        developer: "You.com",
        likes: 0,
        keywords: ["search", "assistant", "coding", "writing", "tools"],
        link: "https://you.com",
        HaveLiked: false
    },
    {
        name: "Perplexity AI",
        description: "Conversational search with citation-ready answers.",
        developer: "Perplexity",
        likes: 0,
        keywords: ["search", "answers", "AI", "chat"],
        link: "https://www.perplexity.ai",
        HaveLiked: false
    },
    {
        name: "Explainpaper",
        description: "Explain technical content in simple terms.",
        developer: "Explainpaper",
        likes: 0,
        keywords: ["research", "explain", "papers", "AI"],
        link: "https://www.explainpaper.com",
        HaveLiked: false
    },
    {
        name: "AI Dungeon",
        description: "Creative, interactive storytelling.",
        developer: "Latitude",
        likes: 0,
        keywords: ["story", "game", "text", "interactive"],
        link: "https://play.aidungeon.io",
        HaveLiked: false
    },
    {
        name: "Fireflies.ai",
        description: "Meeting transcription and notes.",
        developer: "Fireflies.ai",
        likes: 0,
        keywords: ["transcription", "meeting", "notes", "record"],
        link: "https://fireflies.ai",
        HaveLiked: false
    },
    {
        name: "Superhuman AI",
        description: "Smart inbox assistant for emails.",
        developer: "Superhuman",
        likes: 0,
        keywords: ["email", "assistant", "productivity", "inbox"],
        link: "https://superhuman.com",
        HaveLiked: false
    },
    {
        name: "Axiom.ai",
        description: "Build custom browser automation without code.",
        developer: "Axiom",
        likes: 0,
        keywords: ["automation", "browser", "no-code", "workflow"],
        link: "https://axiom.ai",
        HaveLiked: false
    }
];

