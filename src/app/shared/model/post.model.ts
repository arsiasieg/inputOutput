export class Post {
    text: string
    imageUrl: string
    author: string

    constructor(text: string, imageUrl: string, author: string){
        this.text = text
        this.imageUrl = imageUrl
        this.author = author
    }
}