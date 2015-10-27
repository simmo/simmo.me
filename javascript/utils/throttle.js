export default function(func) {
    return () => {
        if (wait) return

        var wait = true
        var args = arguments
        var context = this

        window.requestAnimationFrame(() => {
            wait = false
            func.apply(context, args)
        })
    }
}
