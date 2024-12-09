  class RadioPlayer {
    constructor(containerId, stations) {
      this.container = document.getElementById(containerId);
      this.stations = stations;
      this.radioPlayer = document.createElement("audio");
      this.playPauseButton = document.createElement("button");
      this.radioList = document.createElement("select");
      this.injectStyles();
      this.init();
    }

    injectStyles() {
      const styles = `
            .era-of-radio-btn-plain {
                padding: unset !important;
                border: unset !important;
                background-color: unset !important;
                margin-left: 5px;
            }

            .era-of-radio-radio-element {
                padding: 5px 5px;
                background: aliceblue;
                border: 1px solid darkgray;
                border-radius: 5px;
                vertical-align: middle;
                display: inherit;
            }
            `;
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    init() {
      // Setup player elements
      this.container.classList.add("era-of-radio-radio-element");
      this.radioPlayer.id = "radioPlayer";
      this.playPauseButton.id = "playPauseButton";
      this.playPauseButton.textContent = "▶️";
      this.playPauseButton.classList.add("era-of-radio-btn-plain");

      this.radioList.id = "radiolist";
      this.radioList.addEventListener("change", () => this.handleSelection());
      this.playPauseButton.addEventListener("click", () =>
        this.togglePlayPause()
      );

      // Populate stations
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Listen to radio";
      this.radioList.appendChild(defaultOption);

      this.stations.forEach((station) => {
        const option = document.createElement("option");
        option.value = station.url;
        option.textContent = station.name;
        this.radioList.appendChild(option);
      });

      // Append elements to container
      this.container.appendChild(this.radioList);
      this.container.appendChild(this.playPauseButton);
      this.container.appendChild(this.radioPlayer);
    }

    handleSelection() {
      const selectedStation = this.radioList.value;

      if (!this.radioPlayer.paused) {
        this.radioPlayer.pause();
      }

      if (!selectedStation) {
        this.radioPlayer.src = "";
        this.playPauseButton.textContent = "▶️";
        this.playPauseButton.classList.remove("pause");
        return;
      }

      this.radioPlayer.src = selectedStation;
      this.radioPlayer.play();
      this.playPauseButton.textContent = "⏸️";
      this.playPauseButton.classList.add("pause");
    }

    togglePlayPause() {
      if (this.radioPlayer.src) {
        if (this.radioPlayer.paused) {
          this.radioPlayer.play();
          this.playPauseButton.textContent = "⏸️";
          this.playPauseButton.classList.add("pause");
        } else {
          this.radioPlayer.pause();
          this.playPauseButton.textContent = "▶️";
          this.playPauseButton.classList.remove("pause");
        }
      }
    }
  }

  // Example Usage
  const stations = [
    {
      name: "Hiru FM",
      url: "https://radio.lotustechnologieslk.net:2020/stream/hirufmgarden",
    },
    {
      name: "Siyatha FM",
      url: "https://srv01.onlineradio.voaplus.com/siyathafm",
    },
    {
      name: "Lakhanda",
      url: "https://cp12.serverse.com/proxy/itnfm?mp=/stream",
    },
    { name: "Sirasa FM", url: "https://mbc.thestreamtech.com:8087/index.html" },
    { name: "Sitha FM", url: "https://shaincast.caster.fm:48148/listen.mp3" },
    { name: "Neth FM", url: "https://cp11.serverse.com/proxy/nethfm/stream" },
    {
      name: "FM Derana",
      url: "https://cp12.serverse.com/proxy/fmderana/stream",
    },
    { name: "Tamil FM", url: "http://shaincast.caster.fm:47814/listen.mp3" },
    { name: "Shree FM", url: "http://207.148.74.192:7860/stream2.mp3" },
    {
      name: "Gold FM",
      url: "https://radio.lotustechnologieslk.net:2020/stream/goldfmgarden",
    },
    { name: "SLBC", url: "http://220.247.227.6:8000/Snsstream" },
    { name: "City FM", url: "http://220.247.227.20:8000/citystream" },
    { name: "Y FM", url: "https://mbc.thestreamtech.com:7032/index.html" },
    {
      name: "Vasantham FM",
      url: "https://cp12.serverse.com/proxy/vasanthamfm?mp=/stream",
    },
    {
      name: "Shakthi FM",
      url: "https://mbc.thestreamtech.com:8086/index.html",
    },
    { name: "Red FM", url: "http://shaincast.caster.fm:47830/listen.mp3" },
    { name: "Yes FM", url: "https://mbc.thestreamtech.com:7056/index.html" },
    { name: "E FM", url: "http://207.148.74.192:7860/stream.mp3" },
  ];

  new RadioPlayer("eraOfRadioWidget", stations);
