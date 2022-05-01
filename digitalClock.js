//Zero ASCII
function zero(line, scale) {
	if (line == 1 || line == (2 * scale + 3)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	if (line == (scale + 2)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	if (line > 1 && line <= (scale + 1)) {
		document.write("|");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
	
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		document.write("|");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
}

//One ASCII
function one(line, scale) {
	//For the top, middle, bottom lines: print "    +"
	if (line == 1 || line == (scale + 2) || line == (2 * scale + 3)) {
		for (var i = 0; i < (scale + 1); i++) {
			document.write("&nbsp");
		}
		document.write("+");
		document.write("&nbsp");
	}
	//For the top-half: print "    |" in each line
	if (line > 1 && line <= (scale + 1)) {
		for (var i = 0; i < (scale + 1); i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
	
	//For the bottom half: print "    |" in each line
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		for (var i = 0; i < (scale + 1); i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
}

//Two ASCII
function two(line, scale) {

	//Top, middle, bottom line: print "+---+"
	if (line == 1 || line == (scale + 2) || line == (2 * scale + 3)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	//Top half: print "    |" in each line
	if (line > 1 && line <= (scale + 1)) {
		for (var i = 0; i <= scale; i++) {
			document.write("&nbsp");
		}
		document.write("|&nbsp");
	}
	
	//Bottom half: print "|    " in each line
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		document.write("|");
		for (var i = 0; i <= scale; i++) {
			document.write("&nbsp");
		}
		document.write("&nbsp");
	}
}

//Three ASCII
function three(line, scale) {
	//Top, middle, bottom line: print "+---+"
	if (line == 1 || line == (scale + 2) || line == (2 * scale + 3)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	//Top half: print "    |" each line
	if (line > 1 && line <= (scale + 1)) {
		for (var i = 0; i <= scale; i++) {
			document.write("&nbsp");
		}
		document.write("|&nbsp");
	}
	
	//bottom half: print "    |" each line
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		for (var i = 0; i <= scale; i++) {
			document.write("&nbsp");
		}
		document.write("|&nbsp");
	}
}

//Four ASCII	
function four(line, scale) {
	if (line == 1) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	if (line > 1 && line <= (scale + 1)) {
		document.write("|");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
	
	if (line == (scale + 2)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");

	}
	
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("&nbsp|");
		document.write("&nbsp");
	}
		if (line == (2*scale+3)) {
		document.write("&nbsp");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("+");
		document.write("&nbsp");
	}
}

//Five ASCII		
function five(line, scale) {
	if (line == 1 || line == (scale + 2) || line == (2 * scale + 3)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}
	if (line > 1 && line <= (scale + 1)) {
			document.write("|");
		for (var i = 0; i <= scale; i++) {
			document.write("&nbsp");
		}
		document.write("&nbsp");
	}
	
		if (line > (scale + 2) && line <= (2 * scale + 2)) {
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("&nbsp|");
		document.write("&nbsp");
	}

}

//Six ASCII
function six(line, scale) {
	if (line == 1 || line == (scale + 2) || line == (2 * scale + 3)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
		if (line > 1 && line <= (scale + 1)) {
			document.write("|");
		for (var i = 0; i <= scale; i++) {
			document.write("&nbsp");
		}
		document.write("&nbsp");
	}
	
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		document.write("|");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
}

//Seven ASCII
function seven(line, scale) {
	if (line == 1) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}

		if (line == (scale + 2) || line == (2 * scale + 3)) {
		for (var i = 0; i < (scale + 1); i++) {
			document.write("&nbsp");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	if (line > 1 && line <= (scale + 1)) {
		for (var i = 0; i < (scale + 1); i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
	
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		for (var i = 0; i < (scale + 1); i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
}

//Eight ASCII
function eight(line, scale) {
	if (line == 1 || line == (scale + 2) || line == (2 * scale + 3)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	if (line > 1 && line <= (scale + 1)) {
		document.write("|");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
	
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		document.write("|");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
}

//Nine ASCII
function nine(line, scale) {
		if (line == 1 || line == (scale + 2) || line == (2 * scale + 3)) {
		document.write("+");
		for (var i = 0; i < scale; i++) {
			document.write("-");
		}
		document.write("+");
		document.write("&nbsp");
	}
	
	if (line > 1 && line <= (scale + 1)) {
		document.write("|");
		for (var i = 0; i < scale; i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
	
	if (line > (scale + 2) && line <= (2 * scale + 2)) {
		for (var i = 0; i < (scale + 1); i++) {
			document.write("&nbsp");
		}
		document.write("|");
		document.write("&nbsp");
	}
}

//Separator ASCII
function separator(line, scale) {
	//Figure out how high the top DOT is and how high the bottom DOT is (in  ' : '  )
	middle = Math.ceil((2 * scale + 3)/2)
	split1 = Math.ceil(middle/2);
	split2 = Math.floor(middle/2) + middle;
	
	//On the two lines where the dot appears, insert "+"
	if (line == split1 || line == split2) {
		//Figure out how much space to the left of the dot
		for (var i = 0; i < (scale/2); i++) {
			document.write("&nbsp");
		}
		//Write the dot
		document.write("+");
		//Figure out how much space to the right of the dot
		//The Dot sits in an uneven middle, depending on if the scale is odd or even. If it is even, you need to ADD one more blank space to the right.
		for (var i = 0; i < (scale/2) + 1 - scale%2; i++) {
			document.write("&nbsp");
		}
	} else {
		//On every other line, insert blank lines
		for (var i = 0; i < (scale + 2); i++) {
			document.write("&nbsp");
		}
	}
	
}



//Run the Clock Function
function runClock(scale, timeMeasure) {

d = new Date()
hours = d.getHours().toString();
hours = (hours > 12 && timeMeasure) ? hours - 12 : hours;

number = ( hours + ":" + (d.getMinutes()).toString() + ":" + (d.getSeconds()).toString());

//Change ROW
for (i = 1; i <= (2 * scale + 3); i++) {
		//Change COLUMN
		for (var j = 0; j < number.length; j++) {
			if (number.charAt(j) == 0) {
				zero(i, scale);
			}
			if (number.charAt(j) == 1) {
				one(i, scale);
			}
			if (number.charAt(j) == 2) {
				two(i, scale);
			}
			if (number.charAt(j) == 3) {
				three(i, scale);
			}
			if (number.charAt(j) == 4) {
				four(i, scale);
			}
			if (number.charAt(j) == 5) {
				five(i, scale);
			}
			if (number.charAt(j) == 6) {
				six(i, scale);
			}
			if (number.charAt(j) == 7) {
				seven(i, scale);
			}
			if (number.charAt(j) == 8) {
				eight(i, scale);
			}
			if (number.charAt(j) == 9) {
				nine(i, scale);
			}
			if (number.charAt(j) == ":") {
				separator(i, scale);
			}
		}
		
		
		document.write("</br>");
	}

}

//number = prompt("Enter Number");
scale = Number(prompt("Enter Scale", "5"));
timeMeasure = confirm("Convert time to 12-hour time? NOTE: AM-PM won't be listed");

runClock(scale,timeMeasure);

