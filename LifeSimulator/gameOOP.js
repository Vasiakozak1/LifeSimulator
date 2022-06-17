var Human = (function () {
    function Human(name) {
        this.Name = name;
    }
    return Human;
}());
var Biome = (function () {
    function Biome(name, verticalStart, verticalEnd, endsAndStarts) {
        this.Name = name;
        this.VerticalStart = verticalStart;
        this.VerticalEnd = verticalEnd;
        this.HorizontalStartEnds = endsAndStarts;
        switch (this.Name) {
            case BiomeType.Desert:
                this.Color = '#e2df22';
                break;
            case BiomeType.Steppe:
                this.Color = '#39b546';
                break;
        }
    }
    return Biome;
}());
var BiomeType;
(function (BiomeType) {
    BiomeType[BiomeType["Steppe"] = 0] = "Steppe";
    BiomeType[BiomeType["Desert"] = 1] = "Desert";
})(BiomeType || (BiomeType = {}));
function RandNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function GetLeftUpperIndexInMatrix(matrix) {
    for (var a = 0; a < matrix.length; a++) {
        for (var b = 0; b < matrix[a].length; b++) {
            if (matrix[a][b] == false)
                return [a, b];
        }
    }
    alert("Матриця переповнена");
    return null;
}
function FindLefterEmptyBlock(matrix, numberOfLine) {
    for (var i = 0; i < matrix[numberOfLine].length; i++) {
        if (matrix[numberOfLine][i] == false)
            return i;
    }
    return -1;
}
function CreateBioms(countOfBioms, width, height, middleSizeOfBioms) {
    var countOfTypesOfBioms = 2;
    var resBioms = new Array();
    //Двовимірний масив для визначення які комірки ігрового поля вільні а які ні
    var gameArea;
    gameArea = new Array(height);
    /*
        При матриці 3 на 3
        0 0 0
        0 0 0
        0 0 0
    */
    for (var i = 0; i < height; i++) {
        var currentRow = new Array(width);
        for (var j = 0; j < width; j++) {
            currentRow[j] = false; //тіпа не заповнений
        }
        gameArea[i] = currentRow;
    }
    for (var i = 0; i < countOfBioms; i++) {
        var tempBiome = void 0;
        var typeOfBiome = void 0;
        var vertStart = void 0;
        var vertEnd = void 0;
        var startsEnds = void 0;
        //початок біома
        //
        var randNum = Math.floor(Math.random() * countOfTypesOfBioms - 1);
        switch (randNum) {
            case 0:
                typeOfBiome = BiomeType.Steppe;
                break;
            case 1:
                typeOfBiome = BiomeType.Desert;
                break;
        }
        var leftUpperIndex = GetLeftUpperIndexInMatrix(gameArea);
        if (leftUpperIndex == null)
            return resBioms;
        var randVerticalSize = RandNumBetween(middleSizeOfBioms - 2, middleSizeOfBioms + 2);
        vertStart = leftUpperIndex[0];
        vertEnd = vertStart + randVerticalSize;
        startsEnds = new Array(vertEnd - vertStart);
        var numberOfLineOfBiome = 0;
        //Середня ширина біомів
        var middleSizeOfWidth = middleSizeOfBioms * (width / height);
        for (var i_1 = vertStart; i_1 < vertEnd - vertStart; i_1++) {
            var lenghtOfRow = RandNumBetween(middleSizeOfWidth - 1, middleSizeOfWidth + 1);
            var startIndex = FindLefterEmptyBlock(gameArea, i_1);
            startsEnds[numberOfLineOfBiome] = [startIndex, startIndex + lenghtOfRow];
            numberOfLineOfBiome++;
            for (var j_1 = startIndex; j_1 < startIndex + lenghtOfRow; j_1++) {
                gameArea[i_1][j_1] = true;
            }
            middleSizeOfWidth = lenghtOfRow;
        }
        tempBiome = new Biome(typeOfBiome, vertStart, vertEnd, startsEnds);
        resBioms.push(tempBiome);
    }
    return resBioms;
}
var Yura = new Human("Yura Fedirko");
document.writeln(Yura.Name);
var mess = "hah";
