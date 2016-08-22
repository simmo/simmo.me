function smoothScrollTo(element, target, duration) {
    target = Math.round(target)
    duration = Math.round(duration)

    if (duration < 0) {
        return Promise.reject('bad duration')
    }
    if (duration === 0) {
        element.scrollTop = target
        return Promise.resolve()
    }

    var startTime = Date.now()
    var endTime = startTime + duration

    var startTop = element.scrollTop
    var distance = target - startTop

    // based on http://en.wikipedia.org/wiki/Smoothstep
    var smoothStep = (start, end, point) => {
        if (point <= start) {
            return 0
        }
        if (point >= end) {
            return 1
        }
        var x = (point - start) / (end - start) // interpolation
        return x * x * (3 - 2 * x)
    }

    return new Promise((resolve, reject) => {
        // This is to keep track of where the element's scrollTop is
        // supposed to be, based on what we're doing
        var previousTop = element.scrollTop

        // This is like a think function from a game loop
        var scrollFrame = function() {
            if (element.scrollTop !== previousTop) {
                reject('interrupted')
                return
            }

            // set the scrollTop for this frame
            var now = Date.now()
            var point = smoothStep(startTime, endTime, now)
            var frameTop = Math.round(startTop + (distance * point))
            element.scrollTop = frameTop

            // check if we're done!
            if (now >= endTime) {
                resolve()
                return
            }

            // If we were supposed to scroll but didn't, then we
            // probably hit the limit, so consider it done; not
            // interrupted.
            if (element.scrollTop === previousTop && element.scrollTop !== frameTop) {
                resolve()
                return
            }
            previousTop = element.scrollTop

            // schedule next frame for execution
            setTimeout(scrollFrame, 0)
        }

        // boostrap the animation process
        setTimeout(scrollFrame, 0)
    })
}

export default smoothScrollTo
