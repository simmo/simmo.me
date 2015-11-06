export default function(string) {
	return string.replace(/\s([^\s]*)$/, '\u00A0$1')
}
