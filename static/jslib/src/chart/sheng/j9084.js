var bubu ={ s64:"1743",s65:"6012",s11:"2003",s12:"1916",s13:"18221",s14:"8904",s15:"6588",s21:"10123",s22:"7322",s23:"9984",s31:"2429",s32:"20688",s33:"12966",s34:"19633",s35:"11322",s36:"13694",s37:"22840",s41:"25153",s42:"16702",s43:"20545",s44:"26596",s45:"15622",s46:"2136",s50:"12701",s51:"31767",s52:"14488",s53:"17888",s54:"1146",s61:"10222",s62:"8307",s63:"1710" };
var title = "2004年教育程度-小学";
var unit = "人";
function getColor(d) {
    return d > 23000 ? '#800026' :
           d > 20000  ? '#BD0026' :
           d > 15000  ? '#E31A1C' :
           d > 12000  ? '#FC4E2A' :
           d > 9000   ? '#FD8D3C' :
           d > 6200  ? '#FEB24C' :
           d > 2000   ? '#FED976' :
           d > 1100   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [1100, 2000, 6200, 9000, 12000, 15000, 20000, 23000];