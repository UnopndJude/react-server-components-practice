'use client' // 🌟 Client Component 지시어

import { useState } from 'react'

export default function ClientCounter() {
  const [count, setCount] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // 클라이언트에서만 실행되는 코드
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
      <h3 className="font-semibold text-yellow-800 mb-2">💻 클라이언트 카운터</h3>
      
      <div className="space-y-3">
        <div className="text-lg font-mono">
          현재 카운트: <span className="font-bold text-yellow-700">{count}</span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setCount(c => c + 1)}
            className="btn btn-primary"
          >
            증가 (+1)
          </button>
          <button 
            onClick={() => setCount(c => c - 1)}
            className="btn btn-secondary"
          >
            감소 (-1)
          </button>
          <button 
            onClick={() => setCount(0)}
            className="btn btn-secondary"
          >
            초기화
          </button>
        </div>
        
        <div className="text-sm text-gray-600">
          <p><strong>클라이언트 실행:</strong> {isClient ? '✅ 예' : '❌ 아니오'}</p>
          <p><strong>현재 시간:</strong> {isClient ? new Date().toLocaleTimeString('ko-KR') : '서버 렌더링'}</p>
        </div>
      </div>
      
      <p className="text-xs text-yellow-600 mt-2">
        ⚡ 이 컴포넌트는 브라우저에서 상호작용이 가능합니다.
      </p>
    </div>
  )
}

// React import 추가
import React from 'react'