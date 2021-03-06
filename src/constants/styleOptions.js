export const styles = [
  { name: "Abah's Watch", stone: "Polished Shilling" },
  { name: "Akaviri", stone: "Goldscale" },
  { name: "Aldmeri Dominion", stone: "Eagle Feather" },
  { name: "Ancient Elf", stone: "Palladium" },
  { name: "Ancient Orc", stone: "Cassiterite" },
  { name: "Anequina", stone: "Shimmering Sand" },
  { name: "Apostle", stone: "Polished Brass" },
  { name: "Argonian", stone: "Flint" },
  { name: "Ashlander", stone: "Ash Canvas" },
  { name: "Assassins League", stone: "Tainted Blood" },
  { name: "Barbaric", stone: "Copper" },
  { name: "Bloodforge", stone: "Bloodroot Flux" },
  { name: "Buoyant Armiger", stone: "Volcant Viridian" },
  { name: "Breton", stone: "Molybdenum" },
  { name: "Celestial", stone: "Star Sapphire" },
  { name: "Daedric", stone: "Daedra Heart" },
  { name: "Daggerfall Covenant", stone: "Lion Fang" },
  { name: "Dark Brotherhood", stone: "Black Beeswax" },
  { name: "Dark Elf (Dunmer)", stone: "Obsidian" },
  { name: "Dead Water", stone: "Crocodile Leather" },
  { name: "Draugr", stone: "Pristine Shroud" },
  { name: "Dreadhorn", stone: "Minotaur Bezoar" },
  { name: "Dremora", stone: "Warrior's Heart Ashes" },
  { name: "Dro-m’Athra", stone: "Defiled Whiskers" },
  { name: "Dwemer", stone: "Dwemer Frame" },
  { name: "Ebonheart Pact", stone: "Dragon Scute" },
  { name: "Ebonshadow", stone: "Tenebrous Cord" },
  { name: "Ebony", stone: "Night Pumice" },
  { name: "Elder Argonian", stone: "Hackwing Plumage" },
  { name: "Fang Lair", stone: "Dragon Bone" },
  { name: "Glass", stone: "Malachite" },
  { name: "Grim Harlequin", stone: "Grinmaterial" },
  { name: "High Elf (Altmer)", stone: "Adamantite" },
  { name: "Hlaalu", stone: "Bonemold Resin" },
  { name: "Hollowjack", stone: "Amber Marble" },
  { name: "Honor Guard", stone: "Read Diamond Seals" },
  { name: "Huntsman", stone: "Bloodscent Dew" },
  { name: "Imperial", stone: "Nickel" },
  { name: "Khajiit", stone: "Moonmaterial" },
  { name: "Malacath", stone: "Potash" },
  { name: "Mazzatun", stone: "Leviathan Scrimshaw" },
  { name: "Mercenary", stone: "Laurel" },
  { name: "Militant Ordinator", stone: "Lustrous Sphalerite" },
  { name: "Minotaur", stone: "Oxblood Fungus" },
  { name: "Morag Tong", stone: "Boiled Carapace" },
  { name: "Nord", stone: "Corundum" },
  { name: "Orc", stone: "Manganese" },
  { name: "Order Of The Hour", stone: "Pearl Sand" },
  { name: "Outlaw", stone: "Rogue's Soot" },
  { name: "Primal", stone: "Argentum" },
  { name: "Psijic Order", stone: "Vitrified Malondo" },
  { name: "Pyandonean", stone: "Sea Serpent Hide" },
  { name: "Ra Gada", stone: "Ancient Sandmaterial" },
  { name: "Redguard", stone: "Starmetal" },
  { name: "Redoran", stone: "Polished Scarab Elytra" },
  { name: "Frostcaster", stone: "Stalhrim" },
  { name: "Sapiarch", stone: "Culanda Lacquer" },
  { name: "Scalecaller", stone: "Infected Flesh" },
  { name: "Silken Ring", stone: "Distilled Slowsilver" },
  { name: "Silver Dawn", stone: "Argent Pelts" },
  { name: "Skinchanger", stone: "Wolfsbane Incense" },
  { name: "Soul Shriven", stone: "Azure Plasm" },
  { name: "Telvanni", stone: "Wrought Ferrofungus" },
  { name: "Thieves Guild", stone: "Fine Chalk" },
  { name: "Trinimac", stone: "Auric Tusk" },
  { name: "Tsaesci", stone: "Snake Fang" },
  { name: "Welkynar", stone: "Gryphon Plume" },
  { name: "Wood Elf (Bosmer)", stone: "Bone" },
  { name: "Worm Cult", stone: "Desecrated Grave Soil" },
  { name: "Xivkyn", stone: "Charcoal of Remorse" },
  { name: "Yokudan", stone: "Ferrous Salts" },
  { name: "Pellitine", stone: "Dragonthread" },
  { name: "Coldsnap Goblin", stone: "Goblin-cloth Scrap" },
  { name: "Meridian", stone: "Auroran Dust" },
  { name: "Dragonguard", stone: "Gilding Salts" },
  { name: "Refabricated", stone: "Polished Rivets" },
  { name: "Sunspire", stone: "Frost Embers" },
  { name: "Moongrave Fane", stone: "Blood of Sahrotnax" },
  { name: "Stags of Z'en", stone: "Oath Cord" },
  { name: "Shield of Senchal", stone: "Carmine Shieldsilk" },
  { name: "New Moon Priest", stone: "Aeonstone Shard" },
  { name: "Blackreach Vanguard", stone: "Gloomspore Chitin" },
  { name: "Ancestral High Elf", stone: "Etched Adamantite" },
  { name: "Ancestral Nord", stone: "Etched Corundum" },
  { name: "Ancestral Orc", stone: "Etched Manganese" },
  { name: "Icereach Coven", stone: "Fryse Willow" },
  { name: "Pyre Watch", stone: "Consecrated Myrrh" }
];

export default [
  { value: 'No Preference', stone: 'Any Style Stone', label: 'No Preference', color: '#fcb935', isFixed: true }
].concat(
  styles.sort((a, b) => (a.name > b.name) ? 1 : -1)
  .map(style => ({ value: style.name, stone: style.stone, label: style.name, color: '#2DC50E', isFixed: true }))
)
