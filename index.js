function theBeatlesPlay(musicians, instruments) //function that accepts 2 arrays
{
  var beatlesArray = {}
  for(let i = 0; i < musicians.length; i ++)
  {
    var beatleString = musicians[i] + " plays " + instruments[i] //creates a string for each musician and there respective instrument
    beatlesArray = [...beatlesArray, beatleString] // adds the string to the array beatlesArray
  }
  return beatlesArray  // returns the beatlesArray after every string has been returned
}

function johnLennonFacts(facts)
{
  var jLennonArray = {}
  var i = 0
  while (i < facts.length)
  {
    var jLennonString = facts[i] + "!!!"
    i++
    jLennonArray = [...jLennonArray, jLennonString]
  }
  return jLennonArray
}

function iLoveTheBeatles(n)
{
  var blankArray = {}
}
