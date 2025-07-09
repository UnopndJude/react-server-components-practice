import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'React Server Components 연습',
  description: 'Next.js App Router를 사용한 RSC 학습 및 실습 프로젝트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">React Server Components 연습</h1>
          <p className="text-blue-100">RSC의 다양한 패턴을 학습해보세요</p>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}