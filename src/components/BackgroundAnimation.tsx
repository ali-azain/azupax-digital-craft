
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundAnimation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
        height: typeof window !== "undefined" ? window.innerHeight : 800,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    // Generate random particles
    const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
    }));

    // Mouse movement parallax effect
    const mouseX = (mousePosition.x / windowSize.width) * 40 - 20;
    const mouseY = (mousePosition.y / windowSize.height) * 40 - 20;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0 + mouseX * 2, 50 + mouseX * 2, 0 + mouseX * 2],
                    y: [0 + mouseY * 2, 30 + mouseY * 2, 0 + mouseY * 2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                    x: [0 - mouseX * 1.5, -40 - mouseX * 1.5, 0 - mouseX * 1.5],
                    y: [0 - mouseY * 1.5, 60 - mouseY * 1.5, 0 - mouseY * 1.5],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"
            />
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.1, 0.3, 0.1],
                    x: [-100 - mouseX * 3, 100 - mouseX * 3, -100 - mouseX * 3],
                    y: [-50 - mouseY * 3, 50 - mouseY * 3, -50 - mouseY * 3],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-purple-600/10 rounded-full blur-[120px]"
            />

            {/* Floating Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary/40"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.x,
                        top: p.y,
                    }}
                    animate={{
                        y: [-20, -150, -20],
                        x: [-10, 20, -10],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 10,
                    }}
                />
            ))}

            {/* Grid Overlay */}
            <motion.div
                animate={{
                    backgroundPosition: ["0px 0px", "24px 24px"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80"
            ></motion.div>
        </div>
    );
};

export default BackgroundAnimation;
