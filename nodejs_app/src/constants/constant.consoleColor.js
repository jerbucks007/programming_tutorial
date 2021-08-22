
const CONSOLE_COLOR = {
    FgBlack: (text) => {
        console.log(`\x1b[30m`, text, CONSOLE_EFFECT.Reset);
    },
    FgRed: (text) => {
        console.log(`\x1b[31m`, text, CONSOLE_EFFECT.Reset)
    },
    FgGreen: (text) => {
        console.log(`\x1b[32m`, text, CONSOLE_EFFECT.Reset)
    },
    FgYellow: (text) => {
        console.log(`\x1b[33m`, text, CONSOLE_EFFECT.Reset)
    },
    FgBlue: (text) => {
        console.log(`\x1b[34m`, text, CONSOLE_EFFECT.Reset)
    },
    FgMagenta: (text) => {
        console.log(`\x1b[35m`, text, CONSOLE_EFFECT.Reset)
    },
    FgCyan: (text) => {
        console.log(`\x1b[36m`, text, CONSOLE_EFFECT.Reset)
    },
    FgWhite: (text) => {
        console.log(`\x1b[37m`, text, CONSOLE_EFFECT.Reset)
    },
};

const CONSOLE_EFFECT = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
};

exports.CONSOLE = CONSOLE_COLOR;
exports.EFFECT = CONSOLE_EFFECT;