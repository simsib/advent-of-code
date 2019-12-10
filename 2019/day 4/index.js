const input = '246540-787419';
const [start, end] = input.split('-').map(parseFloat);
const arr = Array(end - start + 1).fill(1).map((e, i) => (i + start).toString());

const result = arr
    .filter(x => {
        const numbers = x.split('').map(i => parseInt(i, 10));
        if (x === numbers.sort().join('')) {
            return x;
        }
    })
    .filter(x => {
        return (
            x
                .split('')
                .reduce((groups, key) => {
                    const last = groups.pop();
                    if (typeof last === 'undefined') {
                        groups.push(key);

                        return groups;
                    }

                    const lastDigitOfGroup = last.split('').pop();
                    if (lastDigitOfGroup === key) {
                        groups.push(last + key);
                    } else {
                        groups.push(last, key);
                    }

                    return groups;
                }, [])
                .filter(x => x.length === 2).length > 0
        );
    });

console.log(result.length);