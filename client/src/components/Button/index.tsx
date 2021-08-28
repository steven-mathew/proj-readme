// From https://github.com/brianlovin/brian-lovin-next/tree/main/src/components

import * as React from 'react'

type Props = {
    className?: string
    onClick?: any
    disabled?: boolean
    children: React.ReactChild | string
    type?: string
} & React.ComponentPropsWithoutRef<'button'>

export default function Button({className, ...rest}: Props) {
    return (
        <button
            className={`cursor-pointer flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 bg-gray-700 hover:bg-gray-600 shadow-xl px-5 py-2 text-blue-100 hover:text-white rounded`}
            {...rest}
        />
    )
}

                // <div className="p-8 mt-16 -mx-4 border-t border-b border-dashed bg-tertiary border-note space-y-4 md:-mx-8">
