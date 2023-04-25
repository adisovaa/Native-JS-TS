import React, {ChangeEvent, MouseEvent} from "react";


const callBack = (): number => {
    console.log('hello')
    return 12
}

window.setTimeout(callBack, 1000)

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
    }
    const saveUser = () => {
        console.log('save user')
    }
    const onTextareaChanged = () => {
        console.log('hey')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + e.currentTarget.value)
    }

    return <div>
        <div>
            <textarea
                onChange={onTextareaChanged}
                onBlur={focusLostHandler}
            >hey</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
        </div>
        <button name='delete' onClick={deleteUser}>x</button>
        <button name='save' onClick={deleteUser}>x</button>
    </div>
}