/**
 * Created by kravets_da on 08.10.2016.
 */
// Задаие 1. Cоздать и разметить шахматную доску
function createChessTable() {
    var array = ["A", "B", "C", "D", "E", "F", "G", "H"];
    document.write("<table style='margin-left: 39px;' border=0><tr>");
    for (var i = 0; i < 8; i++) {
        document.write("<td style='width: 32px; text-align: center;'>");
        document.write(array[i], "</td>");
    }
    document.write("</tr></table>");
    document.write("<div>");
    document.write("<table border=0 style='float:left;'>");
    for (var i = 1; i <= 8; i++) {
        document.write("<tr><td style='width: 32px; height: 32px; text-align: center;'>");
        document.write(i, "</td></tr>");
    }
    document.write("</tr></table>");
    document.write("<table border=1 style='float:left;' class='chessTable'>");
    for (var i = 8; i > 0; i--) {
        document.write("<tr>");
        for (var j = 0; j < 8; j++) {
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                document.write("<td style='width: 30px; height: 30px; background-color: #fff; text-align: center;'></td>");
            } else {
                document.write("<td style='width: 30px; height: 30px; background-color: grey; text-align: center;'></td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("</div>");
}

createChessTable();

