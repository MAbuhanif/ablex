import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import Module from 'module';
import { route } from 'ziggy-js';
// import { formatDistanceToNow } from 'date-fns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
];

interface module {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    user_id: number;
    author_name: string;
    published_at: string;
}

export default function Dashboard() {
    const { props } = usePage<{ modules?: module[] }>();
    const modules = props.modules ?? [];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <section className="bg-white py-12 dark:bg-gray-900">
                {modules.length === 0 ? (
                    <p className="mt-10 text-center text-gray-400 dark:text-gray-500">
                        No modules available yet.
                    </p>
                ) : (
                    <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
                        {/* Section header */}
                        <div className="mx-auto mb-12 max-w-screen-md text-center">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">
                                Learn Smarter, Faster
                            </h2>
                            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                Explore curated courses, Get A+, and master your
                                profession at your own pace with our intuitive
                                learning platform. We post updated courses and
                                articles.
                            </p>
                        </div>

                        {/* Modules grid */}
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {modules.map((module) => (
                                <article
                                    key={module.id}
                                    className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-56 overflow-hidden rounded-lg sm:h-56 md:h-64 lg:h-48">
                                        <img
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            src={module.thumbnail}
                                            alt={module.title}
                                        />
                                        <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold">
                                            Posted
                                        </span>
                                    </div>

                                    {/* Post info */}
                                    <h2 className="group-hover:text-primary-600 mt-4 text-xl font-bold text-gray-900 transition-colors duration-200 dark:text-white">
                                        {module.title}
                                    </h2>

                                    {/* Render RichEditor HTML */}
                                    <div
                                        className="prose dark:prose-invert mt-2 line-clamp-3 max-w-none text-sm text-gray-500 dark:text-gray-400"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                module.description.length > 400
                                                    ? module.description.substring(
                                                        0,
                                                        400,
                                                    ) + '...'
                                                    : module.description,
                                        }}
                                    ></div>

                                    {/* Author & Read more */}
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-primary-600 dark:text-primary-500 text-sm font-medium dark:text-gray-300">
                                            {module.author_name}

                                        </span>
                                        <a
                                            href={route('modules.show', {
                                                slug: module.slug,
                                            })}
                                            className="text-primary-600 dark:text-primary-500 inline-flex items-center gap-1 text-sm font-medium hover:underline"
                                        >
                                            Read more →
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </AppLayout>
    );
}
