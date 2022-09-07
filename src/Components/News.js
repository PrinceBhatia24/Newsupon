import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Steve Dent",
      title: "Samsung's 32-inch Smart Monitor M8 falls to a new low",
      description:
        "Samsung's 32-inch Smart Monitor M8 can act not only as a monitor with a webcam, but a smart TV as well thanks to the built-in speakers and support for cloud gaming and streaming platforms. Now, you can grab one for $590 ($110 to $140 off) at Amazon in white o…",
      url: "https://www.engadget.com/samsungs-32-inch-m-8-smart-monitor-falls-to-a-new-low-080717748.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-09/fd0ef5e0-2db5-11ed-b4fa-4b651cab6214",
      publishedAt: "2022-09-06T08:07:17Z",
      content:
        "Samsung's 32-inch Smart Monitor M8 can act not only as a monitor with a webcam, but a smart TV as well thanks to the built-in speakers and support for cloud gaming and streaming platforms. Now, you c… [+1684 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Sam Rutherford",
      title: "The best fast chargers available right now",
      description:
        "Now that companies like Apple, Google and Samsung are no longer including power adapters with new phones, getting the right charger for your device is a little trickier than it used to be. And while it hasn’t happened yet, given the increased focus on reducin…",
      url: "https://www.engadget.com/best-fast-chargers-140011033.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-08/826785b0-296d-11ed-aeb1-d30d9e5ff594",
      publishedAt: "2022-09-06T14:00:11Z",
      content:
        "Now that companies like Apple, Google and Samsung are no longer including power adapters with new phones, getting the right charger for your device is a little trickier than it used to be. And while … [+11277 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Boone Ashworth",
      title: "How to Watch Apple’s iPhone 14 Launch, and What to Expect",
      description:
        "A new iPhone is coming on Wednesday. Here’s what to know ahead of time, and how to tune in to watch.",
      url: "https://www.wired.com/story/apple-event-september-2022-iphone-14-how-to-watch-what-to-expect/",
      urlToImage:
        "https://media.wired.com/photos/63125b229fbbe8d3536bfa3d/191:100/w_1280,c_limit/How-to-Watch-Apple-Event-2022-Gear-GettyImages-1173711317.jpg",
      publishedAt: "2022-09-06T11:00:00Z",
      content:
        "We can always count on Apple to announce the newest iPhone model every September. This years event is almost upon us; the company is expected to unveil its lineup of iPhone 14s, as well as at least a… [+4099 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Reuters",
      title:
        "Instagram fined $400 million for failing to protect children's data",
      description:
        "Ireland's data privacy regulator has agreed to levy a record fine of 405 million euros ($402 million) against social network Instagram following an investigation into its handling of children's data, a spokesperson for the watchdog said.",
      url: "https://www.cnn.com/2022/09/06/tech/instagram-fine-teens-privacy/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220906094453-instagram-fine-super-tease.jpg",
      publishedAt: "2022-09-06T08:55:04Z",
      content:
        "DublinIreland's data privacy regulator has agreed to levy a record fine of 405 million euros ($402 million) against social network Instagram following an investigation into its handling of children's… [+1523 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Brazil orders Apple to suspend iPhone sales without charger - Reuters",
      description:
        'Brazil\'s government on Tuesday ordered Apple Inc <a href="https://www.reuters.com/companies/AAPL.O" target="_blank">(AAPL.O)</a> to stop selling iPhones without a battery charger in the country, claiming that the company provides an incomplete product to cons…',
      url: "https://www.reuters.com/technology/brazil-orders-apple-suspend-iphone-sales-without-charger-2022-09-06/",
      urlToImage:
        "https://www.reuters.com/resizer/BVI74dwhuOOThYRt19WmX_73Fyc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OWZJ6RBQ7ZIGLADQATLXJGFT5Q.jpg",
      publishedAt: "2022-09-06T12:35:00Z",
      content:
        "SAO PAULO, Sept 6 (Reuters) - Brazil's government on Tuesday ordered Apple Inc (AAPL.O) to stop selling iPhones without a battery charger in the country, claiming that the company provides an incompl… [+1080 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Futures climb after recent declines on Wall Street - Reuters",
      description:
        "U.S. stock index futures rose on Tuesday as investors returned from the Labor Day weekend to pick up beaten-down stocks after last week's selloff on worries about monetary policy tightening.",
      url: "https://www.reuters.com/markets/europe/futures-climb-after-recent-declines-wall-street-2022-09-06/",
      urlToImage:
        "https://www.reuters.com/resizer/BiFMbGAUuIqVpYD_nk1MiPfYBck=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GB2T62LAMNOO3C2D4G7JFMJOSE.jpg",
      publishedAt: "2022-09-06T11:51:00Z",
      content:
        "Sept 6 (Reuters) - U.S. stock index futures rose on Tuesday as investors returned from the Labor Day weekend to pick up beaten-down stocks after last week's selloff on worries about monetary policy t… [+2091 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Breakingviews - China's nuclear outlook is sunny and windy - Reuters",
      description:
        "Sichuan’s hydropower crisis has some officials calling for accelerated nuclear reactor construction. Unfortunately building plants in arid regions will be tricky. China's path to better atomic energy runs through solar and wind farms.",
      url: "https://www.reuters.com/breakingviews/chinas-nuclear-outlook-is-sunny-windy-2022-09-06/",
      urlToImage:
        "https://www.reuters.com/resizer/v7yPVbGLd5orbFt5ZaBR_DGpIVA=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ABP7322QEVNNNGI7NK7CJZ47II.jpg",
      publishedAt: "2022-09-06T04:12:00Z",
      content:
        "HONG KONG, Sept 6 (Reuters Breakingviews) - Sichuans hydropower crisis has some officials calling for accelerated nuclear reactor construction. Unfortunately building plants in arid regions will be t… [+3675 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "EXCLUSIVE Deal partner for Trump's Truth Social fails to get backing for SPAC extension -sources - Reuters",
      description:
        "The blank-check acquisition firm that agreed to merge with Donald Trump's social media company failed to secure enough shareholder support for a one-year extension to complete the deal, people familiar with the matter said on Monday.",
      url: "https://www.reuters.com/markets/deals/exclusive-deal-partner-trumps-truth-social-fails-get-backing-spac-extension-2022-09-06/",
      urlToImage:
        "https://www.reuters.com/resizer/DEuyH0_PXyouNYUhmkB-ecuWJbU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SKJDE2K6WVKB3MHEVUL5RXUNLI.jpg",
      publishedAt: "2022-09-06T03:13:00Z",
      content:
        "Sept 5 (Reuters) - The blank-check acquisition firm that agreed to merge with Donald Trump's social media company failed to secure enough shareholder support for a one-year extension to complete the … [+4501 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Anna Berrill",
      title: "Don’t say ‘sandwiches’: how to give your lunchbox a lift",
      description:
        "Think noodles, crunchy veg and pasta salad – and, when you make dinner, keep one eye on tomorrow’s lunch• Got a culinary dilemma? Email feast@theguardian.comWhat makes a good lunchbox?Emily, CroydonIn short: leftovers. We all want to avoid turning on the oven…",
      url: "https://amp.theguardian.com/food/2022/sep/06/dont-say-sandwiches-how-to-give-your-lunchbox-a-lift",
      urlToImage:
        "https://i.guim.co.uk/img/media/6890c4c4ab887abe0cc8319fd6baa6f7e789986f/0_325_8200_4919/master/8200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a61b691c97949e8190f3c1fa1b323a6",
      publishedAt: "2022-09-06T13:00:20Z",
      content:
        "What makes a good lunchbox?Emily, Croydon\r\nIn short: leftovers. We all want to avoid turning on the oven or stove too often to save both energy and time so make dinner with one eye on tomorrows lunch… [+2843 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Apple to Offer Range of Extreme Sports-Style Bands for Apple Watch Pro",
      description:
        'With the impending arrival of the fitness-focused Apple Watch "Pro" model headlining the upcoming Series 8 lineup, Apple is set to offer customers a wide range of new bands for the larger device that will play into the extreme sports theme, according to Bloom…',
      url: "https://www.macrumors.com/2022/09/06/apple-to-offer-range-apple-watch-pro-bands/",
      urlToImage:
        "https://images.macrumors.com/t/83GuSjcnFW5LKgKkWduNfZ6sA4g=/1920x/article-new/2022/09/apple-watch-pro-cads.jpg",
      publishedAt: "2022-09-06T11:18:53Z",
      content:
        'With the impending arrival of the fitness-focused Apple Watch "Pro" model headlining the upcoming Series 8 lineup, Apple is set to offer customers a wide range of new bands for the larger device that… [+2190 chars]',
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title:
        "iPhone 14 and iPhone 14 Plus Reportedly Feature Enhanced Version of A15 Chip",
      description:
        'Just two days ahead of Apple unveiling the iPhone 14 lineup, The Wall Street Journal\'s Tim Higgins reports that the lower-end iPhone 14 and iPhone 14 Plus models will be equipped with an "enhanced version" of the A15 Bionic chip.\n\n\n\n\n\nThe report does not prov…',
      url: "https://www.macrumors.com/2022/09/05/iphone-14-enhanced-a15-chip-report/",
      urlToImage:
        "https://images.macrumors.com/t/nx7NB2fJOjbkXsfhvcskxa_M4M8=/2581x/article-new/2022/06/iPhone-14-vs-14-Pro-Feature.jpg",
      publishedAt: "2022-09-06T00:19:19Z",
      content:
        "Just two days ahead of Apple unveiling the iPhone 14 lineup, The Wall Street Journal's Tim Higgins reports that the lower-end iPhone 14 and iPhone 14 Plus models will be equipped with an \"enhanced ve… [+1336 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Mitchel Broussard",
      title:
        "Deals: Get $99 Off Every Model of Apple's iPad Mini 6, Starting at $399.99",
      description:
        "Apple's 64GB Wi-Fi iPad mini 6 has hit $399.99 on Amazon, down from an original price of $499.00. We've seen this deal a few times in 2022, but it's rarely been available in stock for all colors of the iPad mini, as it is this week.\n\n\n\nNote: MacRumors is an a…",
      url: "https://www.macrumors.com/2022/09/06/deals-99-off-ipad-mini-6/",
      urlToImage:
        "https://images.macrumors.com/t/KhRylusqJhYf00ZVkP_CH6U-vB8=/2500x/article-new/2022/05/ipad-mini-better-purple.jpg",
      publishedAt: "2022-09-06T13:45:41Z",
      content:
        "Apple's 64GB Wi-Fi iPad mini 6 has hit $399.99 on Amazon, down from an original price of $499.00. We've seen this deal a few times in 2022, but it's rarely been available in stock for all colors of t… [+904 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Eric Slivka",
      title:
        "Anker Launches New 30W Nano 3 USB-C Charger and Bio-Based Charging Cables",
      description:
        "Popular accessory brand Anker today is announcing a pair of charging accessories, led by a new 511 Nano 3 USB-C charger using the company's latest GaN technology. The Nano 3 packs 30 watts of charging power into a package that's just barely larger than Apple'…",
      url: "https://www.macrumors.com/2022/09/06/anker-30w-nano-3-charger/",
      urlToImage:
        "https://images.macrumors.com/t/-vM2jOm9ZwCav5RRmdkoGx3NfLM=/1600x/article-new/2022/09/anker-nano-3-charger-cable.jpg",
      publishedAt: "2022-09-06T13:00:00Z",
      content:
        "Popular accessory brand Anker today is announcing a pair of charging accessories, led by a new 511 Nano 3 USB-C charger using the company's latest GaN technology. The Nano 3 packs 30 watts of chargin… [+2239 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Alleged 49mm Apple Watch Pro Case Size Compared to Upcoming Series 8 Models in New Images",
      description:
        "With the rumored Apple Watch Pro expected to be larger than the Apple Watch Series 7 and the rest of the upcoming Series 8 models, leaker Sonny Dickson has shared new images offering an excellent size comparison of the new lineup.\n\n\n\n\n\nAccording to Dickson's …",
      url: "https://www.macrumors.com/2022/09/06/49mm-apple-watch-pro-size-compared-series-8/",
      urlToImage:
        "https://images.macrumors.com/t/KHRiJzZugl2PK_Jx_UZIuCsctLs=/1816x/article-new/2022/09/2apple-watch-series-8-pro.jpeg",
      publishedAt: "2022-09-06T06:06:46Z",
      content:
        "With the rumored Apple Watch Pro expected to be larger than the Apple Watch Series 7 and the rest of the upcoming Series 8 models, leaker Sonny Dickson has shared new images offering an excellent siz… [+1709 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title: "What to Expect From AirPods Pro 2 at Tomorrow's Apple Event",
      description:
        "Apple reportedly plans to introduce the second-generation AirPods Pro alongside the iPhone 14 during a special event at Steve Jobs Theater this Wednesday. If you are considering upgrading to the new AirPods Pro once they are released, keep reading for a list …",
      url: "https://www.macrumors.com/2022/09/06/airpods-pro-2-features-rumors/",
      urlToImage:
        "https://images.macrumors.com/t/g6_2NvtWz-NywIPH65PFoJvveSU=/1600x/article-new/2021/09/airpods-pro-black-background.jpg",
      publishedAt: "2022-09-06T12:45:00Z",
      content:
        "Apple reportedly plans to introduce the second-generation AirPods Pro alongside the iPhone 14 during a special event at Steve Jobs Theater this Wednesday. If you are considering upgrading to the new … [+6257 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title: "Brazil Orders Apple To Suspend iPhone Sales Without Charger",
      description:
        "Brazil's government on Tuesday ordered Apple to stop selling iPhones without a battery charger in the country, claiming that the company provides an incomplete product to consumers. From a report: The Justice Ministry fined Apple 12.275 million reais ($2.38 m…",
      url: "https://apple.slashdot.org/story/22/09/06/1359238/brazil-orders-apple-to-suspend-iphone-sales-without-charger",
      urlToImage: "https://a.fsdn.com/sd/topics/apple_64.png",
      publishedAt: "2022-09-06T14:00:00Z",
      content:
        "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "insider@insider.com (Sam Shaw)",
      title:
        '"The model is largely misunderstood." An $8.7 billion tech fund manager reveals what investors are missing about one of the world\'s biggest companies as he lays out 5 key stock picks.',
      description:
        "An $8.7 billion tech fund manager reveals what investors are missing about a giant company as he lays out 5 stock picks.",
      url: "https://www.businessinsider.com/tech-stocks-to-buy-87-billion-fund-manager-reveals-5-picks-2022-9",
      urlToImage:
        "https://i.insider.com/63172035023509001aece6db?width=1200&format=jpeg",
      publishedAt: "2022-09-06T11:32:17Z",
      content:
        "Taking over the $8.7 billion Fidelity Select Technology portfolio in January, in the midst of a huge style rotation away from growth was challenging, even for fund manager Adam Benjamin, who has run … [+4456 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "jerb@insider.com (Jordan Parker Erb)",
      title:
        "Snap employees describe shock following mass layoffs and project cuts",
      description:
        "Snap employees are stunned after its CEO slashed the company's workforce by 20% and cut projects to the bone. Now, they're questioning Snap's future.",
      url: "https://www.businessinsider.com/snap-insiders-are-worried-about-the-future-of-the-company-2022-9",
      urlToImage:
        "https://i.insider.com/631662d3023509001aece124?width=1200&format=jpeg",
      publishedAt: "2022-09-06T10:40:00Z",
      content:
        "Welcome back, readers! I hope you've had a restful long weekend. Back in New York City, I'm your host, Jordan Parker Erb. I returned to the muggy city on Sunday, miraculously avoiding the \"flightmare… [+4344 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Billionaire David Rubenstein explains why he admires Warren Buffett - and lays out the traits shared by the world's best investors",
      description:
        "The Carlyle Group cofounder praised Buffett's intellect, focus, and genuine love of investing, and trumpeted the value of defying conventional wisdom.",
      url: "https://markets.businessinsider.com/news/stocks/david-rubenstein-book-carlyle-warren-buffett-berkshire-hathaway-investors-habits-2022-9",
      urlToImage:
        "https://i.insider.com/5f3e782a42f43f001ddfdf8e?width=1200&format=jpeg",
      publishedAt: "2022-09-06T10:47:59Z",
      content:
        "David Rubenstein admires Warren Buffett's intellect, focus, and love of investing for its own sake instead of the luxury lifestyle it can fund, Fox Business reported this week.\r\n\"He has pretty good i… [+3329 chars]",
    },
    {
      source: {
        id: null,
        name: "Entrepreneur",
      },
      author: "MarketBeat Staff",
      title: "SPY vs. QQQ: Which ETF Wins in 2022?",
      description:
        "Since the bull-market friendly QQQ has beat SPY more often than not over the last 20 years, it should never be counted out.",
      url: "https://www.entrepreneur.com/article/434753",
      urlToImage:
        "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-434753.jpeg",
      publishedAt: "2022-09-06T05:00:00Z",
      content:
        "Soon autumn leaves will do their best impression of this year's U.S. stock market a lot of falling.\r\nMarketBeat.com - MarketBeat\r\nBarring a miraculous late year run, the major indices will finish in … [+4589 chars]",
    },
    {
      source: {
        id: null,
        name: "Entrepreneur",
      },
      author: "MarketBeat Staff",
      title: "MarketBeat Podcast: Stock Market, Bad News is Good News",
      description:
        "This week on The MarketBeat Podcast Kate’s guest is Michael Wang, founder of Prometheus Alternative Investments. He has done stints at Citigroup and hedge funds",
      url: "https://www.entrepreneur.com/article/434765",
      urlToImage:
        "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-434765.jpeg",
      publishedAt: "2022-09-06T07:01:00Z",
      content:
        "This week on The MarketBeat Podcast Kate's guest is Michael Wang, founder of Prometheus Alternative Investments. Michael has done stints at Citigroup as well as hedge funds and understands the market… [+3209 chars]",
    },
    {
      source: {
        id: null,
        name: "Entrepreneur",
      },
      author: "Jea Yu",
      title: "Forget Bitcoin, Block’s Ecosystems are the Real Growth Drivers",
      description:
        "It’s been a tough year for payments platform fintech Block (NYSE: SQ) stock as it trades down (-58%) on the year. The old adage, “it’s better to have had and",
      url: "https://www.entrepreneur.com/article/434756",
      urlToImage:
        "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-434756.jpeg",
      publishedAt: "2022-09-06T06:00:00Z",
      content:
        "It's been a tough year for payments platform fintech Block (NYSE: SQ) stock as it trades down (-58%) on the year. The old adage, \"it's better to have had and lost, than to never had it at all\" is wha… [+7299 chars]",
    },
    {
      source: {
        id: null,
        name: "Ctvnews.ca",
      },
      author: null,
      title: "iPhone 14 event: What to expect - CTV News",
      description:
        "<ol><li>iPhone 14 event: What to expect  CTV News\r\n</li><li>Once-Rumored iPhone 14 Features We Aren't Expecting Anymore  MacRumors\r\n</li><li>Apple Far Out Event: How to Watch and What to Expect - IGN  IGN\r\n</li><li>iPhone 14 coming soon: Are you excited? | Te…",
      url: "https://www.ctvnews.ca/sci-tech/what-to-expect-at-apple-s-far-out-iphone-14-event-1.6056690",
      urlToImage:
        "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/9/6/iphone-1-6056709-1662470745474.jpg",
      publishedAt: "2022-09-06T13:26:00Z",
      content:
        'Apple is expected to debut its iPhone 14 lineup at the company\'s annual September keynote event on Wednesday.\r\nThe product event, which has been teased with a "far out" tagline, will take place at Ap… [+4302 chars]',
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Rubén Chicharro",
      title: "El Apple Watch Pro llegará con tres exclusivas novedades",
      description:
        "El Apple Watch Pro, que podría anunciarse mañana junto con el resto de modelos de relojes inteligentes de Apple, así como con los iPhone 14, apenas tiene secretos. Su aspecto y principales, características, llevan meses filtrándose en la red, y a escasas hora…",
      url: "https://hipertextual.com/2022/09/el-apple-watch-pro-llegara-con-tres-exclusivas-novedades",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2022/01/Apple-Watch-Unity-Lights-Esfera.jpg",
      publishedAt: "2022-09-06T13:44:38Z",
      content:
        "El Apple Watch Pro, que podría anunciarse mañana junto con el resto de modelos de relojes inteligentes de Apple, así como con los iPhone 14, apenas tiene secretos. Su aspecto y principales, caracterí… [+2265 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Associated Press",
      title:
        "Frances Tiafoe, son of tennis facility maintenance man, defeats No. 2 seed Rafael Nadal",
      description:
        "NEW YORK (AP) — Frances Tiafoe ended Rafael Nadal’s 22-match winning streak at Grand Slam tournaments by beating the 22-time major champion […] The post...",
      url: "https://news.yahoo.com/frances-tiafoe-son-tennis-facility-012056203.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/5jASzsT7EBYZtY_9iRlDrw--~B/aD0xMjEzO3c9MTAyNDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/thegrio_yahoo_articles_946/e8ad999980750e88ad7c823771c95f04",
      publishedAt: "2022-09-06T01:20:56Z",
      content:
        "Tiafoe served better than Nadal. He returned better, too. And he kept his cool, remained in the moment and never let the stakes or the opponent get to him.\r\nNEW YORK (AP) Frances Tiafoe ended Rafael … [+6724 chars]",
    },
    {
      source: {
        id: "polygon",
        name: "Polygon",
      },
      author: "Scout Tafoya",
      title:
        "Stephen King movies are practically impossible to get right and always will be",
      description:
        "Fairy Tale, the latest Stephen King horror novel, shows why King’s work so often fails onscreen. From Carrie to The Shining to Christine to It, here’s the definitive history of King adaptations, some thoughts on why so many fail, and why they may never be as …",
      url: "https://www.polygon.com/23329162/stephen-king-movies-shows-based-on-books-challenge",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/lt9-Mye2kEiHj_7tCPhbzBcEeS0=/0x228:2000x1275/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23987429/Pennywise_IT.jpeg",
      publishedAt: "2022-09-06T13:35:00Z",
      content:
        "In 1996, Halloween and Big Trouble in Little China director John Carpenter told SFX Magazine that hed only really made one film he didnt love: 1983s Christine. It was his only Stephen King adaptation… [+21978 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Pastor",
      title:
        "Apple pasaba de los anuncios. Ahora duplica su división de publicidad porque el pastel es demasiado jugoso",
      description:
        "La publicidad no era el modelo de negocio de Apple. No la necesitaba: ya tenía sus iPhone y sus servicios, ¿no? No. En Cupertino han hecho cambios en iOS que protegen la privacidad de los usuarios, pero que además (¿sorpresa?) impulsan el negocio publicitario…",
      url: "https://www.xataka.com/empresas-y-economia/apple-pasaba-anuncios-ahora-duplica-su-division-publicidad-porque-pastel-demasiado-jugoso",
      urlToImage: "https://i.blogs.es/a18243/publi-iphone/840_560.jpeg",
      publishedAt: "2022-09-06T11:00:58Z",
      content:
        "La publicidad no era el modelo de negocio de Apple. No la necesitaba: ya tenía sus iPhone y sus servicios, ¿no? No. En Cupertino han hecho cambios en iOS que protegen la privacidad de los usuarios, p… [+4026 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Ricardo Aguilar",
      title:
        "Por fin se filtran las especificaciones de los iPhone 14. Olvídate del USB-C",
      description:
        "A apenas un día del lanzamiento de los iPhone 14, se acaban de filtrar en detalle las especificaciones de estos cuatro modelos. La información proviene de Weibo y está en la línea con todos los rumores que se han ido filtrando durante los últimos meses. \n<!--…",
      url: "https://www.xataka.com/moviles/fin-se-filtran-especificaciones-iphone-14-olvidate-usb-c",
      urlToImage: "https://i.blogs.es/a31930/1366_2000/840_560.jpeg",
      publishedAt: "2022-09-06T09:12:35Z",
      content:
        "A apenas un día del lanzamiento de los iPhone 14, se acaban de filtrar en detalle las especificaciones de estos cuatro modelos. La información proviene de Weibo y está en la línea con todos los rumor… [+2240 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Ricardo Aguilar",
      title:
        "El plan de la UE para actualizar Android durante cinco años es un dardo envenenado. Y todos tienen parte de culpa",
      description:
        "La Unión Europea está planteando medidas para abordar los problemas ecológicos que plantean los dispositivos electrónicos. La vida útil de los mismos es uno de los puntos de enfoque, y el Plan de Acción para la Economía Circular de 2020 esconde un anexo en el…",
      url: "https://www.xataka.com/legislacion-y-derechos/plan-ue-para-actualizar-android-durante-cinco-anos-dardo-envenenado-todos-tienen-parte-culpa",
      urlToImage: "https://i.blogs.es/83a7f0/1366_2000/840_560.jpeg",
      publishedAt: "2022-09-06T08:32:41Z",
      content:
        "La Unión Europea está planteando medidas para abordar los problemas ecológicos que plantean los dispositivos electrónicos. La vida útil de los mismos es uno de los puntos de enfoque, y el Plan de Acc… [+5337 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Eva Rodríguez de Luis",
      title:
        "33 herramientas y gadgets que te ayudan a mejorar tu productividad para el nuevo curso",
      description:
        "Aunque el año comienza en enero, para muchas personas el verdadero cambio se produce en septiembre, con la vuelta de vacaciones: otro curso, nuevos proyectos en el horizonte e incluso cambios de vida. Si este septiembre te has propuesto empezar a tope y eleva…",
      url: "https://www.xataka.com/seleccion/33-herramientas-gadgets-que-te-ayudan-a-mejorar-tu-productividad-para-nuevo-curso",
      urlToImage:
        "https://i.blogs.es/450385/matt-ragland-8ovdzmgb_kw-unsplash/840_560.jpg",
      publishedAt: "2022-09-06T10:00:35Z",
      content:
        "Aunque el año comienza en enero, para muchas personas el verdadero cambio se produce en septiembre, con la vuelta de vacaciones: otro curso, nuevos proyectos en el horizonte e incluso cambios de vida… [+19632 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Trevor Mogg",
      title: "Apple Watch Pro will have an extra button, leak suggests",
      description:
        "Apple is expected to unveil a Pro version of the Apple Watch on Wednesday, and a new leak suggests the device will include an extra button that you can program.",
      url: "https://www.digitaltrends.com/mobile/apple-watch-pro-will-have-an-extra-button-leak-suggests/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/09/tim-cook-apple-watch-2021.jpg?p=1",
      publishedAt: "2022-09-06T01:20:16Z",
      content:
        "91mobiles\r\nWere just a short time away from Apples Far out event thatll see the company unveil its latest bunch of tech goodies.\r\nRumor has it that the collection of fresh gadgets will include an all… [+1954 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Keith Davis: He was protecting the oceans – then he disappeared",
      description:
        "The death of an American fishing observer hundreds of miles from shore has shone a light on a hidden world.",
      url: "https://www.bbc.com/news/world-us-canada-62603911",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/13957/production/_126551208_bbc_lostatsea_1080x19202-07.png",
      publishedAt: "2022-09-06T02:45:46Z",
      content:
        "Keith Davis disappeared at sea thousands of miles from home. His body has never been found. Now the mystery of his death has shone a light on a maritime world that is largely hidden from view, writes… [+7462 chars]",
    },
    {
      source: {
        id: null,
        name: "Gigazine.net",
      },
      author: "@GIGAZINE",
      title:
        "Appleが開発中とウワサされる「Apple Watch Pro」のレンダリング画像がリークされる",
      description:
        "Appleは日本時間の2022年9月8日2時に新製品発表イベントを開催予定で、新型iPhoneの他にApple Watchのハイエンド版である「Apple Watch Pro」の発表が予測されています。そんな中、新たに「Apple Watch Pro」の外観がよく分かる3Dレンダリング画像がリークされました。続きを読む...",
      url: "https://gigazine.net/news/20220906-apple-watch-pro-leaked/",
      urlToImage:
        "https://i.gzn.jp/img/2022/09/06/apple-watch-pro-leaked/00.jpg",
      publishedAt: "2022-09-06T01:15:00Z",
      content:
        "Apple2022982iPhoneApple WatchApple Watch ProApple Watch Pro3D\r\n[Exclusive] Apple Watch Pro design revealed through CAD rendershttps://www.91mobiles.com/hub/apple-watch-pro-cad-renders-design-exclusiv… [+998 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Programmable Apple Watch button is something I’d like to see on all models",
      description:
        "A day before the Apple event, the latest rumor is a programmable Apple Watch button, letting owners decide what it does.\nRight now, the suggestion relates specifically to the upcoming Apple Watch Pro, but it’s a feature I’d love Apple to add to all models … \n…",
      url: "https://9to5mac.com/2022/09/06/programmable-apple-watch-button/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Programmable-Apple-Watch-button.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-09-06T11:19:40Z",
      content:
        "A day before the Apple event, the latest rumor is a programmable Apple Watch button, letting owners decide what it does.\r\nRight now, the suggestion relates specifically to the upcoming Apple Watch Pr… [+4480 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley Chambers",
      title:
        "Apple @ Work Podcast: Best of breed accessories are critical when working at home",
      description:
        "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Businesses and Schools to easily and automatically deploy, manage &…",
      url: "https://9to5mac.com/2022/09/06/work-from-home-accessories/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/08/Apple-at-Work.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-09-06T10:00:00Z",
      content:
        "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Busines… [+1164 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "OLED iPad screen will reportedly use twin-layer tech, for brighter display and longer life",
      description:
        "We’ve already had one recent OLED iPad screen report speculating on the type of display Apple will use, and today we get another.\nThis one suggests that the OLED iPad will adopt an advanced new twin-layer design, and Apple display suppliers Samsung and LG are…",
      url: "https://9to5mac.com/2022/09/06/oled-ipad-screen/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/OLED-iPad-screen.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-09-06T12:17:40Z",
      content:
        "We’ve already had one recent OLED iPad screen report speculating on the type of display Apple will use, and today we get another.\r\nThis one suggests that the OLED iPad will adopt an advanced new twin… [+3300 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "José Adorno",
      title:
        "Ahead of iPhone 14 event, Brazil suspends iPhone sales without power brick and fines Apple",
      description:
        "Brazilian’s Justice Ministry has determined the suspension of iPhone sales without a power brick. In addition, the government has fined the Cupertino company a $2.3M bill. This was published in today’s Brazilian Federal Register.\n more…\nThe post Ahead of iPho…",
      url: "https://9to5mac.com/2022/09/06/brazil-suspends-iphone-sales-power-brick/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/04/iPhone-13-Brazil.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-09-06T12:54:36Z",
      content:
        "Brazilian’s Justice Ministry has determined the suspension of iPhone sales without a power brick. In addition, the government has fined the Cupertino company a $2.3M bill. This was published in today… [+1919 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "European Union San Francisco office opened, after elected officials visited Apple",
      description:
        "A new European Union San Francisco office has been opened, aiming to better liaise with US tech giants on new antitrust laws … It follows an earlier visit by Members of the European Parliament to a number of US tech giants, including Apple, Google, and Meta. …",
      url: "https://9to5mac.com/2022/09/06/european-union-san-francisco/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/European-Union-San-Francisco.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-09-06T13:00:18Z",
      content:
        "A new European Union San Francisco office has been opened, aiming to better liaise with US tech giants on new antitrust laws … \r\nIt follows an earlier visit by Members of the European Parliament to a… [+3834 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Toys",
      },
      author: "9to5Toys",
      title:
        "Anker launches new 30W Nano 3 USB-C GaN Charger alongside Bio-Based Lightning cables",
      description:
        "Today, Anker is expanding its charging lineup with a fresh batch of new releases to coincide with this week’s Apple keynote. Arriving as its , the new Nano 3 packs 30W of GaN charging into a compact build that comes joined by a new series of Anker Bio-Based L…",
      url: "https://9to5toys.com/2022/09/06/anker-nano-3-bio-based-cable/",
      urlToImage:
        "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2022/09/anker-nano-3-bio-based-cables.jpg?resize=1200%2C628&ssl=1",
      publishedAt: "2022-09-06T13:00:43Z",
      content:
        "Today, Anker is expanding its charging lineup with a fresh batch of new releases to coincide with this weeks Apple keynote. Arriving as its latest USB-C wall chargers, the new Nano 3 packs 30W of GaN… [+3891 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Bárbara Bécares",
      title:
        "Multa histórica en Europa a Meta: tras WhatsApp, es Instagram quien ha incumplido leyes de datos, en este caso de menores",
      description:
        "El regulador de la privacidad de datos de Irlanda (Irish Data Protection Commissioner) ha anunciado una multa récord de 405 millones de euros a la red social Instagram tras descubrir, en una investigación de más de dos años, la mala gestión de los datos de lo…",
      url: "https://www.genbeta.com/actualidad/multa-historica-europa-a-meta-whatsapp-instagram-quien-ha-incumplido-leyes-datos-este-caso-menores",
      urlToImage: "https://i.blogs.es/c418a4/1366_2000/840_560.jpg",
      publishedAt: "2022-09-06T08:28:10Z",
      content:
        "El regulador de la privacidad de datos de Irlanda (Irish Data Protection Commissioner) ha anunciado una multa récord de 405 millones de euros a la red social Instagram tras descubrir, en una investig… [+3510 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "Byron Hurd",
      title: "2023 Toyota GR Corolla starts around $37,000",
      description:
        "Filed under:\n Toyota,Hatchback,Performance\n Continue reading 2023 Toyota GR Corolla starts around $37,000\n2023 Toyota GR Corolla starts around $37,000 originally appeared on Autoblog on Tue, 6 Sep 2022 07:00:00 EDT. Please see our terms for use of feeds.\nPerm…",
      url: "https://www.autoblog.com/2022/09/06/2023-toyota-gr-corolla-pricing/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/09/02153103/MY23_GR-Corolla_Circuit-Edition_0221.jpg",
      publishedAt: "2022-09-06T11:00:00Z",
      content:
        "The high-performance 2023 Toyota GR Corolla will start at $36,996 (including $1,095 for destination), Toyota announced Tuesday morning. Pricing for the big sibling to the (not-for-America) GR Yaris w… [+2677 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "Zac Palmer",
      title: "2023 Audi Q3 Review: Brings the style, lacks the substance",
      description:
        "Filed under:\n Audi,Buying Guide,New Car Reviews,Crossover,SUV,Luxury\n Continue reading 2023 Audi Q3 Review: Brings the style, lacks the substance\n2023 Audi Q3 Review: Brings the style, lacks the substance originally appeared on Autoblog on Tue, 6 Sep 2022 10:…",
      url: "https://www.autoblog.com/article/2023-audi-q3-review/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/09/01122514/IMG_72493.jpg",
      publishedAt: "2022-09-06T14:00:00Z",
      content:
        "Pros: Very stylish; a nicely equipped value; solid tech all around\r\nCons: Some cheap-feeling interior materials; less cargo space than rivals; boring to drive; below-average fuel economy\r\nThe 2023 Au… [+10876 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "Bloomberg",
      title: "Porsche IPO triggered, could happen this month or next",
      description:
        "Filed under:\n Earnings/Financials,Green,Porsche,Volkswagen\n Continue reading Porsche IPO triggered, could happen this month or next\nPorsche IPO triggered, could happen this month or next originally appeared on Autoblog on Tue, 6 Sep 2022 08:51:00 EDT. Please …",
      url: "https://www.autoblog.com/2022/09/06/porsche-ipo-triggered/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/os/creatr-uploaded-images/2022-08/9096e3a0-2de2-11ed-afed-9b2154e29ac3",
      publishedAt: "2022-09-06T12:51:00Z",
      content:
        "Volkswagen AG is pushing ahead with its plan to list a minority stake in the Porsche sports-car maker despite gyrating markets, paving the way for what could be one of Europes biggest initial public … [+4817 chars]",
    },
    {
      source: {
        id: null,
        name: "Clarion Ledger",
      },
      author: "Stefan Krajisnik, Mississippi Clarion Ledger",
      title:
        "Why Mike Leach can't be married to Mississippi State losing game it shouldn't at Arizona",
      description:
        "Mississippi State football's Mike Leach has a knack for executing big upsets. He also drops many games he shouldn't. That can't happen at Arizona.",
      url: "https://www.clarionledger.com/story/sports/college/mississippi-state/2022/09/06/mississippi-state-football-mike-leach-arizona-wildcats-upsets-wedding-advice/65470366007/",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/B1r.WzM_S9blflkrxAQvKg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/the-clarion-ledger/02b29e79edb11248093d32499f62f5d8",
      publishedAt: "2022-09-06T02:00:46Z",
      content:
        "STARKVILLE Mike Leach, famous for his viral rants almost as much as his Air Raid offense, is consistent with his takes.\r\nCandy corn? Trash.\r\nCollege Football Playoff? Expand it to 64.\r\nKickers? Make … [+3479 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "New leak shows exactly how big the Apple Watch Pro is",
      description:
        "More leaked photographs of protective cases alongside ones intended for the Apple Watch Series 8 practically demonstrate the size of the Apple Watch Pro.Following the recent leaks both of photographs of third-party cases, and Apple renders of the expected App…",
      url: "https://appleinsider.com/articles/22/09/06/new-leak-shows-exactly-how-big-the-apple-watch-pro-is",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50236-98677-000-lead-Apple-Watch-cases-d2-xl.jpg",
      publishedAt: "2022-09-06T10:18:23Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1322 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Apple Fitness+ loses two prominent trainers",
      description:
        "Two of the trainers that Apple Fitness+ has previously spotlighted have announced that they leaving the service.Betina Gozo (left) and Dustin Brown (source: Instagram)Betina Gozo and Dustin Brown have separately revealed their departures, although both made t…",
      url: "https://appleinsider.com/articles/22/09/06/apple-fitness-loses-two-prominent-trainers",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50235-98678-000-lead-Apple-Fitness+-trainers-xl.jpg",
      publishedAt: "2022-09-06T10:33:33Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2041 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title: "Brazil stops iPhone sales until Apple includes an AC charger",
      description:
        "Brazil's Ministry of Justice has fined Apple $2.3 million and halted iPhone 13 sales until the company once again includes a charger in the box.Dummy 'iPhone 13' models show larger camerasApple stopped including a charger or EarPods in iPhone packages startin…",
      url: "https://appleinsider.com/articles/22/09/06/brazil-stops-iphone-sales-until-apple-includes-an-ac-charger",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/44028-85619-iPhone-13-Pros-xl.jpg",
      publishedAt: "2022-09-06T13:33:46Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1784 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Christine McKee)",
      title:
        "Deals: snag the iPad mini 6 for $399 ($100 off) before the Apple Event",
      description:
        "Amazon's latest $100 price drop delivers the cheapest iPad mini 6 price leading up to the Apple Event.Apple's iPad mini 6 is $100 off at Amazon leading up to the Apple Event.All four iPad mini colors are on sale for $399.99 at Amazon this Tuesday, reflecting …",
      url: "https://appleinsider.com/articles/22/09/06/deals-snag-the-ipad-mini-6-for-399-100-off-before-the-apple-event",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50243-98684-apple-ipad-mini-sale-xl.jpg",
      publishedAt: "2022-09-06T13:39:41Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+884 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Tough economy will hit Apple Watch more than iPhone 14, analyst says",
      description:
        'Investment bank JP Morgan has advised investors that the current economic situation means pricing is key, but more so for "discretionary purchases" like the Apple Watch, than for the iPhone 14.Apple Watch Series 7 in (PRODUCT)REDApple is expected to launch fo…',
      url: "https://appleinsider.com/articles/22/09/06/tough-economy-will-hit-apple-watch-more-than-iphone-14-analyst-says",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50135-98384-Apple-Watch-S7-product-red-xl.jpg",
      publishedAt: "2022-09-06T11:09:28Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+3113 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (AppleInsider Staff)",
      title:
        "Daily deals Sept 6: $115 Apple Magic Keyboard, $50 off Sony ZV-1 camera, $140 off Samsung M8, more!",
      description:
        "Tuesday's best deals include 30% off the Philips Hue White Ambiance Starter Kit, a $99 Apple Pencil 2, and much more.Best deals for September 6Every day, AppleInsider searches online retailers to find offers and discounts on items including Apple hardware, up…",
      url: "https://appleinsider.com/articles/22/09/06/daily-deals-sept-6-115-apple-magic-keyboard-50-off-sony-zv-1-camera-140-off-samsung-m8-more",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50233-98679-deals-sept-6-xl.jpg",
      publishedAt: "2022-09-06T11:26:40Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1922 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple's privacy features enabled its ad sales to rise as Meta's falls",
      description:
        "As Facebook saw its share of advertising revenues drop to 28% of the market after the launch of App Tracking Transparency in iOS 14, Apple's own ad share rose to 15%.Advertisers have already said Apple's ad sales team is benefiting from the company's privacy …",
      url: "https://appleinsider.com/articles/22/09/06/apples-privacy-features-enabled-its-ad-sales-to-rise-to-half-of-metas",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50241-98682-000-lead-App-Tracking-Transparency-xl.jpg",
      publishedAt: "2022-09-06T13:22:03Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2935 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Apple's A15 processor may be 'enhanced' for the iPhone 14",
      description:
        'As predictions continue that Apple will keep its new A16 processor exclusive to the iPhone 14 Pro models, a new rumor says the regular iPhone 14 will use an "enhanced" A15.It\'s long been reported that Apple is going to have different processors in its regular…',
      url: "https://appleinsider.com/articles/22/09/06/apples-a15-processor-may-be-enhanced-for-the-iphone-14",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50234-98676-000-lead-iPhone-14-xl.jpg",
      publishedAt: "2022-09-06T09:41:50Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1393 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title:
        "Sonnet's xMac Studio and RackMac Studio rackmounts the Mac Studio",
      description:
        "Accessory producer Sonnet has introduced the xMac Studio and RackMac Studio, two additions to its enclosure lineup designed to work with the Mac Studio.A natural progression from its RackMac mini and xMac mini Server, the RackMac Studio and xMac Studio are ra…",
      url: "https://appleinsider.com/articles/22/09/06/sonnets-xmac-studio-and-rackmac-studio-rackmounts-the-mac-studio",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50225-98661-sonet-xmac-studio-in-case-xl.jpg",
      publishedAt: "2022-09-06T12:00:11Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+3727 chars]",
    },
    {
      source: {
        id: null,
        name: "Abduzeedo.com",
      },
      author: "AoiroStudio",
      title: "Book Suggestions — The Innovator's Handbook by Hussain Almossawi",
      description:
        "Book Suggestions — The Innovator's Handbook by Hussain Almossawi\n \n\n\n AoiroStudio0906—22\n Our good friend Hussain Almossawi has launched his new book titled: 'The Innovator's Handbook'. A book that we can call a guide to unleash your creative mindset. To expl…",
      url: "https://abduzeedo.com/node/87457",
      urlToImage: null,
      publishedAt: "2022-09-06T11:00:00Z",
      content:
        "Our good friend Hussain Almossawi has launched his new book titled: 'The Innovator's Handbook'. A book that we can call a guide to unleash your creative mindset. To explain somehow what is the book i… [+2019 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Adrián Raya",
      title:
        "Huawei Mate 50 Pro, características y precio de la bestia fotográfica con conexión por satélite",
      description:
        "Huawei ha presentado en China sus nuevos móviles punteros, el Mate 50 y el Mate 50 Pro, con los que pretende demostrar que aún puede mantenerse en la gama alta si apuesta por sus puntos fuertes.",
      url: "https://www.elespanol.com/elandroidelibre/moviles-android/20220906/huawei-mate-pro-caracteristicas-fotografica-conexion-satelite/701179920_0.html",
      urlToImage:
        "https://s1.eestatic.com/2022/09/06/elandroidelibre/701190013_226906581_600x315.jpg",
      publishedAt: "2022-09-06T09:03:25Z",
      content:
        "Puede que Huawei haya perdido algo de fuelle en Occidente, por culpa del bloqueo que aún sufre que le impide realizar negocios con empresas estadounidenses, pero en China sigue siendo una de las refe… [+5531 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "小暮ひさのり",
      title:
        "もう忘れてくれ…。iPhone 14に期待しちゃダメな機能・アップデートまとめ",
      description:
        "あと2日後にはお披露目されていると思われる、iPhone 14シリーズ。さすがに発売日近くになると、巷で囁かれている噂も解像感が濃くなっています。でも、思い起こせばここに来るまで、そりゃあもう昨年のうちから有象無象の｢iPhone 14はこうなる！｣話がありましたよね。そう言えばアレってどうなったの？ をMacRumorsが掘っています。まぁ、ストレートに言えば｢もう期待すんな｣というiPhone 14像です。",
      url: "https://www.gizmodo.jp/2022/09/iphone-14-once-rumored-not-expected.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2022/09/06/2022-09-06aigak00-w960.jpg",
      publishedAt: "2022-09-06T08:00:00Z",
      content:
        "2iPhone 14\r\niPhone 14MacRumors\r\niPhone 14\r\nImage: fpt.\r\niPhone 13\r\nJon ProsseriPhone 14 ProiPhone 5\r\nImage: FRONT PAGE TECH / YouTube\r\niPhone 13 Pro\r\nPro\r\nApple\r\nFace IDTouch ID\r\nFace IDTouch IDiPhon… [+204 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "メディアジーンメディアコマース",
      title:
        "【Amazonタイムセール中！】iPadがセール特価で販売中！11月18日のポケモン新作が14%オフで予約受付中",
      description:
        "Amazon（アマゾン）で毎日開催されているタイムセール。本日2022年9月6日は、AppleのiPadがセール価格で販売中など、今すぐ欲しい人気のアイテムがお得に多数登場しています。",
      url: "https://www.gizmodo.jp/2022/09/amazon-timesale-2022-0906-1.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2022/09/06/GIZ-1-w960.jpg",
      publishedAt: "2022-09-06T09:45:00Z",
      content: "Copyright © mediagene Inc. All Rights Reserved.",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Tristan",
      title:
        "Apple Watch Pro : une grosse prise de risque de la part d’Apple ?",
      description:
        'Apple devrait multiplier les annonces lors du keynote de ce mercredi. Notamment autour de l\'Apple Watch qui aura le droit à un modèle "Pro". \nApple Watch Pro : une grosse prise de risque de la part d’Apple ?',
      url: "https://www.journaldugeek.com/2022/09/06/apple-watch-pro-une-grosse-prise-de-risque-de-la-part-dapple/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2021/08/apple-watch-series-7.jpg",
      publishedAt: "2022-09-06T10:30:15Z",
      content:
        'Apple devrait multiplier les annonces lors du keynote de ce mercredi. Notamment autour de l\'Apple Watch qui aura le droit à un modèle "Pro".Apple a donné rendez-vous à son public pour une grande soir… [+2320 chars]',
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Tristan",
      title:
        "iPhone 14 Pro : une charge plus rapide et un plus grand bloc photo",
      description:
        "Apple est sur le point de présenter quatre nouveaux iPhone ce mercredi. On fait le point sur les rumeurs à ce jour. \niPhone 14 Pro : une charge plus rapide et un plus grand bloc photo",
      url: "https://www.journaldugeek.com/2022/09/06/iphone-14-pro-une-charge-plus-rapide-et-un-plus-grand-bloc-photo/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/01/iphone-14-encoche.jpg",
      publishedAt: "2022-09-06T11:00:09Z",
      content:
        "Apple est sur le point de présenter quatre nouveaux iPhone ce mercredi. On fait le point sur les rumeurs à ce jour.Nous sommes à quelques heures de la présentation des nouveaux iPhone et les rumeurs … [+2194 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Un nuevo Apple Watch mucho más barato será el acompañante sorpresa del iPhone 14, según el NYT",
      description:
        "Mientras esperamos un aumento de precio, aunque quizá menor del que imaginamos, en los nuevos iPhone 14 y tener que hacer un desembolso interesante para hacernos con el nuevo Apple Watch Pro, tenemos también buenas noticias. Según el New York Times, veremos u…",
      url: "https://www.applesfera.com/rumores/nuevo-apple-watch-mucho-barato-sera-acompanante-sorpresa-iphone-14-nyt",
      urlToImage: "https://i.blogs.es/5201da/hero/840_560.jpeg",
      publishedAt: "2022-09-06T07:57:35Z",
      content:
        "Mientras esperamos un aumento de precio, aunque quizá menor del que imaginamos, en los nuevos iPhone 14 y tener que hacer un desembolso interesante para hacernos con el nuevo Apple Watch Pro, tenemos… [+1706 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Más rumores del Apple Watch Pro: 49mm de tamaño y novedades exclusivas en forma de correas y esferas, entre otros",
      description:
        "Hemos pasado de no saber nada de nada del nuevo Apple Watch Pro a tener un sinfín de rumores y detalles sobre el diseño, las prestaciones, el tamaño y varios otros puntos clave de este nuevo reloj. Tras la filtración de sus renders ayer hoy nos siguen llegand…",
      url: "https://www.applesfera.com/rumores/rumores-apple-watch-pro-49mm-tamano-novedades-exclusivas-forma-correas-esferas-otros",
      urlToImage: "https://i.blogs.es/ee02c8/hero/840_560.jpeg",
      publishedAt: "2022-09-06T07:14:39Z",
      content:
        "Hemos pasado de no saber nada de nada del nuevo Apple Watch Pro a tener un sinfín de rumores y detalles sobre el diseño, las prestaciones, el tamaño y varios otros puntos clave de este nuevo reloj. T… [+1679 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "Ponte al día con Apple TV+ y 'Después del huracán' en esta Smart TV 4K Xiaomi con Fire TV y AirPlay a precio mínimo histórico",
      description:
        "El catálogo de Apple TV+ no para de crecer. Puede que no tan rápido como el de otras plataformas, pero la mayoría de sus producciones puede presumir de gozar con unos buenos estándares de calidad e historias originales. Uno de los últimos estrenos en la plata…",
      url: "https://www.applesfera.com/seleccion/ponte-al-dia-apple-tv-despues-huracan-esta-smart-tv-4k-xiaomi-fire-tv-airplay-a-precio-minimo-historico",
      urlToImage:
        "https://i.blogs.es/7e5edd/fire-tv-smart-tv-oferta/840_560.jpg",
      publishedAt: "2022-09-06T06:00:09Z",
      content:
        "El catálogo de Apple TV+ no para de crecer. Puede que no tan rápido como el de otras plataformas, pero la mayoría de sus producciones puede presumir de gozar con unos buenos estándares de calidad e h… [+2309 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "Esta tira LED RGB HomeKit a precio mínimo histórico puede controlarse por Siri o iPhone y es muy personalizable",
      description:
        "No todos los accesorios domóticos son compatibles con HomeKit, aunque sí lo sean con Alexa y Google Assistant. Pero esta tira LED Wi-Fi de meross lo es y está de oferta a precio mínimo histórico en Amazon: 39,31 euros. Crea ambientes únicos y controla los col…",
      url: "https://www.applesfera.com/seleccion/esta-tira-led-rgb-homekit-a-precio-minimo-historico-puede-controlarse-siri-iphone-muy-personalizable",
      urlToImage: "https://i.blogs.es/9cfb77/tira-led-wifi-meross/840_560.jpg",
      publishedAt: "2022-09-06T09:41:50Z",
      content:
        "No todos los accesorios domóticos son compatibles con HomeKit, aunque sí lo sean con Alexa y Google Assistant. Pero esta tira LED Wi-Fi de meross lo es y está de oferta a precio mínimo histórico en A… [+1826 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "Ya tenemos las (supuestas) especificaciones filtradas de los iPhone 14 y iPhone 14 Pro: mejoras en todas partes pero precios que asustan",
      description:
        "Estamos a poco más de un día para conocer oficialmente todos los detalles de los iPhone 14, pero parece que las especificaciones técnicas de toda la gama se han filtrado a través de una fotografía espía compartida en la red social Weibo. La información detall…",
      url: "https://www.applesfera.com/iphone/tenemos-especificaciones-filtradas-iphone-14-iphone-14-pro-mejoras-todas-partes-precios-que-asustan",
      urlToImage: "https://i.blogs.es/59c56a/1366_2000-2/840_560.jpeg",
      publishedAt: "2022-09-06T11:55:39Z",
      content:
        "Estamos a poco más de un día para conocer oficialmente todos los detalles de los iPhone 14, pero parece que las especificaciones técnicas de toda la gama se han filtrado a través de una fotografía es… [+2497 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "los iPhone 14 seguirán usando el chip A15, pero con algunos matices según el WSJ",
      description:
        "Los rumores dictan que los iPhone 14 conservarán el chip A15 que ya tenemos en los iPhone 13, algo que se ha convertido en uno de los puntos más ásperos de todas las mejoras que se han ido filtrando sobre los móviles. Sin embargo, puede pasar que ese chip A15…",
      url: "https://www.applesfera.com/iphone/iphone-14-seguiran-usando-chip-a15-algunos-matices-wsj",
      urlToImage: "https://i.blogs.es/cc6124/1366_2000-1/840_560.jpeg",
      publishedAt: "2022-09-06T09:00:35Z",
      content:
        "Los rumores dictan que los iPhone 14conservarán el chip A15 que ya tenemos en los iPhone 13, algo que se ha convertido en uno de los puntos más ásperos de todas las mejoras que se han ido filtrando s… [+1353 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Brad R. Edwards",
      title: "10 Essential Apple Music Tips All Users Should Know",
      description:
        "Take your experience to the next level with these Apple Music tips.",
      url: "https://www.makeuseof.com/tag/essential-apple-music-tips-you-really-need-know/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/09/apple-music-earphones.jpg",
      publishedAt: "2022-09-06T12:46:13Z",
      content:
        "Whether you are just getting started with Apple Music or have been a loyal listener since day one, there is a lot of stuff that isn't apparent at first glance.\r\nWith so many subscription services ava… [+7938 chars]",
    },
    {
      source: {
        id: null,
        name: "Theregister.com",
      },
      author: "Lindsay Clark",
      title: "IBM wins contract to support NHS App",
      description:
        "Smartphone software set to link more services to patients despite privacy fears\nNHS Digital has awarded IBM a £52.4 million ($60.2 million) contract for supporting and developing the NHS App, which the UK government plans to make the standard way for health s…",
      url: "https://www.theregister.com/2022/09/06/ibm_nhs_app_contract/",
      urlToImage: "https://regmedia.co.uk/2021/02/08/shutterstock_nhs.jpg",
      publishedAt: "2022-09-06T09:27:14Z",
      content:
        "NHS Digital has awarded IBM a £52.4 million ($60.2 million) contract for supporting and developing the NHS App, which the UK government plans to make the standard way for health services to communica… [+1958 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "RPB",
      title:
        "Le design des Apple Watch Pro a fuité, découvrez-le avant l’heure !",
      description:
        "Le site 91Mobiles diffuse un rendu attribué à la nouvelle smartwatch Apple Watch Pro que Apple doit dévoiler en marge de sa keynote du 7 septembre 2022.",
      url: "https://www.presse-citron.net/le-design-des-apple-watch-pro-a-fuite-decouvrez-le-avant-lheure/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/09/apple-watch-pro.jpg",
      publishedAt: "2022-09-06T12:15:51Z",
      content:
        "Apple tient sa traditionnelle keynote de rentrée ce mercredi 7 septembre 2022, et les fuites sont à ce stade plutôt nombreuses – surtout autour des produits phares de la soirée, les iPhone 14, dont o… [+2082 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title:
        "Apple préparerait trois produits AR/VR, dont « Reality Pro » pour 2023",
      description:
        "Le premier casque qu’Apple lancera en 2023 serait le « Reality Pro ». Mais deux autres produits seraient déjà dans les tuyaux.",
      url: "https://www.presse-citron.net/?p=513857",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2019/03/apple-store-logo.jpg",
      publishedAt: "2022-09-06T06:30:38Z",
      content:
        "En début dannée, des sources avaient suggéré quApple pourrait présenter son premier casque AR/VR en début dannée. Mais aujourdhui, les chances quApple dévoile ce produit lors de son keynote du 7 sept… [+2741 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Jean-Yves Alric",
      title:
        "L’UE s’installe en plein cœur de la Silicon Valley pour mieux défendre ses intérêts",
      description:
        "Ce nouvel espace assure une présence de l’Europe dans le berceau de la Tech américaine.",
      url: "https://www.presse-citron.net/lue-sinstalle-en-plein-coeur-de-la-silicon-valley-pour-mieux-defendre-ses-interets/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2020/06/Union-europeenne.jpg",
      publishedAt: "2022-09-06T11:30:48Z",
      content:
        "En avril dernier, nous apprenions lintention de lUnion européenne douvrir un bureau à San Francisco. Lobjectif était alors clairement affiché : disposer dun espace pour échanger plus directement avec… [+2294 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Timi Cantisano",
      title:
        "Apple could announce a new low-end Apple Watch during September 7 event",
      description:
        "Ahead of Apple’s September “Far Out” event, a new report has emerged that states that the company will introduce a new lost-cost Apple Watch. While we have seen numerous reports about a new high-end Apple Watch, this is the first time this information is comi…",
      url: "https://www.xda-developers.com/new-low-end-apple-watch-for-september-7-event/",
      urlToImage: "https://www.xda-developers.com/files/2022/09/XDA-6.jpg",
      publishedAt: "2022-09-06T01:29:49Z",
      content:
        "Ahead of Apple’s September “Far Out” event, a new report has emerged that states that the company will introduce a new lost-cost Apple Watch. While we have seen numerous reports about a new high-end … [+1947 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Pranob Mehrotra",
      title:
        "Anker’s latest charger and cable significantly reduce petroleum-based plastic usage",
      description:
        "With the iPhone 14 launch right around the corner, Anker has announced a new fast charger and charging cable for the upcoming devices. The new charger and cable are part of Anker’s new eco-friendly accessory lineup and include innovations that significantly r…",
      url: "https://www.xda-developers.com/anker-nano-3-bio-based-charging-cable/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/09/Anker-Nano-3-2.jpg",
      publishedAt: "2022-09-06T13:00:38Z",
      content:
        "With the iPhone 14 launch right around the corner, Anker has announced a new fast charger and charging cable for the upcoming devices. The new charger and cable are part of Anker’s new eco-friendly a… [+2283 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Jesús Quesada",
      title:
        "Con esta Smart TV 4K Dolby Vision a 289 euros disfrutarás de 'Los Anillos de Poder' y 'La casa del dragón' en gran calidad",
      description:
        "Las últimas semanas del verano han llegado fuertes con dos series muy potentes, 'La casa del dragón' y 'El Señor de los Anillos: los Anillos de Poder', de HBO Max y Prime Video, respectivamente. Es posible disfrutarlas en buena calidad de imagen con este econ…",
      url: "https://www.xatakandroid.com/guias-de-compra/esta-smart-tv-4k-dolby-vision-a-289-euros-disfrutaras-anillos-poder-casa-dragon-gran-calidad",
      urlToImage:
        "https://i.blogs.es/c4a19d/smart-tv-toshiba-oferta/840_560.jpg",
      publishedAt: "2022-09-06T11:00:59Z",
      content:
        "Las últimas semanas del verano han llegado fuertes con dos series muy potentes, 'La casa del dragón' y 'El Señor de los Anillos: los Anillos de Poder', de HBO Max y Prime Video, respectivamente. Es p… [+1665 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Iván Linares",
      title: "Cómo borrar tu cuenta de BeReal para siempre",
      description:
        "Fresca, suficientemente nueva y con una mecánica muy diferente de las redes sociales habituales: las imposiciones de publicación en BeReal permiten compartir contenido dejando a las obsesiones de lado. Hacerse una cuenta no implica mucho trabajo, sí dejar el …",
      url: "https://www.xatakandroid.com/tutoriales/como-borrar-tu-cuenta-bereal-para-siempre",
      urlToImage:
        "https://i.blogs.es/75d114/borrar-cuenta-bereal-1/840_560.jpg",
      publishedAt: "2022-09-06T08:00:39Z",
      content:
        "Fresca, suficientemente nueva y con una mecánica muy diferente de las redes sociales habituales: las imposiciones de publicación en BeReal permiten compartir contenido dejando a las obsesiones de lad… [+3249 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Iván Ramírez",
      title:
        "Xiaomi Redmi Prime 11, Prime 11 5G y Redmi A1: de este trío de móviles baratos destaca el sucesor del Xiaomi Mi A1 con Android puro",
      description:
        "Hay quienes, como Apple, tardan un año en anunciar un nuevo terminal, y luego tenemos a Xiaomi, que de un plumazo ha anunciado tres nuevos Redmi: el Xiaomi Redmi 11 Prime, Xiaomi Redmi 11 Prime 5G y el Xiaomi Redmi A1.\n<!-- BREAK 1 -->\nLos Xiaomi Redmi 11 Pri…",
      url: "https://www.xatakandroid.com/moviles-android/xiaomi-redmi-11-prime-redmi-11-prime-5g-redmi-a1-caracteristicas-precio-ficha-tecnica",
      urlToImage: "https://i.blogs.es/ee0cbb/redmia1/840_560.jpg",
      publishedAt: "2022-09-06T11:00:58Z",
      content:
        "Hay quienes, como Apple, tardan un año en anunciar un nuevo terminal, y luego tenemos a Xiaomi, que de un plumazo ha anunciado tres nuevos Redmi: el Xiaomi Redmi 11 Prime, Xiaomi Redmi 11 Prime 5G y … [+5563 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title: "CAD Renders Reveal the Design of the Apple Watch Pro",
      description:
        "New Apple Watch Pro rumors have just surfaced on 91mobiles ahead of September 7's Apple event. New details on the smartwatch arrive in the form of a CAD render that shows a 49mm case and larger display. From the renders, a new form factor is seen with a new e…",
      url: "https://hypebeast.com/2022/9/apple-watch-pro-rumor-cad-render-reveal",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2FTW-apple-watch-pro-rumor-cad-render-reveal-00.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-09-06T08:23:11Z",
      content:
        "New AppleWatch Pro rumors have just surfaced on 91mobiles ahead of September 7’s Apple event. New details on the smartwatch arrive in the form of a CAD render that shows a 49mm case and larger displa… [+749 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Maren Estrada",
      title:
        "Today’s deals: $0.99 Echo Dot, Beckham Hotel pillows, $98 Sony headphones, stain removers, more",
      description:
        "Labor Day 2022 was on Monday, so the holiday is officially over. Of course, there are thousands of Labor Day sales that are still going strong. In this article, the shopping experts at BGR Deals will round up all the best deals you can find on Tuesday, Septem…",
      url: "https://bgr.com/deals/todays-deals-0-99-echo-dot-beckham-hotel-pillows-98-sony-headphones-stain-removers-more/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/05/bgr-deals-of-the-day-2022-tuesday-new.jpg?quality=82&strip=all",
      publishedAt: "2022-09-06T13:21:44Z",
      content:
        "If you purchase an independently reviewed product or service through a link on our website, we may receive an affiliate commission. Learn more.\r\nLabor Day 2022 was on Monday, so the holiday is offici… [+5151 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "gerald.lynch@futurenet.com (Gerald Lynch)",
      title:
        "iPhone 14 event live: All the Apple launch event info as it happens",
      description:
        "From iPhone 14 to Apple Watch Series 8, get all the Apple launch event news live and as it happens here.",
      url: "https://www.imore.com/news/live/iphone-14-event-live",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/YPdJ7kU8aiWXn2VaA7n3gS-1200-80.jpg",
      publishedAt: "2022-09-06T12:34:54Z",
      content:
        "It’s the final countdown: after months of speculation, Apple is expected to unleash its iPhone 14 handset into the wild during its “Far Out” showcase event. \r\nKicking off on Wednesday, 7 September at… [+1063 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "stephen.warwick@futurenet.com (Stephen Warwick)",
      title:
        "Apple Watch Pro leak reveals enormous size difference ahead of iPhone 14 event",
      description:
        "New leaks appear to show the massive 49mm casing of the new Apple Watch Pro Apple is expected to announce tomorrow.",
      url: "https://www.imore.com/health-fitness/apple-watch/apple-watch-pro-leak-reveals-enormous-size-difference-ahead-of-iphone-14-event",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/iFpqdrbkfvk2VndjBHzCu6-1200-80.jpg",
      publishedAt: "2022-09-06T09:54:31Z",
      content:
        "Just hours ahead of Apple's Far Out iPhone 14 event, new images of protective casings appear to reveal the massive size increase we can expect in Apple's rumored new Apple Watch Pro, slated for launc… [+1602 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "Tammy Rogers",
      title:
        "$100 off an Apple Watch SE for its lowest price ever, the day before the iPhone launch",
      description:
        "The iPhone launch event is tomorrow, and with it may come new Apple Watches - so it might just be the perfect time to get a reduced Apple Watch SE.",
      url: "https://www.imore.com/health-fitness/apple-watch/dollar100-off-an-apple-watch-se-for-its-lowest-price-ever-the-day-before-the-iphone-launch",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/weoSihUuyXdAs8dyCXgWTF-1200-80.jpg",
      publishedAt: "2022-09-06T13:16:46Z",
      content:
        "This Apple Watch SE deal is pretty hefty, bringing it down to its lowest ever price just a day before new Apple Watches might be announced. The entire line of Apple Watch SEs has been reduced by up t… [+1540 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "stephen.warwick@futurenet.com (Stephen Warwick)",
      title: "Apple gains on Facebook, Google following advertising changes",
      description:
        "A new report says Apple has made up ground on Google and Facebook following controversial changes to privacy on its platforms.",
      url: "https://www.imore.com/apple/apple-gains-on-facebook-google-following-advertising-changes",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/ZS92XDePJEMt8t4FRNs4kZ-1200-80.jpg",
      publishedAt: "2022-09-06T11:46:36Z",
      content:
        "A new report says that Apple and its controversial privacy changes on iOS may have helped to break open Google and Facebook's duopoly on advertising. \r\nA new report from Appsumer shared by CNBC (open… [+1785 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Sami Fathi",
      title: "What Not to Expect at Tomorrow's 'Far Out' iPhone 14 Event",
      description:
        "Apple's largest event of the year takes place tomorrow, where we're expecting to see the iPhone 14, the iPhone 14 Pro, new Apple Watches, and new AirPods Pro. \n\n\n\n\n\nWhile this is Apple's most anticipated and jam-packed event of the year, there are several pro…",
      url: "https://www.macrumors.com/2022/09/06/what-not-to-expect-tomorrow-event/",
      urlToImage:
        "https://images.macrumors.com/t/xvMZIB3SmS7MHXncOTm4792NNog=/2048x/article-new/2022/08/Apple-Event-Far-Out-Banner.jpeg",
      publishedAt: "2022-09-06T13:22:47Z",
      content:
        "Apple's largest event of the year takes place tomorrow, where we're expecting to see the iPhone 14, the iPhone 14 Pro, new Apple Watches, and new AirPods Pro. \r\nWhile this is Apple's most anticipated… [+1801 chars]",
    },
    {
      source: {
        id: null,
        name: "Les Numériques",
      },
      author: "Kevin Hiot",
      title:
        "Actualité : Mate 50 et Mate 50 Pro : Huawei prouve qu'il sait encore faire des smartphones haut de gamme attractifs",
      description:
        "En Chine, Huawei tenait ce 6 août une très longue conférence de rentrée. Au menu, la présentation de ses nouveaux produits et services, dont ses derniers fleurons mobiles : les Mate 50 et Mate 50 Pro. Des modèles qui jouissent de gros atouts en matière de pho…",
      url: "https://www.lesnumeriques.com/telephone-portable/mate-50-et-mate-50-pro-huawei-prouve-qu-il-sait-encore-faire-des-smartphones-haut-de-gamme-attractifs-n191137.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/news/19/191137/cecba113-huawei-mate-50-et-mate-50-pro__1200_630__0-0-1280-672.jpeg",
      publishedAt: "2022-09-06T13:52:00Z",
      content:
        "En Chine, Huawei tenait ce 6 août une très longue conférence de rentrée. Au menu, la présentation de ses nouveaux produits et services, dont ses derniers fleurons mobiles : les Mate 50 et Mate 50 Pro… [+5667 chars]",
    },
    {
      source: {
        id: null,
        name: "Les Numériques",
      },
      author: "David Lefevre",
      title:
        "Test SUV Citroën C5 Aicross 225 Hybride rechargeable : parfait pour choyer sa famille",
      description:
        "Le Citroën C5 Aircross s'offre un restylage bienvenu pour 2022. Si la carrosserie se muscle, l'intérieur profite aussi d'une nouvelle tablette tactile de 10 pouces et de nouveaux sièges. Après 2000 km à son bord, nous vous donnons notre avis sur le troisième …",
      url: "https://www.lesnumeriques.com/voiture/citroen-c5-aicross-2022-p67053/test.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/test/19/190771/8f75fb98-citroen-c5-aicross-225-hybride-rechargeable-ideal-pour-choyer-sa-famille__1200_630__0-336-1920-1344.jpeg",
      publishedAt: "2022-09-06T09:00:00Z",
      content:
        "Le Citroën C5 Aircross s'offre un restylage bienvenu pour 2022. Si la carrosserie se muscle, l'intérieur profite aussi d'une nouvelle tablette tactile de 10 pouces et de nouveaux sièges. Après 2000 k… [+12657 chars]",
    },
    {
      source: {
        id: null,
        name: "Les Numériques",
      },
      author:
        "Maxime Oudoux, Guillaume du Mesgnil d’Engente, Jean-Baptiste Martin, David Malattia",
      title:
        "Dossier : Télescope connecté Vaonis Vespera : notre avis complet sur la petite station d'observation automatisée",
      description:
        "Surfant toujours sur la vague de l’astronomie, la jeune entreprise française Vaonis revient avec une nouvelle station d'observation connectée tout-en-un, le Vespera. Plus compact et un peu moins onéreux, il se positionne comme une porte d'entrée à l'observati…",
      url: "https://www.lesnumeriques.com/photo/telescope-connecte-vaonis-vespera-notre-avis-complet-sur-la-petite-station-d-observation-automatisee-a190927.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/article/19/190927/5d02389a-telescope-connecte-vaonis-vespera-notre-avis-complet-sur-la-petite-station-automatique-d-observation__1200_630__0-49-2667-1449.jpeg",
      publishedAt: "2022-09-06T05:00:00Z",
      content:
        "Surfant toujours sur la vague de lastronomie, la jeune entreprise française Vaonis revient avec une nouvelle station d'observation connectée tout-en-un, le Vespera. Plus compact et un peu moins onére… [+22539 chars]",
    },
    {
      source: {
        id: null,
        name: "Xatakamovil.com",
      },
      author: "Álvaro García M.",
      title:
        "iOS 16 se prepara para su lanzamiento inminente: estas son las novedades más importantes que llegarán a tu iPhone",
      description:
        "Mañana, miércoles día 7, se celebrará un nuevo evento de Apple en el que previsiblemente conoceremos los nuevos iPhone 14. Es casi un secreto a voces que no serán los únicos dispositivos en presentarse, aunque lo llamativo viene de saber que puede que no solo…",
      url: "https://www.xatakamovil.com/apple/ios-16-se-prepara-para-su-lanzamiento-inminente-estas-novedades-importantes-que-llegaran-a-tu-iphone",
      urlToImage: "https://i.blogs.es/5d2518/ios-16-en-iphone/840_560.jpg",
      publishedAt: "2022-09-06T12:30:18Z",
      content:
        "Mañana, miércoles día 7, se celebrará un nuevo evento de Apple en el que previsiblemente conoceremos los nuevos iPhone 14. Es casi un secreto a voces que no serán los únicos dispositivos en presentar… [+5887 chars]",
    },
    {
      source: {
        id: null,
        name: "Xatakamovil.com",
      },
      author: "Álvaro García M.",
      title:
        "Aún estás a tiempo de pagar menos por Amazon Prime: solo queda una semana para que suba de precio",
      description:
        "Solo queda una semana para que Amazon Prime suba de precio. Y no, no es algo que sepamos ahora, dado que ya se confirmó a finales de julio. Esto afectará a todo el paquete 'Prime' en el que se incluyen no solo las ventajas en envíos, sino también las platafor…",
      url: "https://www.xatakamovil.com/mercado/estas-a-tiempo-pagar-amazon-prime-solo-queda-semana-suba-precio",
      urlToImage: "https://i.blogs.es/2daeb6/ahorro-amazon-prime/840_560.jpg",
      publishedAt: "2022-09-06T08:00:43Z",
      content:
        "Solo queda una semana para que Amazon Prime suba de precio. Y no, no es algo que sepamos ahora, dado que ya se confirmó a finales de julio. Esto afectará a todo el paquete 'Prime' en el que se incluy… [+2271 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Olli",
      title:
        "Apple Watch: Preiswerteres Modell als Apple Watch SE angeblich in Planung",
      description:
        "In dem „Far Out“-Event, das morgen stattfinden wird, werden wir auch die neue Apple Watch Series 8 zu Gesicht bekommen. Diese soll wohl auch als Pro-Modell erscheinen und sich speziell an die Sportbegeisterten richten. Die New York Times bringt nun...Zum Beit…",
      url: "https://stadt-bremerhaven.de/apple-watch-preiswerteres-modell-als-apple-watch-se-angeblich-in-planung/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Apple-Watch.jpg",
      publishedAt: "2022-09-06T06:30:10Z",
      content:
        "In dem „Far Out“-Event, das morgen stattfinden wird, werden wir auch die neue Apple Watch Series 8 zu Gesicht bekommen. Diese soll wohl auch als Pro-Modell erscheinen und sich speziell an die Sportbe… [+1272 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Olli",
      title:
        "Apple Watch: Pro-Modell wohl mit neuen Bändern und Zifferblättern",
      description:
        "Das „Far Out“-Event von Apple steht vor der Tür und uns erwarten die üblichen Produktneuerungen des Konzerns aus Cupertino. Neben den neuen iPhones und wahrscheinlich auch einem neuen AirPods-Pro-Modell wird es auch eine neue Apple Watch geben, die angeblich …",
      url: "https://stadt-bremerhaven.de/apple-watch-pro-modell-wohl-mit-neuen-baendern-und-zifferblaettern/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Apple-Watch.jpg",
      publishedAt: "2022-09-06T08:00:27Z",
      content:
        "Das „Far Out“-Event von Apple steht vor der Tür und uns erwarten die üblichen Produktneuerungen des Konzerns aus Cupertino. Neben den neuen iPhones und wahrscheinlich auch einem neuen AirPods-Pro-Mod… [+1953 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "André Westphal",
      title:
        "Shottr 1.6.0: Neue Version des Screenshot-Tools mit zahlreichen Verbesserungen",
      description:
        "Das Screenshot-Tool Shottr für macOS steht in der neuen Version 1.6.0 zur Verfügung. Ihr könnt es bei Interesse auf der offziellen Website kostenlos beziehen. Version 1.6.0 bringt neue Funktionen mit. Dazu zählt die Möglichkeit, Screenshots als schwebende Fen…",
      url: "https://stadt-bremerhaven.de/shottr-1-6-0-neue-version-des-screenshot-tools-mit-zahlreichen-verbesserungen/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/09/shottr.jpeg",
      publishedAt: "2022-09-06T09:00:25Z",
      content:
        "Das Screenshot-Tool Shottr für macOS steht in der neuen Version 1.6.0 zur Verfügung. Ihr könnt es bei Interesse auf der offziellen Website kostenlos beziehen. Version 1.6.0 bringt neue Funktionen mit… [+1826 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Felix Frank",
      title:
        "Anker: Ladekabel aus Mais und Zuckerrüben sowie neues 30-Watt-GaN-Netzteil",
      description:
        "Morgen startet die große Apple-Keynote. Anker möchte da die Gunst der Stunde nutzen, um neue Ladekabel und ein neues Netzteil vorzustellen. Ob das nun die inoffizielle Bestätigung für den Lightning-Anschluss und etwas schnelleres Laden beim iPhone 14 ist? Wir…",
      url: "https://stadt-bremerhaven.de/anker-ladekabel-aus-mais-und-zuckerrueben-sowie-neues-30-watt-gan-netzteil/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/09/Anker-Bio-Kabel.jpg",
      publishedAt: "2022-09-06T09:30:15Z",
      content:
        "Morgen startet die große Apple-Keynote. Anker möchte da die Gunst der Stunde nutzen, um neue Ladekabel und ein neues Netzteil vorzustellen. Ob das nun die inoffizielle Bestätigung für den Lightning-A… [+2049 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Grégoire Huvelin",
      title:
        "Une Apple Watch surprise pourrait être présentée lors de la keynote",
      description:
        "Selon les informations du New York Times, Apple pourrait présenter une Apple Watch encore plus abordable que la version SE, attendue lors de la keynote du 7 septembre 2022. Elle viendrait alors en quelque sorte remplacer la Series 3, qui a disparu du catalogu…",
      url: "https://www.frandroid.com/marques/apple/1458790_une-apple-watch-surprise-pourrait-etre-presentee-lors-de-la-keynote",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2021/10/apple-watch-series-7-cc-scaled.jpg",
      publishedAt: "2022-09-06T09:00:12Z",
      content:
        "Selon les informations du New York Times, Apple pourrait présenter une Apple Watch encore plus abordable que la version SE, attendue lors de la keynote du 7 septembre 2022. Elle viendrait alors en qu… [+2087 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Cassim Ketfi",
      title:
        "Apple Watch Series 8 Pro : du sport extreme, des bracelets et des nouveaux rendus",
      description:
        "Les rumeurs autour de l'Apple Watch Series 8 Pro se multiplient. On en sait plus sur ses caractéristiques et ses bracelets.L’événement Apple de septembre approche et les dernières rumeurs ne s’intéressent plus à l’iPhone 14 dont on sait tout ou presque. À la …",
      url: "https://www.frandroid.com/marques/apple/1458614_apple-watch-series-8-pro-du-sport-extreme-des-bracelets-et-des-nouveaux-rendus",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/09/apple-watch-pro.jpeg",
      publishedAt: "2022-09-06T05:56:55Z",
      content:
        "Les rumeurs autour de l'Apple Watch Series 8 Pro se multiplient. On en sait plus sur ses caractéristiques et ses bracelets.\r\nL’Apple Watch Pro imaginé par un créatif\r\nL’événement Apple de septembre a… [+2084 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Nathan Le Gohlisse",
      title:
        "Apple : vers une formule d’abonnement pour payer l’iPhone comme vous payez Netflix",
      description:
        "Apple prévoirait d'introduire une nouvelle offre de souscription mensuelle pour l'iPhone. Il s'agirait alors de payer chaque mois pour utiliser un iPhone de son choix, avec une potentielle option de renouvellement chaque année pour passer sur un nouveau modèl…",
      url: "https://www.frandroid.com/marques/apple/1458776_apple-vers-une-formule-dabonnement-pour-payer-liphone-comme-vous-payez-netflix",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/02/apple-iphone-14-rendu-3d-brian-tong.jpg",
      publishedAt: "2022-09-06T12:09:02Z",
      content:
        "Apple prévoirait d'introduire une nouvelle offre de souscription mensuelle pour l'iPhone. Il s'agirait alors de payer chaque mois pour utiliser un iPhone de son choix, avec une potentielle option de … [+2430 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Ulrich Rozier",
      title:
        "Mate 50 et Mate 50 Pro officialisés : ils embarquent une connexion satellite, Huawei prend de vitesse Apple",
      description:
        "Comme chaque année, Huawei a dévoilé ses Mate 50 et 50 Pro. Il y a quelques surprises. Les voici, les voilà, les nouveaux Huawei Mate 50 et Mate 50 Pro. La situation n’a pas changé pour le groupe chinois qui souffre toujours de l’embargo américain. Malgré les…",
      url: "https://www.frandroid.com/marques/huawei/1459034_mate-50-et-mate-50-pro-officialises-ils-embarquent-une-connexion-satellite-huawei-prend-de-vitesse-apple",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/09/mate-50-pro.jpeg",
      publishedAt: "2022-09-06T11:42:09Z",
      content:
        "Comme chaque année, Huawei a dévoilé ses Mate 50 et 50 Pro. Il y a quelques surprises.\r\nLes voici, les voilà, les nouveaux Huawei Mate 50 et Mate 50 Pro. La situation na pas changé pour le groupe chi… [+3493 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Cassim Ketfi",
      title:
        "Windows 11 Moment 1 et 2 : on en sait plus sur les prochaines mises à jour du système",
      description:
        "Après la sortie imminente de Windows 11 22H2, Microsoft prépare deux nouvelles mises à jour pour son système d'exploitation.Au calendrier de Microsoft, le prochain événement de taille est le déploiement de Windows 11 22H2, la première mise à jour majeure pour…",
      url: "https://www.frandroid.com/marques/microsoft/1458628_windows-11-moment-1-et-2-on-en-sait-plus-sur-les-prochaines-mises-a-jour-du-systeme",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/05/hp-envy-x360-133-image-12-windows-11.jpg",
      publishedAt: "2022-09-06T06:30:10Z",
      content:
        "Après la sortie imminente de Windows 11 22H2, Microsoft prépare deux nouvelles mises à jour pour son système d'exploitation.\r\nSource : HP\r\nAu calendrier de Microsoft, le prochain événement de taille … [+2091 chars]",
    },
    {
      source: {
        id: null,
        name: "500px.com",
      },
      author: "Feature Shoot",
      title: "Take your back-to-school photography and kick it up a notch",
      description:
        "Here are five themes and topics to consider incorporating into your back-to-school sessions to help build a strong and dynamic Licensing portfolio. \nThe post Take your back-to-school photography and kick it up a notch appeared first on 500px.",
      url: "https://iso.500px.com/take-your-back-to-school-photography-and-kick-it-up-a-notch/",
      urlToImage:
        "https://iso.500px.com/wp-content/uploads/2022/09/Natural-Science-By-Rolf-Goran-Astrom-1500x1000.jpeg",
      publishedAt: "2022-09-06T11:30:02Z",
      content:
        "Earlier this summer, GapKids captured the imagination of parents and kids alike with their Everybody Belongs back-to-school campaign. Inspired by the childrens book of the same name, written by the a… [+8321 chars]",
    },
    {
      source: {
        id: null,
        name: "Lifehacker.ru",
      },
      author: "Лиля Леднёва",
      title:
        "Начался приём заявок на международный фестиваль рекламы Red Apple",
      description:
        "Фестиваль Red Apple остаётся международным и возвращает категорию Young Creators. А ещё есть подкатегория Concept, где можно заявить о себе на этапе идеи.",
      url: "https://lifehacker.ru/zayavki-na-red-apple/",
      urlToImage:
        "https://cdn.lifehacker.ru/wp-content/uploads/2022/09/1-010_1662386830-1280x640.jpg",
      publishedAt: "2022-09-06T12:00:05Z",
      content:
        ". 14 : , , , , , , , , , , , , , .\r\n Red Apple: Creative1, Marketing2, Media3. .\r\nRed Apple Young Creators4 Creative. , 27 . Young Creators Creative, . .\r\n Young Creators , , .\r\n Creative Concept5. .… [+241 chars]",
    },
    {
      source: {
        id: null,
        name: "Lifehacker.ru",
      },
      author: "Дарья Громова",
      title:
        "Возвращение чёлки: Huawei представила флагманы Mate 50 и Mate 50 Pro со спутниковой связью",
      description:
        "Плюс топовый Mate 50 RS с перископом-микроскопом и конским ценником.",
      url: "https://lifehacker.ru/huawei-mate-50-anons/",
      urlToImage:
        "https://cdn.lifehacker.ru/wp-content/uploads/2022/09/anons_huawei_mate_50_i_mate_50_pro___picture19_1_1662458659-1280x640.jpg",
      publishedAt: "2022-09-06T10:10:05Z",
      content:
        "Huawei Mate 50, : Mate 50, Mate 50 Pro Mate 50 RS. HarmonyOS 3. Mate 40 (, ), . , .\r\nHuawei Mate 50\r\n 6,7- OLED- 2700 × 1224 , 90 HDR. - 13 . .\r\n: Huawei\r\nQualcomm Snapdragon 8+ Gen 1, 8 . , 5G-: LTE… [+697 chars]",
    },
    {
      source: {
        id: "lenta",
        name: "Lenta",
      },
      author: "Андрей Ставицкий",
      title: "Ворующий деньги троян атаковал сотни тысяч пользователей",
      description:
        "Специалисты Fox-IT нашли в популярных приложениях Google Play опасный банковский троян. По словам аналитиков, программа SharkBot оказалась замаскирована в нескольких востребованных приложениях для Android. Вирус обнаружили в программах Mister Phone Cleaner и …",
      url: "https://lenta.ru/news/2022/09/06/sharkbot/",
      urlToImage:
        "https://icdn.lenta.ru/images/2022/09/05/19/20220905190459286/share_b97a944d8a847dc9874a6f2930f1d0dc.jpg",
      publishedAt: "2022-09-06T07:32:19Z",
      content:
        "Fox-IT Google Play . The Hacker News.\r\n , SharkBot Android. , Mister Phone Cleaner Kylhavy Mobile Security, 600 . , .\r\n Fox-IT , 22 2022 , cookie . , .\r\n« Apple Google, », . , .\r\n Sophos , cookie. , … [+5 chars]",
    },
  ];
  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      article: this.articles,
    };
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>Top Headlines</h1>
          <div className="row">
            <div className="col-md-4 my-3">
              <NewsItem title="Hello" description="casdc" imgUrl="https://s.yimg.com/os/creatr-uploaded-images/2022-08/826785b0-296d-11ed-aeb1-d30d9e5ff594"/>
            </div>
            <div className="col-md-4">
              <NewsItem title="Hello" description="casdc" />
            </div>
            <div className="col-md-4">
              <NewsItem title="Hello" description="casdc" />
            </div>
            <div className="col-md-4 my-3">
              <NewsItem title="Hello" description="casdc" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
