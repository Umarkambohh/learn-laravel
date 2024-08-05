/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      "open-sans": ["Open Sans"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "clamp(16px, calc(1rem + ((1vw - 3.2px) * 0.5)), 24px)",
      32: "clamp(16px, calc(1rem + ((1vw - 3.2px) * 1)), 32px)",
      36: "clamp(18px, calc(1.125rem + ((1vw - 3.2px) * 1.125)), 36px)",
      56: "3.5rem",
      64: "clamp(30px, calc(1.875rem + ((1vw - 3.2px) * 2.125)), 64px)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "1rem",
        xl: "4rem",
      },
    },
    colors: {
      "white": "#FFFFFF",
      "alabaster": "#fafafa",
      "black": "#000000",
      "twilight-blue": "#F0FBFF",
      "kodama": "#e8f6fc",
      "burnt-orange": "#C65301",
      "burnt-orange-inverse": "#d55901",
      "whisper": "#F0F0F8",
      "pervenche": "#177CAB",
      "charcoal": "#323232",
      "denim": "#157FAC",
      "denim-inverse": "#1789ba",
      "picton-blue": "#42B1E5",
      "nevada": "#686B6F",
      "gray": "#818181",
      "light-gray": "#0000001A",
      "navy": "#00183E",
      "dead-pixel": "#3A3A3A",
      "prussian-blue": "#013353",
      "carona": "#F7A42C",
      "shark": "#232328",
      "dove-gray": "#656565",
      "negroni": "#FEE0C5",
      "tundora": "#404040",
      "pattens-blue": "#DEEFFF",
      "fern": "#66B76B",
      "deluge": "#765CA4",
      "deluge-light": "#EAE5F2",
      "emerald": "#4CC654",
      "emerald-light": "#F0FFF1",
      "atoll": "#0C6287",
      "cod-gray": "#1E1E1E",
      "mercury": "#E5E5E5",
      "cape-honey": "#FDDDAC",
    },
    borderRadius: {
      6: "6px",
      20: "20px",
      25: "25px",
      40: "40px",
      full: "100%",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      1: "1px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
    },
    extend: {
      boxShadow: {
        navbar: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "navbar-bottom": "0px -1px 4px 0px rgba(0, 0, 0, 0.25)",
        search: "0 2px 10px 2px rgba(0, 0, 0, 0.15)",
        navigation: "0 4px 10px 0px rgba(0, 0, 0, 0.25)",
        card: "1px 2px 10px 1px rgba(0, 0, 0, 0.25)",
        "content-card": "0px 2px 10px 2px rgba(0, 0, 0, 0.15)",
        sidebar: "2px 0px 6px 0px rgba(0, 0, 0, 0.15)",
        bottom: "0 2px 2px 0 rgba(0, 0, 0, 0.1)",
        "bottom-left": "2px 4px 4px rgba(0, 0, 0, .1)",
      },
      lineHeight: {
        54: "54px",
      },
      height: {
        400: "400px",
        360: "360px",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
}

