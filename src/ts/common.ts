export function unit(data: number) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}