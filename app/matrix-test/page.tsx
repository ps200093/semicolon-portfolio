"use client"

import MatrixRain from "@/components/matrix-rain"
import MatrixRainEnhanced from "@/components/matrix-rain-enhanced"

export default function MatrixTestPage() {
  return (
    <div className="w-full">
      {/* 기본 메트릭스 효과 섹션 */}
      <section className="relative">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-white text-3xl font-bold mb-2">기본 버전</h2>
            <p className="text-green-400 text-sm">CSS 애니메이션 기반 | 라틴 문자</p>
          </div>
        </div>
        <MatrixRain />
      </section>

      {/* 고급 메트릭스 효과 섹션 */}
      <section className="relative">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-white text-3xl font-bold mb-2">고급 버전</h2>
            <p className="text-green-400 text-sm">
              requestAnimationFrame 기반 | 라틴 문자 + 숫자 | 글로우 효과 | 한 글자씩 늘어나는 효과
            </p>
          </div>
        </div>
        <MatrixRainEnhanced />
      </section>
    </div>
  )
}
