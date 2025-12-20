'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
    { id: 'intro', title: '0. 시작 전 준비' },
    { id: 'step1', title: '1. 기초 자료 수집 및 입력' },
    { id: 'step2', title: '2. 배정 제약 조건 설정' },
    { id: 'step3', title: '3. 반 편성 실행 및 조정' },
    { id: 'faq', title: '자주 묻는 질문 (FAQ)' },
];

export default function GuideSidebar() {
    return (
        <aside className="w-56 flex-shrink-0 hidden md:block pt-6 pb-20 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto border-r border-slate-200">
            <nav className="px-3 space-y-0.5">
                <h3 className="px-3 text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2.5 mt-2">
                    사용자 매뉴얼
                </h3>
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center px-3 py-1.5 text-xs font-medium text-slate-600 rounded-md hover:text-indigo-600 hover:bg-indigo-50 transition"
                    >
                        {section.title}
                    </a>
                ))}
            </nav>
        </aside>
    );
}
