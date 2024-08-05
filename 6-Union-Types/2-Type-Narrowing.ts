function printLength(strArray: string | string[]) {
  if (typeof strArray === "string") {
    console.log("es str ->", strArray.length);
  } else {
    console.log("es array -> ", strArray.length);
  }
}

printLength("gothangelsinner");
printLength(["hola", "como", "estas"]);
