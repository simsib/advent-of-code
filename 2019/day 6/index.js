const data = require('./data');
// const data = require('./datatest');

const orbits = data.data.split('\n');

const families = orbits.map(x => {
    const [parent, child] = x.split(')');
    return { parent, child };
});

const YOU = families.find(x => x.child === 'YOU');
const SAN = families.find(x => x.child === 'SAN');


const youRoute = findRouteToCOM(YOU);
const sanRoute = findRouteToCOM(SAN);

while( youRoute.pop() === sanRoute.pop());

console.log(youRoute.length + sanRoute.length);

function findRouteToCOM(fam) {
    const route = [];
    let parent = fam.child;
    while (parent !== 'COM') {
        route.push(parent);
        
        parent = families.find(x => x.child === parent).parent;
    }
    return route;
}
