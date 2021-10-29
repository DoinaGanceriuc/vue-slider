/*  Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre. */


const app = new Vue ({
  el: "#root",
  data: {
    places: [
  {
    item: "./img/01.jpg",
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
  },
  {
    item: "./img/02.jpg",
    title: "Svizzera",
    text: "Lorem ipsum"
  },
  {
    item: "./img/03.jpg",
    title: "Gran Bretagna",
    text:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  },
  {
    item: "./img/04.jpg",
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
  },
  {
    item: "./img/05.jpg",
    title: "Paradise",
    text:  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  },

],
counter: 0

  }
})