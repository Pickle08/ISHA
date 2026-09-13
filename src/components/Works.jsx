import { works } from "../data/works";
import WorkCard from "./WorkCard";

export default function Works() {
    return (
        <section
            id="karya"
            className="bg-ink py-24 md:py-32 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <h2 className="font-display text-3xl md:text-4xl text-paper mb-12">
                    Karya
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-8 md:gap-y-14">
                    {works.map((work) => (
                        <WorkCard key={work.id} work={work} />
                    ))}
                </div>
            </div>
        </section>
    );
}
