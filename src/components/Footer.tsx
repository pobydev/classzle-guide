export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg font-bold text-gray-900">Classzle</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            선생님의 업무를 덜어드리는 반 편성 파트너
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/pobydev/Classzle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition">
                            GitHub
                        </a>
                        <a href="/guide" className="text-gray-400 hover:text-indigo-600 transition">
                            사용자 가이드
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                    <p className="text-center text-xs text-gray-400">
                        &copy; {new Date().getFullYear()} Classzle. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
