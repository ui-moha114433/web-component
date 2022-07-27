const template = document.createElement('template');
template.innerHTML =
    `<style>
        summary{
            background:#ddd;
            font-size:16px;
            cursor:pointer;
            border-top:1px solid #fff;
            padding:5px 2px;
        }
        details p{
            margin:0;
            padding:10px 0px;
        }
        details[open] {
            border:1px solid #1EA7FD;
            border-top:0;
            padding-left: 1em;
        }
        details[open] summary {
            background: #1EA7FD;
            color: white;
            margin-left: -1em;
      }
    </style>
    <accordion> <details> <summary></summary> <p></p> </details> </accordion>`;

class Accordion extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('summary').innerText = this.getAttribute("summaryText");
        this.shadowRoot.querySelector('p').innerText = this.getAttribute("detailsText");

        const summaryClick = this.shadowRoot.querySelector("summary");
        summaryClick.addEventListener("click", this.handleClick);

    }
    handleClick(e) {
        console.log("Heading Clicked!");
    }

}

window.customElements.define('my-accordion', Accordion);

