'use client';

import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border h-14 md:h-16 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            <img src="/logo.png" alt="Classzle Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col -gap-1">
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                    Classzle
                                </h1>

                            </div>
                            <p className="text-[10px] font-medium text-muted-foreground leading-tight hidden sm:block whitespace-nowrap">
                                완벽한 반 편성을 위한 마지막 조각
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link href="/" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                            홈
                        </Link>
                        <Link href="/guide" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                            사용자 가이드
                        </Link>
                        <Link
                            href="/download"
                            className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-sm hover:bg-indigo-700 transition-all"
                        >
                            다운로드
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-indigo-600 p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                        >
                            홈
                        </Link>
                        <Link
                            href="/guide"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                        >
                            사용자 가이드
                        </Link>
                        <Link
                            href="/download"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 rounded-md text-base font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 mt-4"
                        >
                            다운로드
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
