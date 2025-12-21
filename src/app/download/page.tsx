import Link from 'next/link';
import { Download, Monitor, CheckCircle } from 'lucide-react';

export default function DownloadPage() {
    return (
        <div className="bg-slate-50 min-h-[calc(100vh-64px)] py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="p-10 md:p-16 text-center">
                        <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <Monitor className="w-10 h-10 text-indigo-600" />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Windows용 Classzle 다운로드
                        </h1>
                        <p className="text-lg text-slate-600 mb-10">
                            최신 버전을 다운로드하여 지금 바로 반 편성을 시작하세요.
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-8 max-w-md mx-auto border border-slate-200">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">최신 버전</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">최신</span>
                            </div>

                            <div className="text-left mb-8">
                                <div className="text-3xl font-bold text-slate-900">v1.1.0</div>
                                <div className="text-sm text-slate-500 mt-1">2025년 12월 21일 배포</div>
                            </div>

                            <a
                                href="https://github.com/pobydev/Classzle/releases/latest/download/Classzle.Setup.1.1.0.exe"
                                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-md hover:bg-indigo-700 hover:scale-[1.02] transition flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                설치 파일 다운로드 (64-bit)
                            </a>

                            <p className="mt-4 text-xs text-slate-400">
                                Windows 10 이상 지원
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="flex gap-3 justify-center">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-sm text-slate-600">철저한 개인정보 보호</span>
                            </div>
                            <div className="flex gap-3 justify-center">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-sm text-slate-600">오프라인 지원</span>
                            </div>
                            <div className="flex gap-3 justify-center">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-sm text-slate-600">완전 무료</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
