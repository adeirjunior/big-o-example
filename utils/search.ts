export function linearSearch(): void {
    const arr: number[] = Array.from({length: 100}, (_, i) => i + 1);
    const target: number = 75;
    let steps: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) {
            return;
        }
    }
}

export function quadraticSearch(): void {
    const arr: number[] = Array.from({length: 100}, (_, i) => i + 1);
    const target: number = 75;
    let steps: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr.length; j++) {
            steps++;
            if (arr[j] === target) {
                return;
            }
        }
    }
}

export function binarySearch(): void {
    const arr: number[] = Array.from({length: 100}, (_, i) => i + 1);
    const target: number = 75;
    let left: number = 0, right: number = arr.length - 1, steps: number = 0;
    while (left <= right) {
        steps++;
        const mid: number = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}