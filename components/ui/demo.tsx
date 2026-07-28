import React from "react";
import { FlippingCard } from "./flipping-card";

interface CardData {
  id: string;
  badge: string;
  url?: string;
  isPrivate?: boolean;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    tech: string[];
  };
  back: {
    description: string;
    metrics: string;
    buttonText: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "scanyshare-flagship",
    badge: "★ FLAGSHIP · LIVE APP",
    url: "https://scanyshare.com",
    front: {
      imageSrc: "assets/images/scanyshare.webp",
      imageAlt: "ScanyShare | Instant QR Code File Share & P2P Transfer",
      title: "ScanyShare",
      description: "",
      tech: ["Decentralize Tech", "P2P Transfer", "QR Pairing", "React", "JavaScript", "WebSockets"],
    },
    back: {
      description: "Instant QR code file share and P2P direct transfer tool. Enables secure end-to-end peer-to-peer sharing of files, links, and chat between PC, Mac, Android & iOS with zero login, no cloud storage, and unlimited file size.",
      metrics: "Zero Login | Unlimited File Size",
      buttonText: "Visit scanyshare.com ↗",
    },
  },
  {
    id: "evaragold",
    badge: "FEATURED · 3D SHOWROOM",
    url: "https://evaragold.vercel.app",
    front: {
      imageSrc: "assets/images/evaragold.webp",
      imageAlt: "EvaraGold Luxury Jewellery Digital Showroom",
      title: "EvaraGold Jewellery - Ecommerce",
      description: "",
      tech: ["React.js", "Supabase", "GCP", "GSAP", "Tailwind", "Vue.js", "FastAPI", "Stripe", "Live Scraping"],
    },
    back: {
      description: "Built 3D WebGL scrollytelling homepage, live gold rate ticker, product catalogue with category filters, WhatsApp enquiry integration, and Vercel & GCP deployment with all the Ecommerce Custom features.",
      metrics: "Smooth animations | Live Gold Ticker | Ecommerce Capabilities",
      buttonText: "Visit evaragold.vercel.app ↗",
    },
  },
  {
    id: "sosurat",
    badge: "CITY DISCOVERY PORTAL",
    url: "https://sosurat.com",
    front: {
      imageSrc: "assets/images/sosurat.webp",
      imageAlt: "SoSurat.com City Portal",
      title: "SoSurat.com",
      description: "",
      tech: ["React.js", "FastAPI", "Tailwind", "Vercel", "GCP", "supabase", "Ai Chat Bot", "S3 Storage", "CDN"],
    },
    back: {
      description: "Engineered Surat's primary city discovery portal featuring multi-category listings, verified business directory and fast SSR page loads.",
      metrics: "Surat #1 Portal | Discovery Engine",
      buttonText: "Visit sosurat.com ↗",
    },
  },
  {
    id: "adshot-studio",
    badge: "AI CREATIVE SAAS",
    url: "https://adshot.studio",
    front: {
      imageSrc: "assets/images/adshot.webp",
      imageAlt: "AdShot+ Studio AI Platform",
      title: "AdShot+ Studio",
      description: "",
      tech: ["React", "GEN AI API", "Tailwind CSS", "FastAPI", "S3 Storage", "CDN", "Supabase", "LLM API", "GCP", "Telegram Bot API", "Stripe"],
    },
    back: {
      description: "Engineered LLM copywriting workflows and real-time preview rendering, reducing ad creation time from hours down to under minutes with automated variant generation.",
      metrics: "Fashion Model Clothing Generation | 100+ Variations",
      buttonText: "Visit adshot.studio ↗",
    },
  },
  {
    id: "galaxyglobaltech",
    badge: "CORPORATE ENGINEERING",
    url: "https://galaxyglobaltech.vercel.app",
    front: {
      imageSrc: "assets/images/galaxyglobaltech.webp",
      imageAlt: "GalaxyGlobalTech Corporate Site",
      title: "GalaxyGlobalTech",
      description: "",
      tech: ["vue.js", "Tailwind", "Vercel", "React,js"],
    },
    back: {
      description: "Architected high-performance corporate platform with interactive service showcases, team highlights, animated UI elements, and Vercel cloud deployment.",
      metrics: "Client Website with Native Visualizations",
      buttonText: "Visit galaxyglobaltech.vercel.app ↗",
    },
  },
  {
    id: "vercelpay-gate",
    badge: "PAYMENT GATEWAY",
    isPrivate: true,
    front: {
      imageSrc: "assets/images/vercelpay.webp",
      imageAlt: "VercelPay Gate Custom Payment Gateway",
      title: "VercelPay Gate",
      description: "",
      tech: ["React.js", "Node.js", "Supabase", "PostgreSQL", "REST APIs"],
    },
    back: {
      description: "High-security custom payment processing platform featuring automated webhook signature verification, real-time transaction ledger logging, and Custom Expiry checkouts.",
      metrics: "Private Payment Service for UPI | Custom Payment Infra",
      buttonText: "Gateway Specs ↗",
    },
  },
  {
    id: "intraday-trading-bot",
    badge: "ALGORITHMIC TRADING",
    isPrivate: true,
    front: {
      imageSrc: "assets/images/intradaybot.webp",
      imageAlt: "Intraday Trading Bot",
      title: "Intraday Trading Bot",
      description: "",
      tech: ["Python", "Dhan API", "Telegram Bot", "MQL4/5"],
    },
    back: {
      description: "Designed quantitative algorithmic execution engine connected to Dhan API with dynamic position sizing, automated risk controls, and instant Telegram execution alerts.",
      metrics: "Backtested Setups | Algo Risk Control",
      buttonText: "Internal Tool Specs ↗",
    },
  },
  {
    id: "telegram-support-bot",
    badge: "BOT AUTOMATION",
    isPrivate: true,
    front: {
      imageSrc: "assets/images/telegrambot.webp",
      imageAlt: "Telegram Support Bot",
      title: "Telegram Support Bot",
      description: "",
      tech: ["Python", "python-telegram-bot", "Vercel"],
    },
    back: {
      description: "Built automated support bot handling multi-step user onboarding, OTP email verification, automated ticket routing, and Vercel cloud deployment.",
      metrics: "Ticket Generations | Auto Replay Machanisum | Onboarding System",
      buttonText: "Internal Tool Specs ↗",
    },
  },
  {
    id: "web-scraping-agents",
    badge: "DATA PIPELINES",
    isPrivate: true,
    front: {
      imageSrc: "assets/images/webscraper.webp",
      imageAlt: "Web Scraping Agents",
      title: "Web Scraping Agents",
      description: "",
      tech: ["Python", "Playwright", "asyncio", "BeautifulSoup", "LLM Jailbreaks"],
    },
    back: {
      description: "Asynchronous web scraping engine with proxy rotation and automated retries, processing 500+ daily records into structured analytical schemas with live pipeline reliability.",
      metrics: "500+ Daily Records | Live Reliability | Custom Data Scraping and Orchestration",
      buttonText: "Internal Tool Specs ↗",
    },
  },
  {
    id: "forex-copy-trading",
    badge: "FOREX & QUANT TRADING",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      imageAlt: "Forex Copy Trading System",
      title: "Forex Copy Trading System",
      description: "",
      tech: ["MQL4", "MQL5", "Python", "WebSockets", "Algo Execution"],
    },
    back: {
      description: "High-frequency Forex copy trading platform supporting real-time master account symbol mapping, dynamic lot size calculation based on account equity, slippage filters, and instant risk alerts.",
      metrics: "< 5ms Order Sync Latency | Multi-Account Copier",
      buttonText: "Forex Engine Specs ↗",
    },
  },
  {
    id: "video-call-dating",
    badge: "CONFIDENTIAL · NATIVE ANDROID",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      imageAlt: "Video Call & Dating Mobile App",
      title: "Video Call & Dating App",
      description: "",
      tech: ["Kotlin", "Java", "WebRTC", "Firebase", "Room DB"],
    },
    back: {
      description: "Engineered real-time video streaming with low-latency WebRTC peer connections, FCM push notifications, offline Room DB caching, and MVVM architecture.",
      metrics: "150K+ Downloads | Confidential App",
      buttonText: "Confidential Specs ↗",
    },
  },
  {
    id: "instagram-story-maker",
    badge: "CONFIDENTIAL · MOBILE EDITING",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      imageAlt: "Instagram Story Maker App",
      title: "Instagram Story Maker",
      description: "",
      tech: ["Kotlin", "Android SDK", "Canvas API", "OpenGL ES"],
    },
    back: {
      description: "Built custom GPU-accelerated image/video editing engine with multi-layer text rendering, animated template exports, and zero frame-drop preview performance.",
      metrics: "4.8★ Rating | GPU Accelerated Editor",
      buttonText: "Confidential Specs ↗",
    },
  },
  {
    id: "secure-vpn-app",
    badge: "CONFIDENTIAL · MOBILE NETWORK",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      imageAlt: "High-Speed Secure VPN Client",
      title: "High-Speed Secure VPN",
      description: "",
      tech: ["Kotlin", "Java", "WireGuard", "Android VpnService"],
    },
    back: {
      description: "Implemented native Android VpnService tunnel wrapper, dynamic server node selection, AES-256 traffic encryption, and battery-optimized background service.",
      metrics: "AES-256 Encryption | Zero Log Policy",
      buttonText: "Confidential Specs ↗",
    },
  },
  {
    id: "privacy-web-browser",
    badge: "CONFIDENTIAL · MOBILE BROWSER",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      imageAlt: "Fast Privacy Web Browser",
      title: "Fast Privacy Web Browser",
      description: "",
      tech: ["Java", "Kotlin", "WebKit", "Room DB"],
    },
    back: {
      description: "Engineered custom WebKit browser engine wrapper with domain ad-blocking rules, parallel tab state management, and private offline history encryption.",
      metrics: "< 300ms Page Load | Built-in AdBlock",
      buttonText: "Confidential Specs ↗",
    },
  },
  {
    id: "ai-photo-generator",
    badge: "CONFIDENTIAL · GENERATIVE AI",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      imageAlt: "AI Photo Generator Mobile App",
      title: "AI Photo Generator App",
      description: "",
      tech: ["Kotlin", "React Native", "Python", "FastAPI", "OpenAI / Flux"],
    },
    back: {
      description: "Engineered mobile client connected to asynchronous FastAPI diffusion pipelines with progressive image streaming, prompt enhancement algorithms, and high-res download exports.",
      metrics: "Generative Diffusion AI | Sub-3s Stream",
      buttonText: "Confidential Specs ↗",
    },
  },
  {
    id: "windows-pc-ai-agent",
    badge: "AI AGENTS & AUTOMATION",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      imageAlt: "Windows PC AI Monitoring Agent",
      title: "Windows PC AI Monitoring Agent",
      description: "",
      tech: ["Python", "Claude API", "psutil", "Win32 API", "Telegram Bot"],
    },
    back: {
      description: "Built autonomous Windows background daemon integrating system health polling with LLM function calling to execute remote diagnostics, kill rogue processes, and trigger alert notifications over Telegram.",
      metrics: "Sub-500ms Diagnostics | Remote Controls",
      buttonText: "Agent System Specs ↗",
    },
  },
  {
    id: "outreach-scraping-extension",
    badge: "BROWSER EXTENSION & SCRAPING",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      imageAlt: "Outreach Data Scraping Extension",
      title: "Outreach Data Scraping Extension",
      description: "",
      tech: ["TypeScript", "JavaScript", "Manifest V3", "DOM API", "REST APIs"],
    },
    back: {
      description: "Built high-speed browser extension capturing dynamic DOM lead parameters, verifying email/social handles, and dispatching structured payloads directly into CRM pipelines with zero browser latency.",
      metrics: "1-Click Lead Capture | Manifest V3",
      buttonText: "Extension Specs ↗",
    },
  },
  {
    id: "ai-air-gesture-transfer",
    badge: "COMPUTER VISION & AI",
    isPrivate: true,
    front: {
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      imageAlt: "AI Air Gesture File Transfer System",
      title: "AI Air Gesture Transfer",
      description: "",
      tech: ["Python", "OpenCV", "MediaPipe", "Sockets", "Computer Vision"],
    },
    back: {
      description: "Engineered real-time hand landmark tracking and grab-and-drop gesture recognition, allowing users to catch files on-screen with simple hand motions and wirelessly transmit them across local networks.",
      metrics: "30 FPS Vision Tracking | Touchless Share",
      buttonText: "Air Gesture Specs ↗",
    },
  },
];

export default function FlippingCardDemo() {
  return (
    <div className="flex gap-6 flex-wrap justify-center p-8">
      {cardsData.map((card) => (
        <FlippingCard
          key={card.id}
          width={360}
          height={440}
          frontContent={<GenericCardFront data={card.front} badge={card.badge} />}
          backContent={<GenericCardBack data={card.back} badge={card.badge} title={card.front.title} buttonText={card.back.buttonText} />}
        />
      ))}
    </div>
  );
}

interface GenericCardFrontProps {
  data: CardData["front"];
  badge: string;
}

function GenericCardFront({ data, badge }: GenericCardFrontProps) {
  return (
    <div className="flex flex-col h-full w-full p-5 bg-white rounded-xl">
      <div className="relative overflow-hidden rounded-lg mb-3 h-44">
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="absolute top-3 left-3 bg-neutral-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      </div>
      <h3 className="text-lg font-bold text-neutral-900">{data.title}</h3>
      <p className="text-xs text-neutral-600 mt-1.5 line-clamp-2">
        {data.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-neutral-100">
        {data.tech.map((t) => (
          <span key={t} className="text-[11px] bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded-full font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

interface GenericCardBackProps {
  data: CardData["back"];
  badge: string;
  title: string;
  buttonText: string;
}

function GenericCardBack({ data, badge, title, buttonText }: GenericCardBackProps) {
  return (
    <div className="flex flex-col justify-between h-full w-full p-6 bg-neutral-50 rounded-xl border border-neutral-200">
      <div>
        <span className="text-[11px] font-mono font-bold text-orange-600 uppercase tracking-widest">
          {badge} // SPECIFICATIONS
        </span>
        <h4 className="text-xl font-extrabold text-neutral-900 mt-2">{title}</h4>
        <p className="text-xs text-neutral-700 leading-relaxed mt-3">
          {data.description}
        </p>
      </div>

      <div className="bg-white p-3 rounded-lg border border-neutral-200 text-center my-2">
        <span className="text-xs font-mono font-bold text-neutral-900">{data.metrics}</span>
      </div>

      <button className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold px-4 py-2.5 rounded-full w-full transition-all flex items-center justify-center gap-2 shadow-sm">
        {buttonText}
      </button>
    </div>
  );
}
