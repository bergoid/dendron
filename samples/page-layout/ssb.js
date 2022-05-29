// Sticky sidebar
//
// Adapted from:
// https://github.com/Krzysztof-Antosik/Two-direction-Sticky-Sidebar

//aside selector
const aside = document.querySelector(".stickySidebar");

// Keep track of previous scroll position
var previousScrollY = window.scrollY;

// Set style.top explicitly
aside.style.top = '0px';

// onScroll event handler
document.addEventListener(
    'scroll',
    () => {
        let asideTop = parseInt(aside.style.top.replace('px;', ''));
//         console.log("asideTop == " + asideTop);

        // Sidebar is too high to fit in viewport:
        if (aside.offsetHeight > window.innerHeight)
        {
            // Scrolling up:
            if (window.scrollY < previousScrollY)
            {
                if (asideTop < 0)
                {
                    aside.style.top = (asideTop + previousScrollY - window.scrollY) + 'px';
                }
                else if (asideTop > 0)
                {
                    aside.style.top = '0px';
                }
            }

            // Scrolling down:
            else
            {
                let endScroll = window.innerHeight - aside.offsetHeight;

                if (asideTop > endScroll)
                {
                    aside.style.top = (asideTop + previousScrollY - window.scrollY) + 'px';
                }
                else if (asideTop < endScroll)
                {
                    aside.style.top = endScroll + 'px';
                }
            }
        }

        // Sidebar fits in viewport:
        else
        {
            aside.style.top = '0px';
        }

        previousScrollY = window.scrollY;
    },
    {
        capture: true,
        passive: true
    }
);
