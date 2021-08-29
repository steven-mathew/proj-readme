import {useRouter} from 'next/router'
import Image from 'next/image'

import * as React from 'react'

export function CenteredColumn({children}) {
    return (
        <div className="mx-auto max-w-screen-md justify-content">{children}</div>
    )
}
