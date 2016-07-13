export default function(func) {
    return () => {
        let wait

        if (wait) {
            return
        }

        wait = true
        let args = arguments
        let context = this

        window.requestAnimationFrame(() => {
            wait = false
            func.apply(context, args)
        })
    }
}
