
import React, {
    useImperativeHandle, useState,
} from 'react'
export type RefHandler = {
    exampleFunc: (setValue: (val: string) => void) => void;
}
const RefExample = (_: any, ref: any) => {
    const [test, setTest] = useState('')
    useImperativeHandle(ref, () => ({
        exampleFunc: (setValue: (val: string) => void) => {
            setValue(`${test}`)
        }
    }), [test])
    return (<>
        <input ref={ref} onChange={(e) => setTest(e.target.value)} />
    </>
    )
}
export default React.forwardRef<RefHandler, any>(RefExample);
