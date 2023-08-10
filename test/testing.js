const func = () => {
    const qarr = Array.from({ length: 40000000 }, () => Math.floor(Math.random() * 40));
    let sum = 0;
    const start = Date.now();
    for (let index = 0; index < qarr.length; index++) {
        sum = sum + qarr[index];
    }
    const end = Date.now();
    console.log(`Execution time for: ${end - start} ms`);
    
    
    const start1 = Date.now();
    const sum2 = qarr.reduce((total, item) => total + item); 
    const end2 = Date.now();
    console.log(`Execution time for: ${end2 - start1} ms`);

}


func();