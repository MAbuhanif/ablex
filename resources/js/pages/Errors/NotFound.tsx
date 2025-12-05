import { Link } from '@inertiajs/react';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <div style={{ maxWidth: '350px', marginBottom: '20px' }}>
                {/* SVG illustration */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    style={{ width: '100%' }}
                >
                    <circle cx="100" cy="100" r="90" fill="#f3f4f6" />
                    <path
                        d="M60 80 h80 v10 h-80 z M70 110 h60 v10 h-60 z"
                        fill="#9ca3af"
                    />
                    <circle cx="80" cy="65" r="8" fill="#9ca3af" />
                    <circle cx="120" cy="65" r="8" fill="#9ca3af" />
                    <path
                        d="M70 135 q30 25 60 0"
                        stroke="#9ca3af"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <h1
                style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    marginBottom: '10px',
                }}
            >
                Page Not Found
            </h1>

            <p
                style={{
                    maxWidth: '320px',
                    marginBottom: '25px',
                    color: '#6b7280',
                }}
            >
                The Page You clicked is Wrong or Broken . You can head back to
                the home page and keep moving.
            </p>

            <Link
                href="/"
                style={{
                    padding: '10px 20px',
                    background: '#2563eb',
                    color: '#fff',
                    borderRadius: '6px',
                    fontWeight: 600,
                }}
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
