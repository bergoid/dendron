// Sticky sidebar
// Adapted from:
// https://github.com/Krzysztof-Antosik/Two-direction-Sticky-Sidebar

//aside selector
const aside = document.querySelector('.sticky-sidebar');

// Keep track of previous scroll position
var previousScrollY = window.scrollY;

// Set style.top explicitly
aside.style.top = '0px';

console.log("aside.style.top == " + aside.style.top);

// onScroll event handler
document.addEventListener(
    'scroll',
    () => {
        // Only do stuff if sidebar is too high to fit in viewport
        if (aside.offsetHeight > window.innerHeight)
        {
            let currentTop = parseInt(aside.style.top.replace('px;', ''));

            // Scrolling up
            if (window.scrollY < previousScrollY)
                aside.style.top = Math.min(0, currentTop + previousScrollY - window.scrollY) + 'px';

            // Scrolling down
            else
                aside.style.top = Math.max(window.innerHeight - aside.offsetHeight, currentTop + previousScrollY - window.scrollY) + 'px';

            console.log("(onscroll) aside.style.top == " + aside.style.top);
        }

        previousScrollY = window.scrollY;
    },
    {
        capture: true,
        passive: true
    }
);
