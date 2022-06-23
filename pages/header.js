class MyHeader extends HTMLElement {
    connectedCallbackS() {
        this.innerHTML = ` 
        <p> hello sujana </p>
      `
    }
}

customElements.define('my-header', MyHeader)