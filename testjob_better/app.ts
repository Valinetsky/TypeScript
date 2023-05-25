interface ResData {
    userId: number
    id: number // Point 1
    title: string
    body: string
}
    
class FifteenthTitle {
    private static readonly URL = 'https://jsonplaceholder.typicode.com/posts'
    private static readonly ID = 15

    private static async getTitleFromJson() {
        const response = await fetch(FifteenthTitle.URL)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        const itemWithTitle = data.find((item: ResData) => item.id === FifteenthTitle.ID)
        if (!itemWithTitle) {
            throw new Error(`Item with ID ${FifteenthTitle.ID} not found`)
        }
        const title = itemWithTitle.title
        return title
    }

    public static async run() {
        try {
            const title = await FifteenthTitle.getTitleFromJson()
            console.log(title)
        } catch (error) {
            console.error(error.message)
        }
    }
}

FifteenthTitle.run()