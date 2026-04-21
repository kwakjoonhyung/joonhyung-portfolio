export const profile = {
  name: "Joonhyung Kwak",
  nameKo: "곽준형",
  title: "AI Researcher",
  subtitle: "LLM Inference · Causal Reasoning · Mental-Health NLP",
  tagline:
    "Taking research prototypes to production, from LLM serving pipelines to statistically rigorous evaluation systems.",
  location: "Suwon, Republic of Korea",
  email: "kwakjoonhyung0429@gmail.com",
  phone: "+82-10-6591-8491",
  github: "https://github.com/kwakjoonhyung",
  linkedin: "https://www.linkedin.com/in/joonhyung-kwak-a33772254/",
  university: "Sungkyunkwan University",
  lab: "Human-Language Intelligence Lab",
  advisor: "Prof. JinYeong Bak",
  graduation: "Aug. 2026 (Expected)",
};

export const about = {
  paragraphs: [
    "M.S. candidate in Artificial Intelligence at Sungkyunkwan University, working under Prof. JinYeong Bak at the Human-Language Intelligence Lab. My research lies at the intersection of **LLM inference optimization** and **causal reasoning systems for mental-health applications**.",
    "I care about making research *actually run*. Scaling vLLM pipelines across 8K-user corpora, designing statistically-grounded LLM-as-a-Judge evaluation, and shipping end-to-end crawling-to-insight systems consumed by industry teams are the places where a paper meets a production constraint.",
    "Currently writing my thesis on constructing temporal causal symptom graphs from SNS posts using LLMs. Graduating August 2026.",
  ],
  highlights: [
    {
      icon: "🧠",
      title: "Causal NLP Research",
      description:
        "Building temporal causal graphs from sparse user timelines using LLMs, with 80% coverage improvement over legacy causal-matrix methods.",
    },
    {
      icon: "⚡",
      title: "LLM Serving at Scale",
      description:
        "6× inference throughput gain on 8K-user corpora via vLLM PagedAttention + continuous batching. 9h → 1.5h end-to-end.",
    },
    {
      icon: "📊",
      title: "Rigorous Evaluation",
      description:
        "LLM-as-a-Judge framework where GPT-4o judged causal explanations from our TCPE prompt against a base-prompt baseline across 4 LLM backbones (GPT-4o, Qwen3, Llama3, Gemma). TCPE was preferred across every backbone.",
    },
    {
      icon: "🔬",
      title: "Production Pipelines",
      description:
        "Playwright async crawlers, multi-agent LLM orchestration, data-to-insight systems deployed for hedge-fund analysts.",
    },
  ],
};

export const timeline = [
  {
    year: "2024 – Present",
    items: [
      {
        period: "Mar. 2024 – Present",
        title: "Graduate Researcher",
        org: "Human-Language Intelligence Lab, Sungkyunkwan University",
        description:
          "M.S. in Artificial Intelligence. Advisor: Prof. JinYeong Bak. Thesis on temporal causal symptom graphs using LLMs.",
        tag: "Research",
        thesisUrl: "/thesis/ms_thesis.pdf",
        thesisLabel: "M.S. Thesis (draft) ↗",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        period: "Sep. 2024 – Oct. 2024",
        title: "Program Trainee",
        org: "Biomedical AI Training Program, SNU Bundang Hospital",
        description:
          "Built ECG/ABP preprocessing pipeline on 1,500 patient records. Developed multi-input Inception-CNN for stroke risk prediction (ROC-AUC 0.81).",
        tag: "Clinical AI",
      },
    ],
  },
  {
    year: "2022 – 2023",
    items: [
      {
        period: "Nov. 2022 – Dec. 2023",
        title: "Undergraduate Researcher",
        org: "Data Intelligence Lab, Inha University",
        description:
          "Reduced Korean ASR WER from 12.2% to 8.3% via text-normalization pipeline. Custom Transformer variants for solar-power forecasting (+7% MAPE over vanilla baseline).",
        tag: "Research",
      },
      {
        period: "Aug. 2022 – May 2023",
        title: "Research Assistant",
        org: "Nursing Informatics Lab, Inha University",
        description:
          "Clinical keyword trends from 5 years of Nursing Informatics papers. Fine-tuned domain-specific BERT for medical NER (F1 82.8, 23 entity types) from 5K EMR notes and deployed the model at Ilsan Hospital.",
        tag: "Clinical NLP",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        period: "Mar. 2022 – Jul. 2022",
        title: "Exchange Student",
        org: "Deggendorf Institute of Technology, Germany",
        description:
          "Computer Science exchange semester. Advisor: Prof. Patrick Glauner. DeinHaus 4.0 smart-home anomaly detection project.",
        tag: "Exchange",
      },
    ],
  },
  {
    year: "2020 – 2024",
    items: [
      {
        period: "Mar. 2020 – Feb. 2024",
        title: "B.S. in Information and Communication Engineering",
        org: "Inha University",
        description:
          "Bachelor's degree with undergraduate thesis on audio emotion classification with dynamic attention windows.",
        tag: "Education",
        thesisUrl: "/thesis/bs_thesis.pdf",
        thesisLabel: "B.S. Thesis (PDF) ↗",
      },
    ],
  },
];

// STAR-framework projects
export const projects = [
  {
    id: "temporal-causal-graph",
    year: "2024 – Present",
    title: "Temporal Causal Symptom Graph Construction via LLMs",
    subtitle: "M.S. Thesis — Human-Language Intelligence Lab, SKKU",
    tags: ["LLM", "Causal Inference", "Mental Health NLP", "vLLM"],
    highlight: "6× inference throughput · 80% coverage improvement",
    star: {
      situation:
        "Existing causal-matrix approaches for modeling mental-health symptom progression failed on sparse user timelines in SNS data. The legacy pipeline couldn't construct meaningful graphs when post frequency varied heavily across users, and LLM-based extraction at scale was prohibitively slow (9h on 2×A6000 for an 8K-user corpus).",
      task: "Design a production-grade pipeline that (1) constructs temporal causal graphs from 230K+ SNS posts despite temporal sparsity, (2) scales LLM inference to complete in hours rather than days, and (3) evaluates graph quality with statistically meaningful rigor rather than single-point estimates.",
      action: [
        "Designed a **day-level clustering preprocessing pipeline** to consolidate sparse posts into temporally coherent units before causal extraction, replacing the matrix-based legacy approach.",
        "Re-engineered the LLM inference layer with **vLLM (PagedAttention + continuous batching)**, optimizing KV-cache reuse patterns specific to the causal-extraction prompt structure.",
        "Built an **LLM-as-a-Judge pairwise evaluation framework** where GPT-4o judged whether causal explanations from our TCPE-enhanced prompt or a base-prompt baseline better demonstrated clinical reasoning, across four LLM backbones (GPT-4o, Qwen3-8B, Llama3-8B, Gemma-7B). TCPE explanations were preferred on every backbone.",
        "Trained multi-label symptom classifiers with **PyTorch Lightning DDP** on 2 GPUs for downstream validation.",
      ],
      result: [
        "**80% coverage improvement** on sparse user timelines vs. legacy causal-matrix baseline.",
        "**6× LLM inference throughput** reduced end-to-end labeling from 9h to 1.5h on 2×A6000.",
        "**0.78 macro-F1 on PsySym dataset**, an 8-point gain over few-shot GPT-4o baselines.",
        "Work forms the basis of my M.S. thesis (expected Aug. 2026).",
      ],
    },
  },
  {
    id: "xueqiu-sentiment-pipeline",
    year: "Nov. 2025 – Dec. 2025",
    title: "Xueqiu Chinese Investor Sentiment Pipeline",
    subtitle: "Independent Project — Hedge Fund Data Engineering Assignment",
    tags: ["Playwright", "Async", "LLM", "Fireworks AI", "Data Pipeline"],
    highlight: "End-to-end CN→EN sentiment system consumed by HF analysts",
    star: {
      situation:
        "A hedge fund's alt-data team needed structured sentiment signals from Xueqiu, China's largest social investing platform. However, the site uses dynamic rendering, infinite scroll, and aggressive anti-bot detection, and no turnkey solution existed to turn raw Chinese posts into analyst-ready English reports.",
      task: "Build a complete data-to-insight pipeline: crawl 7 market tabs on Xueqiu, handle anti-bot and dynamic rendering robustly, translate and classify sentiment on Chinese posts, and deliver outputs in a format a hedge-fund analyst would actually read.",
      action: [
        "Built a fully **async Playwright crawler** with `asyncio` for concurrent tab handling, scroll-triggered loading, and retry/backoff logic against anti-bot countermeasures.",
        "Integrated **Fireworks AI (Llama-3)** for CN→EN translation + sentiment classification in a single prompting pass, minimizing API round-trips.",
        "Designed a post-processing layer that aggregates sentiment across tabs into **structured Markdown analyst reports** rather than raw JSON dumps.",
        "Open-sourced the full project on GitHub with English documentation for reproducibility.",
      ],
      result: [
        "**700 posts collected** across 7 Xueqiu market tabs in a single run, with robust handling of dynamic rendering.",
        "**Domain-specific prompts** consolidated CN→EN translation and sentiment classification into a single Fireworks AI (Llama-3) pass, cutting API round-trips while preserving the investor-context terminology that generic translation prompts tend to miss.",
        "Reports delivered in a format **directly consumed by the hedge fund's investment team**.",
      ],
    },
  },
  {
    id: "suicide-detection",
    year: "Sep. 2024 – May 2025",
    title: "Suicide & Self-harm Content Detection on SNS",
    subtitle: "Graduate Research — Clinical Collaboration",
    tags: ["IRB Protocol", "GPT-4o", "Structured Output", "Clinical NLP"],
    highlight: "IRB-compliant data · hierarchical 6-category taxonomy",
    star: {
      situation:
        "Existing suicide-risk detection datasets rely on proxy labels (Reddit subreddit membership, keyword heuristics) and lack clinical grounding. A real clinical collaboration required IRB-compliant data collection from actual at-risk participants, something most NLP pipelines are not built for.",
      task: "Design an IRB-compliant data-collection protocol, recruit participants from clinical settings, and build a detection system over a hierarchical clinical taxonomy rather than binary 'risky / not risky' labels.",
      action: [
        "Designed the **IRB-compliant data-collection protocol** covering consent, de-identification, and clinical-site coordination.",
        "**Recruited 128 participants** from clinical settings and collected 3K real SNS posts including both text and image metadata.",
        "Built a **GPT-4o structured-output pipeline** with a hierarchical 6-category taxonomy co-developed with clinicians, so outputs map cleanly onto clinical constructs rather than engineer-invented labels.",
      ],
      result: [
        "Collected **3K clinically-grounded SNS posts** under IRB approval, a rare asset in this research space.",
        "Hierarchical taxonomy enables **clinically actionable** model outputs rather than opaque binary scores.",
        "GPT-4o structured-output pipeline produced **clinically-grounded 6-category labels** on the full 3K-post corpus, replacing proxy labels (subreddit membership, keyword heuristics) that prior detection work depended on.",
      ],
    },
  },
  {
    id: "ecg-stroke",
    year: "Sep. 2024 – Oct. 2024",
    title: "ECG/ABP Waveform Pipeline for Stroke Risk Prediction",
    subtitle: "Program Trainee — Biomedical AI Training Program, SNU Bundang Hospital",
    tags: ["PyTorch", "Biomedical Signals", "QLoRA", "Phi-2"],
    highlight: "ROC-AUC 0.81 · 4-bit QLoRA clinical QA demo",
    star: {
      situation:
        "Raw ECG and ABP waveforms from 1,500 patient records are noisy: baseline wander, motion artifacts, inconsistent sampling. A downstream stroke-risk model built directly on raw signal would learn noise, not physiology. Separately, the team wanted to explore whether a small LLM (Phi-2 2.7B) could be specialized for clinical QA on commodity hardware.",
      task: "(1) Build a robust waveform preprocessing pipeline suitable for downstream modeling, (2) train a stroke-risk predictor fusing waveforms with demographics, and (3) prototype a QLoRA-fine-tuned Phi-2 as a clinical-QA demo.",
      action: [
        "Built an **ECG/ABP preprocessing pipeline**: Pan-Tompkins QRS detection, cubic-spline baseline-wander removal using R-peak-anchored knots, resampling to 100 Hz with per-beat normalization to 128 samples.",
        "Added **quality-filtering rules** that rejected 10% of noisy segments before model training.",
        "Developed a **multi-input 1D Inception-CNN in PyTorch**, fusing waveform features with patient demographics via late concatenation.",
        "Fine-tuned **Phi-2 (2.7B)** on the Asclepius clinical-notes dataset using **4-bit NF4 QLoRA**, deploying a Gradio-based A/B comparison demo against vanilla Phi-2.",
      ],
      result: [
        "**ROC-AUC 0.81** on stroke risk prediction with the multi-input Inception-CNN.",
        "**10% noise rejection rate** improved downstream training signal-to-noise.",
        "Working Phi-2 QLoRA demo deployed for team to qualitatively evaluate clinical-QA specialization on a 2.7B model.",
      ],
    },
  },
  {
    id: "multi-agent-debate",
    year: "Mar. 2024",
    title: "Real-time Multi-Agent LLM Debate System",
    subtitle: "ITRC Project",
    tags: ["Multi-Agent", "WebSocket", "Streaming", "LLM Orchestration"],
    highlight: "Token-level streaming across OpenAI + Gemini agents",
    star: {
      situation:
        "Multi-agent LLM systems are usually demoed as turn-based batch output. A real-time debate between heterogeneous agents (OpenAI + Gemini) with token-level streaming surfaces concurrency problems that turn-based demos hide. In particular, agents talk over each other and deadlock while waiting on each other's turn signals.",
      task: "Build a backend that streams LLM-to-LLM debate turns over WebSocket, coordinating agents with different APIs and latencies without interleaving their tokens or deadlocking.",
      action: [
        "Architected a **real-time multi-agent orchestration backend** streaming debate turns over WebSocket.",
        "Coordinated **OpenAI and Gemini agents** with role-conditioned prompts and explicit turn-taking state.",
        "Solved **agent interleaving deadlocks** by introducing a **priority queue arbitrator** that serializes turn transitions without blocking token-level streaming within a turn.",
      ],
      result: [
        "Stable concurrent token-level streaming across heterogeneous LLM providers.",
        "Deadlock-free turn arbitration, solving a nontrivial concurrency problem in multi-agent streaming systems.",
      ],
    },
  },
  {
    id: "audio-emotion",
    year: "Feb. 2023 – Jun. 2023",
    title: "Audio Emotion Classification with Dynamic Attention Windows",
    subtitle: "Undergraduate Thesis — Published at KCC 2023",
    tags: ["Attention", "Speech", "Published"],
    highlight: "78% → 84% accuracy · KCC 2023 publication",
    star: {
      situation:
        "Standard audio emotion classifiers use fixed-window preprocessing, which is simple but treats every segment as equally emotion-bearing. I suspected fixed windows were silently discarding the most informative parts of the signal.",
      task: "Quantify how much emotion-bearing signal fixed windows actually lose, and design a preprocessing scheme that adapts window boundaries to where the model is 'looking'.",
      action: [
        "Visualized **internal attention maps** on the AIHub emotion speech corpus, showing fixed-window preprocessing discards ~25% of emotion-bearing segments.",
        "Designed an **attention-driven dynamic windowing method** that adapts window boundaries to attention peaks.",
        "Ran controlled comparisons on identical splits.",
      ],
      result: [
        "**+6 percentage points accuracy** (78% → 84%) on AIHub emotion speech corpus.",
        "Work **published at Korea Computer Congress (KCC) 2023** as undergraduate thesis.",
      ],
    },
  },
  {
    id: "deinhaus",
    year: "Feb. 2022 – Aug. 2022",
    title: "DeinHaus 4.0 — Smart-Home Anomaly Detection",
    subtitle: "Industry-linked Project — Deggendorf Institute of Technology",
    tags: ["IoT", "Anomaly Detection", "Aging-in-Place"],
    highlight: "Multi-sensor streams from 5 instrumented households",
    star: {
      situation:
        "During my exchange semester at Deggendorf, I joined a DeinHaus 4.0 industry collaboration tasked with building a ventilation-control AI for aging-in-place smart homes from multi-sensor logs across 5 households. My initial air-quality-prediction approach triggered ventilation from sensor values alone, but the data couldn't capture the rapid environmental shifts or resident discomfort that actually governed when ventilation should happen.",
      task: "Analyze multi-sensor ventilation and activity streams from 5 instrumented households to support automated control and anomaly flagging for elderly residents.",
      action: [
        "Analyzed multi-sensor ventilation and activity streams from **5 instrumented aging-in-place households**.",
        "Built analysis tooling for automated control logic design.",
      ],
      result: [
        "Contributed anomaly-detection analysis to the DeinHaus 4.0 industry-linked project at Deggendorf Institute of Technology (Germany).",
      ],
    },
  },
];

export const publications = [
  {
    authors: "J. Kwak et al.",
    title:
      "From Post to Temporal Causality: Constructing Symptom Temporal Causal Graphs using Large Language Models",
    venue: "In Preparation for Submission",
    type: "Manuscript",
    year: 2026,
  },
  {
    authors: "J. Kwak et al.",
    title:
      "Dataset refining techniques for improving training efficiency of voice-based situation classification models",
    venue: "Korea Computer Congress (KCC)",
    type: "Poster",
    year: 2023,
    pdfUrl: "/publications/kcc_2023.pdf",
  },
];

export const skills = [
  {
    category: "LLM Serving & Evaluation",
    items: [
      "vLLM (PagedAttention, continuous batching)",
      "HuggingFace Transformers",
      "LoRA / PEFT / QLoRA",
      "Prompt Engineering",
      "LLM-as-a-Judge",
    ],
  },
  {
    category: "Causal ML & Statistics",
    items: [
      "Bootstrapped ATE Estimation",
      "Confidence Interval Analysis",
      "Temporal Causal Graph Construction",
    ],
  },
  {
    category: "Deep Learning",
    items: [
      "PyTorch",
      "PyTorch Lightning (DDP multi-GPU)",
      "TensorFlow",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "Playwright (async, anti-bot handling)",
      "asyncio",
      "pandas",
      "MySQL",
      "AWS",
    ],
  },
  {
    category: "Backend & Infra",
    items: [
      "REST / WebSocket APIs",
      "Multi-Agent LLM Orchestration",
      "Docker",
      "Git",
    ],
  },
  {
    category: "Languages",
    items: [
      "Python (advanced)",
      "C / C++",
      "Korean (native)",
      "English (fluent)",
    ],
  },
];

export const teaching = [
  {
    role: "Teaching Assistant",
    course: "Introduction to Artificial Intelligence",
    institution: "SKKU",
    term: "Autumn 2024",
  },
  {
    role: "Teaching Assistant",
    course: "National Defense AI Education Program",
    institution: "SKKU",
    term: "Summer 2024",
  },
  {
    role: "Teaching Assistant",
    course: "AI Special Lecture for Non-major Faculty",
    institution: "SKKU",
    term: "Summer 2024, Winter 2025",
  },
];

export const awards = [
  {
    year: "2023",
    title: "Research Scholarship for Undergraduate Researchers",
    org: "Inha University",
  },
  {
    year: "2021",
    title: "Han-eum ICT Contest Award",
    org: "The Federation of Korean Information Industries",
  },
];
