export default class Client {
    #id: string
    #name: string
    #age: number
    #role: string

    constructor(name: string, age: number, role: string, id: string = null) {
        this.#name = name
        this.#age = age
        this.#role = role
        this.#id = id
    }

    static emptyClient() {
        return new Client('', 0, '', null)
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    get role() {
        return this.#role
    }
}