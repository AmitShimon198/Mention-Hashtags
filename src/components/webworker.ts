/* eslint-disable no-restricted-globals */
self.onmessage = async ({data}) => {
    const data3 = await fetch(data.url)
    self.postMessage({ data: data3 });
};

export { }
