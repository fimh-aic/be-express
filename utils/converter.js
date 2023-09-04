let converter = {
  convertToEnglish: (classLabel) => {
    const translation = {
      apel: "apple",
      tauge: "bean sprouts",
      "daging ayam": "chicken meat",
      mentimun: "cucumber",
      jahe: "ginger",
      jeruk: "orange",
      keju: "cheese",
      "daging domba": "lamb meat",
      daging: "meat",
      nasi: "rice",
      pisang: "banana",
      kentang: "potato",
      "daging salmon": "salmon meat",
      sosis: "sausage",
      sawi: "mustard greens",
      susu: "milk",
      wortel: "carrot",
    };

    return translation[classLabel] || classLabel;
  },
  convertToIndonesian: (classLabel) => {
    const translation = {
      apple: "apel",
      "bean sprouts": "tauge",
      "chicken meat": "daging ayam",
      cucumber: "mentimun",
      ginger: "jahe",
      orange: "jeruk",
      cheese: "keju",
      "lamb meat": "daging domba",
      meat: "daging",
      rice: "nasi",
      banana: "pisang",
      potato: "kentang",
      "salmon meat": "daging salmon",
      sausage: "sosis",
      "mustard greens": "sawi",
      milk: "susu",
      carrot: "wortel",
    };

    return translation[classLabel] || classLabel;
  },
};

module.exports = converter;
