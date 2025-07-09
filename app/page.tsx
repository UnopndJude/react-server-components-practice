import Link from 'next/link'

// 🌟 Server Component (기본값)
// 이 컴포넌트는 서버에서 실행되고 HTML로 렌더링됩니다
export default function HomePage() {
  // 서버 사이드에서 실행되는 코드
  const currentTime = new Date().toLocaleString('ko-KR')
  
  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">🚀 React Server Components 연습</h2>
        <p className="text-gray-600 mb-4">
          이 프로젝트는 React Server Components(RSC)의 다양한 패턴을 학습하기 위한 실습용 프로젝트입니다.
        </p>
        <p className="text-sm text-gray-500">
          서버 렌더링 시간: {currentTime}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/basic-rsc" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">📘 기본 RSC</h3>
          <p className="text-gray-600 text-sm">
            Server Component의 기본 개념과 동작 방식을 학습합니다.
          </p>
        </Link>

        <Link href="/data-fetching" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">🔄 데이터 페칭</h3>
          <p className="text-gray-600 text-sm">
            Server Component에서 데이터를 페칭하는 방법을 연습합니다.
          </p>
        </Link>

        <Link href="/client-server-mix" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">🔀 혼합 패턴</h3>
          <p className="text-gray-600 text-sm">
            Client와 Server Component를 함께 사용하는 패턴을 학습합니다.
          </p>
        </Link>

        <Link href="/streaming" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">⚡ 스트리밍</h3>
          <p className="text-gray-600 text-sm">
            Suspense와 스트리밍을 활용한 점진적 렌더링을 연습합니다.
          </p>
        </Link>

        <Link href="/server-actions" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">🎯 Server Actions</h3>
          <p className="text-gray-600 text-sm">
            React 19의 Server Actions를 사용한 폼 처리를 학습합니다.
          </p>
        </Link>

        <Link href="/performance" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">⚡ 성능 최적화</h3>
          <p className="text-gray-600 text-sm">
            RSC의 성능 이점과 최적화 기법을 학습합니다.
          </p>
        </Link>
      </div>
    </div>
  )
}