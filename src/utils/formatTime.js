export function formatTime(time){
    const minutes = Math.floor(time / 60);
    const second = time % 60;
    return `${minutes}:${second<10 ? '0' : ''}${second}`;
}