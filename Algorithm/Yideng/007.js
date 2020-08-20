/********************************
每日算法一练
#007 替换空格

请实现一个函数，将一个字符串中的每个空格替换成 "%20"。
；例如， 当字符串为 "We Are Happy", 则经过替换之后的字符串为 "We%20Are%20Happy" 。

要求：不准用正则和内置函数


********************************/

const str =
    "We Are HappyWe Are HappyWe Are HappyWe Are HappyWe Are HappyWe Are HappyWe Are HappyWe Are HappyWe Are HappyWe Are Happy";

const replaceBlank = (s) => {
    let replaced = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) === 32) {
            replaced += "%20";
        } else {
            replaced += s[i];
        }
    }

    return replaced;
};

const replaceSpace = (s) => {
    if (!s || !s.length) {
        return "";
    }
    let emptyNum = 0,
        chNum = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            ++emptyNum;
        } else {
            ++chNum;
        }
    }

    const length = emptyNum * 2 + chNum;
    const chs = new Array(length);

    for (let i = 0, j = 0; i < s.length; j++) {
        if (s[j] === " ") {
            chs[i++] = "%";
            chs[i++] = "2";
            chs[i++] = "0";
        } else {
            chs[i++] = s[j];
        }
    }

    return chs.join("");
};

console.time("replaceBlank");
replaceBlank(str);
console.timeEnd("replaceBlank");
//============================================================
console.time("replaceSpace");
replaceSpace(str);
console.timeEnd("replaceSpace");
