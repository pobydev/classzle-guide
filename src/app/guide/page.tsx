'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import GuideSidebar from '@/components/GuideSidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, FileSpreadsheet, Settings, Users, HelpCircle, AlertTriangle, Download, ArrowRight, Save, MousePointerClick, LayoutGrid, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function GuidePage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="container mx-auto px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">

            <div className="flex flex-col lg:flex-row gap-8">
                {/* 사이드바 */}
                <aside className="lg:w-56 flex-shrink-0">
                    <div className="lg:sticky lg:top-20">
                        <GuideSidebar />
                    </div>
                </aside>

                {/* 메인 컨텐츠 */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-20">

                        {/* 헤더 섹션 */}
                        <div className="space-y-4 border-b border-border pb-8">
                            <Badge variant="outline" className="mb-2 px-3 py-1 text-xs font-semibold">User Manual</Badge>
                            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Classzle 사용설명서</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl break-keep">
                                데이터 준비부터 최적의 배정안 산출, 그리고 최종 리포트 출력까지.<br />
                                Classzle을 활용한 <strong>스마트한 반 편성 프로세스</strong>를 상세히 안내해 드립니다.
                            </p>
                        </div>

                        {/* Step 0: 준비 단계 */}
                        <section id="intro" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">0</div>
                                <h2 className="text-2xl font-bold text-foreground">시작 전 준비</h2>
                            </div>

                            <div className="grid gap-8">
                                <Card className="border-indigo-100 bg-indigo-50/30 shadow-none">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-2 text-indigo-900">
                                            <AlertTriangle className="w-5 h-5 text-indigo-600" />
                                            <CardTitle className="text-lg font-bold">환경 설정 및 주의사항</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4 text-sm leading-relaxed">
                                        <ul className="space-y-3 list-disc list-inside text-slate-700">
                                            <li><strong className="text-indigo-900 font-bold">PC 환경 권장:</strong> 정교한 데이터 그리드와 드래그 앤 드롭 기능을 위해 <strong>데스크톱/노트북</strong> 사용을 강력히 권장합니다.</li>
                                            <li><strong className="text-indigo-900 font-bold">로컬 데이터 보안:</strong> 모든 데이터는 서버로 전송되지 않고 로컬 환경에만 저장됩니다. 작업 중간에 <strong>[작업 저장]</strong> 버튼을 눌러 프로젝트 이름을 정하고 저장하세요.</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-border bg-card shadow-sm overflow-hidden">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/30">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="flex items-center gap-2 text-base font-bold text-foreground">
                                                💡 실전 팁: 기초 자료 수집 가이드 (학년부용)
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="mb-6 p-5 bg-blue-50/50 border border-blue-100 rounded-lg flex flex-col gap-4">
                                            <div className="flex items-start gap-2">
                                                <FileSpreadsheet className="w-5 h-5 text-blue-600 mt-0.5" />
                                                <div className="space-y-1">
                                                    <h4 className="font-bold text-blue-900 text-sm">Classzle이 어떻게 작동하는지 궁금하신가요?</h4>
                                                    <p className="text-xs text-blue-700/80 leading-relaxed">
                                                        * 가상의 인물들로 구성된 샘플 파일로 먼저 테스트해보세요.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 pl-7">
                                                <a
                                                    href="/samples/sample_data_basic.xlsx"
                                                    download="Classzle_양식A_기본.xlsx"
                                                    className="text-xs px-3 py-2 bg-white border border-blue-200 text-blue-700 font-bold rounded-md hover:bg-blue-50 transition shadow-sm flex items-center gap-1.5"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                    양식 A (기본) 다운로드
                                                </a>
                                                <a
                                                    href="/samples/sample_data_preassigned.xlsx"
                                                    download="Classzle_양식B_기배정.xlsx"
                                                    className="text-xs px-3 py-2 bg-white border border-blue-200 text-blue-700 font-bold rounded-md hover:bg-blue-50 transition shadow-sm flex items-center gap-1.5"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                    양식 B (기배정) 다운로드
                                                </a>
                                            </div>
                                        </div>

                                        <div className="grid gap-8 md:grid-cols-2">
                                            <div className="space-y-5">
                                                <div>
                                                    <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">1. 데이터 수집 항목</h4>
                                                    <ul className="text-xs space-y-2 text-muted-foreground">
                                                        <li className="flex gap-2">
                                                            <span className="text-indigo-500">•</span>
                                                            <span><strong>기준 성적:</strong> 나이스(NEIS)에서 산출된 석차연명부 상의 총점 (또는 석차)</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-indigo-500">•</span>
                                                            <span><strong>생활지도 점수:</strong> 각 학생을 리더형(+1~+2), 행동형(-1~-3), 정서형(-1~-3)으로 분류 (오른쪽 예시 참고)</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-indigo-500">•</span>
                                                            <span><strong>분리/동반 관계:</strong> 학폭, 관계 불화, 도움반 도우미, 쌍둥이 등</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-indigo-500">•</span>
                                                            <span><strong>기타 메모:</strong> 전출 예정자 및 특수학급 학생 명단</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-indigo-400 font-bold text-[10px] bg-indigo-50 px-1 py-0.5 rounded">Check</span>
                                                            <span className="text-indigo-400"><strong>생년월일:</strong> 학교 명렬표 서식 그대로 <strong>붙여넣기 편하도록 열을 만들어 두었을 뿐</strong>, 알고리즘엔 반영되지 않으니 비워두셔도 됩니다.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bg-indigo-50/50 p-3 rounded-lg border border-indigo-100/50">
                                                    <div className="flex gap-2">
                                                        <Lock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                                        <p className="text-[11px] leading-relaxed text-indigo-900">
                                                            <strong>보안 강조:</strong> 학생을 향한 주관적 지표가 포함되므로, 파일 전송보다는 <strong>'종이 명렬표'</strong>로 직접 전달받아 입력하는 방식을 권장합니다.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">2. 생활지도 점수화 예시</h4>
                                                <div className="bg-muted/50 rounded-lg p-3 border border-border">
                                                    <div className="space-y-2.5 text-[11px]">
                                                        <div className="flex justify-between border-b border-border pb-1.5">
                                                            <span className="font-medium">리더십 (회장감 등)</span>
                                                            <span className="font-bold text-indigo-600">+1 ~ +2</span>
                                                        </div>
                                                        <div className="flex justify-between border-b border-border pb-1.5">
                                                            <span className="font-medium text-slate-700">행동 특성상 분산 필요 (수업방해 등)</span>
                                                            <span className="font-bold text-slate-700">-1 ~ -3</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="font-medium text-slate-600">심리적/정서적 지원 필요 (우울, 교우관계 등)</span>
                                                            <span className="font-bold text-slate-600">-1 ~ -3</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 bg-indigo-600 text-white p-2 rounded text-[10px] font-mono text-center">
                                                        기재 예시: 김OO -3(생), 박OO +2
                                                    </div>
                                                </div>

                                                <div className="bg-amber-50 rounded-lg p-3 border border-amber-100/50">
                                                    <h5 className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-1.5">
                                                        <span className="text-sm">💡</span> 배정에 미치는 영향
                                                    </h5>
                                                    <p className="text-[11px] leading-relaxed text-amber-900/80 break-keep">
                                                        <strong>점수 총점/평균 균등화</strong>: 알고리즘은 성적뿐만 아니라 <strong>생활지도 점수의 합계</strong>도 모든 반이 비슷해지도록 배정합니다.<br />
                                                        이를 통해 특정 반에 생활지도가 어려운 학생이 쏠리거나, 리더가 없는 반이 생기는 문제를 **원천적으로 방지**합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <Separator />

                        {/* Step 1: 데이터 입력 */}
                        <section id="step1" className="scroll-mt-24 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">1</div>
                                <h2 className="text-2xl font-bold text-foreground">기초 자료 수집 및 입력</h2>
                            </div>

                            <div className="space-y-12">
                                <div className="grid gap-8 md:grid-cols-3">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                                            <Badge className="bg-slate-200 text-slate-700 hover:bg-slate-200">1-1</Badge>
                                            학급 수 설정
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            화면 상단의 <strong>[편성할 학급 수]</strong> 입력 칸에 숫자를 넣으세요. 설정된 학급 수에 맞춰 모든 데이터 그리드가 자동 정렬됩니다.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                                            <Badge className="bg-slate-200 text-slate-700 hover:bg-slate-200">1-2</Badge>
                                            엑셀 양식 선택
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong>양식 A(기본):</strong> '직전 학년도' 정보를 넣어 새로운 반을 편성할 때 사용합니다.<br />
                                            <strong>양식 B(기배정):</strong> '이미 결정된 반' 정보를 넣어 적절성을 검토하거나 조정할 때 사용합니다.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                                            <Badge className="bg-slate-200 text-slate-700 hover:bg-slate-200">1-3</Badge>
                                            복사 및 붙여넣기
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            엑셀에서 데이터를 드래그하여 복사한 뒤, Classzle 화면의 빈 그리드 첫 번째 셀을 클릭하고 <strong>Ctrl+V</strong>를 누르세요.
                                        </p>
                                    </div>
                                </div>

                                <Card className="border-primary/20 bg-primary/5 shadow-none overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="grid md:grid-cols-2">
                                            <div className="p-6 border-r border-primary/10 space-y-4">
                                                <h4 className="font-bold text-sm flex items-center gap-2">
                                                    <FileSpreadsheet className="w-4 h-4 text-primary" />
                                                    데이터 인식 요령
                                                </h4>
                                                <ul className="space-y-3 text-xs">
                                                    <li className="flex gap-2">
                                                        <span className="text-primary font-bold whitespace-nowrap shrink-0">성적:</span>
                                                        <span>점수와 석차를 모두 인식합니다. (알고리즘이 자동으로 격차 분석)</span>
                                                    </li>
                                                    <li className="flex gap-2">
                                                        <span className="text-primary font-bold whitespace-nowrap shrink-0">생년월일(선택):</span>
                                                        <span>양식 B의 생년월일은 <strong>학교 명렬표 서식을 유지하기 위한 것</strong>일 뿐, 알고리즘에는 영향을 주지 않으므로 비워두셔도 무방합니다.</span>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="p-6 bg-white/40 space-y-4">
                                                <h4 className="font-bold text-sm flex items-center gap-2">
                                                    <HelpCircle className="w-4 h-4 text-slate-400" />
                                                    잘못 입력했을 때는?
                                                </h4>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    데이터 그리드 위의 <strong className="text-foreground">[데이터 초기화]</strong> 버튼을 누르면 입력된 모든 내용이 사라집니다. 그 후 수정이 완료된 엑셀 데이터를 다시 붙여넣으세요.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <Separator />

                        {/* Step 2: 제약 조건 */}
                        <section id="step2" className="scroll-mt-24 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                                <h2 className="text-2xl font-bold text-foreground">배정 제약 조건 설정</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-muted/30 p-4 rounded-xl border border-border">
                                    <h4 className="text-sm font-bold flex items-center gap-2 mb-2">
                                        <Settings className="w-4 h-4 text-indigo-600" />
                                        기본 사용 흐름
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        상단 탭 메뉴에서 원하는 기능을 선택하고 → 좌측 목록에서 대상을 고른 뒤 → 우측에서 세부 설정을 하고 → <strong>[저장 및 완료]</strong>를 누르는 방식입니다.
                                    </p>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* 1. 분산 배정 */}
                                    <Card className="border-indigo-100 shadow-sm">
                                        <CardHeader className="pb-3 border-b border-indigo-100/50 bg-indigo-50/30">
                                            <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-900">
                                                <Badge variant="outline" className="bg-white border-indigo-200 text-indigo-700">Tab 1</Badge>
                                                분산 배정 그룹 설정
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-4 space-y-4">
                                            <div>
                                                <strong className="text-xs font-bold text-indigo-800 block mb-1">언제 사용하나요?</strong>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    운동부, 영재학급, 혹은 특정 성향의 학생들이 <strong>한 반에 몰리지 않고 골고루 흩어지게</strong> 하고 싶을 때 사용합니다.
                                                </p>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <strong className="text-[11px] font-bold text-slate-700 block mb-2">사용 방법</strong>
                                                <ol className="list-decimal list-inside text-[11px] text-slate-600 space-y-1.5 marker:text-slate-400">
                                                    <li>상단 <strong>[+ 새 그룹]</strong>을 눌러 그룹 이름(예: 축구부)을 만듭니다.</li>
                                                    <li>좌측 목록에서 방금 만든 그룹을 선택합니다.</li>
                                                    <li>우측 <strong>전체 학생</strong> 목록에서 해당 학생들을 클릭해 그룹에 넣습니다.</li>
                                                    <li><strong>[저장 및 완료]</strong> 버튼을 눌러 저장합니다.</li>
                                                </ol>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* 2. 피해야 할 관계 */}
                                    <Card className="border-indigo-100 shadow-sm">
                                        <CardHeader className="pb-3 border-b border-indigo-100/50 bg-indigo-50/30">
                                            <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-900">
                                                <Badge variant="outline" className="bg-white border-indigo-200 text-indigo-700">Tab 2</Badge>
                                                피해야 할 관계
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-4 space-y-4">
                                            <div>
                                                <strong className="text-xs font-bold text-indigo-800 block mb-1">언제 사용하나요?</strong>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    학교폭력 사안, 교우관계 갈등 등으로 인해 <strong>절대로 같은 반이 되어서는 안 되는</strong> 학생들을 설정할 때 사용합니다.
                                                </p>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <strong className="text-[11px] font-bold text-slate-700 block mb-2">사용 방법</strong>
                                                <ol className="list-decimal list-inside text-[11px] text-slate-600 space-y-1.5 marker:text-slate-400">
                                                    <li>좌측 목록에서 기준이 될 학생을 선택합니다.</li>
                                                    <li>우측 목록에서 분리해야 할 대상을 찾아 클릭합니다.</li>
                                                    <li>필요 시 메모(사유)를 적고 <strong>[저장 및 완료]</strong>를 누릅니다.</li>
                                                </ol>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* 3. 같은 반 희망 */}
                                    <Card className="border-indigo-100 shadow-sm">
                                        <CardHeader className="pb-3 border-b border-indigo-100/50 bg-indigo-50/30">
                                            <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-900">
                                                <Badge variant="outline" className="bg-white border-indigo-200 text-indigo-700">Tab 3</Badge>
                                                같은 반 희망
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-4 space-y-4">
                                            <div>
                                                <strong className="text-xs font-bold text-indigo-800 block mb-1">언제 사용하나요?</strong>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    쌍둥이, 특수교육대상자와 도우미 학생 등 교육적 목적으로 <strong>반드시 같은 반에 배정</strong>되어야 하는 경우 사용합니다.
                                                </p>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <strong className="text-[11px] font-bold text-slate-700 block mb-2">사용 방법</strong>
                                                <ol className="list-decimal list-inside text-[11px] text-slate-600 space-y-1.5 marker:text-slate-400">
                                                    <li>좌측 목록에서 기준 학생을 먼저 선택합니다.</li>
                                                    <li>우측 목록에서 짝이 될 학생을 선택하여 추가합니다.</li>
                                                    <li><strong>[저장 및 완료]</strong>를 눌러 설정을 마칩니다.</li>
                                                </ol>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* 4. 고정 배정 */}
                                    <Card className="border-indigo-100 shadow-sm">
                                        <CardHeader className="pb-3 border-b border-indigo-100/50 bg-indigo-50/30">
                                            <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-900">
                                                <Badge variant="outline" className="bg-white border-indigo-200 text-indigo-700">Tab 4</Badge>
                                                고정 배정
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-4 space-y-4">
                                            <div>
                                                <strong className="text-xs font-bold text-indigo-800 block mb-1">언제 사용하나요?</strong>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    전입 예정, 유급, 혹은 학교장 재량으로 이미 <strong>특정 반 배정이 확정</strong>된 학생을 미리 배정할 때 사용합니다.
                                                </p>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <strong className="text-[11px] font-bold text-slate-700 block mb-2">사용 방법</strong>
                                                <ol className="list-decimal list-inside text-[11px] text-slate-600 space-y-1.5 marker:text-slate-400">
                                                    <li>좌측 목록에서 고정할 학생을 선택합니다.</li>
                                                    <li>우측에 나타난 반 번호 버튼(예: [1반])을 클릭해 배정합니다.</li>
                                                    <li><strong>[저장 및 완료]</strong>를 눌러 확정합니다.</li>
                                                </ol>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* 5. 전출 예정 */}
                                    <Card className="md:col-span-2 border-slate-200 shadow-sm">
                                        <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                                            <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-900">
                                                <Badge variant="outline" className="bg-white border-indigo-200 text-indigo-700">Tab 5</Badge>
                                                전출 예정
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-4">
                                            <div className="flex flex-col md:flex-row gap-6">
                                                <div className="flex-1">
                                                    <strong className="text-xs font-bold text-slate-800 block mb-1">언제 사용하나요?</strong>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                                        명단에는 있지만 전출이 예정되어 있어, <strong>반 편성 인원(남/여) 균형 산정에서 아예 제외</strong>하고 싶은 학생에게 사용합니다.
                                                    </p>
                                                    <p className="text-xs text-indigo-600 font-bold mt-2 leading-relaxed">
                                                        * 전출 예정 학생은 자동으로 해당 학급의 마지막 번호로 배정됩니다.
                                                    </p>
                                                </div>
                                                <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                    <strong className="text-[11px] font-bold text-slate-700 block mb-2">사용 방법</strong>
                                                    <ol className="list-decimal list-inside text-[11px] text-slate-600 space-y-1.5 marker:text-slate-400">
                                                        <li>학생 목록에서 전출 예정인 학생을 찾아 선택(체크)합니다.</li>
                                                        <li>우측 상단 <strong>[저장 및 완료]</strong> 버튼을 누릅니다.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        {/* Step 3: 배정 및 리포트 */}
                        <section id="step3" className="scroll-mt-24 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">3</div>
                                <h2 className="text-2xl font-bold text-foreground">반 편성 실행 및 조정</h2>
                            </div>

                            <div className="space-y-10">
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                                    <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                                        <MousePointerClick className="w-4 h-4 text-primary" />
                                        운영 프로세스 (Dashboard 이용법)
                                    </h4>
                                    <div className="grid gap-8 md:grid-cols-2">
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-[10px]">1</div>
                                                <div className="text-xs leading-relaxed">
                                                    <p className="font-bold text-foreground mb-1">신규 배정 및 현재 배정 수정</p>
                                                    <p className="text-muted-foreground">
                                                        <strong>[신규 배정]</strong>은 완전히 새로운 배정안을 생성합니다. <strong>[현재 배정 수정]</strong>은 현재 배정을 유지하면서 불균형을 교정합니다.
                                                    </p>
                                                    <p className="text-primary mt-2">
                                                        <span className="flex"><span>💡&nbsp;</span><span>팁: 더 이상 변경이 없을 때까지 [현재 배정 수정] 버튼을 여러 번 클릭하세요!</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-[10px]">2</div>
                                                <div className="text-xs leading-relaxed">
                                                    <p className="font-bold text-foreground mb-1">클릭하여 맞교환/이동</p>
                                                    <p className="text-muted-foreground">이동할 학생을 클릭한 후, 대상 학생(맞교환)이나 빈자리(이동)를 클릭하세요. <strong>클릭-클릭 방식</strong>으로 안전하고 정확하게 이동합니다.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-[10px]">3</div>
                                                <div className="text-xs leading-relaxed">
                                                    <p className="font-bold text-foreground mb-1">미배정 보관함 활용</p>
                                                    <p className="text-muted-foreground">잠시 배정에서 제외하거나 고민이 필요한 학생은 상단의 <strong>[미배정 영역]</strong>으로 옮겨두었다가 언제든 다시 배치할 수 있습니다.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-[10px]">4</div>
                                                <div className="text-xs leading-relaxed">
                                                    <p className="font-bold text-foreground mb-1">최종 결과 출력 및 백업</p>
                                                    <p className="text-muted-foreground"><strong>[결과 요약 리포트]</strong>로 균형도를 확인하고 <strong>[엑셀 다운로드]</strong>를 통해 최종 명렬표를 저장하세요. 전체 프로젝트 저장은 필수입니다.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <Card className="shadow-none border-border">
                                        <CardHeader className="pb-3 border-b border-border/50">
                                            <CardTitle className="text-sm font-bold flex items-center gap-2">
                                                <Save className="w-4 h-4 text-indigo-600" />
                                                결과물 요약
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-4 space-y-4">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                                    <Download className="w-4 h-4" />
                                                </div>
                                                <div className="text-xs">
                                                    <p className="font-bold text-foreground mb-1">최종 엑셀 명렬표</p>
                                                    <p className="text-muted-foreground">새로운 반, 번호가 부여된 나이스용 엑셀 파일을 즉시 생성합니다.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                                <div className="text-xs">
                                                    <p className="font-bold text-foreground mb-1">프로젝트 저장</p>
                                                    <p className="text-muted-foreground">작업 내용을 이름으로 저장하여 언제든 다시 불러오거나 수정할 수 있습니다.</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="bg-muted/30 p-6 rounded-xl border border-dashed border-border flex flex-col items-center justify-center text-center space-y-3">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <HelpCircle className="w-6 h-6 text-slate-300" />
                                        </div>
                                        <h4 className="font-bold text-sm">도움이 더 필요하신가요?</h4>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                                            사용 중 오류가 발생하거나 기능 제안이 있으시면<br />
                                            언제든 개발팀으로 연락 주시기 바랍니다.
                                        </p>
                                        <Badge variant="secondary" className="text-[10px] font-medium">Contact: pobydev@gmail.com</Badge>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        {/* FAQ 섹션 */}
                        <section id="faq" className="scroll-mt-24 space-y-8 pb-32">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">?</div>
                                <h2 className="text-2xl font-bold text-foreground">자주 묻는 질문 (FAQ)</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Step 1 관련 */}
                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            엑셀 붙여넣기가 잘 안됩니다.
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        엑셀 파일에 <strong>셀 병합</strong>이 있거나 숨겨진 서식이 포함된 경우 인식이 안 될 수 있습니다. 엑셀 내용을 복사한 뒤, 윈도우 메모장에 한번 붙여넣었다가 다시 복사해서 넣어보세요.
                                    </CardContent>
                                </Card>

                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            생활지도(행동특성) 점수는 어떻게 입력하나요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        두 가지 방법이 있습니다.
                                        <ul className="list-disc list-inside mt-1 space-y-0.5 ml-1">
                                            <li className="flex gap-1"><span className="shrink-0"><strong>엑셀 입력:</strong></span><span>양식에서 셀을 클릭해 드롭다운으로 항목(예: 리더형, 요주의 등)을 선택하여 일괄 입력할 수 있습니다.</span></li>
                                            <li className="flex gap-1"><span className="shrink-0"><strong>직접 수정:</strong></span><span>[1. 기초 자료 설정] 탭의 학생 명단에서 <strong>[수정]</strong> 버튼을 눌러 개별적으로 점수나 유형을 추가/변경할 수 있습니다.</span></li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            성적 데이터에는 어떤 것들을 입력해야 하나요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        기본적으로 나이스(NEIS)에서 산출된 <strong>기준성적(숫자)</strong>을 입력하시면 됩니다. 물론, Classzle 엔진은 값의 상대적 격차를 분석하므로 <strong>석차(낮을수록 우수)</strong> 데이터 또한 정합성 있게 처리하여 공평한 반 편성을 수행합니다.
                                    </CardContent>
                                </Card>

                                {/* Step 2 관련 */}
                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            한 학생에게 여러 제약 조건을 걸 수 있나요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        가능합니다. 단, <strong>[고정 배정]</strong>이 가장 우선순위가 높으며 논리적으로 충돌하는 조건(예: A와 B를 피하게 했는데, 둘 다 같은 반 고정)이 있으면 알림이 뜹니다.
                                    </CardContent>
                                </Card>

                                {/* Step 3 관련 (요청사항) */}
                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            [신규 배정]과 [현재 배정 수정]은 언제 쓰나요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        <strong>[신규 배정]</strong>은 처음 시작하거나, 조건 변경 후 완전히 새로 짤 때 사용합니다. <strong>[현재 배정 수정]</strong>은 기존 배정을 유지하면서 생활지도 학생 균형을 조정합니다.
                                        <p className="text-primary mt-2">
                                            <span className="flex"><span>💡&nbsp;</span><span>팁: 더 이상 변경이 없을 때까지 [현재 배정 수정] 버튼을 여러 번 클릭하세요!</span></span>
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            성적이 비슷한 학생끼리 맞교환하고 싶어요.
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        학생 카드를 클릭해보세요. 해당 학생과 <strong>성별이 같고 성적 수준이 유사한</strong> 학생들이 화면에 밝게 강조됩니다. 이 힌트를 활용하면 반 평균 균형을 유지하면서 쉽게 학생을 이동시킬 수 있습니다.
                                    </CardContent>
                                </Card>

                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            제약 조건이 100% 만족되지 않으면 어떡하나요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        수학적으로 불가능한 상황(예: 한 반에 피해야 할 관계가 너무 많음)이 있을 수 있습니다. 이때는 알고리즘이 <strong>최대한 많은 조건을 만족</strong>시키는 방향으로 배정하며, 만족되지 않은 조건은 빨간색 알림으로 표시해줍니다.
                                    </CardContent>
                                </Card>

                                {/* 일반/환경 관련 */}
                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            브라우저를 닫으면 데이터가 사라지나요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        일시적으로는 유지되지만, 안전하지 않습니다. 우측 상단 <strong>[프로젝트 저장]</strong> 버튼을 눌러 작업 내용을 브라우저 저장소에 확실하게 백업해두는 것을 권장합니다.
                                    </CardContent>
                                </Card>

                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            학생 개인정보가 외부 서버에 전송되나요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        전혀 그렇지 않습니다. Classzle은 <strong>사용자의 컴퓨터(브라우저) 내부</strong>에서만 동작하며, 어떠한 학생 정보도 외부 서버로 전송하거나 저장하지 않으므로 안심하고 사용하셔도 됩니다.
                                    </CardContent>
                                </Card>

                                <Card className="hover:border-primary/30 transition-all shadow-none">
                                    <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                                        <CardTitle className="text-sm font-bold flex items-start gap-2 text-foreground">
                                            <HelpCircle className="w-4 h-4 mt-0.5 text-primary" />
                                            태블릿이나 모바일에서도 사용 가능한가요?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[11px] text-muted-foreground leading-relaxed pt-4">
                                        <h3 className="font-bold text-slate-900 mb-2">Q. 태블릿이나 모바일에서도 사용 가능한가요?</h3>
                                        <p className="text-slate-600">
                                            <strong>사용할 수 없습니다.</strong> Classzle은 <strong>Windows 운영체제(Windows 10 이상) 전용 데스크톱 프로그램</strong>입니다.<br />
                                            안드로이드 태블릿, 아이패드, 스마트폰, 맥(Mac) 등에서는 실행되지 않으니 반드시 Windows PC(데스크톱/노트북)에서 사용해 주세요.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </div>
    );
}
