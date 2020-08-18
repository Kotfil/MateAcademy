export type PropsTypeBirdSeagull = {
    id: number
    title:  string
    img: string
}
export type PropsTypeBird = {
    birdSeagull: PropsTypeBirdSeagull
}

export type PropsTypeCatalogBirds = {
    catalogBirds: Array<PropsTypeBirdSeagull>
}

let store: PropsTypeCatalogBirds = {
    catalogBirds: [
        birdSeagull: [
            {
    id: 1,
    title: '',
    img: ''
}
]
]
}
export const addNewTitle = () => {

}