import { useEffect } from 'react';

export default function Redirecting({
    redirectTo,
    message,
}: {
    redirectTo: string;
    message?: string;
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = redirectTo;
        }, 2000);

        return () => clearTimeout(timer);
    }, [redirectTo]);

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">
                {message || 'Redirecting...'}
            </p>
        </div>
    );
}
