
interface Inew {
    feed: {
        title: string
    },
    items: [{
        id: Number,
        pubDate: string,
        title: string,
        link :string,
        description: string,
        content: string;
        enclosure: {
            link: string
        }
    }]
}
