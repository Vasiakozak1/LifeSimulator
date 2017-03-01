
class Human {
    public Name: string;
    constructor(name: string) {
        this.Name = name;
    }
}

class Biome
{
    public VerticalStart: number;
    public VerticalEnd: number;
    public Color: string;
    public HorizontalStartEnds: Array<[number, number]>;
    public Name: BiomeType;

    public constructor(name: BiomeType, verticalStart: number, verticalEnd: number, endsAndStarts: Array<[number, number]>)
    {
        this.Name = name;
        this.VerticalStart = verticalStart;
        this.VerticalEnd = verticalEnd;
        this.HorizontalStartEnds = endsAndStarts;

        switch (this.Name)
        {
            case BiomeType.Desert:
                this.Color = '#e2df22';
                break;
            case BiomeType.Steppe:
                this.Color = '#39b546';
                break;
        }
    }
}
enum BiomeType
{
    Steppe = 0,
    Desert = 1
}

function RandNumBetween(min: number, max: number)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function GetLeftUpperIndexInMatrix(matrix: Array<boolean[]>): [number, number]
{  
    for (let a = 0; a < matrix.length; a++)
    {
        for (let b = 0; b < matrix[a].length; b++)
        {
            if (matrix[a][b] == false)
                return [a, b];
        }
    }
    alert("Матриця переповнена");
    return null;
}

function FindLefterEmptyBlock(matrix: Array<boolean[]>, numberOfLine: number)
{
    for (let i = 0; i < matrix[numberOfLine].length; i++)
    {
        if (matrix[numberOfLine][i] == false)
            return i;
    }
    return -1;
}

function CreateBioms(countOfBioms: number, width: number, height: number, middleSizeOfBioms: number): Biome[]
{
    let countOfTypesOfBioms = 2;
    let resBioms = new Array<Biome>();
    //Двовимірний масив для визначення які комірки ігрового поля вільні а які ні
    let gameArea: Array<boolean[]>;
    gameArea = new Array(height);

    /*
        При матриці 3 на 3
        0 0 0
        0 0 0
        0 0 0
    */
    for (var i = 0; i < height; i++)
    {
        let currentRow: boolean[] = new Array(width);
        for (var j = 0; j < width; j++)
        {
            currentRow[j] = false;//тіпа не заповнений
        }
        gameArea[i] = currentRow;
    }   

    
    
    for (var i = 0; i < countOfBioms; i++)
    {
        let tempBiome: Biome;
        let typeOfBiome: BiomeType;
        let vertStart: number;
        let vertEnd: number;
        let startsEnds: Array<[number, number]>;

        //початок біома
        
        //
        var randNum = Math.floor(Math.random() * countOfTypesOfBioms - 1);
        switch (randNum)
        {
            case 0:
                typeOfBiome = BiomeType.Steppe;
                break;
            case 1:
                typeOfBiome = BiomeType.Desert;
                break;
        }

        let leftUpperIndex = GetLeftUpperIndexInMatrix(gameArea);
        if (leftUpperIndex == null)
            return resBioms;

        let randVerticalSize = RandNumBetween(middleSizeOfBioms - 2, middleSizeOfBioms + 2);
        vertStart = leftUpperIndex[0];
        vertEnd = vertStart + randVerticalSize;

        startsEnds = new Array(vertEnd - vertStart);
        let numberOfLineOfBiome = 0;

        //Середня ширина біомів
        let middleSizeOfWidth: number = middleSizeOfBioms * (width / height);
        for (let i = vertStart; i < vertEnd - vertStart; i++)
        {
            let lenghtOfRow = RandNumBetween(middleSizeOfWidth - 1, middleSizeOfWidth + 1);

            let startIndex = FindLefterEmptyBlock(gameArea, i);

            startsEnds[numberOfLineOfBiome] = [startIndex, startIndex + lenghtOfRow];
            numberOfLineOfBiome++;

            for (let j = startIndex; j < startIndex + lenghtOfRow; j++)
            {
                gameArea[i][j] = true;
            }
            middleSizeOfWidth = lenghtOfRow;
        }
        tempBiome = new Biome(typeOfBiome, vertStart, vertEnd, startsEnds);
        resBioms.push(tempBiome);
    }

    return resBioms;
}

let Yura: Human = new Human("Yura Fedirko");
document.writeln(Yura.Name);
let mess: string = "hah";
