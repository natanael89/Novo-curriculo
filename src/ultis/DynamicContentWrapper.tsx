'use client'

import dynamic from "next/dynamic";

const DynamicContent = dynamic(() => import('./DynamicContent'), { ssr: false})

export function DynamicContentWrapper() {
    return (
        <DynamicContent /> 
    )
}