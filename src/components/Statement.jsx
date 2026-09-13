import { useState } from "react";
import CRTWarp from "./CRTWarp";

const headerProps = {
    color: "#c755f7",
    backgroundColor: "#05010a",
    speed: 0.35,
    curvature: 0.2,
    scanlineStrength: 0.15,
    bloom: 1.2,
    noise: 0.06,
    vignette: 0.15,
    brightness: 1.05,
    rgbShift: 0.008,
    mouseReact: true,
    mouseStrength: 0.35,
    dpr: 1.5,
    fps: 30,
};

export default function Statement() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubscribed(true);
    };

    return (
        <section className="bg-ink py-24 md:py-32 border-t border-white/10">
            <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-6">
                <p className="font-sans text-lg md:text-xl text-paper leading-relaxed">
                    ISHA adalah ruang kerja untuk eksplorasi visual real-time —
                    tempat data, cahaya, dan gerak disusun ulang menjadi
                    pengalaman yang terus berubah, bukan gambar yang diam.
                </p>

                <p className="font-sans text-base md:text-lg text-paper/70 leading-relaxed">
                    Setiap karya dibangun di dalam TouchDesigner, tempat
                    parameter visual merespons langsung terhadap input audio,
                    gerak, atau data eksternal secara real-time. Tidak ada dua
                    pertunjukan yang identik — sistem yang sama bisa
                    menghasilkan hasil yang selalu berbeda, dibentuk oleh
                    interaksi manusia dan logika prosedural di baliknya.
                </p>

                <p className="font-sans text-base md:text-lg text-paper/70 leading-relaxed">
                    Dimulai dari{" "}
                    <a
                        href="#karya"
                        className="text-violet hover:underline underline-offset-4">
                        A Living Museum
                    </a>
                    , karya pembuka ISHA mengeksplorasi ruang sebagai organisme
                    yang hidup — dibangun dari sistem generative yang terus
                    bernapas, berubah bentuk mengikuti waktu dan kehadiran
                    penonton.
                </p>
            </div>

            <div className="relative mt-24 md:mt-32 overflow-hidden border-t border-white/10">
                <div className="absolute inset-0">
                    <CRTWarp {...headerProps} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink" />

                <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
                    <h2 className="font-display text-3xl md:text-5xl text-paper leading-tight mb-5">
                        The art evolves,
                        <br />
                        so does the museum
                    </h2>

                    <p className="font-sans text-sm md:text-base text-paper/70 mb-10 leading-relaxed">
                        Join our mailing list and stay up to date on
                        exhibitions, events, and developments.
                    </p>

                    {subscribed ? (
                        <p className="font-sans text-sm md:text-base text-violet">
                            You're on the list. See you soon.
                        </p>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="flex-1 font-sans text-sm text-paper bg-ink/60 backdrop-blur-sm border border-white/15 rounded-full px-5 py-3 placeholder:text-paper/40 focus:outline-none focus:border-violet transition-colors duration-300"
                            />
                            <button
                                type="submit"
                                className="btn-alive font-sans text-sm font-medium bg-violet text-ink px-6 py-3 rounded-full hover:bg-paper transition-colors duration-300 whitespace-nowrap">
                                Sign up now
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}