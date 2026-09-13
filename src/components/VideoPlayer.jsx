import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import {
    Play,
    Pause,
    Maximize,
    PictureInPicture2,
    Volume2,
    VolumeX,
} from "lucide-react";

const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
};

export default function VideoPlayer({ vimeoId, title }) {
    const containerRef = useRef(null);
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (!vimeoId) return;
        const player = new Player(containerRef.current, {
            id: vimeoId,
            controls: false,
            responsive: true,
            autopause: true,
            background: false,
        });
        playerRef.current = player;

        player.on("play", () => setIsPlaying(true));
        player.on("pause", () => setIsPlaying(false));
        player.on("timeupdate", (data) => setCurrent(data.seconds));
        player.getDuration().then(setDuration);

        return () => {
            player.destroy();
        };
    }, [vimeoId]);

    const togglePlay = () => {
        const player = playerRef.current;
        if (!player) return;
        isPlaying ? player.pause() : player.play();
    };

    const toggleMute = () => {
        const player = playerRef.current;
        if (!player) return;
        player.setMuted(!muted);
        setMuted(!muted);
    };

    const toggleFullscreen = () => {
        containerRef.current?.parentElement?.requestFullscreen?.();
    };

    const togglePiP = async () => {
        const iframe = containerRef.current?.querySelector("iframe");
        if (!iframe) return;
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else if (playerRef.current) {
                await iframe.requestPictureInPicture?.();
            }
        } catch (err) {
            console.warn("PiP tidak didukung di browser ini:", err);
        }
    };

    const handleSeek = (e) => {
        const player = playerRef.current;
        if (!player || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        player.setCurrentTime(ratio * duration);
    };

    const progress = duration ? (current / duration) * 100 : 0;

    return (
        <div className="relative w-full aspect-video bg-surface rounded-lg overflow-hidden group">
            <div
                ref={containerRef}
                className="absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40 pointer-events-none" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <p className="font-sans text-sm text-paper/90 bg-ink/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    {title}
                </p>
                <button
                    onClick={togglePlay}
                    className="flex items-center gap-2 font-sans text-sm text-paper bg-ink/50 backdrop-blur-sm px-4 py-1.5 rounded-full hover:bg-violet hover:text-ink transition-colors duration-300">
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    {isPlaying ? "Pause" : "Play"}
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8">
                <div
                    onClick={handleSeek}
                    className="h-1 w-full bg-white/20 rounded-full cursor-pointer mb-2 relative">
                    <div
                        className="h-full bg-violet rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <span className="font-sans text-xs text-paper/70">
                        {formatTime(current)} / {formatTime(duration)}
                    </span>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleMute}
                            className="text-paper/70 hover:text-paper transition-colors">
                            {muted ? (
                                <VolumeX size={16} />
                            ) : (
                                <Volume2 size={16} />
                            )}
                        </button>
                        <button
                            onClick={togglePiP}
                            className="text-paper/70 hover:text-paper transition-colors">
                            <PictureInPicture2 size={16} />
                        </button>
                        <button
                            onClick={toggleFullscreen}
                            className="text-paper/70 hover:text-paper transition-colors">
                            <Maximize size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
