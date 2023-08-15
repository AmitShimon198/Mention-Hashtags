import React, { useDeferredValue, useState, useTransition } from 'react'

const bigArray = [...Array(20000).keys()];

export default function TransitionExample() {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState<string>('');
    const deferredValue = useDeferredValue(input);
    const [list, setList] = useState<number[]>([]);

    const onChange = ({ target: { value } }: any) => {
        setInput(value);
        startTransition(() => {
            const items = bigArray.filter(n => n.toString().includes(deferredValue))
            setList(items)
        })
    }

    return (<>
        <input value={input} onChange={onChange} />
        {!isPending && list.length && list.map(n => <div key={n}>{n}</div>)}
        {isPending && <>Loading...</>}
    </>
    )
}
