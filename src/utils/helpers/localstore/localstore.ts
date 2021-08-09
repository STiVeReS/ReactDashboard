export const setLocalStorage = (key: string, token: string) => {
    const userToken = {
        from: new Date().toLocaleTimeString(),
        token,
    }
    localStorage.setItem(key, JSON.stringify(userToken));
}


export const getFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '{}');
}