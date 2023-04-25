import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            streetName: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    car: { model: string }
}

function useDimychState(m: string) {
    return [m, function () {
    }]
}

function useDimychState2(m: string) {
    return {
        message: m,
        setMessage: function () {}
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    const [message, setMessage] = useDimychState('hello')
    return <div>
        <h1>{title}</h1>
        <div>{man.name}</div>
        <div>{props.car.model}</div>
    </div>
}