class ListView {
    #container = document.querySelector("#listContainer");
    #listItems = Array.from(this.#container.querySelectorAll("li"))
    #badgeItems = this.#listItems.map(el => el.querySelector(".badge"))

    #getClickedItemIndex({ target }) {
        return (this.#listItems.findIndex(el => el.isEqualNode(target)))
    }

    onClickHandler(handler) {
        this.#listItems.forEach(el =>
            el.addEventListener("click", (e) => handler(this.#getClickedItemIndex(e)))
        )
    }

    updateBadge(i, amount) {
        this.#badgeItems[i].innerText = amount
    }

    updateListOrder(countMap) {
        this.#container.innerHTML = "";
        const markup = [...countMap.entries()].sort((a, b) => b[1] - a[1])
            .map(([i]) => this.#listItems[i - 1])
            .forEach(el => this.#container.appendChild(el))
    }
}

export default new ListView()