export type PlanetName =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn"
  | "Rahu"
  | "Ketu"
  | "Uranus"
  | "Neptune"
  | "Pluto"

export type ZodiacSignName =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces"

export type NakshatraName =
  | "Ashwini"
  | "Bharani"
  | "Krittika"
  | "Rohini"
  | "Mrigashira"
  | "Ardra"
  | "Punarvasu"
  | "Pushya"
  | "Ashlesha"
  | "Magha"
  | "Purva Phalguni"
  | "Uttara Phalguni"
  | "Hasta"
  | "Chitra"
  | "Swati"
  | "Vishakha"
  | "Anuradha"
  | "Jyeshtha"
  | "Mula"
  | "Purva Ashadha"
  | "Uttara Ashadha"
  | "Shravana"
  | "Dhanishta"
  | "Shatabhisha"
  | "Purva Bhadrapada"
  | "Uttara Bhadrapada"
  | "Revati"

export type HouseNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type DashaPlanet = "Sun" | "Moon" | "Mars" | "Rahu" | "Jupiter" | "Saturn" | "Mercury" | "Ketu" | "Venus"

export interface CoordinateData {
  latitude: number
  longitude: number
  timezone: string
  utcOffset: number
}

export interface TimeData {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}

// Astrological calculation constants
export const PLANET_COLORS = {
  Sun: "#FF6B35",
  Moon: "#4ECDC4",
  Mars: "#FF3333",
  Mercury: "#4CAF50",
  Jupiter: "#FFD700",
  Venus: "#FF69B4",
  Saturn: "#8B4513",
  Rahu: "#800080",
  Ketu: "#FF8C00",
  Uranus: "#00CED1",
  Neptune: "#4169E1",
  Pluto: "#8B008B",
} as const

export const ZODIAC_ELEMENTS = {
  Aries: "Fire",
  Taurus: "Earth",
  Gemini: "Air",
  Cancer: "Water",
  Leo: "Fire",
  Virgo: "Earth",
  Libra: "Air",
  Scorpio: "Water",
  Sagittarius: "Fire",
  Capricorn: "Earth",
  Aquarius: "Air",
  Pisces: "Water",
} as const

export const HOUSE_SIGNIFICANCES = {
  1: ["Self", "Personality", "Physical Appearance", "Health"],
  2: ["Wealth", "Family", "Speech", "Food"],
  3: ["Siblings", "Communication", "Short Journeys", "Courage"],
  4: ["Mother", "Home", "Property", "Education"],
  5: ["Children", "Creativity", "Romance", "Intelligence"],
  6: ["Enemies", "Disease", "Service", "Debts"],
  7: ["Marriage", "Partnership", "Business", "Spouse"],
  8: ["Longevity", "Transformation", "Occult", "Inheritance"],
  9: ["Father", "Religion", "Higher Learning", "Fortune"],
  10: ["Career", "Reputation", "Authority", "Government"],
  11: ["Gains", "Friends", "Aspirations", "Elder Siblings"],
  12: ["Losses", "Spirituality", "Foreign Lands", "Moksha"],
} as const
