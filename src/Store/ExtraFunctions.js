const ExtraFunction = {
  methods: {
    sliceText(text, length) {
      // console.log("Extra Functions" + text);
      return ("" + text).trim().slice(0, length) + "...";
    }
  }
};

export default ExtraFunction;
