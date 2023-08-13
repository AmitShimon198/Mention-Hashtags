/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';
const worker = new Worker(new URL("./webworker.ts", import.meta.url));

export default function ConcurrencyExample() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    //that call will execute in parallel with the promise.all
    callWebWorker()
    // those calls are executed concurrently.
    Promise.all([
      getWebWorkerData(),
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2')
    ]).then(([data1, data2, data]) => {
      setData((prev) => [data1, data2, data])
    });
  }, [])

  const getWebWorkerData = (): Promise<any> =>
    new Promise(resolve => worker.onmessage = e => resolve(e.data));

  const callWebWorker = async () => {
    worker.postMessage({ url: 'https://api.example.com/data3' });
  };

  return (
    <>{data?.map(value => <div>{value}</div>)}</>
  )
}

