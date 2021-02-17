export default function converterTime(s) {
    if (s >= 3600) {
        console.log('функция не принимает аргумент больше 3600 секунд');
        return;
    }

    const minutes = Math.floor(s / 60);
    const seconds = Math.round(s % 60);
    return `${minutes} : ${seconds}`;
}