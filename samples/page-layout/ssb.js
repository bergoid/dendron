// Sticky sidebar

// HTML elements
const ssb_fixed = document.querySelector('.sticky-sidebar > .ssb-fixed');
const ssb_content = document.querySelector('.sticky-sidebar > .ssb-content');


// Keep track of previous scroll position
var previousScrollY = window.scrollY;

// Align ssb_content and ssb_fixed
function align_ssb()
{
    ssb_content.style.marginTop = ssb_fixed.offsetHeight + 'px';
    ssb_fixed.style.width = ssb_content.offsetWidth + 'px';
}
align_ssb();

// onResize event handler
window.addEventListener(
    'resize',
    align_ssb
);

// onScroll event handler
document.addEventListener(
    'scroll',
    () => {

        // Scrolling up
        if (window.scrollY < previousScrollY)
            ssb_content.style.top = Math.min(parseInt(ssb_content.style.top.replace('px;', '')), window.scrollY) + 'px';

        // Scrolling down
        else
            ssb_content.style.top = Math.max(0, window.scrollY + window.innerHeight - ssb_content.offsetHeight - ssb_fixed.offsetHeight) + 'px';

        previousScrollY = window.scrollY;
    },
    {
        capture: true,
        passive: true
    }
);
