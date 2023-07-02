export const processOutput = (outputStr: string, str: string): string => {
    if (outputStr.trim() !== '') {
        outputStr += `\n${str}`;
        return outputStr;
    }

    return str;
};
