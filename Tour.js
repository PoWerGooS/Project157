AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superman",
        title: "Superman",
        url: "./assets/superman.jpg",
      },
      {
        id: "spiderman",
        title: "Spider Man",
        url: "./assets/spider.jpg",
      },

      {
        id: "bat-man",
        title: "Batman",
        url: "./assets/batman.jpg",
      },
      {
        id: "wonder-woman",
        title: "Wonder Woman",
        url: "./assets/wonderwoman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const Border=this.borderEl(position, item.id)
      // Thumbnail Element
      const Thumbnail=this.thumbNailEl(item)
      Border.appendChild(Thumbnail)
      // Title Text Element
      const Title=this.title(position, item)
      Border.appendChild(Title)

      this.placesContainer.appendChild(Border);
    }
  },
  borderEl: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });

    return entityEl;
  },
  thumbNailEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", item.id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  title: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  }


});
