import { Link, Navigate, useParams } from "react-router-dom";
import { works } from "../data/works";

export default function WorkDetail() {
    const { slug } = useParams();
    const index = works.findIndex((w) => w.slug === slug);
    if (index === -1) return <Navigate to="/" replace />;

    const work = works[index];
    const next = works[(index + 1) % works.length];
    const gallery = work.gallery ?? [];

    return (
        <article className="bg-ink pt-28 md:pt-36 pb-20 md:pb-28 min-h-screen">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <Link
                    to="/#karya"
                    className="inline-flex items-center gap-2 font-sans text-sm text-paper/60 hover:text-copper transition-colors duration-300">
                    <span aria-hidden="true">←</span> Semua karya
                </Link>

                <h1 className="mt-8 md:mt-10 font-display text-5xl md:text-7xl leading-[0.95] text-paper">
                    {work.title}
                </h1>

                {work.image && (
                    <div className="mt-10 md:mt-14 w-full aspect-video bg-surface rounded-lg overflow-hidden">
                        <img
                            src={work.image}
                            alt={work.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-16">
                    <div className="md:col-span-2 space-y-5">
                        {work.description?.map((paragraph, i) => (
                            <p
                                key={i}
                                className={`font-sans leading-relaxed ${
                                    i === 0
                                        ? "text-lg md:text-xl text-paper"
                                        : "text-base md:text-lg text-paper/70"
                                }`}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <dl className="space-y-6 font-sans text-sm">
                        <div>
                            <dt className="text-muted">Tahun</dt>
                            <dd className="mt-1 text-paper">{work.year}</dd>
                        </div>
                        <div>
                            <dt className="text-muted">Medium</dt>
                            <dd className="mt-1 text-paper">{work.medium}</dd>
                        </div>
                        {work.tools?.length > 0 && (
                            <div>
                                <dt className="text-muted">Tools</dt>
                                <dd className="mt-1 text-paper">
                                    {work.tools.join(", ")}
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>

                {gallery.length > 0 && (
                    <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {gallery.map((src, i) => (
                            <div
                                key={src}
                                className="aspect-video bg-surface rounded-lg overflow-hidden">
                                <img
                                    src={src}
                                    alt={`${work.title} ${i + 2}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {works.length > 1 && (
                    <Link
                        to={`/karya/${next.slug}`}
                        className="group mt-20 md:mt-28 pt-8 border-t border-white/10 flex items-center justify-between gap-6">
                        <span className="font-sans text-sm text-muted">
                            Karya berikutnya
                        </span>
                        <span className="font-display text-2xl md:text-3xl text-paper group-hover:text-copper transition-colors duration-300">
                            {next.title} →
                        </span>
                    </Link>
                )}
            </div>
        </article>
    );
}
