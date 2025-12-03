import { Head, router, usePage } from '@inertiajs/react';

interface ModuleType {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail_url: string;
    file_url: string;
    user_id: number;
    author_name: string;
    published_at: string;
}

export default function PostDetails() {
    const { props } = usePage<{ module: ModuleType }>();
    const module = props.module;

    const fixedDescription = module.description.replace(
        /src="(?:\/)?storage\/([^"]+)"/g,
        (match, path) => {
            return `src="/storage/${path}"`;
        },
    );

    // Calculate "days ago"
    const daysAgo = Math.floor(
        (new Date().getTime() - new Date(module.published_at).getTime()) /
            (1000 * 60 * 60 * 24),
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <Head title={module.title} />

            <article className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                {/* Thumbnail */}
                <div className="relative mb-6 h-64 overflow-hidden rounded-lg sm:h-72 md:h-80">
                    <img
                        className="h-full w-full object-cover transition-transform duration-300"
                        src={module.thumbnail_url}
                        alt={module.title}
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-900">
                        Posted
                    </span>
                </div>

                {/* Title */}
                <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                    {module.title}
                </h1>

                {/* RichEditor HTML */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: fixedDescription }}
                ></div>

                {/* Meta info */}
                <div className="mt-10 mb-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{daysAgo} days ago</span>
                    <span>By {module.author_name}</span>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between gap-4 lg:flex lg:items-center lg:justify-between">
                    <button
                        onClick={() => router.get('/dashboard')}
                        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        Back to Dashboard
                    </button>

                    {module.file_url && (
                        <a
                            href={module.file_url}
                            download
                            className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                        >
                            Download File
                        </a>
                    )}
                </div>
            </article>
        </div>
    );
}
