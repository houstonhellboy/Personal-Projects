const box = document.getElementById('my-gif-overlay');

// get animation duration from css
const style = window.getComputedStyle(box);
const durationStr = style.animationDuration; // returns animation time length
const duration = parseFloat(durationStr) * (durationStr.includes('ms') ? 1 : 1000);

let startTime = null;
let lastFlip = null;

function checkKeyframeProgress(timestamp){
    if (!startTime) startTime = timestamp;

    // calculate how many ms we are into the current loop.
    // the modulo (%) to handle infinite looping animation
    const elapsed = (timestamp - startTime) % duration;
    const progressPercent = (elapsed /duration) * 100;

    // logic for flipping at 50%
    // check a small range because requestAnimationFrame might skip the exact .50 ms
    if(progressPercent >=49 && progressPercent <= 51 && lastFlip !== '50'){
        box.style.transform = "scaleX(-1)";
        lastFlip = '50';
    }

    // logic to flip back to scaleX(1) at 0%
    if ((progressPercent >= 99 || progressPercent <= 1) && lastFlip != '0'){
        box.style.transform = "scaleX(1)";
        lastFlip = '0';
    }

    // Continue the loop
    requestAnimationFrame(checkKeyframeProgress);
}

// start tracking
requestAnimationFrame(checkKeyframeProgress);


