const DEFAULT_ITEMS = [
    "Real-time Visuals",
    "Projection Mapping",
    "Generative Art",
    "Interactive Installation",
    "Audio-Reactive Systems",
];

export default function Marquee({ items = DEFAULT_ITEMS, speed = "28s" }) {
    const track = [...items, ...items];

    return (
        <div className="relative overflow-hidden border-t border-white/10 bg-surface py-3">
            <div
                className="flex w-max gap-8 whitespace-nowrap animate-[marquee_linear_infinite]"
                style={{ animationDuration: speed }}>
                {track.map((item, i) => (
                    <span
                        key={i}
                        className="font-sans text-xs md:text-sm tracking-wide text-paper/60 flex items-center gap-8">
                        {item}
                        <span className="text-violet">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
