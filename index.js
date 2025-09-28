const receivesAFunction = (exercise) => exercise();
receivesAFunction(() => console.log(""));

const returnsANamedFunction = () => {
    function namedFn() {
        return "I am named Fn";
    }
    return namedFn;
}; 

const returnsAnAnonymousFunction = () => () => console.log();
