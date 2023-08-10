/* eslint-disable no-restricted-globals */
self.onmessage = async () => {
    const data3 = await fetch('https://api.example.com/data3')
    self.postMessage({ data: data3 });
};

export { }
