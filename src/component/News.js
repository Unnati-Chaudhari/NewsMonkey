import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Stevie Bonifield",
      title:
        "Apple has a secret list of banned autocomplete phrases including ‘dictator Trump’ and ‘covid is a hoax’",
      description:
        'A researcher found over 100,000 words and phrases in "every major language" that are blocked from autocomplete and swipe-type in iOS, Reuters reports. The researcher, Derik Kauffman, says you can still type the words on the blocklist one letter at a time. But…',
      url: "https://www.theverge.com/tech/1028663/apple-ios-keyboard-blocked-words-autocomplete",
      urlToImage:
        "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/DSC_2327.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      publishedAt: "2026-11-06T15:10:28Z",
      content:
        "<ul><li></li><li></li><li></li></ul>\r\niOSs keyboard wont suggest or swipe-type a lengthy list of insults and political phrases.\r\niOSs keyboard wont suggest or swipe-type a lengthy list of insults and… [+2672 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "sanujb6@gmail.com (Sanuj Bhatia) , Sanuj Bhatia",
      title:
        "Google's Find Hub just got a feature that could save you from losing your wallet",
      description:
        "If you're constantly forgetting your keys or wallet, Google's latest Find Hub upgrade could be a lifesaver.",
      url: "https://www.androidcentral.com/apps-software/android-os/android-notify-find-hub-items-left-behind",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/Koy2RM269QtUxsCuzgrcp4-2560-80.jpg",
      publishedAt: "2026-11-06T07:44:57Z",
      content:
        '<ul><li>Google is rolling out a new "Notify when left behind" feature for Bluetooth trackers connected to Android\'s Find Hub.</li><li>The feature sends an alert when you move away from an item with a… [+2348 chars]',
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title: "Apple Releasing Yet Another Two New Products Next Week",
      description:
        "Apple's massive wave of product launches will finally end next week, with its all-new HomeView smart home hub and the fourth-generation Apple TV 4K set to be released on Friday, November 13 and no other major hardware releases expected for the remainder of th…",
      url: "https://www.macrumors.com/2026/11/06/two-more-apple-products-next-week/",
      urlToImage:
        "https://images.macrumors.com/t/bk2N_fO8Kkb58OMudH1Nzd1LgGI=/2048x/article-new/2026/01/Apple-Event-Logo.jpeg",
      publishedAt: "2026-11-06T15:37:01Z",
      content:
        "Apple's massive wave of product launches will finally end next week, with its all-new HomeView smart home hub and the fourth-generation Apple TV 4K set to be released on Friday, November 13 and no ot… [+184 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Romina Fabbretti",
      title:
        "Olvídate de los Apple Watch, Amazon tiene un smartwatch HD casi gratis con un 71 % de descuento en una liquidación final de existencias",
      description:
        "Un reloj inteligente con funciones deportivas, seguimiento de la actividad y notificaciones del móvil por menos de 30 euros. El Cillso Smart Watch apuesta por las prestaciones esenciales y ahora cuesta 28,49 euros en Amazon, con un 72% de descuento.",
      url: "https://es.gizmodo.com/olvidate-de-los-apple-watch-amazon-tiene-un-smartwatch-hd-casi-gratis-con-un-71-de-descuento-en-una-liquidacion-final-de-existencias-2000270127",
      urlToImage:
        "https://es.gizmodo.com/app/uploads/2026/11/Diseno-sin-titulo-89-2-1200x675.jpg",
      publishedAt: "2026-11-06T12:05:09Z",
      content:
        "Un smartwatch no tiene por qué costar lo mismo que un teléfono móvil. Aunque Apple, Samsung y Garmin han convertido sus relojes en dispositivos cada vez más sofisticados, también existe un mercado pa… [+3168 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
