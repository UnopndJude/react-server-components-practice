import { Suspense } from 'react'
import ServerTime from './components/ServerTime'
import ClientCounter from './components/ClientCounter'

// 🌟 Server Component 예제
export default function BasicRSCPage() {
  return (
    <div className="space-y-6">
      <div className="card">
        <h1 className="text-2xl font-bold mb-4">📘 기본 React Server Components</h1>
        <p className="text-gray-600 mb-4">
          이 페이지는 Server Component의 기본 개념을 보여줍니다.
        </p>
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
        <div className="space-y-2 text-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-700">Server Component</h4>
              <ul className="text-gray-600 mt-1 space-y-1">
                <li>• 서버에서 실행</li>
                <li>• 데이터베이스 직접 접근 가능</li>
                <li>• 번들 크기에 포함되지 않음</li>
                <li>• 상호작용 불가 (useState, useEffect 사용 불가)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-700">Client Component</h4>
              <ul className="text-gray-600 mt-1 space-y-1">
                <li>• 브라우저에서 실행</li>
                <li>• 상호작용 가능 (이벤트, 상태)</li>
                <li>• 번들 크기에 포함됨</li>
                <li>• 'use client' 지시어 필요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}