function updateLayout() {
    console.log("LALALALa");
}

// Throttling

function throttle(func, timeout) {
    let isRunning = false;
    console.log(typeof throttle.prototype);
    return function (...args) {
        if (!isRunning) {
            isRunning = true;

            func.apply(this, args);

            setTimeout(() => {
                isRunning = false;
            }, timeout);
        }
    };
}

const throttledUpdateLayout = throttle(updateLayout, 100);
window.addEventListener("resize", () => {
    throttledUpdateLayout();
});

//Debouncing

function debounce(func, timeout) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(func, args);
        }, timeout);
    };
}

const debouncedUpdateLayout = debounce(updateLayout, 5000);
window.addEventListener("resize", () => {
    debouncedUpdateLayout();
});
