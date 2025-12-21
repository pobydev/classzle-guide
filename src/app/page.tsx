'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Calculator, Users, FileSpreadsheet, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck, MousePointerClick, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "1. 간편한 입력",
      desc: "엑셀 명렬표 그대로, 복사해서 붙여넣기만 하세요.",
      image: "/images/slide1.gif",
      duration: 8000,
      color: "bg-blue-100"
    },
    {
      title: "2. 정밀한 조건 설정",
      desc: "성적, 성비는 기본. '분리 배정'이나 '특별 지도' 학생도 꼼꼼하게 고려합니다.",
      image: "/images/slide2.gif",
      duration: 8000,
      color: "bg-indigo-100"
    },
    {
      title: "3. 결과 확인",
      desc: "복잡한 계산은 눈깜짝할 새에. 제안된 배정안을 눈으로 확인하세요.",
      image: "/images/slide3.gif",
      duration: 8000,
      color: "bg-violet-100"
    },
    {
      title: "4. 시뮬레이션",
      desc: "마우스로 쓱- 옮겨보세요. 실시간으로 밸런스가 다시 계산됩니다.",
      image: "/images/slide4.gif",
      duration: 8000,
      color: "bg-purple-100"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play carousel with variable duration
  useEffect(() => {
    const currentDuration = slides[currentSlide].duration || 8000;
    const timer = setTimeout(nextSlide, currentDuration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="flex flex-col min-h-full">
      {/* 1. Integrated Hero Section */}
      <section className="relative w-full py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Background Image with Dimmed Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg_sunlight.png"
            alt="Classzle Dashboard Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          {/* Dimmed Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

          {/* Definition */}
          <Badge variant="outline" className="mb-6 border-white/30 text-white/90 px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-md">
            Windows 전용 데스크톱 반 편성 도구
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight text-white shadow-lg">
            복잡한 배정 고민,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">클릭 한 번으로 명쾌하게.</span>
          </h1>

          <p className="mt-2 text-lg text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Classzle은 성적, 성향, 교우 관계 등 복잡한 조건을 종합하여<br className="hidden sm:block" />
            균형 잡힌 반 편성을 도와주는 선생님의 보조 도구입니다.
          </p>


          {/* Motivation / Story */}
          <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md text-left relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/80"></div>

            <h3 className="text-2xl font-semibold mb-6 text-indigo-300 italic text-center leading-relaxed">
              "명렬표와 씨름하던 그 시간들,<br className="sm:hidden" /> 저도 똑같이 답답했습니다."
            </h3>

            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p className="font-light italic text-white/90">
                "A학생과 B학생을 떼어놓으면 성적 균형이 깨지고... <br className="hidden sm:block" />
                '그럼 도대체 누굴 옮겨야 하죠?'"
              </p>
              <p>
                학년말마다 명렬표를 붙들고 끝없이 고민하던 건, <br className="hidden sm:block" />
                동료 선생님들뿐만 아니라 <span className="text-indigo-200 font-medium">바로 저의 모습</span>이기도 했습니다.
              </p>
              <p>
                '조금 더 합리적인 방법은 없을까?'라는 치열한 고민 끝에 만들었습니다.<br />
                복잡한 계산은 <span className="text-white font-bold">Classzle</span>에게 맡기고, <br className="hidden sm:block" />
                선생님은 <span className="text-white font-bold decoration-indigo-500/30 underline decoration-4 underline-offset-4">최종 검토와 아이들</span>에게만 집중하세요.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 w-full justify-center">
            <Link
              href="/download"
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-base shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 min-w-[180px]"
            >
              <Download className="w-4 h-4" />
              무료 다운로드
            </Link>
            <Link
              href="/guide"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-base backdrop-blur-sm transition-all flex items-center justify-center gap-2 min-w-[180px]"
            >
              사용자 매뉴얼
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 2. Feature Walkthrough Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">미리보는 Classzle</h2>
            <p className="mt-4 text-slate-600">복잡한 과정은 덜어내고, 꼭 필요한 기능만 직관적으로 담았습니다.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Window */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 aspect-square md:aspect-[16/11] bg-slate-50">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex flex-col h-full bg-slate-100">
                    {/* Image Area */}
                    <div className={`flex-1 flex items-center justify-center ${slide.color} relative group overflow-hidden`}>
                      {slide.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            key={`${slide.image}-${index}-${currentSlide === index}`} // 슬라이드 활성화 시 이미지 리마운트 -> GIF 재시작
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover" // 꽉 채우기
                            unoptimized={slide.image.endsWith('.gif')}
                          />
                        </div>
                      ) : (
                        <div className="text-slate-400 text-lg font-medium flex flex-col items-center gap-4">
                          <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center shadow-sm">
                            <span className="text-4xl">📷</span>
                          </div>
                          <span>스크린샷 영역 {index + 1}</span>
                          <span className="text-sm opacity-60">(추후 실제 이미지로 교체 예정)</span>
                        </div>
                      )}

                      {/* Text Overlay (Bottom) */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-8 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{slide.title}</h3>
                        <p className="text-slate-600 text-lg">{slide.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-indigo-600 hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-indigo-600 hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-indigo-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 3. Core Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">공정함과 안전함, 그리고 편리함까지</h2>
            <p className="mt-4 text-slate-600">생활지도 점수로 균형을 잡고, 오프라인 보안으로 아이들의 정보를 안전하게 지킵니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 break-keep min-h-[3.5rem] flex items-center">
                보이지 않는 성향까지,<br />'생활지도 점수'로
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-left break-keep">
                성적만으로는 반 분위기를 알 수 없습니다. 리더십은 (+), 요주의 행동은 (-)로. <strong>생활지도의 난이도 총량</strong>을 맞춰 선생님의 1년을 보호합니다.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 break-keep min-h-[3.5rem] flex items-center">
                데이터 유출 걱정 없는<br />안전한 철통 보안
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-left break-keep">
                아이들의 민감한 정보, 인터넷 업로드가 불안하셨죠? Classzle은 PC 안에서만 작동하는 <strong>100% 오프라인 앱</strong>입니다. 정보 유출 걱정 없이 안심하고 작업하세요.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <MousePointerClick className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 break-keep min-h-[3.5rem] flex items-center">
                클릭으로 완성하는<br />자유로운 시뮬레이션
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-left break-keep">
                종이에 썼다 지웠다 할 필요가 없습니다. 마우스로 학생을 옮기며 최적의 조합을 찾아보세요. 수정할 때마다 바뀌는 밸런스를 확인하고, 최선의 결과를 도출하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">학년말의 가장 큰 고민,<br className="sm:hidden" /> 이제 그 짐을 Classzle이 함께 들어드릴게요.</h2>
          <p className="text-indigo-200 mb-10 text-lg">지금 바로 다운로드하여 가벼운 마음으로 새 학기를 준비하세요.</p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors"
          >
            <Download className="w-5 h-5" />
            Classzle 무료 다운로드
          </Link>
        </div>
      </section>

    </div>
  );
}
