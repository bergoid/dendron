// Sticky sidebar
// https://github.com/Krzysztof-Antosik/Two-direction-Sticky-Sidebar

//aside selector
const aside = document.querySelector(".stickySidebar");

// variables
// startScroll = 0;
var endScroll = window.innerHeight - aside.offsetHeight;// -500;
var currPos = window.scrollY;
// screenHeight = window.innerHeight;
// asideHeight = aside.offsetHeight;
// aside.style.top = startScroll + 'px';
aside.style.top = '0px';

// check height screen and aside on resize
// window.addEventListener(
//     'resize',
//     () => {
//         screenHeight = window.innerHeight;
//         asideHeight = aside.offsetHeight;
//     }
// );

// main function
document.addEventListener(
    'scroll',
    () => {
        endScroll = window.innerHeight - aside.offsetHeight;
        let asideTop = parseInt(aside.style.top.replace('px;', ''));

//         if (asideHeight > screenHeight)
        if (aside.offsetHeight > window.innerHeight)
        {
            if (window.scrollY < currPos)
            {
                // scroll up
                if (asideTop < 0)
                {
                    console.log("asideTop == " + asideTop);
                    aside.style.top = (asideTop + currPos - window.scrollY) + 'px';
                }
                else if (asideTop > 0)
                {
                    aside.style.top = '0px';
                }
            }
            else
            {
                // scroll down
                if (asideTop > endScroll)
                {
                    aside.style.top = (asideTop + currPos - window.scrollY) + 'px';
                }
                else if (asideTop < endScroll)
                {
                    aside.style.top = endScroll + 'px';
                }
            }
        }
        else
        {
            aside.style.top = '0px';
        }

        currPos = window.scrollY;
    },
    {
        capture: true,
        passive: true
    }
);
