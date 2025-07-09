// 🌟 Server Component (기본값)
// 서버에서만 실행되는 컴포넌트

async function ServerTime() {
  // 서버에서 실행되는 비동기 작업 시뮬레이션
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const serverTime = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const serverInfo = {
    nodeVersion: process.version,
    platform: process.platform,
    memory: Math.round(process.memoryUsage().heapUsed / 1024 / 1024)
  }

  return (
    <div className="border rounded-lg p-4 bg-green-50 border-green-200">
      <h3 className="font-semibold text-green-800 mb-2">🖥️ 서버 정보</h3>
      <div className="text-sm space-y-1">
        <p><strong>서버 시간:</strong> {serverTime}</p>
        <p><strong>Node.js 버전:</strong> {serverInfo.nodeVersion}</p>
        <p><strong>플랫폼:</strong> {serverInfo.platform}</p>
        <p><strong>메모리 사용량:</strong> {serverInfo.memory} MB</p>
      </div>
      <p className="text-xs text-green-600 mt-2">
        ✅ 이 정보는 서버에서 계산되어 HTML로 전달되었습니다.
      </p>
      <div className="mt-3 p-2 bg-green-100 rounded text-xs">
        <strong>💡 특징:</strong>
        <ul className="mt-1 space-y-1">
          <li>• 서버에서 한 번만 실행됨</li>
          <li>• process 객체에 접근 가능</li>
          <li>• 데이터베이스 직접 접근 가능</li>
          <li>• 클라이언트 번들에 포함되지 않음</li>
        </ul>
      </div>
    </div>
  )
}

export default ServerTime