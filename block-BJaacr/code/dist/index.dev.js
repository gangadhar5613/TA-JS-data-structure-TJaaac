"use strict";

/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/
// Write code for the following problems:
console.log(got); // You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/
// 1. Log the value of key "houses"

console.log(got.houses); // 2. Log the length of the "houses" key

console.log(got.houses.length); // 3. Log the name of all houses in got one by one

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = got.houses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    house = _step.value;
    console.log(house);
  } // 4. Log the name of all the people in house Starks (index 0) one by one

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = got.houses[0].people[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    stark = _step2.value;
    console.log(stark);
  } // 5. Log the name of all the people in house Lannisters (index 1) one by one

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = got.houses[1].people[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    lannisters = _step3.value;
    console.log(lannisters);
  } // 6. Log the name of all the people in house Lannisters (index 1) one by one

} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = got.houses[1].people[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    lannisters = _step4.value;
    console.log(lannisters);
  } // 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`

} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
      _iterator4["return"]();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = got.houses[1].people[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    peopleDes = _step5.value;
    console.log("I am ".concat(peopleDes.name, " and my bio is ").concat(peopleDes.description));
  } // 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`

} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
      _iterator5["return"]();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  for (var _iterator6 = got.houses[0].people[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    peopleStarks = _step6.value;
    console.log("I am ".concat(peopleStarks.name, " and my bio ").concat(peopleStarks.description));
  } // 9. Log the name and description of the people in house Starks whose name is `Robb Stark`

} catch (err) {
  _didIteratorError6 = true;
  _iteratorError6 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
      _iterator6["return"]();
    }
  } finally {
    if (_didIteratorError6) {
      throw _iteratorError6;
    }
  }
}

var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
  for (var _iterator7 = got.houses[0].people[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
    var people = _step7.value;
    if (people.name === "Robb Stark") console.log("I am ".concat(people.name, " and my bio is ").concat(people.description));
  } // 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

} catch (err) {
  _didIteratorError7 = true;
  _iteratorError7 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
      _iterator7["return"]();
    }
  } finally {
    if (_didIteratorError7) {
      throw _iteratorError7;
    }
  }
}

var _iteratorNormalCompletion8 = true;
var _didIteratorError8 = false;
var _iteratorError8 = undefined;

try {
  for (var _iterator8 = got.houses[0].people[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
    var _people = _step8.value;
    if (_people.name === "Tywin Lannister") console.log("I am ".concat(_people.name, " and my bio is ").concat(_people.description));
  } // 11. Push the name of the houses in an array named `houseNames` and Log the array

} catch (err) {
  _didIteratorError8 = true;
  _iteratorError8 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
      _iterator8["return"]();
    }
  } finally {
    if (_didIteratorError8) {
      throw _iteratorError8;
    }
  }
}

var houseNames = [];
var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
  for (var _iterator9 = got.houses[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
    var _house = _step9.value;
    houseNames.push(_house.name);
  } // 12. Log the size of people in Starks house

} catch (err) {
  _didIteratorError9 = true;
  _iteratorError9 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
      _iterator9["return"]();
    }
  } finally {
    if (_didIteratorError9) {
      throw _iteratorError9;
    }
  }
}

console.log(got.houses[0].people.length); // 13. Log the size of people in Lannisters house

console.log(got.houses[1].people.length); // 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
// 15. Log the name of all the people of all the houses in got one by one

var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
  for (var _iterator10 = got.houses[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
    var _house2 = _step10.value;
    var _iteratorNormalCompletion14 = true;
    var _didIteratorError14 = false;
    var _iteratorError14 = undefined;

    try {
      for (var _iterator14 = _house2.people[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
        var _people2 = _step14.value;
        console.log(_people2.name);
      }
    } catch (err) {
      _didIteratorError14 = true;
      _iteratorError14 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
          _iterator14["return"]();
        }
      } finally {
        if (_didIteratorError14) {
          throw _iteratorError14;
        }
      }
    }
  } // 16. Push all names into a new array named `allPeople` and log the value array.

} catch (err) {
  _didIteratorError10 = true;
  _iteratorError10 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
      _iterator10["return"]();
    }
  } finally {
    if (_didIteratorError10) {
      throw _iteratorError10;
    }
  }
}

var allPeople = [];
var _iteratorNormalCompletion11 = true;
var _didIteratorError11 = false;
var _iteratorError11 = undefined;

try {
  for (var _iterator11 = got.houses[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
    var _house3 = _step11.value;
    var _iteratorNormalCompletion15 = true;
    var _didIteratorError15 = false;
    var _iteratorError15 = undefined;

    try {
      for (var _iterator15 = _house3.people[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
        var _people3 = _step15.value;
        allPeople.push(_people3.name);
      }
    } catch (err) {
      _didIteratorError15 = true;
      _iteratorError15 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
          _iterator15["return"]();
        }
      } finally {
        if (_didIteratorError15) {
          throw _iteratorError15;
        }
      }
    }
  }
} catch (err) {
  _didIteratorError11 = true;
  _iteratorError11 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
      _iterator11["return"]();
    }
  } finally {
    if (_didIteratorError11) {
      throw _iteratorError11;
    }
  }
}

console.log(allPeople); // 17. Log the value and length of `allPeople` array created above

console.log(allPeople, allPeople.length); // 18. Push all descriptions into an array named `allDescription`

var allDescription = [];
var _iteratorNormalCompletion12 = true;
var _didIteratorError12 = false;
var _iteratorError12 = undefined;

try {
  for (var _iterator12 = got.houses[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
    var _house4 = _step12.value;
    var _iteratorNormalCompletion16 = true;
    var _didIteratorError16 = false;
    var _iteratorError16 = undefined;

    try {
      for (var _iterator16 = _house4.people[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
        var _people4 = _step16.value;
        allDescription.push(_people4.description);
      }
    } catch (err) {
      _didIteratorError16 = true;
      _iteratorError16 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
          _iterator16["return"]();
        }
      } finally {
        if (_didIteratorError16) {
          throw _iteratorError16;
        }
      }
    }
  }
} catch (err) {
  _didIteratorError12 = true;
  _iteratorError12 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
      _iterator12["return"]();
    }
  } finally {
    if (_didIteratorError12) {
      throw _iteratorError12;
    }
  }
}

console.log(allDescription); // 19. Log the value and length `allDescription`

console.log(allDescription, allDescription.length); // 20. Only the the description whose length is more than 30. (use .lenght property on string to get the length)

var _iteratorNormalCompletion13 = true;
var _didIteratorError13 = false;
var _iteratorError13 = undefined;

try {
  for (var _iterator13 = got.houses[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
    var _house5 = _step13.value;
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
      for (var _iterator17 = _house5.people[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
        var _people5 = _step17.value;
        if (_people5.description.length > 30) console.log(_people5.description);
      }
    } catch (err) {
      _didIteratorError17 = true;
      _iteratorError17 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
          _iterator17["return"]();
        }
      } finally {
        if (_didIteratorError17) {
          throw _iteratorError17;
        }
      }
    }
  }
} catch (err) {
  _didIteratorError13 = true;
  _iteratorError13 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
      _iterator13["return"]();
    }
  } finally {
    if (_didIteratorError13) {
      throw _iteratorError13;
    }
  }
}