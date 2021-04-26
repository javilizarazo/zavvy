const data = {
  cards: [{
    id: 1,
    name: 'Amazon',
    network: 'Visa',
    last4: '9988',
    active: true
  }, {
    id: 2,
    name: 'BBVA',
    network: 'Mastercard',
    last4: '1122',
    active: false
  }, {
    id: 3,
    name: 'Starbucks Rewards',
    network: 'Mastercard',
    last4: '8402',
    active: true
  }, {
    id: 4,
    name: 'Chase',
    network: 'Visa',
    last4: '6122',
    active: true
  }, {
    id: 5,
    name: 'Starwood Starpoints Rewards Membership',
    network: 'Visa',
    last4: '7500',
    active: true
  }, {
    id: 6,
    name: 'Shell Fuel',
    network: 'Discovery',
    last4: '0008',
    active: false
  }],
  cardDetails: [{
    "card_id": 1,
    "number": "201776820879988",
    "cvv": "385",
    "expiration_month": "6",
    "expiration_year": "2025",
    "address_city": "Springfield",
    "address_state": "MA",
    "address_line1": "2 Westerfield Court",
    "address_postal_code": "01129"
  }, {
    "card_id": 2,
    "number": "3589336713391122",
    "cvv": "898",
    "expiration_month": "3",
    "expiration_year": "2026",
    "address_city": "Pomona",
    "address_state": "CA",
    "address_line1": "3 Union Parkway",
    "address_postal_code": "91797"
  }, {
    "card_id": 3,
    "number": "201460253708402",
    "cvv": "849",
    "expiration_month": "12",
    "expiration_year": "2023",
    "address_city": "Charlotte",
    "address_state": "NC",
    "address_line1": "170 Hintze Court",
    "address_postal_code": "28278"
  }, {
    "card_id": 4,
    "number": "201479774646122",
    "cvv": "683",
    "expiration_month": "4",
    "expiration_year": "2022",
    "address_city": "Brooklyn",
    "address_state": "NY",
    "address_line1": "0 Becker Junction",
    "address_postal_code": "11210"
  }, {
    "card_id": 5,
    "number": "5602220847287500",
    "cvv": "347",
    "expiration_month": "10",
    "expiration_year": "2026",
    "address_city": "Las Vegas",
    "address_state": "NV",
    "address_line1": "09843 Eastlawn Crossing",
    "address_postal_code": "89166"
  }, {
    "card_id": 6,
    "number": "30463566610008",
    "cvv": "594",
    "expiration_month": "7",
    "expiration_year": "2026",
    "address_city": "Washington",
    "address_state": "DC",
    "address_line1": "069 Stuart Plaza",
    "address_postal_code": "20022"
  }],
  transactions: [{
  "label": "Yozio",
  "amount": "$582.48",
  "id": 1,
  "card_id": 1,
  "purchase_date": "2021-02-24T08:25:24Z",
  "city": "Atlanta",
  "state": "GA",
  "status": "PAID"
}, {
  "label": "Browsebug",
  "amount": "$2983.67",
  "id": 2,
  "card_id": 1,
  "purchase_date": "2021-11-28T02:53:21Z",
  "city": "Aurora",
  "state": "CO",
  "status": "PAID"
}, {
  "label": "Twitterwire",
  "amount": "$1471.40",
  "id": 3,
  "card_id": 1,
  "purchase_date": "2021-05-12T12:46:41Z",
  "city": "Camden",
  "state": "NJ",
  "status": "PENDING"
}, {
  "label": "Skyble",
  "amount": "$1832.73",
  "id": 4,
  "card_id": 1,
  "purchase_date": "2021-03-01T03:58:21Z",
  "city": "Lexington",
  "state": "KY",
  "status": "PAID"
},{
  "label": "Zooveo",
  "amount": "$2948.64",
  "id": 11,
  "card_id": 2,
  "purchase_date": "2021-11-09T13:05:43Z",
  "city": "Laredo",
  "state": "TX",
  "status": "PAID"
}, {
  "label": "Zoomcast",
  "amount": "$4940.23",
  "id": 12,
  "card_id": 2,
  "purchase_date": "2021-05-15T12:38:09Z",
  "city": "Dallas",
  "state": "TX",
  "status": "PAID"
}, {
  "label": "Kwideo",
  "amount": "$3879.60",
  "id": 13,
  "card_id": 2,
  "purchase_date": "2021-12-12T17:03:47Z",
  "city": "Houston",
  "state": "TX",
  "status": "PENDING"
}, {
  "label": "Quinu",
  "amount": "$2761.75",
  "id": 14,
  "card_id": 2,
  "purchase_date": "2021-05-30T11:14:52Z",
  "city": "New York City",
  "state": "NY",
  "status": "PAID"
}, {
  "label": "Eire",
  "amount": "$2164.98",
  "id": 15,
  "card_id": 2,
  "purchase_date": "2021-06-22T07:32:15Z",
  "city": "Monticello",
  "state": "MN",
  "status": "FAILED"
}, {
  "label": "Leexo",
  "amount": "$3192.78",
  "id": 16,
  "card_id": 2,
  "purchase_date": "2021-06-02T10:45:53Z",
  "city": "Huntington",
  "state": "WV",
  "status": "PAID"
}, {
  "label": "Trilia",
  "amount": "$2820.73",
  "id": 17,
  "card_id": 2,
  "purchase_date": "2021-07-14T02:12:24Z",
  "city": "Detroit",
  "state": "MI",
  "status": "PAID"
}, {
  "label": "Kwimbee",
  "amount": "$4567.40",
  "id": 18,
  "card_id": 2,
  "purchase_date": "2021-04-24T04:16:41Z",
  "city": "Saint Paul",
  "state": "MN",
  "status": "PENDING"
}, {
  "label": "Thoughtbridge",
  "amount": "$2465.25",
  "id": 19,
  "card_id": 2,
  "purchase_date": "2021-07-17T23:16:49Z",
  "city": "Richmond",
  "state": "CA",
  "status": "PAID"
}, {
  "label": "Quinu",
  "amount": "$4133.45",
  "id": 20,
  "card_id": 2,
  "purchase_date": "2021-06-29T18:38:12Z",
  "city": "New York City",
  "state": "NY",
  "status": "FAILED"
}, {
  "label": "Muxo",
  "amount": "$616.40",
  "id": 21,
  "card_id": 2,
  "purchase_date": "2021-03-02T06:53:13Z",
  "city": "Laurel",
  "state": "MD",
  "status": "PAID"
}, {
  "label": "Thoughtstorm",
  "amount": "$4661.27",
  "id": 22,
  "card_id": 2,
  "purchase_date": "2021-12-17T08:37:18Z",
  "city": "Orlando",
  "state": "FL",
  "status": "PAID"
},{
  "label": "Babbleblab",
  "amount": "$828.00",
  "id": 31,
  "card_id": 3,
  "purchase_date": "2021-08-25T00:28:02Z",
  "city": "Beaverton",
  "state": "OR",
  "status": "PAID"
}, {
  "label": "Camimbo",
  "amount": "$3865.61",
  "id": 32,
  "card_id": 3,
  "purchase_date": "2021-09-24T10:51:06Z",
  "city": "Pasadena",
  "state": "CA",
  "status": "PAID"
}, {
  "label": "Zazio",
  "amount": "$576.92",
  "id": 33,
  "card_id": 3,
  "purchase_date": "2021-02-13T01:02:13Z",
  "city": "South Bend",
  "state": "IN",
  "status": "PENDING"
}, {
  "label": "Twiyo",
  "amount": "$27.02",
  "id": 34,
  "card_id": 3,
  "purchase_date": "2021-11-06T19:08:33Z",
  "city": "Los Angeles",
  "state": "CA",
  "status": "PAID"
}, {
  "label": "Kayveo",
  "amount": "$3364.94",
  "id": 35,
  "card_id": 3,
  "purchase_date": "2021-06-24T15:51:29Z",
  "city": "Fort Pierce",
  "state": "FL",
  "status": "FAILED"
}, {
  "label": "Jaxworks",
  "amount": "$3118.19",
  "id": 36,
  "card_id": 3,
  "purchase_date": "2021-06-14T15:35:17Z",
  "city": "San Diego",
  "state": "CA",
  "status": "PAID"
}, {
  "label": "Demizz",
  "amount": "$160.15",
  "id": 37,
  "card_id": 3,
  "purchase_date": "2021-06-09T15:05:51Z",
  "city": "Houston",
  "state": "TX",
  "status": "PAID"
}, {
  "label": "Shuffledrive",
  "amount": "$580.91",
  "id": 38,
  "card_id": 3,
  "purchase_date": "2021-02-18T04:32:48Z",
  "city": "Philadelphia",
  "state": "PA",
  "status": "PENDING"
},{
  "label": "Youfeed",
  "amount": "$3301.34",
  "id": 41,
  "card_id": 4,
  "purchase_date": "2021-12-09T13:03:54Z",
  "city": "Independence",
  "state": "MO",
  "status": "PAID"
}, {
  "label": "Leexo",
  "amount": "$1685.97",
  "id": 42,
  "card_id": 4,
  "purchase_date": "2021-09-17T03:22:56Z",
  "city": "Lincoln",
  "state": "NE",
  "status": "PAID"
}, {
  "label": "Vinder",
  "amount": "$4518.90",
  "id": 43,
  "card_id": 4,
  "purchase_date": "2021-11-05T00:44:12Z",
  "city": "Grand Forks",
  "state": "ND",
  "status": "PENDING"
},{
  "label": "Zoomzone",
  "amount": "$2094.70",
  "id": 101,
  "card_id": 5,
  "purchase_date": "2021-08-13T06:34:56Z",
  "city": "Washington",
  "state": "DC",
  "status": "PAID"
}, {
  "label": "Thoughtmix",
  "amount": "$4045.85",
  "id": 102,
  "card_id": 5,
  "purchase_date": "2021-11-04T09:20:33Z",
  "city": "Houston",
  "state": "TX",
  "status": "PAID"
}, {
  "label": "Topicshots",
  "amount": "$2975.26",
  "id": 103,
  "card_id": 5,
  "purchase_date": "2021-10-15T11:03:40Z",
  "city": "Austin",
  "state": "TX",
  "status": "PENDING"
}, {
  "label": "Eayo",
  "amount": "$4430.39",
  "id": 104,
  "card_id": 5,
  "purchase_date": "2021-05-18T20:03:10Z",
  "city": "Pompano Beach",
  "state": "FL",
  "status": "PAID"
}, {
  "label": "Rhyzio",
  "amount": "$4026.21",
  "id": 105,
  "card_id": 5,
  "purchase_date": "2021-06-15T07:42:31Z",
  "city": "Alexandria",
  "state": "VA",
  "status": "FAILED"
}, {
  "label": "Gevee",
  "amount": "$2542.73",
  "id": 106,
  "card_id": 5,
  "purchase_date": "2021-09-23T19:46:59Z",
  "city": "Roanoke",
  "state": "VA",
  "status": "PAID"
}, {
  "label": "Youtags",
  "amount": "$3234.17",
  "id": 107,
  "card_id": 5,
  "purchase_date": "2021-08-02T15:27:38Z",
  "city": "Clearwater",
  "state": "FL",
  "status": "PAID"
}, {
  "label": "Blogtags",
  "amount": "$4725.31",
  "id": 108,
  "card_id": 5,
  "purchase_date": "2021-12-04T14:47:04Z",
  "city": "Kansas City",
  "state": "MO",
  "status": "PENDING"
}, {
  "label": "Realcube",
  "amount": "$2238.65",
  "id": 109,
  "card_id": 5,
  "purchase_date": "2021-11-24T15:31:18Z",
  "city": "Durham",
  "state": "NC",
  "status": "PAID"
}, {
  "label": "Jabbertype",
  "amount": "$4004.62",
  "id": 110,
  "card_id": 5,
  "purchase_date": "2021-11-03T21:04:19Z",
  "city": "Wichita",
  "state": "KS",
  "status": "FAILED"
}, {
  "label": "Kayveo",
  "amount": "$3242.62",
  "id": 111,
  "card_id": 5,
  "purchase_date": "2021-09-20T18:24:32Z",
  "city": "El Paso",
  "state": "TX",
  "status": "PAID"
}, {
  "label": "Dynava",
  "amount": "$4452.46",
  "id": 112,
  "card_id": 5,
  "purchase_date": "2021-07-14T03:37:08Z",
  "city": "Springfield",
  "state": "VA",
  "status": "PAID"
}, {
  "label": "Realbridge",
  "amount": "$374.15",
  "id": 113,
  "card_id": 5,
  "purchase_date": "2021-05-25T10:06:38Z",
  "city": "Atlanta",
  "state": "GA",
  "status": "PENDING"
}, {
  "label": "Pixope",
  "amount": "$212.94",
  "id": 114,
  "card_id": 5,
  "purchase_date": "2021-02-20T18:07:35Z",
  "city": "Philadelphia",
  "state": "PA",
  "status": "PAID"
}, {
  "label": "Voonte",
  "amount": "$4733.06",
  "id": 115,
  "card_id": 5,
  "purchase_date": "2021-06-27T01:06:32Z",
  "city": "Saint Augustine",
  "state": "FL",
  "status": "FAILED"
}, {
  "label": "Blognation",
  "amount": "$4524.99",
  "id": 116,
  "card_id": 5,
  "purchase_date": "2021-02-16T09:15:18Z",
  "city": "Cleveland",
  "state": "OH",
  "status": "PAID"
}, {
  "label": "Twiyo",
  "amount": "$3914.43",
  "id": 117,
  "card_id": 5,
  "purchase_date": "2021-10-10T06:49:12Z",
  "city": "Philadelphia",
  "state": "PA",
  "status": "PAID"
}, {
  "label": "Wikivu",
  "amount": "$1814.40",
  "id": 118,
  "card_id": 5,
  "purchase_date": "2021-06-09T09:14:41Z",
  "city": "Jamaica",
  "state": "NY",
  "status": "PENDING"
}, {
  "label": "Quimm",
  "amount": "$2290.78",
  "id": 119,
  "card_id": 5,
  "purchase_date": "2021-04-27T02:45:35Z",
  "city": "Jacksonville",
  "state": "FL",
  "status": "PAID"
}, {
  "label": "Brainlounge",
  "amount": "$3714.52",
  "id": 120,
  "card_id": 5,
  "purchase_date": "2021-12-07T21:48:07Z",
  "city": "Birmingham",
  "state": "AL",
  "status": "FAILED"
}, {
  "label": "Skiptube",
  "amount": "$259.90",
  "id": 121,
  "card_id": 5,
  "purchase_date": "2021-08-01T19:11:25Z",
  "city": "Wichita",
  "state": "KS",
  "status": "PAID"
}, {
  "label": "Reallinks",
  "amount": "$167.96",
  "id": 122,
  "card_id": 5,
  "purchase_date": "2021-05-14T18:40:08Z",
  "city": "Pittsburgh",
  "state": "PA",
  "status": "PAID"
}, {
  "label": "Skivee",
  "amount": "$4362.44",
  "id": 123,
  "card_id": 5,
  "purchase_date": "2021-12-12T17:52:13Z",
  "city": "Joliet",
  "state": "IL",
  "status": "PENDING"
}, {
  "label": "Tagopia",
  "amount": "$114.17",
  "id": 124,
  "card_id": 5,
  "purchase_date": "2021-05-05T05:14:01Z",
  "city": "Brooklyn",
  "state": "NY",
  "status": "PAID"
}, {
  "label": "Tagopia",
  "amount": "$2018.08",
  "id": 125,
  "card_id": 5,
  "purchase_date": "2021-10-01T09:38:16Z",
  "city": "New Orleans",
  "state": "LA",
  "status": "FAILED"
}, {
  "label": "Livetube",
  "amount": "$3213.34",
  "id": 126,
  "card_id": 5,
  "purchase_date": "2021-08-28T17:22:12Z",
  "city": "Fresno",
  "state": "CA",
  "status": "PAID"
}, {
  "label": "Oyoba",
  "amount": "$4685.39",
  "id": 127,
  "card_id": 5,
  "purchase_date": "2021-07-11T06:29:56Z",
  "city": "Cumming",
  "state": "GA",
  "status": "PAID"
}, {
  "label": "Eazzy",
  "amount": "$2003.09",
  "id": 128,
  "card_id": 5,
  "purchase_date": "2021-10-27T12:49:17Z",
  "city": "New York City",
  "state": "NY",
  "status": "PENDING"
}, {
  "label": "Thoughtsphere",
  "amount": "$3961.56",
  "id": 129,
  "card_id": 5,
  "purchase_date": "2021-06-03T23:54:11Z",
  "city": "Richmond",
  "state": "VA",
  "status": "PAID"
}, {
  "label": "Meemm",
  "amount": "$1805.97",
  "id": 130,
  "card_id": 5,
  "purchase_date": "2021-12-17T15:41:30Z",
  "city": "Erie",
  "state": "PA",
  "status": "FAILED"
}, {
  "label": "Twiyo",
  "amount": "$3098.21",
  "id": 131,
  "card_id": 5,
  "purchase_date": "2021-04-14T02:25:42Z",
  "city": "Roanoke",
  "state": "VA",
  "status": "PAID"
}, {
  "label": "Zooveo",
  "amount": "$3339.05",
  "id": 132,
  "card_id": 5,
  "purchase_date": "2021-05-29T03:05:12Z",
  "city": "Alexandria",
  "state": "LA",
  "status": "PAID"
}, {
  "label": "Nlounge",
  "amount": "$2739.56",
  "id": 133,
  "card_id": 5,
  "purchase_date": "2021-12-29T19:19:11Z",
  "city": "Atlanta",
  "state": "GA",
  "status": "PENDING"
}, {
  "label": "Flipbug",
  "amount": "$2179.68",
  "id": 134,
  "card_id": 5,
  "purchase_date": "2021-04-24T05:24:11Z",
  "city": "Indianapolis",
  "state": "IN",
  "status": "PAID"
}, {
  "label": "Feednation",
  "amount": "$939.21",
  "id": 135,
  "card_id": 5,
  "purchase_date": "2021-06-30T02:01:06Z",
  "city": "Oakland",
  "state": "CA",
  "status": "FAILED"
}]
}

export default data