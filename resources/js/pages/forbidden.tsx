import { Link, router } from '@inertiajs/react';
import React, { useEffect } from 'react';

const Forbidden: React.FC = () => {
    //redirecting
    useEffect(() => {
        const timer = setTimeout(() => {
            router.visit('/dashboard');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <div style={{ maxWidth: '250px', marginBottom: '20px' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    style={{ width: '100%' }}
                >
                    <circle cx="100" cy="100" r="90" fill="#fef3c7" />
                    <path
                        d="M70 70 L130 130 M130 70 L70 130"
                        stroke="#f59e0b"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <h1
                style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '10px',
                }}
            >
                Access Denied
            </h1>

            <p
                style={{
                    color: '#6b7280',
                    maxWidth: '300px',
                    marginBottom: '20px',
                }}
            >
                You don’t have permission to view this page. Redirecting you to
                your dashboard…
            </p>

            <Link
                href="/dashboard"
                style={{
                    padding: '10px 20px',
                    background: '#f59e0b',
                    color: '#fff',
                    borderRadius: '6px',
                    fontWeight: 600,
                }}
            >
                Go Now
            </Link>
        </div>
    );
};

export default Forbidden;
