import glide from "@glidejs/glide"

new glide('.glide', {
    type: 'carousel',
    perView: 4,
    autoplay: 1000000,
    animationTimingFunc: "cubic-bezier(.52,0,.18,1)",
    hoverpause: true,
    animationDuration: 1000,
    focusAt: 'center',
    gap: 20,
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }

}).mount()