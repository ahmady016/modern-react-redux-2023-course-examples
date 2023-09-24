import formatDuration from 'date-fns/formatDuration'

type Time = {
    hours: number
    minutes: number
    seconds: number
}

export function toSeconds(time: string) {
	const [minutes, seconds] = time.split(':').map(Number)
	return (minutes * 60) + seconds
}

export function toHoursMinutesSeconds(totalSeconds: number): Time {
	let minutes = Math.floor(totalSeconds / 60)
	const seconds = totalSeconds % 60
	const hours = Math.floor(minutes / 60)
	minutes = minutes % 60
	return { hours, minutes, seconds }
}

export function toTotalSeconds(times: string[]) {
    return times.reduce((totalSeconds, time) => totalSeconds + toSeconds(time), 0)
}

export function toTotalDuration(times: string[]) {
    return formatDuration(toHoursMinutesSeconds(toTotalSeconds(times)))
}

export function toDuration(totalSeconds: number) {
    return formatDuration(toHoursMinutesSeconds(totalSeconds))
}
