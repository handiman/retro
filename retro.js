class BlinkText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline;
        }
        .blink {
          visibility: visible;
        }
      </style>
      <span class="blink"><slot></slot></span>
    `;
  }

  connectedCallback() {
    const speeds = [500, 600, 700, 800];
    const speed = speeds[Math.floor(Math.random() * speeds.length)];
    const span = this.shadowRoot.querySelector(".blink");
    let visible = true;

    this._interval = setInterval(() => {
      visible = !visible;
      span.style.visibility = visible ? "visible" : "hidden";
    }, speed);
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }
}

class RainbowText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <slot></slot>
    `;
  }

  connectedCallback() {
    var colors = [
      "#FF0000",
      "#FF7F00",
      "#FFFF00",
      "#00FF00",
      "#0000FF",
      "#4B0082",
      "#9400D3",
    ];

    var words = this.textContent.split(" ");
    var out = "";

    for (var i = 0; i < words.length; i++) {
      out += `<font style="color:${colors[i % colors.length]}">${words[i]}</font> `;
    }

    this.innerHTML = out;
  }
}

class MarqueeText extends HTMLElement {
  static get observedAttributes() {
    return ["speed"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .inner {
          display: inline-block;
          will-change: transform;
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 10s;
        }

        @keyframes scroll {
          from { transform: translateX(100%); }
          to   { transform: translateX(-100%); }
        }
      </style>

      <div class="inner">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    this._updateSpeed();
  }

  attributeChangedCallback() {
    this._updateSpeed();
  }

  _updateSpeed() {
    const speed = this.getAttribute("speed");
    const inner = this.shadowRoot.querySelector(".inner");
    if (speed) {
      inner.style.animationDuration = `${speed}s`;
    }
  }
}

class ColoredLine extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <table width="100%" bgcolor="${this.getAttribute("color")}" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <img src="./pixel.gif" width="100" height="1" />
          </td>
        </tr>
      </table>
    `;
  }
}

customElements.define("retro-blink", BlinkText);
customElements.define("retro-rainbow", RainbowText);
customElements.define("retro-marquee", MarqueeText);
customElements.define("retro-hr", ColoredLine);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("form").forEach((form) => {
    form.onsubmit = function () {
      alert("Thank ye!");
      return false;
    };
  });
});

// The obligatory javascript bugs
//window.onload = () => alert(NaN);
