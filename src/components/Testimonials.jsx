import { useEffect, useState, useCallback, useRef } from "react";
import { testimonials } from "../data/testimonials";

const SLIDE_WIDTH = 640;
const GAP = 96;
const AUTOPLAY_MS = 5000;

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const viewportRef = useRef(null);
    const [viewportWidth, setViewportWidth] = useState(0);

    const goTo = useCallback((i) => {
        setIndex(
            ((i % testimonials.length) + testimonials.length) %
                testimonials.length,
        );
    }, []);

    useEffect(() => {
        const el = viewportRef.current;
        if (!el) return;
        const observer = new ResizeObserver((entries) => {
            setViewportWidth(entries[0].contentRect.width);
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, AUTOPLAY_MS);
        return () => clearInterval(timer);
    }, [index]);

    const offset =
        viewportWidth / 2 - SLIDE_WIDTH / 2 - index * (SLIDE_WIDTH + GAP);

    return (
        <section id="tentang" className="bg-ink py-24 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-10 mb-16 flex items-center justify-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-paper flex-shrink-0" />
                <p className="font-sans text-sm md:text-base font-medium text-paper">
                    Tempat imajinasi manusia bertemu sistem generative
                    real-time.
                </p>
            </div>

            <div
                ref={viewportRef}
                className="relative h-[320px] md:h-[380px] flex items-center overflow-hidden">
                <div
                    className="flex items-center transition-transform duration-700 ease-out"
                    style={{
                        gap: `${GAP}px`,
                        transform: `translateX(${offset}px)`,
                    }}>
                    {testimonials.map((item, i) => {
                        const distance = Math.abs(i - index);
                        const isActive = i === index;
                        return (
                            <div
                                key={i}
                                style={{ width: `${SLIDE_WIDTH}px` }}
                                className={`flex-shrink-0 text-center transition-opacity duration-700 ${
                                    isActive
                                        ? "opacity-100"
                                        : distance === 1
                                          ? "opacity-20"
                                          : "opacity-0"
                                }`}>
                                <p className="font-display text-2xl md:text-4xl text-paper leading-snug">
                                    "{item.quote}"
                                </p>
                                <p className="mt-6 font-sans text-base md:text-lg text-paper/70">
                                    {item.source}
                                </p>
                                <p className="mt-1 font-sans text-sm text-muted">
                                    {item.location}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-10">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Ke testimoni ${i + 1}`}
                        className="relative h-1.5 rounded-full bg-white/15 overflow-hidden transition-all duration-300"
                        style={{ width: i === index ? "32px" : "8px" }}>
                        {i === index && (
                            <span
                                key={index}
                                className="absolute inset-0 bg-violet rounded-full origin-left"
                                style={{
                                    animation: `fillbar ${AUTOPLAY_MS}ms linear forwards`,
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
}
