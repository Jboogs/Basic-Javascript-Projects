function skiDictionary() {
    var mySki = {
        Brand: "Volkl",
        Model: "Mantra",
        Year: 2020,
        width: "98mm",
        Category: "All-Mountain",
        Difficulty: "Expert"
    };
    delete mySki.Year
    document.getElementById("dictionary").innerHTML = mySki.Year;
}