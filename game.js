var grassColor = '#39b546';
var sandColor = '#e2df22';
var humanColor = '#e2dc95';
var treeColor = '#935e2f';
var leafColor = '#37d30c';

var elementsCountInRow = 68;
var elementsCountInColumn = 38;

var countOfBiomes = 3;//default = 3



var Biome = (function () {
    function Biome(name, verticalStart, verticalEnd, endsAndStarts, color) {
        this.Name = name;
        this.VerticalStart = verticalStart;
        this.VerticalEnd = verticalEnd;
        this.HorizontalStartEnds = endsAndStarts;
        this.Color = color;
    }
    return Biome;
}());

var Human = (function () {
    function Human(name) {
        this.Name = name;
    }
    return Human;
}());
var Yura = new Human("Yura Fedirko");
document.writeln(Yura.Name);
////////////////////////////////////////////////////

var pjs = new PointJS('2d', 1366, 768, {
    backgroundColor: someColor
});
var game = pjs.game;


for (var i = 0; i < elementsCountInColumn; i++)
{
    for (var j = 0; j < elementsCountInRow; j++)
    {

    }
}
