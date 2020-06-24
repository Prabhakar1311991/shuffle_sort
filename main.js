var isShuffle = document.getElementById('idShuffle'),
    isSort    = document.getElementById('idSort');

// Method : loadHandler()
//   This method is used to perform on load functionality when the page
//   is loaded.
//
function loadHandler() {
  isShuffle.addEventListener('click', function() { getCellValues('shuffle') }, false);
  isSort.addEventListener('click', function() { getCellValues('sort') }, false);
}

// Method: getCellValues
//   This method is used to perform all the functionalities like shuffle and sorting
//   within a single method
//
//  Parameters:
//   a_type - Determines whether shuffle or sorting button is clicked by the user
//
function getCellValues(a_type) {
  var table = document.getElementById('idTable'),
  cellValue = [],
  ctr, temp, index;

  for (var r = 0, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      cellValue.push(table.rows[r].cells[c].innerHTML);
    }
  }
  if(a_type === "shuffle") {
    ctr = cellValue.length;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = cellValue[ctr];
      cellValue[ctr] = cellValue[index];
      cellValue[index] = temp;
    }
  } else {
    sortVal = cellValue.sort();
  }

  for (var r = 0, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      if(r === 0) {
        table.rows[r].cells[c].innerHTML = (a_type === "shuffle") ? cellValue[c] : sortVal[c];
      } else if(r === 1) {
        table.rows[r].cells[c].innerHTML = (a_type === "shuffle") ? cellValue[c + 3] : sortVal[c + 3];
      } else {
        table.rows[r].cells[c].innerHTML = (a_type === "shuffle") ? cellValue[c + 6] : sortVal[c + 6];
      }
    }
  }

}