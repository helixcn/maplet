var bubu ={ s64:"35817",s65:"63419",s11:"101009",s12:"60361",s13:"208524",s14:"95096",s15:"56241",s21:"218705",s22:"98005",s23:"114041",s31:"199710",s32:"519425",s33:"313196",s34:"156591",s35:"212392",s36:"123320",s37:"280377",s41:"262564",s42:"237368",s43:"255638",s44:"638403",s45:"270857",s46:"35274",s50:"145221",s51:"261651",s52:"55668",s53:"75202",s54:"4555",s61:"83368",s62:"43728",s63:"19360" };
var title = "2005年各地区废水排放总量";
var unit = "万吨";
function getColor(d) {
    return d > 280000 ? '#800026' :
           d > 260000  ? '#BD0026' :
           d > 210000  ? '#E31A1C' :
           d > 130000  ? '#FC4E2A' :
           d > 98000   ? '#FD8D3C' :
           d > 63000  ? '#FEB24C' :
           d > 40000   ? '#FED976' :
           d > 4500   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [4500, 40000, 63000, 98000, 130000, 210000, 260000, 280000];