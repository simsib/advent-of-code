const data = require('./data');
// const data = require('./datatest');

const orbits = data.data.split('\n');

const families = orbits.map(x => {
    const [parent, child] = x.split(')');
    return { parent, child };
});

const result = families.reduce((parents, orbit) => {
    parents[orbit.parent] = parents[orbit.parent] || [];

    parents[orbit.parent].push(orbit.child);

    return parents;
}, {});

const counts = Object.keys(result)
    .reduce((childs, key) => {
        childs.push(...result[key]);
        return childs;
    }, [])
    .map(child => {
        let count = 0;
        let parent = child;

        while (parent !== 'COM') {
            count++;
            parent = families.find(x => x.child === parent).parent;
        }

        return count;
    })
    .reduce((a, b) => a + b, 0);

console.log(counts);
