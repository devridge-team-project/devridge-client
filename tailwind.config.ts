import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "pretendard-medium": ["pretendard-medium"],
    },
    extend: {
      fontSize: {
        xxxxs: "0.225rem",
        xxxs: "0.5rem",
        xxs: "0.625rem",
        xm: "0.875rem",
        "1xl": "1rem",
      },
      inset: {
        6.5: "1.625rem",
        8.75: "2.1875rem",
        300: "75rem",
      },
      spacing: {
        1: "0.25rem",
        1.25: "0.3125rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        2.75: "0.6875rem",
        3: "0.75rem",
        3.25: "0.8125rem",
        3.5: "0.875rem",
        3.75: "0.9375rem",
        6: "1.5rem",
        6.25: "1.5625rem",
        7: "1.75rem",
        7.25: "1.8125rem",
        7.5: "1.875rem",
        8: "2rem",
        8.5: "2.125rem",
        8.75: "2.1875rem",
        9: "2.25rem",
        12: "3rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.75: "3.4375rem",
        14: "3.5rem",
        15: "3.75rem",
        15.5: "3.875rem",
        17.25: "4.3125rem",
        17.5: "4.375rem",
        20: "5rem",
        21.25: "5.3125rem",
        22.5: "6.25rem",
        23: "5.75rem",
        24.5: "6.125rem",
        25: "6.25rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        35: "8.75rem",
        37: "9.25rem",
        37.5: "9.375rem",
        39: "9.75rem",
        44: "11rem",
        50: "12.5rem",
        55: "13.75rem",
        62.5: "15.625rem",
        66: "16.5rem",
        67.5: "16.875rem",
        70: "17.5rem",
        76: "19rem",
        78: "19.5rem",
        78.5: "19.625rem",
        80: "20rem",
        80.5: "20.125rem",
        81: "20.25rem",
        84: "21rem",
        92: "23rem",
        96: "24rem",
        120: "30rem",
        128: "32rem",
        150: "37.5rem",
        152: "38rem",
        157: "39.25rem",
        160: "40rem",
        188: "47rem",
        300: "75rem",
        400: "100rem",
        500: "125rem",
        800: "200rem",
      },
      width: {
        "3/10": "30%",
        "9/10": "90%",
      },
      maxWidth: {
        80: "20rem",
        120: "30rem",
      },
      minWidth: {
        12.5: "3.125rem",
        72: "18rem",
        80: "20rem",
        120: "30rem",
        160: "40rem",
      },
      minHeight: {
        44: "11rem",
        60: "15rem",
        80: "20rem",
      },
      colors: {
        "kakao-yellow": "#FEE500",
        "kakao-brown": "#3C1E1E",
        "naver-green": "#03C75A",
        "charcoal-gray": "#242424",
        "near-black": "#0C0E0F",
        "white-gray": "#D9D9D9",
        "white-off": "#F1F1F1",
        "medium-gray": "#AFAFAF",
        "bright-gray": "#BABFC5",
        "bright-purple": "#4F26F4",
        "dark-gray": "#464646",
        "white-purple": "rgba(79, 38, 244, 0.25)",
      },
      opacity: {
        35: "0.35",
      },
      transitionDuration: {
        500: "500ms",
        1000: "1000ms",
      },
      transitionDelay: {
        500: "500ms",
      },
      backgroundImage: {
        "image-bubble": "url('/images/home/bubble.png')",
        "image-developer-man": "url('/images/home/developer-man.png')",
      },
    },
  },
} satisfies Config;
