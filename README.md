# 🚀 React Server Components 연습 프로젝트

Next.js App Router를 사용한 React Server Components(RSC) 학습 및 실습을 위한 프로젝트입니다.

## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [설치 및 실행](#설치-및-실행)
- [프로젝트 구조](#프로젝트-구조)
- [학습 내용](#학습-내용)
- [RSC vs Client Component](#rsc-vs-client-component)
- [주요 개념](#주요-개념)
- [참고 자료](#참고-자료)

## 🎯 프로젝트 소개

이 프로젝트는 React Server Components의 다양한 패턴과 사용법을 실습할 수 있도록 구성된 학습용 프로젝트입니다. Next.js 15와 React 19를 사용하여 최신 RSC 기능들을 체험할 수 있습니다.

### 주요 특징
- ✅ React 19 + Next.js 15 최신 버전 사용
- ✅ Server Components와 Client Components의 차이점 학습
- ✅ 데이터 페칭, 스트리밍, Server Actions 등 다양한 패턴 실습
- ✅ 성능 최적화 기법 학습
- ✅ TypeScript + Tailwind CSS 지원

## 🛠 기술 스택

- **React 19** - 최신 RSC 기능 지원
- **Next.js 15** - App Router와 RSC 완전 지원
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 빠른 스타일링

## 🚀 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/UnopndJude/react-server-components-practice.git
cd react-server-components-practice
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

### 4. 브라우저에서 확인

[http://localhost:3000](http://localhost:3000)에서 프로젝트를 확인할 수 있습니다.

### 5. 빌드 및 프로덕션 실행

```bash
# 빌드
npm run build

# 프로덕션 실행
npm run start
```

## 📁 프로젝트 구조

```
react-server-components-practice/
├── app/                          # Next.js App Router
│   ├── globals.css              # 전역 스타일
│   ├── layout.tsx               # 루트 레이아웃 (Server Component)
│   ├── page.tsx                 # 홈페이지 (Server Component)
│   ├── basic-rsc/               # 기본 RSC 예제
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── ServerTime.tsx   # Server Component 예제
│   │       └── ClientCounter.tsx # Client Component 예제
│   ├── data-fetching/           # 데이터 페칭 예제
│   ├── client-server-mix/       # 혼합 패턴 예제
│   ├── streaming/               # 스트리밍 예제
│   ├── server-actions/          # Server Actions 예제
│   └── performance/             # 성능 최적화 예제
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 📚 학습 내용

### 1. 📘 기본 RSC
- Server Component와 Client Component의 기본 개념
- 각각의 특징과 차이점 이해
- `'use client'` 지시어 사용법

### 2. 🔄 데이터 페칭
- Server Component에서의 직접적인 데이터베이스 접근
- `async/await`를 사용한 비동기 데이터 페칭
- 서버 사이드 렌더링의 이점

### 3. 🔀 혼합 패턴
- Server Component와 Client Component를 함께 사용하는 방법
- Props를 통한 데이터 전달
- 컴포넌트 경계 설정

### 4. ⚡ 스트리밍
- `Suspense`를 활용한 점진적 렌더링
- 스트리밍의 성능 이점
- 로딩 상태 관리

### 5. 🎯 Server Actions
- React 19의 새로운 Server Actions 기능
- 폼 처리와 서버 사이드 뮤테이션
- `useActionState`, `useOptimistic` 훅 사용법

### 6. ⚡ 성능 최적화
- RSC의 성능 이점 이해
- 번들 크기 최적화
- 서버와 클라이언트 간의 효율적인 역할 분담

## 🔍 RSC vs Client Component

| 특징 | Server Component | Client Component |
|------|------------------|------------------|
| **실행 위치** | 서버 | 브라우저 |
| **번들 크기** | 포함되지 않음 | 포함됨 |
| **데이터 접근** | 직접 DB/API 접근 | fetch 또는 API 라우트 필요 |
| **상호작용** | 불가능 | 가능 (이벤트, 상태) |
| **Hook 사용** | 불가능 | 가능 |
| **렌더링** | 서버에서 HTML 생성 | 클라이언트에서 DOM 조작 |
| **지시어** | 기본값 | `'use client'` 필요 |

## 🔑 주요 개념

### Server Component
```tsx
// 기본적으로 Server Component
async function UserProfile({ userId }: { userId: string }) {
  // 서버에서 직접 데이터베이스 접근
  const user = await db.user.findById(userId)
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
```

### Client Component
```tsx
'use client' // 클라이언트 컴포넌트 지시어

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

### Server Actions (React 19)
```tsx
// server action
async function createUser(formData: FormData) {
  'use server'
  
  const name = formData.get('name')
  // 서버에서 실행되는 뮤테이션
  await db.user.create({ name })
}

function UserForm() {
  return (
    <form action={createUser}>
      <input name="name" placeholder="사용자 이름" />
      <button type="submit">생성</button>
    </form>
  )
}
```

## 🎓 학습 순서 추천

1. **기본 RSC** → Server Component와 Client Component의 차이점 이해
2. **데이터 페칭** → 서버에서의 데이터 처리 방법 학습
3. **혼합 패턴** → 두 컴포넌트 타입을 함께 사용하는 방법
4. **스트리밍** → 성능 최적화를 위한 점진적 렌더링
5. **Server Actions** → React 19의 새로운 폼 처리 방법
6. **성능 최적화** → RSC의 성능 이점과 최적화 기법

## 📖 참고 자료

- [React Server Components 공식 문서](https://react.dev/reference/rsc/server-components)
- [Next.js App Router 문서](https://nextjs.org/docs/app)
- [React 19 릴리즈 노트](https://react.dev/blog/2024/12/05/react-19)
- [Server Actions 가이드](https://react.dev/reference/rsc/server-actions)

## 🤝 기여하기

이 프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

**Happy Learning! 🎉**

React Server Components의 강력한 기능들을 직접 체험해보세요!