import { Suspense } from 'react'
import ServerTime from './components/ServerTime'
import ClientCounter from './components/ClientCounter'
import Link from 'next/link'

// 🌟 Server Component 예제
export default function BasicRSCPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/" className="btn btn-secondary">← 홈으로</Link>
        <h1 className="text-2xl font-bold">📘 기본 React Server Components</h1>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">🎯 학습 목표</h2>
        <ul className="text-gray-600 space-y-2">
          <li>• Server Component와 Client Component의 차이점 이해</li>
          <li>• 각각의 실행 환경과 특징 학습</li>
          <li>• 'use client' 지시어의 역할 이해</li>
        </ul>
      </div>

      {/* Server Component */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">🖥️ Server Component</h2>
        <p className="text-gray-600 mb-4">
          아래 컴포넌트는 서버에서 렌더링되어 HTML로 전달됩니다.
        </p>
        <Suspense fallback={<div className="text-gray-500">서버에서 로딩 중...</div>}>
          <ServerTime />
        </Suspense>
      </div>

      {/* Client Component */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">💻 Client Component</h2>
        <p className="text-gray-600 mb-4">
          아래 컴포넌트는 클라이언트에서 상호작용이 가능합니다.
        </p>
        <ClientCounter />
      </div>

      {/* 설명 */}
      <div className="card bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">💡 주요 차이점</h3>
        <div className="space-y-4 text-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">🖥️ Server Component</h4>
              <ul className="text-gray-600 space-y-1">
                <li>✅ 서버에서 실행</li>
                <li>✅ 데이터베이스 직접 접근 가능</li>
                <li>✅ 번들 크기에 포함되지 않음</li>
                <li>✅ 초기 로딩 속도 빠름</li>
                <li>❌ 상호작용 불가 (useState, useEffect 사용 불가)</li>
                <li>❌ 브라우저 API 사용 불가</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">💻 Client Component</h4>
              <ul className="text-gray-600 space-y-1">
                <li>✅ 브라우저에서 실행</li>
                <li>✅ 상호작용 가능 (이벤트, 상태)</li>
                <li>✅ React Hooks 사용 가능</li>
                <li>✅ 브라우저 API 접근 가능</li>
                <li>❌ 번들 크기에 포함됨</li>
                <li>❌ 'use client' 지시어 필요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 코드 예제 */}
      <div className="card bg-gray-50 border-gray-200">
        <h3 className="text-lg font-semibold mb-3">📝 코드 예제</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Server Component</h4>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// 기본적으로 Server Component
async function ServerTime() {
  // 서버에서만 실행되는 코드
  const serverTime = new Date().toLocaleString()
  
  return <div>서버 시간: {serverTime}</div>
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium mb-2">Client Component</h4>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`'use client' // 클라이언트 컴포넌트 지시어

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  )
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}