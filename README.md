# Joonhyung Kwak — Portfolio

AI Researcher 포트폴리오 사이트. Next.js 14 + TypeScript + Tailwind + Framer Motion.

**Live deploy target:** Vercel

---

## 🚀 빠른 시작

### 1. 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000` 확인.

### 2. 프로덕션 빌드 (로컬 확인용)

```bash
npm run build
npm start
```

---

## ☁️ Vercel 배포 (3분 배포)

### 방법 A — GitHub 연동 (권장)

1. 이 프로젝트를 GitHub 새 repo에 push:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/kwakjoonhyung/portfolio.git
   git push -u origin main
   ```

2. [vercel.com](https://vercel.com) 로그인 → "Add New Project" → GitHub repo 선택.

3. Vercel이 Next.js 자동 감지. **Deploy** 버튼만 누르면 끝.

4. 배포 완료 후 `https://portfolio-kwakjoonhyung.vercel.app` 같은 URL 자동 생성.

5. (선택) 커스텀 도메인: Vercel → Project → Settings → Domains.

### 방법 B — Vercel CLI

```bash
npm i -g vercel
vercel       # 첫 배포 (preview)
vercel --prod  # 프로덕션 배포
```

---

## 📸 사진/이미지 필요한 곳

현재 placeholder로 남겨둔 자리들입니다. `public/images/` 폴더에 파일을 넣으면 자동 반영됩니다.

### 필수

| 위치 | 파일명 | 설명 | 권장 규격 |
|------|--------|------|-----------|
| **Hero 섹션 우측 프로필 카드** | `public/images/profile.jpg` | 본인 프로필 사진 | **4:5 세로 비율**, 최소 800×1000px, 가로형 불가 |

사용하려면: `components/Hero.tsx`의 "PROFILE PHOTO" placeholder div를 아래 코드로 교체.

```tsx
<div className="aspect-[4/5] rounded-lg mb-6 relative overflow-hidden">
  <img
    src="/images/profile.jpg"
    alt="Joonhyung Kwak"
    className="w-full h-full object-cover"
  />
</div>
```

### 선택 (있으면 좋음)

| 위치 | 파일명 | 설명 | 권장 규격 |
|------|--------|------|-----------|
| **각 프로젝트 카드** | `public/images/projects/{project-id}.png` | 프로젝트 대표 이미지, 시스템 다이어그램, 결과 스크린샷 | 16:9 비율, 1600×900px |

프로젝트 ID 목록 (`lib/data.ts`의 각 프로젝트 `id` 필드):
- `temporal-causal-graph` — causal graph 시각화나 architecture diagram 있으면 강력 추천
- `xueqiu-sentiment-pipeline` — 리포트 샘플 스크린샷
- `suicide-detection` — (클리니컬 데이터이므로 이미지 생략 권장)
- `military-mental-health` — 모델 비교 차트
- `ecg-stroke` — ECG 파형 preprocessing 전/후 비교
- `multi-agent-debate` — 시스템 아키텍처 다이어그램
- `audio-emotion` — attention map 시각화 (KCC 포스터에서 발췌)
- `deinhaus` — 센서 데이터 시각화

사용하려면: `components/Projects.tsx`의 주석처리된 `{/* 📸 OPTIONAL IMAGE */}` 블록을 주석 해제하세요.

### 🧭 없어도 되는 것

- 사이트 전체 배경 — 코드-generated dotted grid + grain texture로 처리됨
- 아이콘 — lucide-react로 모두 커버됨

---

## ✏️ 보완/추가가 필요해 보이는 부분

CV를 읽고 제가 **"더 있었으면 좋을 것 같은"** 부분을 솔직하게 남겨둡니다. 필요 없다고 판단되면 무시해도 됩니다.

### 1. **LinkedIn / Google Scholar 링크** ⚠️ 권장

AI 연구자 포트폴리오에서 이메일 다음으로 중요합니다. CV에 없어서 포함 안 했는데, 있다면 추가를 **강력히** 권장.

📍 위치: `lib/data.ts`의 `profile` 객체 — `linkedin`, `scholar` 필드 추가 후 `components/Contact.tsx`의 `ContactRow` 하나 더 추가.

### 2. **M.S. 논문 사전공개 링크 (있다면)**

Thesis 제목은 있지만 링크가 없습니다. arXiv preprint, 랩 페이지, 또는 Google Scholar 링크가 있다면:
- `lib/data.ts`의 `profile.thesis` 필드를 URL로 추가
- Hero 섹션에 "Read Thesis →" 링크 추가 고려

### 3. **프로젝트별 GitHub / 논문 / 데모 링크**

현재 프로젝트 카드에 링크가 없습니다. 공개된 GitHub repo가 있는 프로젝트는 링크를 거는 게 임팩트가 큽니다. 특히:
- Xueqiu 프로젝트는 이미 GitHub 공개 상태로 CV에 적혀있음 → **반드시 링크 필요**
- Multi-Agent Debate 시스템 데모 영상 있으면 링크
- Audio Emotion KCC 포스터 PDF 링크

📍 위치: `lib/data.ts`의 각 project object에 `links: [{ type: "github", url: "..." }, { type: "paper", url: "..." }]` 추가 후 `components/Projects.tsx`에서 렌더링. (원하시면 다음 턴에 구현해드립니다.)

### 4. **Publications 섹션 보강**

현재 KCC 2023 한 편입니다. M.S. 중 진행 중인 논문이 있다면:
- "In Preparation" 또는 "Under Review" 태그 붙여 추가하는 게 표준 practice
- 리스팅만으로도 academic 트랙 지원에 도움됨

### 5. **섹션별 시각 자료 (있으면 좋음)**

위 "사진 필요한 곳" 표 참고. 특히:
- **Temporal Causal Graph** 프로젝트: causal graph 시각화는 비주얼로 강력
- **vLLM 인프라 개선** 비교 차트 (9h → 1.5h)
- **ECG preprocessing** 전/후 파형 비교

이런 이미지 한 장이 STAR 설명 세 문단보다 강할 수 있습니다.

### 6. **언어 토글 (한/영)**

CV가 영어로 작성되어 있고 사이트도 영어로 만들었습니다. 한국 회사 지원 시 한글 버전이 필요할 수 있습니다. 다음 세 가지 선택지:

1. **현재대로 영어 유지** (AI 연구 글로벌 맥락에서는 표준)
2. **한국어로 전면 번역**
3. **i18n 추가해서 한/영 토글 버튼 제공** — next-intl 사용, 하루 작업 분량

원하시면 다음 턴에 어떤 방향이든 구현 가능합니다.

### 7. **Favicon / OG 이미지**

- `public/favicon.ico` — 브라우저 탭 아이콘
- `public/og-image.png` (1200×630px) — 트위터/링크드인에 URL 공유될 때 보이는 카드 이미지. **이게 없으면 기본 Vercel 아이콘이 나오니 본인 브랜딩을 위해 반드시 추가 권장.**

`app/layout.tsx`의 `metadata` 객체에 추가:
```tsx
export const metadata: Metadata = {
  // ... 기존 내용
  icons: { icon: "/favicon.ico" },
  openGraph: {
    images: ["/og-image.png"],
  },
};
```

### 8. **타임라인의 Inha 학부 기간 명확화**

CV에 Inha 학부 (2020–2024) 사이에 교환학생 (2022), 학부 연구 (2022–2023) 등이 겹쳐있는데, 현재 타임라인은 이를 병렬로 두었습니다. 혹시 순서가 어색하게 보이면 `lib/data.ts`의 `timeline` 배열에서 `year` 라벨과 `items` 순서만 조정하시면 됩니다.

### 9. **Stats 숫자의 정확성 확인**

Hero 섹션의 숫자들(`230K+`, `6×`, `0.78`, `8K+`)은 CV에서 그대로 가져왔습니다. 면접/채용 컨텍스트에서 확실히 방어 가능한 수치인지 한 번 더 확인 부탁드립니다.

---

## 🛠️ 프로젝트 구조

```
portfolio/
├── app/
│   ├── globals.css       # 디자인 토큰 (색, 폰트, 애니메이션)
│   ├── layout.tsx        # 루트 레이아웃 (폰트, 메타)
│   └── page.tsx          # 메인 페이지 (섹션 조립)
├── components/
│   ├── Navigation.tsx    # 상단 네비
│   ├── Hero.tsx          # 히어로 섹션
│   ├── About.tsx         # 소개
│   ├── Timeline.tsx      # 경력 타임라인
│   ├── Projects.tsx      # STAR 프로젝트 ⭐
│   ├── Publications.tsx  # 논문
│   ├── Skills.tsx        # 스킬 + 티칭 + 수상
│   ├── Contact.tsx       # 연락처 + 푸터
│   └── SectionHeader.tsx # 공통 섹션 헤더
├── lib/
│   └── data.ts           # ⭐ 모든 컨텐츠가 여기 있음
├── public/
│   └── images/           # 프로필/프로젝트 사진 넣는 곳
└── ... (설정 파일들)
```

**컨텐츠 수정은 거의 전부 `lib/data.ts` 하나에서 가능**하도록 구성했습니다.

---

## 🎨 디자인 컨셉

- **다크 + 웜 골드 액센트** — 학술적이면서 차분한 톤
- **Fraunces (serif display) + Inter (body) + JetBrains Mono (mono)** — 학술 저널 느낌
- **STAR 프레임워크로 펼치는 프로젝트 카드** — 프로젝트별로 Situation/Task/Action/Result가 명확히 분리
- **Grain overlay + dotted grid** — 평면적인 AI 웹사이트 느낌 회피

---

## 📝 변경이 자주 필요한 곳 치트시트

| 무엇을 바꾸고 싶은가 | 어느 파일 |
|----------------------|-----------|
| 이메일, 폰, 학교 정보 | `lib/data.ts` → `profile` |
| Hero 하단 큰 숫자 4개 | `lib/data.ts` → `stats` |
| 소개 문단 / 하이라이트 4개 | `lib/data.ts` → `about` |
| 경력 타임라인 | `lib/data.ts` → `timeline` |
| **프로젝트 (가장 자주 바뀔 것)** | `lib/data.ts` → `projects` |
| 논문 | `lib/data.ts` → `publications` |
| 스킬 / 티칭 / 수상 | `lib/data.ts` → `skills`, `teaching`, `awards` |
| 색깔 / 폰트 / 다크 톤 | `app/globals.css` — `:root` 변수 |
| 섹션 순서 | `app/page.tsx` |

---

## 🔧 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Fonts**: next/font (Fraunces, Inter, JetBrains Mono)
- **Deployment**: Vercel (zero-config for Next.js)

---

## 📧 문의

kwakjoonhyung0429@gmail.com
