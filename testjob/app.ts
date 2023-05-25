interface ResData {
    userId: number
    id: number // Point 1
    title: string
    body: string
}

class FifteenthTitle {
    static #URL = 'https://jsonplaceholder.typicode.com/posts'
    static #ID = 15

    static #get() {
        fetch(FifteenthTitle.#URL)
        .then(res => {
            if (res.ok) {
                return res.json() // Point 2
            }
        })
        .then(resData => FifteenthTitle.#getTitleFromJson(resData))
        .then(title => console.log(title))
        .catch(({ message }) => console.error(message))
    }

    static #getTitleFromJson(resData: ResData[]) {
        const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID) // Point 3
        const title = itemWithTitle.title

        return title // Point 4
    }

    run () {
        FifteenthTitle.#get()
    }
}

const fifteenthTitle = new FifteenthTitle()
fifteenthTitle.run()