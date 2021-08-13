export class LocalStore {
    setToLocalStorage(key: string, token: string) {
        const userToken = {
            expire: new Date().getTime() + 3.6e6,
            token
        };
        localStorage.setItem(key, JSON.stringify(userToken));
    }

    getFromLocalStorage(key: string) {
        const getByKey = JSON.parse(localStorage.getItem(key) || '{}');
        return Object.keys(getByKey).length ? getByKey : '';
    }
}