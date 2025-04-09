export default function Loading() {
        return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-primary to-blue-500">
            <div className="flex items-center justify-center space-x-4 animate-pulse">
            <div className="w-16 h-16 border-8 border-t-8 border-PRIMARY rounded-full border-t-transparent animate-spin"></div>
            <span className="text-xl font-semibold text-PRIMARY">Loading...</span>
            </div>
        </div>
        );
    }