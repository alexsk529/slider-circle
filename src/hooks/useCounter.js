export const useCounter = (setState) => {
    let step = 1;
    
    const numCounter = (firstNum, secondNum, timing) => {
        const time = timing;
        let num = secondNum - firstNum;
        const t = (time / (Math.abs(num) / step)) * 500;
        if (num < 0) step *= -1;
        let first = firstNum;
        const interval = setInterval(() => {
            setState(prev => prev + step);
            first += step;
            if (+first === +secondNum) {
                clearInterval(interval);
            }
        }, t)
    }

    return numCounter;
}