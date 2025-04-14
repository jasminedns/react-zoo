export const getImageURL = image => {
    return new URL(`../assets/${image}`, import.meta.url).href
}