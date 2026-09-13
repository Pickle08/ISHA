import { useEffect, useRef } from "react";
import CRTWarp from "./CRTWarp";
import BackgroundErrorBoundary from "./BackgroundErrorBoundary";
import Marquee from "./Marquee";

function FallbackCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let raf;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            particles = Array.from({ length: 70 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.6 + 0.4,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
            }));
        };
        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            ctx.fillStyle = "#0a0908";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(199, 85, 247, 0.55)";
                ctx.fill();
            });
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="h-full w-full" />;
}

export default function Hero() {
    return (
        <section
            id="top"
            className="relative h-screen w-full overflow-hidden bg-ink flex flex-col">
            <div className="absolute inset-0">
                <BackgroundErrorBoundary fallback={<FallbackCanvas />}>
                    <CRTWarp
                        color="#c755f7"
                        backgroundColor="#05010a"
                        speed={0.35}
                        curvature={0.2}
                        scanlineStrength={0.15}
                        bloom={1.2}
                        noise={0.06}
                        vignette={0.15}
                        brightness={1.05}
                        rgbShift={0.008}
                        mouseReact={true}
                        mouseStrength={0.35}
                        dpr={1.5}
                        fps={30}
                    />
                </BackgroundErrorBoundary>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />

            <div className="relative z-10 flex-1 flex items-end">
                <div className="w-full max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                    <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-paper">
                        ISHA
                        <br />
                        <span className="text-paper/80">
                            Real-time Visual Artist
                        </span>
                    </h1>

                    <div className="max-w-xs md:text-right">
                        <p className="font-sans text-sm md:text-base text-paper/70 mb-6">
                            Menghadirkan visual generative dan sistem real-time
                            yang merespons data, cahaya, dan gerak.
                        </p>

                        <a
                            href="#kontak"
                            className="btn-alive inline-block font-sans text-sm font-medium bg-violet text-ink px-6 py-3 rounded-full hover:bg-paper transition-colors duration-300">
                            Mari Berkolaborasi
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <Marquee />
            </div>
        </section>
    );
}
