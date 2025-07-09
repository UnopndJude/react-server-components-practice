'use client' // 🌟 Client Component 지시어

import React, { useState, useEffect } from 'react'

export default function ClientCounter() {
  const [count, setCount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  // 클라이언트에서만 실행되는 코드
  useEffect(() => {
    setIsClient(true)
    
    // 실시간 시계
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('ko-KR'))
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const handleIncrement = () => {
    setCount(c => c + 1)
  }

  const handleDecrement = () => {
    setCount(c => c - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
      <h3 className="font-semibold text-yellow-800 mb-2">💻 클라이언트 카운터</h3>
      
      <div className="space-y-3">
        <div className="text-lg font-mono">
          현재 카운트: <span className="font-bold text-yellow-700">{count}</span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={handleIncrement}
            className="btn btn-primary"
          >
            증가 (+1)
          </button>
          <button 
            onClick={handleDecrement}
            className="btn btn-secondary"
          >
            감소 (-1)
          </button>
          <button 
            onClick={handleReset}
            className="btn btn-secondary"
          >
            초기화
          </button>
        </div>
        
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>클라이언트 실행:</strong> {isClient ? '✅ 예' : '❌ 아니오'}</p>
          <p><strong>현재 시간:</strong> {isClient ? currentTime : '서버 렌더링'}</p>
          <p><strong>사용자 에이전트:</strong> {isClient ? navigator.userAgent.slice(0, 50) + '...' : '서버 환경'}</p>
        </div>
      </div>
      
      <div className="mt-3 p-2 bg-yellow-100 rounded text-xs">
        <strong>💡 특징:</strong>
        <ul className="mt-1 space-y-1">
          <li>• 브라우저에서 실행됨</li>
          <li>• React Hooks 사용 가능</li>
          <li>• 이벤트 핸들링 가능</li>
          <li>• 클라이언트 번들에 포함됨</li>
          <li>• 'use client' 지시어 필요</li>
        </ul>
      </div>
      
      <p className="text-xs text-yellow-600 mt-2">
        ⚡ 이 컴포넌트는 브라우저에서 상호작용이 가능합니다.
      </p>
    </div>
  )
}