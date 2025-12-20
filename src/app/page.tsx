import Link from 'next/link';
import { ArrowRight, Download, Calculator, Users, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 pb-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/50 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-200/50 blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge variant="outline" className="mb-6 bg-white/50 backdrop-blur-sm border-indigo-100 text-indigo-700 px-3 py-1 font-medium rounded-full">
            선생님을 위한 스마트한 반 편성 조력자
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-[1.15]">
            가장 합리적인 <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">반 편성의 기준</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto mb-10 break-keep leading-relaxed">
            선생님의 공정한 기준을 가장 스마트한 방법으로 구현합니다.
            복합적인 조건들을 빠르게 분석하여 모두가 납득할 수 있는 최선의 반 편성안을 제안합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/download"
              className="px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-bold text-base shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Windows 버전 다운로드
            </Link>
            <Link
              href="/guide"
              className="px-6 py-3.5 bg-white text-foreground border border-border rounded-full font-bold text-base shadow-sm hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              사용자 매뉴얼
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-foreground">Classzle의 핵심 가치</h2>
            <p className="mt-4 text-sm text-muted-foreground">전문적인 기술력으로 선생님의 결정을 더 가치있게 만듭니다.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-indigo-200 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">간편한 데이터 업로드</h3>
              <p className="text-sm text-muted-foreground break-keep leading-relaxed">
                나이스에서 내려받은 명단을 복사해 붙여넣기만 하세요. 별도의 양식 가공 없이 성별, 성취도, 생년월일 등을 즉시 인식합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-indigo-200 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">지능형 배정 엔진</h3>
              <p className="text-sm text-muted-foreground break-keep leading-relaxed">
                성별·성적 균형은 물론, 필수 분리·동일 배정 관계와 생활지도 점수까지 고려하여 선생님의 의도가 반영된 최선의 초안을 제안합니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-indigo-200 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">자유로운 드래그 조정</h3>
              <p className="text-sm text-muted-foreground break-keep leading-relaxed">
                자동 생성 후에도 마우스 클릭만으로 학생을 이동시키세요. 인적 관계 등 수치화되지 않은 영역까지 선생님의 통찰을 완벽히 반영합니다.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-indigo-200 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">검증 및 상세 리포트</h3>
              <p className="text-sm text-muted-foreground break-keep leading-relaxed">
                조정할 때마다 제약 조건 만족 여부를 실시간 탐지하고, 통계 요약과 변경 이력이 포함된 깔끔한 보고서를 생성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
