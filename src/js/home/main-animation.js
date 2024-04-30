import { animate, inView, stagger, scroll, timeline } from "motion";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);
const tailwindLg = parseInt(fullConfig.theme.screens.lg.replace("px", ""), 10);

console.log("Initializing animations...")

if (window.innerWidth >= tailwindLg) {
    scroll(animate(".main-bubble-blue", { right: ["-125%", "150%"] }));
    scroll(animate(".main-bubble-purple", { left: ["-125%", "150%"] }));
} else if (window.innerWidth < tailwindLg) {
    scroll(animate(".main-bubble-blue", { right: ["-16rem", "100%"] }));
    scroll(animate(".main-bubble-purple", { left: ["-16rem", "100%"] }));
}

const processSection = document.getElementById("process-section");
const processStickers = document.querySelectorAll(".process-sticker")
const processElements = document.querySelectorAll(".process-element")

inView(processSection, () => {
    console.log("inView processSection: ", processSection);
    animate(
        processElements,
        {
            opacity: [0, 1],
            transform: ["translateY(75px)", "translateY(0)"],
            zIndex: [10, 0]
        },
        {
            delay: stagger(0.15, { start: 0.7 }),
            duration: 1,
            easing: "ease-out",
        }

    )
    animate(
        processStickers,
        {
            opacity: [0, 1],
            zIndex: [30, 40],
        },
        {
            delay: stagger(0.2, { start: 1.7 }),
            duration: 1
        }
    )
})


const devProcessCircles = document.querySelectorAll(".dev-process-circle");

const devProcessTodaySequence = [
    [
        devProcessCircles,
        {
            opacity: [0, 1],
            scale: [0, 1],
        },
        {
            delay: stagger(0.2),
            duration: 1
        }
    ],
    [
        ".dev-process-today",
        {
            opacity: [0, 1],
        },
        {
            duration: 1.2
        }
    ],
    [
        ".dev-process-shine",
        {
            opacity: [0, 1]
        },
        {
            duration: 1,
            easing: "ease-in"
        }
    ]
]

inView(".dev-process-today-text", () => {
    timeline(devProcessTodaySequence)
})

const nextGenScroll = document.querySelector("#next-gen-scroll");

scroll(
    animate(
        ".ide-screen",
        {
            opacity: [0, 1],
            scale: [0.4, 1]
        },
        {
            easing: "ease-out"
        }
    ),
    {
        target: nextGenScroll,
        offset: [0, 0.58],
    }
)

// Define the function with an additional parameter for the heights array
function animateStatsBars(heightsArray) {
    inView(".stats-bars-section", () => {
        // Select all elements with the class .stats-bar
        const bars = document.querySelectorAll(".stats-bar");

        // Loop through each bar
        bars.forEach((bar, index) => {
            // Retrieve the height for the current bar from the heightsArray
            const height = heightsArray[index] || "100%"; // Default to "100%" if not defined

            // Apply the animation to the current bar
            animate(
                bar,
                {
                    height: [0, height] // Use the height from the array
                },
                {
                    duration: 0.8,
                    easing: "ease-out"
                }
            );
        });
    });
}

// Usage:
animateStatsBars(["16%", "100%", "100%", "1%", "100%", "10%", "100%", "30%"]);



// scroll(
//     (info) => {
//       console.log(info.x.offset) // e.g. [100, 900]
//     },
//     {
//       target: nextGenScroll,
//       offset: ["start end", "end end"],
//     }
//   )