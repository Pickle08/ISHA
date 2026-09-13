import { useEffect, useRef } from "react";

function PlaceholderCanvas({ seed = 0 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let raf;
        let t = 0;

        const resize = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const rand = (n) => {
            const x = Math.sin(n * 9999 + seed * 137) * 10000;
            return x - Math.floor(x);
        };

        const draw = () => {
            const { width, height } = canvas;
            ctx.fillStyle = "#131110";
            ctx.fillRect(0, 0, width, height);

            const count = 40;
            for (let i = 0; i < count; i += 1) {
                const angle =
                    (i / count) * Math.PI * 2 + t * (0.2 + seed * 0.05);
                const radius =
                    (Math.sin(t * 0.5 + i + seed) * 0.5 + 0.5) *
                    Math.min(width, height) *
                    0.35;
                const cx = width / 2 + Math.cos(angle + seed) * radius;
                const cy = height / 2 + Math.sin(angle * 1.3 + seed) * radius;
                const r = 1 + rand(i) * 3;

                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(199, 85, 247, ${0.25 + rand(i + 1) * 0.35})`;
                ctx.fill();
            }

            t += 0.01;
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, [seed]);

    return <canvas ref={canvasRef} className="h-full w-full" />;
}

export default function WorkCard({ work }) {
    return (
        <div className="group">
            <div className="relative w-full aspect-video bg-surface rounded-lg overflow-hidden">
                <PlaceholderCanvas seed={work.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="mt-4 flex items-start justify-between">
                <div>
                    <h3 className="font-display text-xl text-paper">
                        {work.title}
                    </h3>
                    <p className="font-sans text-sm text-muted mt-1">
                        {work.medium}
                    </p>
                </div>
                <span className="font-sans text-sm text-paper/50">
                    {work.year}
                </span>
            </div>
        </div>
    );
}
