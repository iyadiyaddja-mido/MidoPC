const processors = [
  { name: "Intel Core i3-10100F", score: 52, brand: "Intel" },
  { name: "Intel Core i5-10400F", score: 69, brand: "Intel" },
  { name: "Intel Core i5-11400F", score: 78, brand: "Intel" },
  { name: "Intel Core i3-12100F", score: 88, brand: "Intel" },
  { name: "Intel Core i5-12400F", score: 101, brand: "Intel" },
  { name: "Intel Core i5-12600K", score: 119, brand: "Intel" },
  { name: "Intel Core i5-13400F", score: 116, brand: "Intel" },
  { name: "Intel Core i5-13600K", score: 143, brand: "Intel" },
  { name: "Intel Core i5-14400F", score: 121, brand: "Intel" },
  { name: "Intel Core i7-12700K", score: 143, brand: "Intel" },
  { name: "Intel Core i7-13700K", score: 166, brand: "Intel" },
  { name: "Intel Core i7-14700K", score: 177, brand: "Intel" },
  { name: "Intel Core i9-12900K", score: 158, brand: "Intel" },
  { name: "Intel Core i9-13900K", score: 188, brand: "Intel" },
  { name: "Intel Core i9-14900K", score: 196, brand: "Intel" },
  { name: "AMD Ryzen 5 3600", score: 72, brand: "AMD" },
  { name: "AMD Ryzen 5 5500", score: 82, brand: "AMD" },
  { name: "AMD Ryzen 5 5600", score: 100, brand: "AMD" },
  { name: "AMD Ryzen 5 5600X", score: 105, brand: "AMD" },
  { name: "AMD Ryzen 7 5700X", score: 112, brand: "AMD" },
  { name: "AMD Ryzen 7 5800X3D", score: 139, brand: "AMD" },
  { name: "AMD Ryzen 5 7500F", score: 124, brand: "AMD" },
  { name: "AMD Ryzen 5 7600", score: 131, brand: "AMD" },
  { name: "AMD Ryzen 7 7700", score: 145, brand: "AMD" },
  { name: "AMD Ryzen 7 7800X3D", score: 179, brand: "AMD" },
  { name: "AMD Ryzen 7 9700X", score: 169, brand: "AMD" },
  { name: "AMD Ryzen 7 9800X3D", score: 203, brand: "AMD" },
  { name: "AMD Ryzen 9 7900X", score: 170, brand: "AMD" },
  { name: "AMD Ryzen 9 7950X", score: 183, brand: "AMD" }
];

function addModels(target, brand, models) {
  target.push(...models.map(([name, score]) => ({ name, score, brand })));
}

addModels(processors, "Intel", [
  ["Intel Core i5-6400", 38], ["Intel Core i5-6500", 41], ["Intel Core i5-6600", 45],
  ["Intel Core i5-6600K", 49], ["Intel Core i5-7400", 43], ["Intel Core i5-7500", 47],
  ["Intel Core i5-7600", 51], ["Intel Core i5-7600K", 54], ["Intel Core i5-8400", 61],
  ["Intel Core i5-8500", 64], ["Intel Core i5-8600K", 70], ["Intel Core i5-9400F", 67],
  ["Intel Core i5-9500", 71], ["Intel Core i5-9600K", 76], ["Intel Core i5-10600K", 86],
  ["Intel Core i5-11600K", 91], ["Intel Core i5-12500", 103], ["Intel Core i5-13500", 119],
  ["Intel Core i5-14500", 125], ["Intel Core Ultra 5 245K", 153],
  ["Intel Core i5-6200U", 24], ["Intel Core i5-6300U", 28], ["Intel Core i5-6300HQ", 35],
  ["Intel Core i5-7200U", 28], ["Intel Core i5-7300HQ", 39], ["Intel Core i5-8250U", 42],
  ["Intel Core i5-8300H", 53], ["Intel Core i5-10210U", 47], ["Intel Core i5-10300H", 61],
  ["Intel Core i5-1135G7", 72], ["Intel Core i5-11400H", 82], ["Intel Core i5-1235U", 85],
  ["Intel Core i5-12500H", 104], ["Intel Core i5-1335U", 94], ["Intel Core i5-13420H", 106],
  ["Intel Core Ultra 5 125H", 130], ["Intel Core Ultra 5 225H", 145]
]);

const graphicsCards = [
  { name: "NVIDIA GeForce GT 1030", score: 12, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1050 Ti", score: 29, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1650", score: 42, brand: "NVIDIA" },
  { name: "NVIDIA GeForce GTX 1660 Super", score: 58, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 2060", score: 68, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3060", score: 79, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 3060 Ti", score: 94, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4060", score: 100, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4060 Ti", score: 119, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4070", score: 151, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4070 SUPER", score: 169, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4070 Ti SUPER", score: 194, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4080 SUPER", score: 230, brand: "NVIDIA" },
  { name: "NVIDIA GeForce RTX 4090", score: 285, brand: "NVIDIA" },
  { name: "AMD Radeon RX 580", score: 40, brand: "AMD" },
  { name: "AMD Radeon RX 6600", score: 76, brand: "AMD" },
  { name: "AMD Radeon RX 6700 XT", score: 112, brand: "AMD" },
  { name: "AMD Radeon RX 7600", score: 94, brand: "AMD" },
  { name: "AMD Radeon RX 7700 XT", score: 139, brand: "AMD" },
  { name: "AMD Radeon RX 7800 XT", score: 165, brand: "AMD" },
  { name: "AMD Radeon RX 7900 GRE", score: 184, brand: "AMD" },
  { name: "AMD Radeon RX 7900 XTX", score: 235, brand: "AMD" },
  { name: "Intel Arc A380", score: 37, brand: "Intel" },
  { name: "Intel Arc A580", score: 69, brand: "Intel" },
  { name: "Intel Arc A750", score: 86, brand: "Intel" },
  { name: "Intel Arc A770", score: 99, brand: "Intel" }
];

addModels(graphicsCards, "Intel مدمج", [
  ["Intel HD Graphics (GMA X3100)", 2], ["Intel HD Graphics 2000", 3],
  ["Intel HD Graphics 2500", 4], ["Intel HD Graphics 3000", 4],
  ["Intel HD Graphics 4000", 5], ["Intel HD Graphics 4200", 6],
  ["Intel HD Graphics 4400", 7], ["Intel HD Graphics 4600", 8],
  ["Intel HD Graphics 5000", 9], ["Intel HD Graphics 510", 9],
  ["Intel HD Graphics 515", 10], ["Intel HD Graphics 520", 11],
  ["Intel HD Graphics 530", 13], ["Intel HD Graphics 540", 15],
  ["Intel HD Graphics 5500", 9], ["Intel HD Graphics 6000", 11],
  ["Intel HD Graphics 610", 9], ["Intel HD Graphics 615", 12],
  ["Intel HD Graphics 620", 12], ["Intel HD Graphics 630", 16],
  ["Intel HD Graphics 640", 18], ["Intel HD Graphics 650", 20],
  ["Intel UHD Graphics 600", 5], ["Intel UHD Graphics 605", 8],
  ["Intel UHD Graphics 610", 8], ["Intel UHD Graphics 615", 11],
  ["Intel UHD Graphics 617", 12], ["Intel UHD Graphics 620", 13],
  ["Intel UHD Graphics 630", 17], ["Intel UHD Graphics 710", 15],
  ["Intel UHD Graphics 730", 21], ["Intel UHD Graphics 750", 26],
  ["Intel UHD Graphics 770", 32], ["Intel UHD Graphics Xe G4 48EU", 28],
  ["Intel Iris Xe Graphics G7 80EU", 36], ["Intel Iris Xe Graphics G7 96EU", 43],
  ["Intel Arc Graphics 7-Core iGPU", 49], ["Intel Arc Graphics 8-Core iGPU", 57]
]);

addModels(graphicsCards, "Intel", [
  ["Intel Arc B570", 105], ["Intel Arc B580", 133]
]);

addModels(graphicsCards, "NVIDIA", [
  ["NVIDIA GeForce 210", 2], ["NVIDIA GeForce GT 610", 3],
  ["NVIDIA GeForce GT 710", 5], ["NVIDIA GeForce GT 730", 8],
  ["NVIDIA GeForce GT 740", 11], ["NVIDIA GeForce GTX 750 Ti", 17],
  ["NVIDIA GeForce GTX 950", 21], ["NVIDIA GeForce GTX 960", 25],
  ["NVIDIA GeForce GTX 970", 34], ["NVIDIA GeForce GTX 980", 39],
  ["NVIDIA GeForce GTX 1050", 25], ["NVIDIA GeForce GTX 1060 3GB", 37],
  ["NVIDIA GeForce GTX 1060 6GB", 43], ["NVIDIA GeForce GTX 1070", 52],
  ["NVIDIA GeForce GTX 1070 Ti", 58], ["NVIDIA GeForce GTX 1080", 65],
  ["NVIDIA GeForce GTX 1080 Ti", 76], ["NVIDIA GeForce GTX 1630", 24],
  ["NVIDIA GeForce GTX 1660", 53], ["NVIDIA GeForce GTX 1660 Ti", 61],
  ["NVIDIA GeForce RTX 2060 SUPER", 75], ["NVIDIA GeForce RTX 2070", 82],
  ["NVIDIA GeForce RTX 2070 SUPER", 91], ["NVIDIA GeForce RTX 2080", 102],
  ["NVIDIA GeForce RTX 2080 Ti", 120], ["NVIDIA GeForce RTX 3050", 58],
  ["NVIDIA GeForce RTX 3070", 116], ["NVIDIA GeForce RTX 3070 Ti", 127],
  ["NVIDIA GeForce RTX 3080", 150], ["NVIDIA GeForce RTX 3080 Ti", 165],
  ["NVIDIA GeForce RTX 3090", 172], ["NVIDIA GeForce RTX 3090 Ti", 181],
  ["NVIDIA GeForce RTX 4070 Ti", 180], ["NVIDIA GeForce RTX 4080", 215],
  ["NVIDIA GeForce RTX 5070", 184], ["NVIDIA GeForce RTX 5070 Ti", 220],
  ["NVIDIA GeForce RTX 5080", 258], ["NVIDIA GeForce RTX 5090", 320]
]);

addModels(graphicsCards, "AMD", [
  ["AMD Radeon HD 5450", 2], ["AMD Radeon HD 6450", 3],
  ["AMD Radeon HD 7770", 8], ["AMD Radeon R7 250", 9],
  ["AMD Radeon R7 360", 14], ["AMD Radeon R9 270X", 19],
  ["AMD Radeon R9 280X", 24], ["AMD Radeon R9 380", 25],
  ["AMD Radeon R9 390", 32], ["AMD Radeon RX 460", 17],
  ["AMD Radeon RX 470", 30], ["AMD Radeon RX 480", 35],
  ["AMD Radeon RX 550", 13], ["AMD Radeon RX 560", 20],
  ["AMD Radeon RX 570", 34], ["AMD Radeon RX 590", 47],
  ["AMD Radeon Vega 56", 53], ["AMD Radeon Vega 64", 62],
  ["AMD Radeon RX 5300", 42], ["AMD Radeon RX 5500 XT", 49],
  ["AMD Radeon RX 5600 XT", 67], ["AMD Radeon RX 5700", 77],
  ["AMD Radeon RX 5700 XT", 84], ["AMD Radeon RX 6400", 39],
  ["AMD Radeon RX 6500 XT", 50], ["AMD Radeon RX 6650 XT", 88],
  ["AMD Radeon RX 6750 XT", 120], ["AMD Radeon RX 6800", 143],
  ["AMD Radeon RX 6800 XT", 159], ["AMD Radeon RX 6900 XT", 174],
  ["AMD Radeon RX 6950 XT", 187], ["AMD Radeon RX 7600 XT", 101],
  ["AMD Radeon RX 7900 XT", 211], ["AMD Radeon RX 9070", 207],
  ["AMD Radeon RX 9070 XT", 245], ["AMD Radeon RX 9060 XT", 157],
  ["AMD Radeon RX 9060 XT 16GB", 167],
  ["AMD Radeon 780M (Ryzen iGPU)", 54], ["AMD Radeon 760M (Ryzen iGPU)", 43],
  ["AMD Radeon 740M (Ryzen iGPU)", 31], ["AMD Radeon 680M (Ryzen iGPU)", 47],
  ["AMD Radeon 660M (Ryzen iGPU)", 36], ["AMD Radeon Vega 8 (Ryzen iGPU)", 23],
  ["AMD Radeon Vega 7 (Ryzen iGPU)", 20], ["AMD Radeon Vega 6 (Ryzen iGPU)", 16],
  ["AMD Radeon Vega 3 (Ryzen iGPU)", 9]
]);

const games = [
  { name: "Grand Theft Auto V", searchTerms: ["GTA", "GTA 5"], genre: "عالم مفتوح" },
  { name: "GTA V Enhanced", searchTerms: ["GTA 5 Enhanced"], genre: "عالم مفتوح" },
  { name: "Counter-Strike 2", genre: "تصويب تنافسي" },
  { name: "Valorant", genre: "تصويب تنافسي" },
  { name: "Fortnite", genre: "باتل رويال" },
  { name: "PUBG: Battlegrounds", genre: "باتل رويال" },
  { name: "Call of Duty: Warzone", genre: "باتل رويال" },
  { name: "Apex Legends", genre: "باتل رويال" },
  { name: "Cyberpunk 2077", genre: "عالم مفتوح" },
  { name: "Red Dead Redemption 2", genre: "عالم مفتوح" },
  { name: "Forza Horizon 5", genre: "سباق" },
  { name: "Minecraft (Java)", genre: "مغامرات" },
  { name: "Elden Ring", genre: "أكشن RPG" },
  { name: "Hogwarts Legacy", genre: "مغامرات" },
  { name: "The Last of Us Part I", genre: "مغامرات" },
  { name: "Overwatch 2", genre: "تصويب تنافسي" },
  { name: "Rainbow Six Siege", genre: "تصويب تنافسي" },
  { name: "League of Legends", genre: "MOBA" },
  { name: "Dota 2", genre: "MOBA" },
  { name: "Assassin's Creed Valhalla", genre: "عالم مفتوح" }
];

function addGames(entries) {
  const existingNames = new Set(games.map((game) => game.name.toLocaleLowerCase()));
  for (const [name, genre, ...searchTerms] of entries) {
    const normalizedName = name.toLocaleLowerCase();
    if (existingNames.has(normalizedName)) continue;
    existingNames.add(normalizedName);
    games.push({ name, genre, searchTerms: searchTerms.flat() });
  }
}

addGames([
  ["Grand Theft Auto III", "عالم مفتوح", "GTA 3"],
  ["Grand Theft Auto: Vice City", "عالم مفتوح", "GTA Vice City"],
  ["Grand Theft Auto: San Andreas", "عالم مفتوح", "GTA SA", "GTA San Andreas"],
  ["Grand Theft Auto IV", "عالم مفتوح", "GTA 4"],
  ["Grand Theft Auto Online", "عالم مفتوح", "GTA Online"],
  ["Red Dead Redemption", "عالم مفتوح", "RDR"],
  ["Red Dead Redemption 2", "عالم مفتوح", "RDR2"],
  ["Cyberpunk 2077: Phantom Liberty", "عالم مفتوح", "Cyberpunk Phantom Liberty"],
  ["The Witcher 3: Wild Hunt", "RPG", "Witcher 3"],
  ["The Witcher 2: Assassins of Kings", "RPG", "Witcher 2"],
  ["The Elder Scrolls V: Skyrim Special Edition", "RPG", "Skyrim"],
  ["The Elder Scrolls IV: Oblivion Remastered", "RPG", "Oblivion"],
  ["The Elder Scrolls Online", "MMORPG"],
  ["Fallout 4", "RPG"],
  ["Fallout 76", "RPG"],
  ["Baldur's Gate 3", "RPG", "BG3"],
  ["Divinity: Original Sin 2", "RPG"],
  ["Dragon Age: The Veilguard", "RPG"],
  ["Dragon's Dogma 2", "RPG"],
  ["Kingdom Come: Deliverance II", "RPG"],
  ["Starfield", "RPG"],
  ["Elden Ring: Shadow of the Erdtree", "أكشن RPG"],
  ["Dark Souls III", "أكشن RPG"],
  ["Sekiro: Shadows Die Twice", "أكشن RPG", "Sekiro"],
  ["Lies of P", "أكشن RPG"],
  ["Black Myth: Wukong", "أكشن RPG"],
  ["Horizon Zero Dawn Remastered", "أكشن"],
  ["Horizon Forbidden West Complete Edition", "أكشن"],
  ["God of War", "أكشن"],
  ["God of War Ragnarök", "أكشن"],
  ["Marvel's Spider-Man Remastered", "أكشن", "Spider-Man"],
  ["Marvel's Spider-Man: Miles Morales", "أكشن", "Miles Morales"],
  ["The Last of Us Part II Remastered", "مغامرات"],
  ["Uncharted: Legacy of Thieves Collection", "مغامرات", "Uncharted"],
  ["Ghost of Tsushima Director's Cut", "أكشن"],
  ["Days Gone", "أكشن"],
  ["Death Stranding Director's Cut", "مغامرات"],
  ["Resident Evil 2", "رعب"],
  ["Resident Evil 3", "رعب"],
  ["Resident Evil 4", "رعب"],
  ["Resident Evil Village", "رعب", "Resident Evil 8"],
  ["Silent Hill 2", "رعب"],
  ["Dead Space", "رعب"],
  ["Alan Wake 2", "رعب"],
  ["Phasmophobia", "رعب"],
  ["Dying Light", "زومبي"],
  ["Dying Light 2 Stay Human", "زومبي"],
  ["Days Gone", "زومبي"],
  ["Left 4 Dead 2", "زومبي", "L4D2"],
  ["Back 4 Blood", "زومبي"],
  ["The Forest", "بقاء"],
  ["Sons of the Forest", "بقاء"],
  ["Rust", "بقاء"],
  ["ARK: Survival Ascended", "بقاء", "ARK"],
  ["Palworld", "بقاء"],
  ["Valheim", "بقاء"],
  ["Enshrouded", "بقاء"],
  ["The Long Dark", "بقاء"],
  ["Subnautica", "بقاء"],
  ["Subnautica: Below Zero", "بقاء"],
  ["No Man's Sky", "مغامرات"],
  ["The Outer Worlds", "RPG"],
  ["S.T.A.L.K.E.R. 2: Heart of Chornobyl", "تصويب", "Stalker 2"],
  ["Escape from Tarkov", "تصويب تكتيكي", "Tarkov"],
  ["Hunt: Showdown 1896", "تصويب تكتيكي"],
  ["Ready or Not", "تصويب تكتيكي"],
  ["Insurgency: Sandstorm", "تصويب تكتيكي"],
  ["Squad", "تصويب تكتيكي"],
  ["Hell Let Loose", "تصويب تكتيكي"],
  ["Battlefield 1", "تصويب"],
  ["Battlefield V", "تصويب"],
  ["Battlefield 2042", "تصويب"],
  ["Battlefield 6", "تصويب"],
  ["Call of Duty: Modern Warfare III", "تصويب", "MW3"],
  ["Call of Duty: Black Ops 6", "تصويب", "BO6"],
  ["Call of Duty: Black Ops 7", "تصويب", "BO7"],
  ["Call of Duty: Modern Warfare", "تصويب", "MW 2019"],
  ["Call of Duty: Modern Warfare II", "تصويب", "MW2"],
  ["DOOM Eternal", "تصويب"],
  ["DOOM: The Dark Ages", "تصويب"],
  ["Destiny 2", "تصويب"],
  ["Warframe", "أكشن"],
  ["The Finals", "تصويب"],
  ["THE FINALS", "تصويب"],
  ["Marvel Rivals", "تصويب"],
  ["XDefiant", "تصويب"],
  ["Team Fortress 2", "تصويب", "TF2"],
  ["Left 4 Dead", "زومبي", "L4D"],
  ["Halo Infinite", "تصويب"],
  ["Halo: The Master Chief Collection", "تصويب", "Halo MCC"],
  ["Titanfall 2", "تصويب"],
  ["Borderlands 3", "تصويب RPG"],
  ["Borderlands 4", "تصويب RPG"],
  ["Far Cry 5", "عالم مفتوح"],
  ["Far Cry 6", "عالم مفتوح"],
  ["Watch Dogs 2", "عالم مفتوح"],
  ["Watch Dogs: Legion", "عالم مفتوح"],
  ["Sleeping Dogs: Definitive Edition", "عالم مفتوح"],
  ["Mafia: Definitive Edition", "عالم مفتوح"],
  ["Mafia II: Definitive Edition", "عالم مفتوح"],
  ["Mafia III: Definitive Edition", "عالم مفتوح"],
  ["Saints Row (2022)", "عالم مفتوح"],
  ["Just Cause 3", "عالم مفتوح"],
  ["Just Cause 4", "عالم مفتوح"],
  ["Assassin's Creed Mirage", "عالم مفتوح"],
  ["Assassin's Creed Odyssey", "عالم مفتوح"],
  ["Assassin's Creed Origins", "عالم مفتوح"],
  ["Assassin's Creed Shadows", "عالم مفتوح"],
  ["Prince of Persia: The Lost Crown", "أكشن"],
  ["Forza Horizon 4", "سباق"],
  ["Forza Motorsport (2023)", "سباق"],
  ["Forza Horizon 5", "سباق"],
  ["Forza Horizon 6", "سباق"],
  ["Need for Speed Heat", "سباق"],
  ["Need for Speed Unbound", "سباق"],
  ["Need for Speed Payback", "سباق"],
  ["Need for Speed Most Wanted (2005)", "سباق", "NFS MW"],
  ["The Crew Motorfest", "سباق"],
  ["The Crew 2", "سباق"],
  ["F1 24", "سباق"],
  ["F1 25", "سباق"],
  ["Assetto Corsa", "سباق"],
  ["Assetto Corsa Competizione", "سباق", "ACC"],
  ["BeamNG.drive", "سباق"],
  ["Euro Truck Simulator 2", "محاكاة", "ETS2"],
  ["American Truck Simulator", "محاكاة", "ATS"],
  ["Microsoft Flight Simulator (2020)", "محاكاة", "MSFS"],
  ["Microsoft Flight Simulator 2024", "محاكاة", "MSFS 2024"],
  ["Farming Simulator 25", "محاكاة", "FS25"],
  ["Cities: Skylines", "محاكاة"],
  ["Cities: Skylines II", "محاكاة"],
  ["The Sims 4", "محاكاة"],
  ["Planet Zoo", "محاكاة"],
  ["Planet Coaster 2", "محاكاة"],
  ["House Flipper 2", "محاكاة"],
  ["PowerWash Simulator", "محاكاة"],
  ["Microsoft Flight Simulator X", "محاكاة", "FSX"],
  ["Age of Empires II: Definitive Edition", "استراتيجية", "AOE2"],
  ["Age of Empires IV", "استراتيجية", "AOE4"],
  ["Civilization VI", "استراتيجية", "Civ 6"],
  ["Civilization VII", "استراتيجية", "Civ 7"],
  ["Crusader Kings III", "استراتيجية", "CK3"],
  ["Europa Universalis IV", "استراتيجية", "EU4"],
  ["Hearts of Iron IV", "استراتيجية", "HOI4"],
  ["Total War: Warhammer III", "استراتيجية"],
  ["Company of Heroes 3", "استراتيجية"],
  ["StarCraft II", "استراتيجية", "SC2"],
  ["Command & Conquer Remastered Collection", "استراتيجية", "C&C"],
  ["XCOM 2", "استراتيجية"],
  ["RimWorld", "استراتيجية"],
  ["Factorio", "استراتيجية"],
  ["Satisfactory", "استراتيجية"],
  ["Dyson Sphere Program", "استراتيجية"],
  ["Stellaris", "استراتيجية"],
  ["Cities: Skylines", "محاكاة"],
  ["Terraria", "مغامرات"],
  ["Stardew Valley", "محاكاة"],
  ["Hades", "أكشن"],
  ["Hades II", "أكشن"],
  ["Hollow Knight", "مغامرات"],
  ["Hollow Knight: Silksong", "مغامرات"],
  ["Cuphead", "مغامرات"],
  ["Celeste", "مغامرات"],
  ["Dead Cells", "أكشن"],
  ["Ori and the Will of the Wisps", "مغامرات"],
  ["It Takes Two", "تعاونية"],
  ["A Way Out", "تعاونية"],
  ["Sea of Thieves", "مغامرات"],
  ["Grounded", "بقاء"],
  ["Among Us", "اجتماعية"],
  ["Fall Guys", "باتل رويال"],
  ["Rocket League", "سباق"],
  ["Trackmania", "سباق"],
  ["Brawlhalla", "قتال"],
  ["Street Fighter 6", "قتال"],
  ["Tekken 8", "قتال"],
  ["Mortal Kombat 1", "قتال"],
  ["Dragon Ball: Sparking! ZERO", "قتال"],
  ["Guilty Gear -Strive-", "قتال"],
  ["Path of Exile", "أكشن RPG"],
  ["Path of Exile 2", "أكشن RPG"],
  ["Diablo III", "أكشن RPG"],
  ["Diablo IV", "أكشن RPG"],
  ["Lost Ark", "MMORPG"],
  ["Black Desert Online", "MMORPG"],
  ["New World: Aeternum", "MMORPG"],
  ["Final Fantasy XIV", "MMORPG", "FFXIV"],
  ["Final Fantasy XV", "RPG", "FFXV"],
  ["Final Fantasy VII Remake Intergrade", "RPG", "FF7 Remake"],
  ["Final Fantasy VII Rebirth", "RPG", "FF7 Rebirth"],
  ["Monster Hunter: World", "أكشن RPG"],
  ["Monster Hunter Rise", "أكشن RPG"],
  ["Monster Hunter Wilds", "أكشن RPG"],
  ["Once Human", "بقاء"],
  ["The First Descendant", "تصويب RPG"],
  ["Throne and Liberty", "MMORPG"],
  ["Genshin Impact", "RPG"],
  ["Honkai: Star Rail", "RPG", "HSR"],
  ["Zenless Zone Zero", "أكشن RPG", "ZZZ"],
  ["Wuthering Waves", "أكشن RPG"],
  ["Where Winds Meet", "أكشن RPG"],
  ["Blue Protocol: Star Resonance", "RPG"],
  ["Free Fire (BlueStacks)", "محاكي أندرويد", "Free Fire BlueStacks", "FF BlueStacks"],
  ["Free Fire (LDPlayer)", "محاكي أندرويد", "Free Fire LDPlayer", "FF LDPlayer"],
  ["Free Fire (GameLoop)", "محاكي أندرويد", "Free Fire GameLoop", "FF GameLoop"],
  ["Free Fire MAX (BlueStacks)", "محاكي أندرويد", "FF MAX BlueStacks"],
  ["Free Fire MAX (LDPlayer)", "محاكي أندرويد", "FF MAX LDPlayer"],
  ["PUBG Mobile (GameLoop)", "محاكي أندرويد", "PUBG Mobile"],
  ["PUBG Mobile (BlueStacks)", "محاكي أندرويد"],
  ["Call of Duty: Mobile (GameLoop)", "محاكي أندرويد", "COD Mobile", "CODM"],
  ["Call of Duty: Mobile (BlueStacks)", "محاكي أندرويد", "COD Mobile BlueStacks"],
  ["Mobile Legends: Bang Bang (BlueStacks)", "محاكي أندرويد", "MLBB"],
  ["Mobile Legends: Bang Bang (LDPlayer)", "محاكي أندرويد"],
  ["Clash of Clans (BlueStacks)", "محاكي أندرويد", "COC"],
  ["Clash of Clans (LDPlayer)", "محاكي أندرويد"],
  ["Clash Royale (BlueStacks)", "محاكي أندرويد"],
  ["Brawl Stars (BlueStacks)", "محاكي أندرويد"],
  ["Arena of Valor (BlueStacks)", "محاكي أندرويد", "AOV"],
  ["Dragon Ball Legends (BlueStacks)", "محاكي أندرويد"],
  ["eFootball Mobile (BlueStacks)", "محاكي أندرويد"],
]);

const benchmarks = [
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Grand Theft Auto V",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 128,
    onePercentLow: 92,
    testDate: "2025-06-15",
    source: "https://www.example.com/benchmarks/gta-v-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Grand Theft Auto V",
    resolution: "1080",
    quality: "low",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 152,
    onePercentLow: 108,
    testDate: "2025-06-15",
    source: "https://www.example.com/benchmarks/gta-v-r5-5600-rtx-4060-1080p-low"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Fortnite",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 142,
    onePercentLow: 101,
    testDate: "2025-06-18",
    source: "https://www.example.com/benchmarks/fortnite-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Valorant",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 216,
    onePercentLow: 174,
    testDate: "2025-06-18",
    source: "https://www.example.com/benchmarks/valorant-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Counter-Strike 2",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 205,
    onePercentLow: 167,
    testDate: "2025-06-18",
    source: "https://www.example.com/benchmarks/cs2-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Apex Legends",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 132,
    onePercentLow: 95,
    testDate: "2025-06-18",
    source: "https://www.example.com/benchmarks/apex-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "PUBG: Battlegrounds",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 111,
    onePercentLow: 74,
    testDate: "2025-06-18",
    source: "https://www.example.com/benchmarks/pubg-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Cyberpunk 2077",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 74,
    onePercentLow: 51,
    testDate: "2025-06-20",
    source: "https://www.example.com/benchmarks/cyberpunk-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Red Dead Redemption 2",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 88,
    onePercentLow: 62,
    testDate: "2025-06-20",
    source: "https://www.example.com/benchmarks/rdr2-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 4060",
    game: "Forza Horizon 5",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 138,
    onePercentLow: 97,
    testDate: "2025-06-21",
    source: "https://www.example.com/benchmarks/forza-r5-5600-rtx-4060-1080p-high"
  },
  {
    cpu: "Intel Core i5-12400F",
    gpu: "NVIDIA GeForce RTX 3060",
    game: "Grand Theft Auto V",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 110,
    onePercentLow: 81,
    testDate: "2025-06-10",
    source: "https://www.example.com/benchmarks/gta-v-i5-12400f-rtx-3060-1080p-high"
  },
  {
    cpu: "Intel Core i5-12400F",
    gpu: "NVIDIA GeForce RTX 3060",
    game: "Fortnite",
    resolution: "1080",
    quality: "high",
    ramCapacity: 16,
    ramType: "DDR4",
    ramSpeed: 3200,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 148,
    onePercentLow: 112,
    testDate: "2025-06-10",
    source: "https://www.example.com/benchmarks/fortnite-i5-12400f-rtx-3060-1080p-high"
  },
  {
    cpu: "Intel Core i5-6400",
    gpu: "Intel HD Graphics 520",
    game: "Counter-Strike 2",
    resolution: "720",
    quality: "low",
    ramCapacity: 8,
    ramType: "DDR4",
    ramSpeed: 2666,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 34,
    onePercentLow: 24,
    testDate: "2025-04-11",
    source: "https://www.example.com/benchmarks/cs2-i5-6400-hd520-720p-low"
  },
  {
    cpu: "Intel Core i5-6400",
    gpu: "Intel HD Graphics 520",
    game: "Grand Theft Auto V",
    resolution: "720",
    quality: "low",
    ramCapacity: 8,
    ramType: "DDR4",
    ramSpeed: 2666,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 18,
    onePercentLow: 11,
    testDate: "2025-04-11",
    source: "https://www.example.com/benchmarks/gta-v-i5-6400-hd520-720p-low"
  },
  {
    cpu: "AMD Ryzen 7 7800X3D",
    gpu: "NVIDIA GeForce RTX 4080",
    game: "Cyberpunk 2077",
    resolution: "1440",
    quality: "high",
    ramCapacity: 32,
    ramType: "DDR5",
    ramSpeed: 6000,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 132,
    onePercentLow: 95,
    testDate: "2025-07-02",
    source: "https://www.example.com/benchmarks/cyberpunk-7800x3d-rtx4080-1440p-high"
  },
  {
    cpu: "AMD Ryzen 5 7600",
    gpu: "NVIDIA GeForce RTX 4070",
    game: "Valorant",
    resolution: "1080",
    quality: "high",
    ramCapacity: 32,
    ramType: "DDR5",
    ramSpeed: 6000,
    ramChannel: "dual",
    windows: "Windows 11",
    averageFps: 258,
    onePercentLow: 205,
    testDate: "2025-07-04",
    source: "https://www.example.com/benchmarks/valorant-7600-rtx4070-1080p-high"
  }
];

const cpuSelect = document.querySelector("#cpu");
const gpuSelect = document.querySelector("#gpu");
const resolutionSelect = document.querySelector("#resolution");
const qualitySelect = document.querySelector("#quality");
const ramCapacitySelect = document.querySelector("#ram-capacity");
const ramTypeSelect = document.querySelector("#ram-type");
const ramSpeedSelect = document.querySelector("#ram-speed");
const ramChannelSelect = document.querySelector("#ram-channel");
const windowsSelect = document.querySelector("#windows");
const gameSearch = document.querySelector("#game-search");
const cpuSearch = document.querySelector("#cpu-search");
const gpuSearch = document.querySelector("#gpu-search");
const gameList = document.querySelector("#game-list");
let selectedGame = games[0];
let suggestions = [];
let highlightedSuggestion = -1;

function fillHardwareOptions(select, items) {
  for (const brand of [...new Set(items.map((item) => item.brand))]) {
    const group = document.createElement("optgroup");
    group.label = brand;
    for (const item of items.filter((entry) => entry.brand === brand)) {
      const option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      group.append(option);
    }
    select.append(group);
  }
}

function filterHardware(select, query) {
  const normalizedQuery = query.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  for (const group of select.querySelectorAll("optgroup")) {
    let hasVisibleOption = false;
    for (const option of group.querySelectorAll("option")) {
      const normalizedName = option.textContent.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
      option.hidden = Boolean(normalizedQuery) &&
        !normalizedName.includes(normalizedQuery) &&
        option.value !== select.value;
      hasVisibleOption ||= !option.hidden;
    }
    group.hidden = !hasVisibleOption;
  }
}

function renderGames() {
  const query = normalizeGameSearch(gameSearch.value);
  gameList.replaceChildren();
  suggestions = [];
  highlightedSuggestion = -1;

  if (!query) {
    closeGameSuggestions();
    return;
  }

  suggestions = games
    .filter((game) => [game.name, ...(game.searchTerms || [])]
      .some((term) => normalizeGameSearch(term).includes(query)))
    .sort((first, second) => {
      const firstStartsWithQuery = [first.name, ...(first.searchTerms || [])]
        .some((term) => normalizeGameSearch(term).startsWith(query));
      const secondStartsWithQuery = [second.name, ...(second.searchTerms || [])]
        .some((term) => normalizeGameSearch(term).startsWith(query));
      return Number(secondStartsWithQuery) - Number(firstStartsWithQuery);
    })
  if (!suggestions.length) {
    const empty = document.createElement("div");
    empty.className = "empty-games";
    empty.textContent = "ما لقيناش هاذ اللعبة في القائمة.";
    gameList.append(empty);
    openGameSuggestions();
    return;
  }

  for (const game of suggestions) {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `game-option${selectedGame === game ? " selected" : ""}`;
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", String(selectedGame === game));
    option.id = `game-option-${games.indexOf(game)}`;
    const name = document.createElement("span");
    name.className = "game-name";
    name.textContent = game.name;
    const genre = document.createElement("span");
    genre.className = "game-genre";
    genre.textContent = game.genre;
    option.append(name, genre);
    option.addEventListener("mousedown", (event) => event.preventDefault());
    option.addEventListener("click", () => {
      chooseGame(game);
    });
    gameList.append(option);
  }
  openGameSuggestions();
}

function normalizeGameSearch(value) {
  return value.trim().toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
}

function openGameSuggestions() {
  gameList.hidden = false;
  gameSearch.setAttribute("aria-expanded", "true");
}

function closeGameSuggestions() {
  gameList.hidden = true;
  gameSearch.setAttribute("aria-expanded", "false");
  gameSearch.removeAttribute("aria-activedescendant");
}

function highlightSuggestion(index) {
  const options = gameList.querySelectorAll(".game-option");
  if (!options.length) return;
  highlightedSuggestion = (index + options.length) % options.length;
  options.forEach((option, optionIndex) => {
    option.classList.toggle("active", optionIndex === highlightedSuggestion);
  });
  gameSearch.setAttribute("aria-activedescendant", options[highlightedSuggestion].id);
  options[highlightedSuggestion].scrollIntoView({ block: "nearest" });
}

function chooseGame(game) {
  selectedGame = game;
  gameSearch.value = game.name;
  closeGameSuggestions();
  calculate();
}

function updateRamSpeeds() {
  const speeds = {
    DDR3: [1066, 1333, 1600, 1866, 2133],
    DDR4: [2133, 2400, 2666, 2933, 3200, 3600],
    DDR5: [4800, 5200, 5600, 6000, 6400, 7200]
  };
  const previousSpeed = ramSpeedSelect.value;
  ramSpeedSelect.replaceChildren();
  for (const speed of speeds[ramTypeSelect.value]) {
    const option = document.createElement("option");
    option.value = String(speed);
    option.textContent = `${speed} MT/s`;
    ramSpeedSelect.append(option);
  }
  if (speeds[ramTypeSelect.value].includes(Number(previousSpeed))) {
    ramSpeedSelect.value = previousSpeed;
  } else {
    const defaultSpeed = { DDR3: 1600, DDR4: 3200, DDR5: 6000 };
    ramSpeedSelect.value = String(defaultSpeed[ramTypeSelect.value]);
  }
}

function isHttpsSource(source) {
  if (typeof source !== "string") return false;
  const match = source.match(/^https:\/\/([^/:?#]+)(?::\d+)?(?:[/?#]|$)/i);
  if (!match) return false;
  const host = match[1].toLocaleLowerCase();
  return host !== "example.com" && !host.endsWith(".example.com");
}

function findVerifiedBenchmark(cpu, gpu) {
  return benchmarks
    .filter((benchmark) =>
      benchmark.cpu === cpu.name &&
      benchmark.gpu === gpu.name &&
      benchmark.game === selectedGame.name &&
      benchmark.resolution === resolutionSelect.value &&
      benchmark.quality === qualitySelect.value &&
      benchmark.ramCapacity === Number(ramCapacitySelect.value) &&
      benchmark.ramType === ramTypeSelect.value &&
      benchmark.ramSpeed === Number(ramSpeedSelect.value) &&
      benchmark.ramChannel === ramChannelSelect.value &&
      benchmark.windows === windowsSelect.value &&
      Number.isFinite(benchmark.averageFps) &&
      benchmark.averageFps > 0 &&
      (!benchmark.onePercentLow ||
        (Number.isFinite(benchmark.onePercentLow) && benchmark.onePercentLow > 0)) &&
      Number.isFinite(Date.parse(benchmark.testDate)) &&
      isHttpsSource(benchmark.source))
    .sort((first, second) => Date.parse(second.testDate) - Date.parse(first.testDate))[0];
}

function estimateFps(cpu, gpu) {
  const baseFpsByGenre = {
    "تصويب تنافسي": 180,
    "MOBA": 165,
    "باتل رويال": 95,
    "عالم مفتوح": 68,
    "تصويب": 105,
    "تصويب تكتيكي": 85,
    "سباق": 105,
    "محاكاة": 75,
    "محاكي أندرويد": 120,
    "أكشن RPG": 72,
    "RPG": 75,
    "مغامرات": 85,
    "بقاء": 68,
    "رعب": 78,
    "استراتيجية": 100,
    "قتال": 100,
    "تعاونية": 90,
    "اجتماعية": 140,
    "أكشن": 90
  };
  const baseFps = baseFpsByGenre[selectedGame.genre] || 85;
  const resolutionScale = { "720": 1.42, "1080": 1, "1440": 0.72, "2160": 0.43 };
  const qualityScale = { low: 1.3, medium: 1.14, high: 1, ultra: 0.78 };
  const gpuScale = Math.pow(gpu.score / 100, 0.9);
  const cpuScale = Math.max(0.65, Math.min(1.32, Math.pow(cpu.score / 100, 0.32)));
  const ramCapacity = Number(ramCapacitySelect.value);
  let ramScale = ramCapacity < 8 ? 0.7 : ramCapacity < 16 ? 0.84 : 1;
  if (ramCapacity >= 32) ramScale = 1.03;
  const integratedGraphics = gpu.score < 60;
  if (ramChannelSelect.value === "single") ramScale *= integratedGraphics ? 0.68 : 0.88;
  const speed = Number(ramSpeedSelect.value);
  if (integratedGraphics) ramScale *= Math.max(0.75, Math.min(1.12, Math.sqrt(speed / 3200)));
  const windowsScale = windowsSelect.value === "Windows 10" ? 0.98 : 1;
  const estimatedAverage = Math.max(
    1,
    Math.min(480, baseFps * gpuScale * cpuScale *
      resolutionScale[resolutionSelect.value] *
      qualityScale[qualitySelect.value] *
      ramScale * windowsScale)
  );
  const margin = integratedGraphics || ramCapacity < 16 ? 0.4 : 0.3;
  return {
    average: Math.max(1, Math.round(estimatedAverage)),
    min: Math.max(1, Math.floor(estimatedAverage * (1 - margin))),
    max: Math.min(480, Math.ceil(estimatedAverage * (1 + margin)))
  };
}

function calculate() {
  const cpu = processors.find((item) => item.name === cpuSelect.value);
  const gpu = graphicsCards.find((item) => item.name === gpuSelect.value);
  if (!cpu || !gpu || !selectedGame) return;

  const benchmark = findVerifiedBenchmark(cpu, gpu);
  const resolutionLabel = resolutionSelect.options[resolutionSelect.selectedIndex].text;
  const qualityLabel = qualitySelect.options[qualitySelect.selectedIndex].text;
  document.querySelector("#result-game").textContent = selectedGame.name;
  document.querySelector("#result-settings").textContent = `${resolutionLabel} · ${qualityLabel}`;
  document.querySelector("#result-memory").textContent =
    `${ramCapacitySelect.value} GB ${ramTypeSelect.value} ${ramSpeedSelect.value} MT/s · ${ramChannelSelect.value === "dual" ? "Dual" : "Single"} · ${windowsSelect.value}`;
  document.querySelector("#result-cpu").textContent = cpu.name;
  document.querySelector("#result-gpu").textContent = gpu.name;
  const fpsValue = document.querySelector("#fps-value");
  const fpsBar = document.querySelector("#fps-bar");
  const status = document.querySelector(".performance-status");
  const statusMessage = document.querySelector("#performance-status");
  const onePercentLow = document.querySelector("#one-percent-low");
  const bottleneckTitle = document.querySelector("#bottleneck-title");
  const bottleneckMessage = document.querySelector("#bottleneck-message");
  const benchmarkSource = document.querySelector("#benchmark-source");
  benchmarkSource.hidden = true;
  benchmarkSource.removeAttribute("href");
  fpsBar.style.width = "0%";

  if (benchmark) {
    fpsValue.textContent = benchmark.averageFps.toLocaleString("en");
    fpsBar.style.width = `${Math.min(benchmark.averageFps / 180 * 100, 100)}%`;
    onePercentLow.textContent = benchmark.onePercentLow
      ? `1% Low: ${benchmark.onePercentLow.toLocaleString("en")} FPS`
      : "1% Low: ما توفرش في الاختبار";
    statusMessage.textContent = `نتيجة اختبار فعلي — ${benchmark.testDate}`;
    status.className = "performance-status verified";
    bottleneckTitle.textContent = "نتيجة من اختبار موثّق";
    bottleneckMessage.textContent = "مطابقة اللعبة والقطع والرام والويندوز والإعدادات مع بيانات الاختبار.";
    benchmarkSource.href = benchmark.source;
    benchmarkSource.textContent = "شوف مصدر الاختبار";
    benchmarkSource.hidden = false;
  } else {
    const estimate = estimateFps(cpu, gpu);
    fpsValue.textContent = estimate.average.toLocaleString("en");
    fpsBar.style.width = `${Math.min(estimate.average / 180 * 100, 100)}%`;
    onePercentLow.textContent =
      `النطاق المتوقع تقريباً: ${estimate.min}–${estimate.max} FPS`;
    statusMessage.textContent = "تقدير تقريبي — ماشي نتيجة اختبار مباشر.";
    status.className = `performance-status ${estimate.average >= 60 ? "good" : estimate.average >= 30 ? "medium" : "low"}`;
    bottleneckTitle.textContent = "تقدير حسابي";
    bottleneckMessage.textContent =
      "حسبنا مدى تقريبي من اللعبة والمعالج والكرت والدقة والجودة والرام؛ النتيجة الفعلية تقدر تختلف.";
  }

  const selectedGameLabel = document.querySelector("#selected-game");
  selectedGameLabel.replaceChildren(document.createTextNode("اللعبة المختارة: "));
  const gameName = document.createElement("b");
  gameName.textContent = selectedGame.name;
  selectedGameLabel.append(gameName);
}

fillHardwareOptions(cpuSelect, processors);
fillHardwareOptions(gpuSelect, graphicsCards);
updateRamSpeeds();
cpuSelect.value = "AMD Ryzen 5 5600";
gpuSelect.value = "NVIDIA GeForce RTX 4060";
filterHardware(cpuSelect, "");
filterHardware(gpuSelect, "");
renderGames();
calculate();
gameSearch.addEventListener("input", renderGames);
gameSearch.addEventListener("focus", () => {
  if (gameSearch.value.trim()) renderGames();
});
gameSearch.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" && !gameList.hidden) {
    event.preventDefault();
    highlightSuggestion(highlightedSuggestion + 1);
  } else if (event.key === "ArrowUp" && !gameList.hidden) {
    event.preventDefault();
    highlightSuggestion(highlightedSuggestion < 0 ? suggestions.length - 1 : highlightedSuggestion - 1);
  } else if (event.key === "Enter" && !gameList.hidden && suggestions.length) {
    event.preventDefault();
    chooseGame(suggestions[highlightedSuggestion < 0 ? 0 : highlightedSuggestion]);
  } else if (event.key === "Escape") {
    closeGameSuggestions();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".game-search-wrap")) closeGameSuggestions();
});
cpuSearch.addEventListener("input", () => filterHardware(cpuSelect, cpuSearch.value));
gpuSearch.addEventListener("input", () => filterHardware(gpuSelect, gpuSearch.value));
ramTypeSelect.addEventListener("change", updateRamSpeeds);
for (const control of [
  cpuSelect, gpuSelect, resolutionSelect, qualitySelect, ramCapacitySelect,
  ramTypeSelect, ramSpeedSelect, ramChannelSelect, windowsSelect
]) {
  control.addEventListener("change", calculate);
}