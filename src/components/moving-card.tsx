import React from 'react'

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// 🔁 Infinite Marquee / Moving Cards (shadcn-style)
// Only pass images array
// Example:
// <InfiniteMarquee images={["/img/1.jpg", "/img/2.jpg"]} />

export function InfiniteMarquee({
    images,
    speed = 50,
    pauseOnHover = true ,
    className ,
}:{ images:Array<string>,speed:number,pauseOnHover:boolean,className:string}) {
    const items = [...images, ...images]; // duplicate for seamless loop

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden rounded-xl border bg-background py-6",
                className
            )}
        >
            <motion.div
                className="flex gap-6"
                animate={{ x: [0, "-50%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
                style={{ width: "200%" }}
                whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
            >
                {items.map((src, i) => (
                    <div
                        key={i}
                        className="min-w-[260px] h-[180px] rounded-2xl overflow-hidden border bg-muted shadow-sm"
                    >
                        <img
                            src={src}
                            alt={`service-${i}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}


export default InfiniteMarquee
