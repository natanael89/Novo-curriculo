'use client'

import {useEffect, useState } from "react"

export default function DynamicContent() {
    const [currentTime, setCurrentTime] = useState('')

    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString())
    }, [])

    return (
        <div>
            <p>Hora atual: {currentTime}</p>
        </div>
    )
}