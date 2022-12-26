import { divStyles } from "../data/website-data";

const { tryToParse } = require("../utility/helpers");
const { gods } = require('../data/website-data');

export const getDivinity = (idleonData, serializedCharactersData) => {
  const divinityRaw = tryToParse(idleonData?.Divinity) || idleonData?.Divinity;
  return parseDivinity(divinityRaw, serializedCharactersData);
}

const parseDivinity = (divinityRaw, serializedCharactersData) => {
  const numberOfChars = serializedCharactersData?.length;
  const deitiesStartIndex = 12;
  const linkedDeities = divinityRaw.slice(deitiesStartIndex, deitiesStartIndex + numberOfChars);
  const deities = gods?.map((god, index) => {
      return {
        ...god,
        rawName: `DivGod${index}`,
      }
    }
  );
  const blessingBasesStartIndex = 28;
  const blessingBases = divinityRaw.slice(blessingBasesStartIndex, blessingBasesStartIndex + deities?.length + 1);
  const linkedStyles = divinityRaw.slice(0, serializedCharactersData?.length + 1);
  return {
    linkedDeities,
    linkedStyles,
    deities,
    blessingBases
  }
}


export const getDivStyleExpAndPoints = (divStyle) => {
  const divPerHour = getDivinityPerHour(divStyle);
  const style = divStyles?.[divStyle];
  return {
    ...style,
  }
}

const getDivinityPerHour = (divStyle) => {
  if (divStyle === 0 || divStyle === 2 || divStyle === 3) {
    return 1;
  } else if (divStyle === 1) {
    return 2;
  } else if (divStyle === 4) {
    return 7;
  } else if (divStyle === 5) {
    return 3;
  } else if (divStyle === 6) {
    return 4;
  } else if (divStyle === 7) {
    return 10;
  }
}