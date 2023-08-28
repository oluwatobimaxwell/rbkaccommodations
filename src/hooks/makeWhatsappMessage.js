export const makeWhatsappMessage = (item) => {
    return `https://wa.me/+2349058350009?text=Hello, I would like to book the ${item.category.toUpperCase()},%20${item.name}%20@${item.location}.`
}