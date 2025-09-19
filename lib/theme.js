// Black theme configuration for Vedic Astro AI
export const blackTheme = {
  colors: {
    // Core colors - Pure black theme
    background: "#000000",
    foreground: "#ffffff",

    // Card colors
    card: "#0a0a0a",
    cardForeground: "#ffffff",

    // Popover colors
    popover: "#000000",
    popoverForeground: "#ffffff",

    // Primary colors - Purple gradient for mystical feel
    primary: "#8b5cf6",
    primaryForeground: "#ffffff",

    // Secondary colors
    secondary: "#1a1a1a",
    secondaryForeground: "#ffffff",

    // Muted colors
    muted: "#262626",
    mutedForeground: "#a3a3a3",

    // Accent colors - Gold for mystical accent
    accent: "#fbbf24",
    accentForeground: "#000000",

    // Destructive colors
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",

    // Border and input colors
    border: "#404040",
    input: "#1a1a1a",
    ring: "#8b5cf6",

    // Chart colors - Mystical palette
    chart1: "#8b5cf6", // Purple
    chart2: "#06b6d4", // Cyan
    chart3: "#10b981", // Emerald
    chart4: "#f59e0b", // Amber
    chart5: "#ef4444", // Red

    // Sidebar colors
    sidebar: "#000000",
    sidebarForeground: "#ffffff",
    sidebarPrimary: "#8b5cf6",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent: "#1a1a1a",
    sidebarAccentForeground: "#ffffff",
    sidebarBorder: "#404040",
    sidebarRing: "#8b5cf6",
  },

  // Gradient definitions for mystical effects
  gradients: {
    primary: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    mystical: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)",
    dark: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
    card: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
  },

  // Shadow definitions
  shadows: {
    sm: "0 1px 2px 0 rgba(139, 92, 246, 0.05)",
    md: "0 4px 6px -1px rgba(139, 92, 246, 0.1)",
    lg: "0 10px 15px -3px rgba(139, 92, 246, 0.1)",
    xl: "0 20px 25px -5px rgba(139, 92, 246, 0.1)",
  },
}

// Theme utility functions
export const getThemeColor = (colorName) => {
  return blackTheme.colors[colorName] || "#ffffff"
}

export const getThemeGradient = (gradientName) => {
  return blackTheme.gradients[gradientName] || blackTheme.gradients.dark
}

// CSS custom properties generator
export const generateCSSVariables = () => {
  const cssVars = {}

  Object.entries(blackTheme.colors).forEach(([key, value]) => {
    // Convert camelCase to kebab-case
    const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase()
    cssVars[`--${cssKey}`] = value
  })

  return cssVars
}
