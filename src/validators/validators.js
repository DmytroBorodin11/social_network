

export const invalidEmail = (value) => {
    if (!value) {
        return
    }else {
        return value.includes('@') ? undefined : 'Invalid email';
    }
}

export const invalidValue = (value) => value ? undefined : '';