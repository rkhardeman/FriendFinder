var friendsData = require ('../data/friends.js');

module.exports = function(app){

app.get("/api/friends", function(req, res) {
    res.json(friendsData)
    });

app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);


var matchArray = [];
var newFriendScores= req.body.scores;
    
    //loop through friend and compare scores
    for (i=0;i<friendsData.length;i++) {
        var scores = friendsData[i].scores;

        //loop through each score
        var comparisonArray = [];
        for (j=0;j<scores.length;j++) {
            //compare the difference for each score
            var comparison = Math.abs(scores[j] - newFriendScores[j]);
            comparisonArray.push(comparison);
        }
        
        //sum each value in the comparison array and push to the matchArray
        var summed = eval(comparisonArray.join('+'));
        matchArray.push(summed);
    }
    
    //loop through the matchArray and determine which value is the lowest, therefore best match
        console.log("matchArray: " + matchArray);
        var bestMatch = matchArray.indexOf(Math.min.apply(null, matchArray));
        console.log("bestMatch: " + bestMatch);   
         
        res.json(bestMatch); 
    });
};