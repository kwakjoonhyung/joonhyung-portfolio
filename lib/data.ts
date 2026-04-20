export const profile = {
  name: "Joonhyung Kwak",
  nameKo: "곽준형",
  title: "AI Researcher",
  subtitle: "LLM Inference · Causal Reasoning · Mental-Health NLP",
  tagline:
    "Taking research prototypes to production — from LLM serving pipelines to statistically rigorous evaluation systems.",
  location: "Suwon, Republic of Korea",
  email: "kwakjoonhyung0429@gmail.com",
  phone: "+82-10-6591-8491",
  github: "https://github.com/kwakjoonhyung",
  university: "Sungkyunkwan University",
  lab: "Human-Language Intelligence Lab",
  advisor: "Prof. JinYeong Bak",
  graduation: "Aug. 2026 (Expected)",
};

export const about = {
  paragraphs: [
    "M.S. candidate in Artificial Intelligence at Sungkyunkwan University, working under Prof. JinYeong Bak at the Human-Language Intelligence Lab. My research lies at the intersection of **LLM inference optimization** and **causal reasoning systems for mental-health applications**.",
    "I care about making research *actually run*. Scaling vLLM pipelines across 8K-user corpora, designing statistically-grounded LLM-as-a-Judge evaluation, and shipping end-to-end crawling-to-insight systems consumed by industry teams — these are the places where a paper meets a production constraint.",
    "Currently writing my thesis on constructing temporal causal symptom graphs from SNS posts using LLMs. Graduating August 2026.",
  ],
  highlights: [
    {
      icon: "🧠",
      title: "Causal NLP Research",
      description:
        "Building temporal causal graphs from sparse user timelines using LLMs — 80% coverage improvement over legacy causal-matrix methods.",
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
        "LLM-as-a-Judge frameworks with bootstrapped ATE and 95% CIs (10k resamples) — point estimates aren't science.",
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
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        period: "Sep. 2024 – Oct. 2024",
        title: "Research Intern",
        org: "Biomedical Signal Lab, SNU Bundang Hospital",
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
          "Reduced Korean ASR WER from 12.2% to 8.3% via text-normalization pipeline. Custom Transformer variants for solar-power forecasting.",
        tag: "Research",
      },
      {
        period: "Aug. 2022 – May 2023",
        title: "Research Assistant",
        org: "Nursing Informatics Lab, Inha University",
        description:
          "Clinical keyword trends from 5K EMR notes. Fine-tuned domain-specific BERT for medical NER (F1 82.8, 23 entity types).",
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
          "Bachelor's degree with undergraduate thesis on audio emotion classification with dynamic attention windows — published at KCC 2023.",
        tag: "Education",
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
        "Existing causal-matrix approaches for modeling mental-health symptom progression failed on sparse user timelines in SNS data — the legacy pipeline couldn't construct meaningful graphs when post frequency varied heavily across users, and LLM-based extraction at scale was prohibitively slow (9h on 2×A6000 for an 8K-user corpus).",
      task: "Design a production-grade pipeline that (1) constructs temporal causal graphs from 230K+ SNS posts despite temporal sparsity, (2) scales LLM inference to complete in hours rather than days, and (3) evaluates graph quality with statistically meaningful confidence — not just point estimates.",
      action: [
        "Designed a **day-level clustering preprocessing pipeline** to consolidate sparse posts into temporally coherent units before causal extraction, replacing the matrix-based legacy approach.",
        "Re-engineered the LLM inference layer with **vLLM (PagedAttention + continuous batching)**, optimizing KV-cache reuse patterns specific to the causal-extraction prompt structure.",
        "Built an **LLM-as-a-Judge evaluation framework** with bootstrapped ATE (10k resamples, 95% CIs) so graph variants could be compared with confidence intervals instead of single-point F1 numbers.",
        "Trained multi-label symptom classifiers with **PyTorch Lightning DDP** on 2 GPUs for downstream validation.",
      ],
      result: [
        "**80% coverage improvement** on sparse user timelines vs. legacy causal-matrix baseline.",
        "**6× LLM inference throughput** — end-to-end labeling reduced from 9h to 1.5h on 2×A6000.",
        "**0.78 macro-F1 on PsySym dataset** — an 8-point gain over few-shot GPT-4o baselines.",
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
        "A hedge fund's alt-data team needed structured sentiment signals from Xueqiu — China's largest social investing platform — but the site uses dynamic rendering, infinite scroll, and aggressive anti-bot detection. No turnkey solution existed to turn raw Chinese posts into analyst-ready English reports.",
      task: "Build a complete data-to-insight pipeline: crawl 7 market tabs on Xueqiu, handle anti-bot and dynamic rendering robustly, translate and classify sentiment on Chinese posts, and deliver outputs in a format a hedge-fund analyst would actually read.",
      action: [
        "Built a fully **async Playwright crawler** with `asyncio` for concurrent tab handling, scroll-triggered loading, and retry/backoff logic against anti-bot countermeasures.",
        "Integrated **Fireworks AI (Llama-3)** for CN→EN translation + sentiment classification in a single prompting pass, minimizing API round-trips.",
        "Designed a post-processing layer that aggregates sentiment across tabs into **structured Markdown analyst reports** rather than raw JSON dumps.",
        "Open-sourced the full project on GitHub with English documentation for reproducibility.",
      ],
      result: [
        "**700 posts collected** across 7 Xueqiu market tabs in a single run, with robust handling of dynamic rendering.",
        "Reports delivered in a format **directly consumed by the hedge fund's investment team**.",
        "Full pipeline open-sourced — serves as a reference implementation for similar alt-data work.",
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
        "**3K clinically-grounded SNS posts** collected with IRB approval — a rare asset in this space.",
        "Hierarchical taxonomy enables **clinically actionable** model outputs rather than opaque binary scores.",
        "Ongoing research — dataset and pipeline feed into lab's broader mental-health NLP program.",
      ],
    },
  },
  {
    id: "military-mental-health",
    year: "Jun. 2024 – Jul. 2025",
    title: "Mental Health Screening from Military App Logs",
    subtitle: "Sub-project — Human-Language Intelligence Lab, SKKU",
    tags: ["Sequence Modeling", "Low-Resource NLP", "Clinical"],
    highlight: "Encoder model +9 F1 over few-shot Solar baseline",
    star: {
      situation:
        "Screening for mental-health risk among active-duty soldiers is a high-stakes, low-resource problem. Available data: longitudinal diary-app logs from 214 soldiers over 2 months. Conventional wisdom was to use few-shot LLMs (Solar) — but LLM prompt-only approaches ignore the structured *behavioral sequence* inside app logs.",
      task: "Determine whether structured behavioral signals from diary-app sequences can outperform prompt-only LLMs on this low-resource clinical screening task.",
      action: [
        "Processed **longitudinal diary-app logs from 214 active-duty soldiers over 2 months**, handling sparsity and irregular entry cadence.",
        "Designed an **encoder-based sequence model** that consumed behavioral sequences end-to-end rather than flattening them into prompts.",
        "Benchmarked head-to-head against **few-shot Solar** on identical splits.",
      ],
      result: [
        "**+9 F1 points** over few-shot Solar baseline.",
        "Demonstrated that **structured behavioral signals beat prompt-only LLMs** in low-resource clinical settings — a nontrivial finding for a field that defaults to 'just use GPT'.",
      ],
    },
  },
  {
    id: "ecg-stroke",
    year: "Sep. 2024 – Oct. 2024",
    title: "ECG/ABP Waveform Pipeline for Stroke Risk Prediction",
    subtitle: "Research Internship — Biomedical Signal Lab, SNU Bundang Hospital",
    tags: ["PyTorch", "Biomedical Signals", "QLoRA", "Phi-2"],
    highlight: "ROC-AUC 0.81 · 4-bit QLoRA clinical QA demo",
    star: {
      situation:
        "Raw ECG and ABP waveforms from 1,500 patient records are noisy: baseline wander, motion artifacts, inconsistent sampling. A downstream stroke-risk model built directly on raw signal would learn noise, not physiology. Separately, the team wanted to explore whether a small LLM (Phi-2 2.7B) could be specialized for clinical QA on commodity hardware.",
      task: "(1) Build a robust waveform preprocessing pipeline suitable for downstream modeling, (2) train a multi-modal stroke-risk predictor fusing waveforms with demographics, and (3) prototype a QLoRA-fine-tuned Phi-2 as a clinical-QA demo.",
      action: [
        "Built an **ECG/ABP preprocessing pipeline**: Pan-Tompkins QRS detection, cubic-spline baseline-wander removal using R-peak-anchored knots, resampling to 100 Hz with per-beat normalization to 128 samples.",
        "Added **quality-filtering rules** that rejected 30% of noisy segments before model training.",
        "Developed a **multi-input 1D Inception-CNN in PyTorch**, fusing waveform features with patient demographics via late concatenation.",
        "Fine-tuned **Phi-2 (2.7B)** on the Asclepius clinical-notes dataset using **4-bit NF4 QLoRA**, deploying a Gradio-based A/B comparison demo against vanilla Phi-2.",
      ],
      result: [
        "**ROC-AUC 0.81** on stroke risk prediction with the multi-input Inception-CNN.",
        "**30% noise rejection rate** improved downstream training signal-to-noise.",
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
        "Multi-agent LLM systems are usually demoed as turn-based batch output. A real-time debate between heterogeneous agents (OpenAI + Gemini) with token-level streaming surfaces concurrency problems that turn-based demos hide — most notably, agents talking over each other and deadlocking waiting on each other's turn signals.",
      task: "Build a backend that streams LLM-to-LLM debate turns over WebSocket, coordinating agents with different APIs and latencies without interleaving their tokens or deadlocking.",
      action: [
        "Architected a **real-time multi-agent orchestration backend** streaming debate turns over WebSocket.",
        "Coordinated **OpenAI and Gemini agents** with role-conditioned prompts and explicit turn-taking state.",
        "Solved **agent interleaving deadlocks** by introducing a **priority queue arbitrator** that serializes turn transitions without blocking token-level streaming within a turn.",
      ],
      result: [
        "Stable concurrent token-level streaming across heterogeneous LLM providers.",
        "Deadlock-free turn arbitration — a nontrivial problem in multi-agent streaming systems.",
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
        "Aging-in-place households generate continuous multi-sensor streams (ventilation, activity), but raw data alone doesn't tell caregivers when something is actually wrong. The challenge is distinguishing anomalies that matter from normal variation.",
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
      "Dataset refining techniques for improving training efficiency of voice-based situation classification models",
    venue: "Korea Computer Congress (KCC)",
    type: "Poster",
    year: 2023,
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
    institution: "—",
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
    org: "—",
  },
];
