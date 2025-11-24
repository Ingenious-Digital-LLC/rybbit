"use client";

import { CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

interface FontStyle {
  name: string;
  transform: (text: string) => string;
  description: string;
}

const fontStyles: FontStyle[] = [
  {
    name: "Bold Text",
    description: "𝐁𝐨𝐥𝐝 𝐬𝐞𝐫𝐢𝐟",
    transform: (text: string) => {
      const bold = {
        a: "𝐚",
        b: "𝐛",
        c: "𝐜",
        d: "𝐝",
        e: "𝐞",
        f: "𝐟",
        g: "𝐠",
        h: "𝐡",
        i: "𝐢",
        j: "𝐣",
        k: "𝐤",
        l: "𝐥",
        m: "𝐦",
        n: "𝐧",
        o: "𝐨",
        p: "𝐩",
        q: "𝐪",
        r: "𝐫",
        s: "𝐬",
        t: "𝐭",
        u: "𝐮",
        v: "𝐯",
        w: "𝐰",
        x: "𝐱",
        y: "𝐲",
        z: "𝐳",
        A: "𝐀",
        B: "𝐁",
        C: "𝐂",
        D: "𝐃",
        E: "𝐄",
        F: "𝐅",
        G: "𝐆",
        H: "𝐇",
        I: "𝐈",
        J: "𝐉",
        K: "𝐊",
        L: "𝐋",
        M: "𝐌",
        N: "𝐍",
        O: "𝐎",
        P: "𝐏",
        Q: "𝐐",
        R: "𝐑",
        S: "𝐒",
        T: "𝐓",
        U: "𝐔",
        V: "𝐕",
        W: "𝐖",
        X: "𝐗",
        Y: "𝐘",
        Z: "𝐙",
      };
      return text
        .split("")
        .map(char => bold[char as keyof typeof bold] || char)
        .join("");
    },
  },
  {
    name: "Italic Text",
    description: "𝘐𝘵𝘢𝘭𝘪𝘤 𝘴𝘦𝘳𝘪𝘧",
    transform: (text: string) => {
      const italic = {
        a: "𝘢",
        b: "𝘣",
        c: "𝘤",
        d: "𝘥",
        e: "𝘦",
        f: "𝘧",
        g: "𝘨",
        h: "𝘩",
        i: "𝘪",
        j: "𝘫",
        k: "𝘬",
        l: "𝘭",
        m: "𝘮",
        n: "𝘯",
        o: "𝘰",
        p: "𝘱",
        q: "𝘲",
        r: "𝘳",
        s: "𝘴",
        t: "𝘵",
        u: "𝘶",
        v: "𝘷",
        w: "𝘸",
        x: "𝘹",
        y: "𝘺",
        z: "𝘻",
        A: "𝘈",
        B: "𝘉",
        C: "𝘊",
        D: "𝘋",
        E: "𝘌",
        F: "𝘍",
        G: "𝘎",
        H: "𝘏",
        I: "𝘐",
        J: "𝘑",
        K: "𝘒",
        L: "𝘓",
        M: "𝘔",
        N: "𝘕",
        O: "𝘖",
        P: "𝘗",
        Q: "𝘘",
        R: "𝘙",
        S: "𝘚",
        T: "𝘛",
        U: "𝘜",
        V: "𝘝",
        W: "𝘞",
        X: "𝘟",
        Y: "𝘠",
        Z: "𝘡",
      };
      return text
        .split("")
        .map(char => italic[char as keyof typeof italic] || char)
        .join("");
    },
  },
  {
    name: "Bold Italic",
    description: "𝙗𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘",
    transform: (text: string) => {
      const boldItalic = {
        a: "𝙖",
        b: "𝙗",
        c: "𝙘",
        d: "𝙙",
        e: "𝙚",
        f: "𝙛",
        g: "𝙜",
        h: "𝙝",
        i: "𝙞",
        j: "𝙟",
        k: "𝙠",
        l: "𝙡",
        m: "𝙢",
        n: "𝙣",
        o: "𝙤",
        p: "𝙥",
        q: "𝙦",
        r: "𝙧",
        s: "𝙨",
        t: "𝙩",
        u: "𝙪",
        v: "𝙫",
        w: "𝙬",
        x: "𝙭",
        y: "𝙮",
        z: "𝙯",
        A: "𝘼",
        B: "𝘽",
        C: "𝘾",
        D: "𝘿",
        E: "𝙀",
        F: "𝙁",
        G: "𝙂",
        H: "𝙃",
        I: "𝙄",
        J: "𝙅",
        K: "𝙆",
        L: "𝙇",
        M: "𝙈",
        N: "𝙉",
        O: "𝙊",
        P: "𝙋",
        Q: "𝙌",
        R: "𝙍",
        S: "𝙎",
        T: "𝙏",
        U: "𝙐",
        V: "𝙑",
        W: "𝙒",
        X: "𝙓",
        Y: "𝙔",
        Z: "𝙕",
      };
      return text
        .split("")
        .map(char => boldItalic[char as keyof typeof boldItalic] || char)
        .join("");
    },
  },
  {
    name: "Script/Cursive",
    description: "𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓼𝓽𝔂𝓵𝓮",
    transform: (text: string) => {
      const script = {
        a: "𝓪",
        b: "𝓫",
        c: "𝓬",
        d: "𝓭",
        e: "𝓮",
        f: "𝓯",
        g: "𝓰",
        h: "𝓱",
        i: "𝓲",
        j: "𝓳",
        k: "𝓴",
        l: "𝓵",
        m: "𝓶",
        n: "𝓷",
        o: "𝓸",
        p: "𝓹",
        q: "𝓺",
        r: "𝓻",
        s: "𝓼",
        t: "𝓽",
        u: "𝓾",
        v: "𝓿",
        w: "𝔀",
        x: "𝔁",
        y: "𝔂",
        z: "𝔃",
        A: "𝓐",
        B: "𝓑",
        C: "𝓒",
        D: "𝓓",
        E: "𝓔",
        F: "𝓕",
        G: "𝓖",
        H: "𝓗",
        I: "𝓘",
        J: "𝓙",
        K: "𝓚",
        L: "𝓛",
        M: "𝓜",
        N: "𝓝",
        O: "𝓞",
        P: "𝓟",
        Q: "𝓠",
        R: "𝓡",
        S: "𝓢",
        T: "𝓣",
        U: "𝓤",
        V: "𝓥",
        W: "𝓦",
        X: "𝓧",
        Y: "𝓨",
        Z: "𝓩",
      };
      return text
        .split("")
        .map(char => script[char as keyof typeof script] || char)
        .join("");
    },
  },
  {
    name: "Bold Script",
    description: "𝓑𝓸𝓵𝓭 𝓒𝓾𝓻𝓼𝓲𝓿𝓮",
    transform: (text: string) => {
      const boldScript = {
        a: "𝓪",
        b: "𝓫",
        c: "𝓬",
        d: "𝓭",
        e: "𝓮",
        f: "𝓯",
        g: "𝓰",
        h: "𝓱",
        i: "𝓲",
        j: "𝓳",
        k: "𝓴",
        l: "𝓵",
        m: "𝓶",
        n: "𝓷",
        o: "𝓸",
        p: "𝓹",
        q: "𝓺",
        r: "𝓻",
        s: "𝓼",
        t: "𝓽",
        u: "𝓾",
        v: "𝓿",
        w: "𝔀",
        x: "𝔁",
        y: "𝔂",
        z: "𝔃",
        A: "𝓐",
        B: "𝓑",
        C: "𝓒",
        D: "𝓓",
        E: "𝓔",
        F: "𝓕",
        G: "𝓖",
        H: "𝓗",
        I: "𝓘",
        J: "𝓙",
        K: "𝓚",
        L: "𝓛",
        M: "𝓜",
        N: "𝓝",
        O: "𝓞",
        P: "𝓟",
        Q: "𝓠",
        R: "𝓡",
        S: "𝓢",
        T: "𝓣",
        U: "𝓤",
        V: "𝓥",
        W: "𝓦",
        X: "𝓧",
        Y: "𝓨",
        Z: "𝓩",
      };
      return text
        .split("")
        .map(char => boldScript[char as keyof typeof boldScript] || char)
        .join("");
    },
  },
  {
    name: "Sans-serif",
    description: "𝖲𝖺𝗇𝗌-𝗌𝖾𝗋𝗂𝖿",
    transform: (text: string) => {
      const sans = {
        a: "𝖺",
        b: "𝖻",
        c: "𝖼",
        d: "𝖽",
        e: "𝖾",
        f: "𝖿",
        g: "𝗀",
        h: "𝗁",
        i: "𝗂",
        j: "𝗃",
        k: "𝗄",
        l: "𝗅",
        m: "𝗆",
        n: "𝗇",
        o: "𝗈",
        p: "𝗉",
        q: "𝗊",
        r: "𝗋",
        s: "𝗌",
        t: "𝗍",
        u: "𝗎",
        v: "𝗏",
        w: "𝗐",
        x: "𝗑",
        y: "𝗒",
        z: "𝗓",
        A: "𝖠",
        B: "𝖡",
        C: "𝖢",
        D: "𝖣",
        E: "𝖤",
        F: "𝖥",
        G: "𝖦",
        H: "𝖧",
        I: "𝖨",
        J: "𝖩",
        K: "𝖪",
        L: "𝖫",
        M: "𝖬",
        N: "𝖭",
        O: "𝖮",
        P: "𝖯",
        Q: "𝖰",
        R: "𝖱",
        S: "𝖲",
        T: "𝖳",
        U: "𝖴",
        V: "𝖵",
        W: "𝖶",
        X: "𝖷",
        Y: "𝖸",
        Z: "𝖹",
      };
      return text
        .split("")
        .map(char => sans[char as keyof typeof sans] || char)
        .join("");
    },
  },
  {
    name: "Bold Sans-serif",
    description: "𝗕𝗼𝗹𝗱 𝘀𝗮𝗻𝘀",
    transform: (text: string) => {
      const boldSans = {
        a: "𝗮",
        b: "𝗯",
        c: "𝗰",
        d: "𝗱",
        e: "𝗲",
        f: "𝗳",
        g: "𝗴",
        h: "𝗵",
        i: "𝗶",
        j: "𝗷",
        k: "𝗸",
        l: "𝗹",
        m: "𝗺",
        n: "𝗻",
        o: "𝗼",
        p: "𝗽",
        q: "𝗾",
        r: "𝗿",
        s: "𝘀",
        t: "𝘁",
        u: "𝘂",
        v: "𝘃",
        w: "𝘄",
        x: "𝘅",
        y: "𝘆",
        z: "𝘇",
        A: "𝗔",
        B: "𝗕",
        C: "𝗖",
        D: "𝗗",
        E: "𝗘",
        F: "𝗙",
        G: "𝗚",
        H: "𝗛",
        I: "𝗜",
        J: "𝗝",
        K: "𝗞",
        L: "𝗟",
        M: "𝗠",
        N: "𝗡",
        O: "𝗢",
        P: "𝗣",
        Q: "𝗤",
        R: "𝗥",
        S: "𝗦",
        T: "𝗧",
        U: "𝗨",
        V: "𝗩",
        W: "𝗪",
        X: "𝗫",
        Y: "𝗬",
        Z: "𝗭",
      };
      return text
        .split("")
        .map(char => boldSans[char as keyof typeof boldSans] || char)
        .join("");
    },
  },
  {
    name: "Monospace",
    description: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",
    transform: (text: string) => {
      const mono = {
        a: "𝚊",
        b: "𝚋",
        c: "𝚌",
        d: "𝚍",
        e: "𝚎",
        f: "𝚏",
        g: "𝚐",
        h: "𝚑",
        i: "𝚒",
        j: "𝚓",
        k: "𝚔",
        l: "𝚕",
        m: "𝚖",
        n: "𝚗",
        o: "𝚘",
        p: "𝚙",
        q: "𝚚",
        r: "𝚛",
        s: "𝚜",
        t: "𝚝",
        u: "𝚞",
        v: "𝚟",
        w: "𝚠",
        x: "𝚡",
        y: "𝚢",
        z: "𝚣",
        A: "𝙰",
        B: "𝙱",
        C: "𝙲",
        D: "𝙳",
        E: "𝙴",
        F: "𝙵",
        G: "𝙶",
        H: "𝙷",
        I: "𝙸",
        J: "𝙹",
        K: "𝙺",
        L: "𝙻",
        M: "𝙼",
        N: "𝙽",
        O: "𝙾",
        P: "𝙿",
        Q: "𝚀",
        R: "𝚁",
        S: "𝚂",
        T: "𝚃",
        U: "𝚄",
        V: "𝚅",
        W: "𝚆",
        X: "𝚇",
        Y: "𝚈",
        Z: "𝚉",
      };
      return text
        .split("")
        .map(char => mono[char as keyof typeof mono] || char)
        .join("");
    },
  },
  {
    name: "Double-Struck",
    description: "𝔻𝕠𝕦𝕓𝕝𝕖-𝕤𝕥𝕣𝕦𝕔𝕜",
    transform: (text: string) => {
      const double = {
        a: "𝕒",
        b: "𝕓",
        c: "𝕔",
        d: "𝕕",
        e: "𝕖",
        f: "𝕗",
        g: "𝕘",
        h: "𝕙",
        i: "𝕚",
        j: "𝕛",
        k: "𝕜",
        l: "𝕝",
        m: "𝕞",
        n: "𝕟",
        o: "𝕠",
        p: "𝕡",
        q: "𝕢",
        r: "𝕣",
        s: "𝕤",
        t: "𝕥",
        u: "𝕦",
        v: "𝕧",
        w: "𝕨",
        x: "𝕩",
        y: "𝕪",
        z: "𝕫",
        A: "𝔸",
        B: "𝔹",
        C: "ℂ",
        D: "𝔻",
        E: "𝔼",
        F: "𝔽",
        G: "𝔾",
        H: "ℍ",
        I: "𝕀",
        J: "𝕁",
        K: "𝕂",
        L: "𝕃",
        M: "𝕄",
        N: "ℕ",
        O: "𝕆",
        P: "ℙ",
        Q: "ℚ",
        R: "ℝ",
        S: "𝕊",
        T: "𝕋",
        U: "𝕌",
        V: "𝕍",
        W: "𝕎",
        X: "𝕏",
        Y: "𝕐",
        Z: "ℤ",
      };
      return text
        .split("")
        .map(char => double[char as keyof typeof double] || char)
        .join("");
    },
  },
  {
    name: "Fraktur/Gothic",
    description: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯",
    transform: (text: string) => {
      const fraktur = {
        a: "𝔞",
        b: "𝔟",
        c: "𝔠",
        d: "𝔡",
        e: "𝔢",
        f: "𝔣",
        g: "𝔤",
        h: "𝔥",
        i: "𝔦",
        j: "𝔧",
        k: "𝔨",
        l: "𝔩",
        m: "𝔪",
        n: "𝔫",
        o: "𝔬",
        p: "𝔭",
        q: "𝔮",
        r: "𝔯",
        s: "𝔰",
        t: "𝔱",
        u: "𝔲",
        v: "𝔳",
        w: "𝔴",
        x: "𝔵",
        y: "𝔶",
        z: "𝔷",
        A: "𝔄",
        B: "𝔅",
        C: "ℭ",
        D: "𝔇",
        E: "𝔈",
        F: "𝔉",
        G: "𝔊",
        H: "ℌ",
        I: "ℑ",
        J: "𝔍",
        K: "𝔎",
        L: "𝔏",
        M: "𝔐",
        N: "𝔑",
        O: "𝔒",
        P: "𝔓",
        Q: "𝔔",
        R: "ℜ",
        S: "𝔖",
        T: "𝔗",
        U: "𝔘",
        V: "𝔙",
        W: "𝔚",
        X: "𝔛",
        Y: "𝔜",
        Z: "ℨ",
      };
      return text
        .split("")
        .map(char => fraktur[char as keyof typeof fraktur] || char)
        .join("");
    },
  },
  {
    name: "Circled",
    description: "Ⓒⓘⓡⓒⓛⓔⓓ",
    transform: (text: string) => {
      const circled = {
        a: "ⓐ",
        b: "ⓑ",
        c: "ⓒ",
        d: "ⓓ",
        e: "ⓔ",
        f: "ⓕ",
        g: "ⓖ",
        h: "ⓗ",
        i: "ⓘ",
        j: "ⓙ",
        k: "ⓚ",
        l: "ⓛ",
        m: "ⓜ",
        n: "ⓝ",
        o: "ⓞ",
        p: "ⓟ",
        q: "ⓠ",
        r: "ⓡ",
        s: "ⓢ",
        t: "ⓣ",
        u: "ⓤ",
        v: "ⓥ",
        w: "ⓦ",
        x: "ⓧ",
        y: "ⓨ",
        z: "ⓩ",
        A: "Ⓐ",
        B: "Ⓑ",
        C: "Ⓒ",
        D: "Ⓓ",
        E: "Ⓔ",
        F: "Ⓕ",
        G: "Ⓖ",
        H: "Ⓗ",
        I: "Ⓘ",
        J: "Ⓙ",
        K: "Ⓚ",
        L: "Ⓛ",
        M: "Ⓜ",
        N: "Ⓝ",
        O: "Ⓞ",
        P: "Ⓟ",
        Q: "Ⓠ",
        R: "Ⓡ",
        S: "Ⓢ",
        T: "Ⓣ",
        U: "Ⓤ",
        V: "Ⓥ",
        W: "Ⓦ",
        X: "Ⓧ",
        Y: "Ⓨ",
        Z: "Ⓩ",
      };
      return text
        .split("")
        .map(char => circled[char as keyof typeof circled] || char)
        .join("");
    },
  },
  {
    name: "Squared",
    description: "🅂🅀🅄🄰🅁🄴🄳",
    transform: (text: string) => {
      const squared = {
        a: "🄰",
        b: "🄱",
        c: "🄲",
        d: "🄳",
        e: "🄴",
        f: "🄵",
        g: "🄶",
        h: "🄷",
        i: "🄸",
        j: "🄹",
        k: "🄺",
        l: "🄻",
        m: "🄼",
        n: "🄽",
        o: "🄾",
        p: "🄿",
        q: "🅀",
        r: "🅁",
        s: "🅂",
        t: "🅃",
        u: "🅄",
        v: "🅅",
        w: "🅆",
        x: "🅇",
        y: "🅈",
        z: "🅉",
        A: "🄰",
        B: "🄱",
        C: "🄲",
        D: "🄳",
        E: "🄴",
        F: "🄵",
        G: "🄶",
        H: "🄷",
        I: "🄸",
        J: "🄹",
        K: "🄺",
        L: "🄻",
        M: "🄼",
        N: "🄽",
        O: "🄾",
        P: "🄿",
        Q: "🅀",
        R: "🅁",
        S: "🅂",
        T: "🅃",
        U: "🅄",
        V: "🅅",
        W: "🅆",
        X: "🅇",
        Y: "🅈",
        Z: "🅉",
      };
      return text
        .split("")
        .map(char => squared[char as keyof typeof squared] || char)
        .join("");
    },
  },
  {
    name: "Negative Squared",
    description: "🅽🅴🅶🅰🆃🅸🆅🅴",
    transform: (text: string) => {
      const negSquared = {
        a: "🅰",
        b: "🅱",
        c: "🅲",
        d: "🅳",
        e: "🅴",
        f: "🅵",
        g: "🅶",
        h: "🅷",
        i: "🅸",
        j: "🅹",
        k: "🅺",
        l: "🅻",
        m: "🅼",
        n: "🅽",
        o: "🅾",
        p: "🅿",
        q: "🆀",
        r: "🆁",
        s: "🆂",
        t: "🆃",
        u: "🆄",
        v: "🆅",
        w: "🆆",
        x: "🆇",
        y: "🆈",
        z: "🆉",
        A: "🅰",
        B: "🅱",
        C: "🅲",
        D: "🅳",
        E: "🅴",
        F: "🅵",
        G: "🅶",
        H: "🅷",
        I: "🅸",
        J: "🅹",
        K: "🅺",
        L: "🅻",
        M: "🅼",
        N: "🅽",
        O: "🅾",
        P: "🅿",
        Q: "🆀",
        R: "🆁",
        S: "🆂",
        T: "🆃",
        U: "🆄",
        V: "🆅",
        W: "🆆",
        X: "🆇",
        Y: "🆈",
        Z: "🆉",
      };
      return text
        .split("")
        .map(char => negSquared[char as keyof typeof negSquared] || char)
        .join("");
    },
  },
  {
    name: "Fullwidth",
    description: "Ｆｕｌｌｗｉｄｔｈ",
    transform: (text: string) => {
      const fullwidth = {
        a: "ａ",
        b: "ｂ",
        c: "ｃ",
        d: "ｄ",
        e: "ｅ",
        f: "ｆ",
        g: "ｇ",
        h: "ｈ",
        i: "ｉ",
        j: "ｊ",
        k: "ｋ",
        l: "ｌ",
        m: "ｍ",
        n: "ｎ",
        o: "ｏ",
        p: "ｐ",
        q: "ｑ",
        r: "ｒ",
        s: "ｓ",
        t: "ｔ",
        u: "ｕ",
        v: "ｖ",
        w: "ｗ",
        x: "ｘ",
        y: "ｙ",
        z: "ｚ",
        A: "Ａ",
        B: "Ｂ",
        C: "Ｃ",
        D: "Ｄ",
        E: "Ｅ",
        F: "Ｆ",
        G: "Ｇ",
        H: "Ｈ",
        I: "Ｉ",
        J: "Ｊ",
        K: "Ｋ",
        L: "Ｌ",
        M: "Ｍ",
        N: "Ｎ",
        O: "Ｏ",
        P: "Ｐ",
        Q: "Ｑ",
        R: "Ｒ",
        S: "Ｓ",
        T: "Ｔ",
        U: "Ｕ",
        V: "Ｖ",
        W: "Ｗ",
        X: "Ｘ",
        Y: "Ｙ",
        Z: "Ｚ",
      };
      return text
        .split("")
        .map(char => fullwidth[char as keyof typeof fullwidth] || char)
        .join("");
    },
  },
  {
    name: "Small Caps",
    description: "sᴍᴀʟʟ ᴄᴀᴘs",
    transform: (text: string) => {
      const smallCaps = {
        a: "ᴀ",
        b: "ʙ",
        c: "ᴄ",
        d: "ᴅ",
        e: "ᴇ",
        f: "ғ",
        g: "ɢ",
        h: "ʜ",
        i: "ɪ",
        j: "ᴊ",
        k: "ᴋ",
        l: "ʟ",
        m: "ᴍ",
        n: "ɴ",
        o: "ᴏ",
        p: "ᴘ",
        q: "ǫ",
        r: "ʀ",
        s: "s",
        t: "ᴛ",
        u: "ᴜ",
        v: "ᴠ",
        w: "ᴡ",
        x: "x",
        y: "ʏ",
        z: "ᴢ",
        A: "ᴀ",
        B: "ʙ",
        C: "ᴄ",
        D: "ᴅ",
        E: "ᴇ",
        F: "ғ",
        G: "ɢ",
        H: "ʜ",
        I: "ɪ",
        J: "ᴊ",
        K: "ᴋ",
        L: "ʟ",
        M: "ᴍ",
        N: "ɴ",
        O: "ᴏ",
        P: "ᴘ",
        Q: "ǫ",
        R: "ʀ",
        S: "s",
        T: "ᴛ",
        U: "ᴜ",
        V: "ᴠ",
        W: "ᴡ",
        X: "x",
        Y: "ʏ",
        Z: "ᴢ",
      };
      return text
        .split("")
        .map(char => smallCaps[char as keyof typeof smallCaps] || char)
        .join("");
    },
  },
  {
    name: "Superscript",
    description: "ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ",
    transform: (text: string) => {
      const superscript = {
        a: "ᵃ",
        b: "ᵇ",
        c: "ᶜ",
        d: "ᵈ",
        e: "ᵉ",
        f: "ᶠ",
        g: "ᵍ",
        h: "ʰ",
        i: "ⁱ",
        j: "ʲ",
        k: "ᵏ",
        l: "ˡ",
        m: "ᵐ",
        n: "ⁿ",
        o: "ᵒ",
        p: "ᵖ",
        q: "q",
        r: "ʳ",
        s: "ˢ",
        t: "ᵗ",
        u: "ᵘ",
        v: "ᵛ",
        w: "ʷ",
        x: "ˣ",
        y: "ʸ",
        z: "ᶻ",
        A: "ᴬ",
        B: "ᴮ",
        C: "ᶜ",
        D: "ᴰ",
        E: "ᴱ",
        F: "ᶠ",
        G: "ᴳ",
        H: "ᴴ",
        I: "ᴵ",
        J: "ᴶ",
        K: "ᴷ",
        L: "ᴸ",
        M: "ᴹ",
        N: "ᴺ",
        O: "ᴼ",
        P: "ᴾ",
        Q: "Q",
        R: "ᴿ",
        S: "ˢ",
        T: "ᵀ",
        U: "ᵁ",
        V: "ⱽ",
        W: "ᵂ",
        X: "ˣ",
        Y: "ʸ",
        Z: "ᶻ",
      };
      return text
        .split("")
        .map(char => superscript[char as keyof typeof superscript] || char)
        .join("");
    },
  },
  {
    name: "Subscript",
    description: "ₛᵤᵦₛ𝒸ᵣᵢₚₜ",
    transform: (text: string) => {
      const subscript = {
        a: "ₐ",
        b: "b",
        c: "c",
        d: "d",
        e: "ₑ",
        f: "f",
        g: "g",
        h: "ₕ",
        i: "ᵢ",
        j: "ⱼ",
        k: "ₖ",
        l: "ₗ",
        m: "ₘ",
        n: "ₙ",
        o: "ₒ",
        p: "ₚ",
        q: "q",
        r: "ᵣ",
        s: "ₛ",
        t: "ₜ",
        u: "ᵤ",
        v: "ᵥ",
        w: "w",
        x: "ₓ",
        y: "y",
        z: "z",
        A: "ₐ",
        B: "b",
        C: "c",
        D: "d",
        E: "ₑ",
        F: "f",
        G: "g",
        H: "ₕ",
        I: "ᵢ",
        J: "ⱼ",
        K: "ₖ",
        L: "ₗ",
        M: "ₘ",
        N: "ₙ",
        O: "ₒ",
        P: "ₚ",
        Q: "q",
        R: "ᵣ",
        S: "ₛ",
        T: "ₜ",
        U: "ᵤ",
        V: "ᵥ",
        W: "w",
        X: "ₓ",
        Y: "y",
        Z: "z",
      };
      return text
        .split("")
        .map(char => subscript[char as keyof typeof subscript] || char)
        .join("");
    },
  },
  {
    name: "Upside Down",
    description: "uʍop ǝpᴉsd∩",
    transform: (text: string) => {
      const upside = {
        a: "ɐ",
        b: "q",
        c: "ɔ",
        d: "p",
        e: "ǝ",
        f: "ɟ",
        g: "ƃ",
        h: "ɥ",
        i: "ᴉ",
        j: "ɾ",
        k: "ʞ",
        l: "l",
        m: "ɯ",
        n: "u",
        o: "o",
        p: "d",
        q: "b",
        r: "ɹ",
        s: "s",
        t: "ʇ",
        u: "n",
        v: "ʌ",
        w: "ʍ",
        x: "x",
        y: "ʎ",
        z: "z",
        A: "∀",
        B: "q",
        C: "Ɔ",
        D: "p",
        E: "Ǝ",
        F: "Ⅎ",
        G: "פ",
        H: "H",
        I: "I",
        J: "ſ",
        K: "ʞ",
        L: "˥",
        M: "W",
        N: "N",
        O: "O",
        P: "Ԁ",
        Q: "b",
        R: "ɹ",
        S: "S",
        T: "┴",
        U: "∩",
        V: "Λ",
        W: "M",
        X: "X",
        Y: "⅄",
        Z: "Z",
      };
      return text
        .split("")
        .map(char => upside[char as keyof typeof upside] || char)
        .join("")
        .split("")
        .reverse()
        .join("");
    },
  },
  {
    name: "Strikethrough",
    description: "S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶",
    transform: (text: string) => {
      return text
        .split("")
        .map(char => char + "\u0336")
        .join("");
    },
  },
  {
    name: "Underline",
    description: "U̲n̲d̲e̲r̲l̲i̲n̲e̲",
    transform: (text: string) => {
      return text
        .split("")
        .map(char => char + "\u0332")
        .join("");
    },
  },
];

interface FontGeneratorToolProps {
  platformName?: string;
  characterLimit?: number;
}

export function FontGeneratorTool({ platformName, characterLimit }: FontGeneratorToolProps) {
  const [inputText, setInputText] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const transformedTexts = fontStyles.map(style => ({
    ...style,
    result: inputText ? style.transform(inputText) : "",
    length: inputText ? style.transform(inputText).length : 0,
  }));

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
          Enter your text {platformName && `for ${platformName}`}
        </label>
        <textarea
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Type your text here..."
          rows={3}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
        />
        {characterLimit && inputText && (
          <p
            className={`text-xs mt-1 ${
              inputText.length > characterLimit
                ? "text-red-600 dark:text-red-400"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
          >
            {inputText.length} / {characterLimit} characters
            {inputText.length > characterLimit && ` (${inputText.length - characterLimit} over limit)`}
          </p>
        )}
      </div>

      {inputText && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Font Styles</h3>
          <div className="grid gap-3">
            {transformedTexts.map((style, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">{style.name}</p>
                    <p className="text-neutral-900 dark:text-white break-words font-medium text-lg">{style.result}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(style.result, index)}
                    className="flex-shrink-0 px-3 py-1.5 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white text-sm rounded-lg transition-colors flex items-center gap-2"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!inputText && (
        <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
          Enter text above to see it transformed into different font styles
        </div>
      )}
    </div>
  );
}
