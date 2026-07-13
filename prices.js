/* ============================================================
   PRICE DATA for the Central Java Fair Price Guide
   GENERATED from Google Sheets — do not edit by hand.
   Last generated: 2026-07-13 00:52 UTC
   ============================================================ */
const SECTIONS = [
  {
    "id": "food",
    "kicker": "Eat & drink",
    "title": "Food & drinks",
    "note": "Street food and warungs are where Central Java shines. Prices are per portion unless noted.",
    "items": [
      {
        "name": "Fried rice / fried noodles",
        "local": "nasi goreng · mie goreng",
        "unit": "street stall",
        "min": 12000,
        "max": 30000,
        "tourist": 40000,
        "tip": "The national comfort food. If it's over Rp 25k at a street cart, walk 50 metres and pay half."
      },
      {
        "name": "Chicken soup with rice",
        "local": "soto ayam",
        "unit": "bowl",
        "min": 10000,
        "max": 18000,
        "tourist": 35000,
        "tip": "Breakfast of champions. Every town has a legendary soto spot — ask your host."
      },
      {
        "name": "Mixed rice plate at a warung",
        "local": "nasi campur / nasi rames",
        "unit": "plate",
        "min": 15000,
        "max": 30000,
        "tourist": 50000,
        "tip": "Point at what you want. Price depends on how much meat you pick."
      },
      {
        "name": "Fried tempeh in batter",
        "local": "mendoan — Purwokerto's specialty",
        "unit": "per piece",
        "min": 2000,
        "max": 5000,
        "tourist": 10000,
        "tip": "Banyumas region's pride. Eat it hot with green chili. Dangerously addictive."
      },
      {
        "name": "Grilled chicken with rice",
        "local": "ayam bakar / ayam goreng",
        "unit": "plate",
        "min": 20000,
        "max": 35000,
        "tourist": 60000,
        "tip": "Warung version. Restaurant versions with sambal bar run Rp 40–70k and are worth it."
      },
      {
        "name": "Iced sweet tea",
        "local": "es teh manis",
        "unit": "glass",
        "min": 3000,
        "max": 6000,
        "tourist": 15000,
        "tip": "The default drink with every meal. Ask 'tawar' for unsweetened."
      },
      {
        "name": "Traditional black coffee",
        "local": "kopi tubruk",
        "unit": "cup",
        "min": 5000,
        "max": 10000,
        "tourist": 25000,
        "tip": "Grounds settle at the bottom — don't drink the last sip."
      },
      {
        "name": "Café latte at a specialty café",
        "local": "",
        "unit": "cup",
        "min": 25000,
        "max": 40000,
        "tourist": null,
        "tip": "Yogyakarta and Purwokerto both have serious third-wave coffee scenes. Fixed prices."
      },
      {
        "name": "Bottled water 600ml",
        "local": "air mineral",
        "unit": "bottle",
        "min": 3000,
        "max": 5000,
        "tourist": 10000,
        "tip": "Rp 10k+ only inside attractions. Refill stations are spreading — bring a bottle."
      },
      {
        "name": "Large local beer",
        "local": "Bintang 620ml",
        "unit": "bottle",
        "min": 45000,
        "max": 70000,
        "tourist": 90000,
        "tip": "Alcohol is taxed and not sold everywhere — this is one thing that's NOT cheap in Indonesia."
      },
      {
        "name": "Chicken satay, 10 skewers",
        "local": "sate ayam",
        "unit": "portion with lontong",
        "min": 15000,
        "max": 30000,
        "tourist": 50000,
        "tip": "Evening street-cart classic. The peanut sauce is the whole point."
      },
      {
        "name": "Yogyakarta jackfruit stew",
        "local": "gudeg",
        "unit": "plate",
        "min": 15000,
        "max": 30000,
        "tourist": 60000,
        "tip": "Sweet, slow-cooked, very Yogya. The legendary places charge more and are worth it once."
      },
      {
        "name": "Meatball soup",
        "local": "bakso",
        "unit": "bowl",
        "min": 10000,
        "max": 20000,
        "tourist": 35000,
        "tip": "Indonesia's favourite comfort food. A busy cart means fresh and safe."
      },
      {
        "name": "Iced coconut-pandan dessert",
        "local": "es dawet / cendol",
        "unit": "glass",
        "min": 5000,
        "max": 8000,
        "tourist": 15000,
        "tip": "Banyumas claims the original (dawet ayu). Perfect at noon."
      }
    ]
  },
  {
    "id": "transport",
    "kicker": "Get around",
    "title": "Transport",
    "note": "Trains between cities, Gojek/Grab apps within them. Install both apps before you arrive.",
    "items": [
      {
        "name": "Train Yogyakarta ↔ Purwokerto, economy",
        "local": "kereta ekonomi",
        "unit": "one way, ~3h",
        "min": 70000,
        "max": 120000,
        "tourist": null,
        "tip": "Fixed prices, book in the KAI Access app or 12Go. Clean, air-conditioned, scenic."
      },
      {
        "name": "Train Yogyakarta ↔ Purwokerto, executive",
        "local": "kereta eksekutif",
        "unit": "one way, ~3h",
        "min": 150000,
        "max": 260000,
        "tourist": null,
        "tip": "Reclining seats, freezing AC — bring a jumper. Worth it for longer legs."
      },
      {
        "name": "Airport train YIA → Yogyakarta city",
        "local": "KA Bandara",
        "unit": "one way, 40 min",
        "min": 20000,
        "max": 20000,
        "tourist": null,
        "tip": "Rp 20k flat. Ignore taxi touts quoting Rp 300k+ for the same trip."
      },
      {
        "name": "Motorbike taxi via app, ~5 km",
        "local": "Gojek / Grab bike",
        "unit": "ride",
        "min": 12000,
        "max": 20000,
        "tourist": null,
        "tip": "The price is locked in the app — this is your anti-ripoff weapon. Helmets provided."
      },
      {
        "name": "Car via app, ~5 km",
        "local": "GoCar / GrabCar",
        "unit": "ride",
        "min": 25000,
        "max": 40000,
        "tourist": null,
        "tip": "Order the car slightly away from mall/station doors to dodge the pickup surcharge."
      },
      {
        "name": "Street motorbike taxi, short hop",
        "local": "ojek pangkalan",
        "unit": "ride",
        "min": 15000,
        "max": 25000,
        "tourist": 50000,
        "tip": "No meter — agree the price first or use the app instead."
      },
      {
        "name": "Cycle rickshaw, ~2 km",
        "local": "becak",
        "unit": "ride",
        "min": 20000,
        "max": 40000,
        "tourist": 100000,
        "tip": "Charming and slow. Agree the price before boarding, and confirm it's per ride, not per person."
      },
      {
        "name": "Scooter rental",
        "local": "sewa motor",
        "unit": "per day",
        "min": 75000,
        "max": 120000,
        "tourist": 150000,
        "tip": "You need an International Driving Permit — police checks near tourist sights are common."
      },
      {
        "name": "Private car + driver + fuel",
        "local": "sewa mobil dengan sopir",
        "unit": "per day (10–12h)",
        "min": 600000,
        "max": 900000,
        "tourist": 1300000,
        "tip": "Best value for Dieng or temple-hopping as a group of 3–4. Book via your guesthouse."
      },
      {
        "name": "City bus (Trans Jateng / Trans Jogja)",
        "local": "",
        "unit": "any distance",
        "min": 4000,
        "max": 8000,
        "tourist": null,
        "tip": "Absurdly cheap, air-conditioned, and reaches Borobudur from Yogyakarta."
      },
      {
        "name": "Commuter train Yogyakarta ↔ Solo",
        "local": "KRL Jogja–Solo",
        "unit": "one way, ~1h",
        "min": 8000,
        "max": 8000,
        "tourist": null,
        "tip": "Rp 8k flat with a tap card. The single best transport bargain in Java."
      },
      {
        "name": "Intercity bus Purwokerto ↔ Yogyakarta",
        "local": "bus AKAP",
        "unit": "one way, ~4–5h",
        "min": 60000,
        "max": 100000,
        "tourist": null,
        "tip": "Buy at the terminal counter or via a local app. The train is nicer if the times fit."
      },
      {
        "name": "Parking, motorbike / car",
        "local": "parkir",
        "unit": "per stop",
        "min": 2000,
        "max": 10000,
        "tourist": 20000,
        "tip": "Rp 2–3k for a motorbike, Rp 5–10k for a car. 'Tourist parking' at Rp 20k+ near big sights is inflated — park 200m away."
      }
    ]
  },
  {
    "id": "sleep",
    "kicker": "Sleep",
    "title": "Accommodation",
    "note": "Per night. Book the first night ahead; after that you can often do better in person or on local apps.",
    "items": [
      {
        "name": "Hostel dorm bed",
        "local": "",
        "unit": "per night",
        "min": 100000,
        "max": 180000,
        "tourist": null,
        "tip": "Yogyakarta has Java's best hostel scene — sociable, clean, with tour desks."
      },
      {
        "name": "Budget guesthouse, private room",
        "local": "guest house / losmen",
        "unit": "per night, double",
        "min": 200000,
        "max": 350000,
        "tourist": null,
        "tip": "Private bathroom, AC, sometimes breakfast. The flashpacker sweet spot."
      },
      {
        "name": "Mid-range hotel",
        "local": "",
        "unit": "per night, double",
        "min": 400000,
        "max": 700000,
        "tourist": null,
        "tip": "Pool, breakfast buffet, real mattress. Rates on local apps (Traveloka, Tiket) often beat Booking.com."
      },
      {
        "name": "Homestay in Dieng",
        "local": "",
        "unit": "per night, double",
        "min": 150000,
        "max": 300000,
        "tourist": null,
        "tip": "Simple family homes on a 2,000m volcanic plateau. Nights are COLD (5–10°C) — pack a fleece."
      }
    ]
  },
  {
    "id": "sights",
    "kicker": "See & do",
    "title": "Attractions & activities",
    "note": "Foreigner tickets at the big temples are the one genuinely expensive thing here. Everything else is pocket change.",
    "items": [
      {
        "name": "Borobudur temple, foreign adult",
        "local": "grounds ticket",
        "unit": "per person",
        "min": 400000,
        "max": 500000,
        "tourist": null,
        "tip": "Structure-climbing & sunrise packages cost extra and sell out. Buy ONLY at the official counter/site — never from street resellers. Prices change by decree; verify before you go."
      },
      {
        "name": "Prambanan temple, foreign adult",
        "local": "",
        "unit": "per person",
        "min": 380000,
        "max": 450000,
        "tourist": null,
        "tip": "A Borobudur+Prambanan combo ticket saves money if you visit both within a few days."
      },
      {
        "name": "Dieng Plateau sites",
        "local": "Kawah Sikidang, Telaga Warna, temples",
        "unit": "per site",
        "min": 15000,
        "max": 35000,
        "tourist": null,
        "tip": "Several small tickets rather than one big one. Budget Rp 100k total for a full day of sites."
      },
      {
        "name": "Sunrise hike, Mount Prau",
        "local": "via Dieng",
        "unit": "entrance",
        "min": 25000,
        "max": 35000,
        "tourist": null,
        "tip": "The famous golden-hour ridge walk. No guide required; headlamp essential."
      },
      {
        "name": "Baturraden hill resort",
        "local": "north of Purwokerto",
        "unit": "entrance",
        "min": 20000,
        "max": 30000,
        "tourist": null,
        "tip": "Waterfalls, hot springs and pine forest on Mount Slamet's slopes. Almost zero foreign tourists."
      },
      {
        "name": "Ferry to Karimunjawa islands",
        "local": "from Jepara, express boat",
        "unit": "one way",
        "min": 150000,
        "max": 300000,
        "tourist": null,
        "tip": "Java's secret island paradise. Boats don't run daily and cancel in bad weather — build in buffer days."
      },
      {
        "name": "Batik-making class",
        "local": "Yogyakarta / Solo",
        "unit": "2–3 hours",
        "min": 100000,
        "max": 250000,
        "tourist": 400000,
        "tip": "You keep your own hand-waxed cloth. Book direct with workshops, not through hotel desks."
      },
      {
        "name": "Traditional massage",
        "local": "pijat",
        "unit": "1 hour",
        "min": 80000,
        "max": 150000,
        "tourist": 250000,
        "tip": "After a volcano hike, this is the best money you'll spend in Java."
      },
      {
        "name": "Kraton & Taman Sari, Yogyakarta",
        "local": "foreigner tickets",
        "unit": "per site",
        "min": 25000,
        "max": 60000,
        "tourist": null,
        "tip": "Small extra fees for cameras or local guides are normal here, not a scam. A guide at Taman Sari is worth it."
      },
      {
        "name": "Lawang Sewu, Semarang",
        "local": "the 'thousand doors' building",
        "unit": "per person",
        "min": 20000,
        "max": 40000,
        "tourist": null,
        "tip": "The old railway headquarters — Central Java's most photogenic colonial building."
      },
      {
        "name": "Merapi volcano jeep tour",
        "local": "lava tour, from Kaliurang",
        "unit": "per jeep (up to 4)",
        "min": 400000,
        "max": 650000,
        "tourist": 900000,
        "tip": "The price is per jeep, not per person — team up with other travellers. Book at the base, not through hotels."
      },
      {
        "name": "Punthuk Setumbu sunrise viewpoint",
        "local": "the 'Borobudur sunrise' photo spot",
        "unit": "per person",
        "min": 30000,
        "max": 50000,
        "tourist": null,
        "tip": "That famous misty-Borobudur photo is taken here — a fraction of the official sunrise package price."
      }
    ]
  },
  {
    "id": "daily",
    "kicker": "Everyday stuff",
    "title": "Practical costs",
    "note": "",
    "items": [
      {
        "name": "Tourist SIM with 20–30 GB data",
        "local": "Telkomsel / XL",
        "unit": "one-time",
        "min": 100000,
        "max": 175000,
        "tourist": 400000,
        "tip": "Buy at an official store in town with your passport. Airport counters charge 2–3×."
      },
      {
        "name": "Laundry service",
        "local": "laundry kiloan",
        "unit": "per kg",
        "min": 8000,
        "max": 15000,
        "tourist": 30000,
        "tip": "Drop it off, get it back folded and fragrant in 24h. Hotels charge per item — avoid."
      },
      {
        "name": "ATM withdrawal limit",
        "local": "BCA / Mandiri / BNI",
        "unit": "per transaction",
        "min": 1250000,
        "max": 2500000,
        "tourist": null,
        "tip": "Your home bank's fee applies per withdrawal, so take the max each time. Always decline conversion (DCC)."
      },
      {
        "name": "Visa on arrival",
        "local": "e-VOA available online",
        "unit": "30 days, extendable once",
        "min": 500000,
        "max": 500000,
        "tourist": null,
        "tip": "Fixed price. Apply online as e-VOA before flying to skip the airport queue. Rules change — check the official imigrasi site."
      },
      {
        "name": "Sunscreen 100ml",
        "local": "",
        "unit": "bottle",
        "min": 60000,
        "max": 120000,
        "tourist": null,
        "tip": "Genuinely expensive here — bring it from home."
      },
      {
        "name": "Pharmacy basics",
        "local": "apotek — paracetamol, oralit",
        "unit": "per item",
        "min": 5000,
        "max": 20000,
        "tourist": null,
        "tip": "Pharmacies are everywhere and cheap. 'Oralit' (rehydration salts) is your friend after too much sambal."
      },
      {
        "name": "Men's haircut",
        "local": "barbershop / cukur",
        "unit": "cut",
        "min": 15000,
        "max": 40000,
        "tourist": 75000,
        "tip": "Air-conditioned barbershop chains charge Rp 30–50k; the corner cukur does it for Rp 15k."
      }
    ]
  }
];
