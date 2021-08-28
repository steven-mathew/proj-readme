// https://github.com/brianlovin/brian-lovin-next/tree/main/src/components

import * as React from 'react'

const styles =
    'w-full rounded px-4 py-2 text-primary bg-gray-1000 bg-white focus:ring-0'

export function Input(props) {
    return <input className={styles} {...props} />
}

export function Textarea(props) {
    return <textarea className={`${styles} block`} {...props} />
}

export function Select(props) {
    return <select className={styles} {...props} />
}
