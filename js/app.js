var app = angular.module("Rehearse", ["firebase"]);
var ref = new Firebase("https://rehearse.firebaseio.com/data");

app.controller("SampleCtrl", function($scope, $firebase) {
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});

// app.controller("Rehearse", ["$scope", "$firebaseAuth",
//   function($scope, $firebaseAuth) {
//     var ref = new Firebase("https://rehearse.firebaseio.com/");
//     var auth = $firebaseAuth(ref);
//     auth.$authWithOAuthPopup("facebook").then(function(authData) {
//       console.log("Logged in as:", authData.uid);
//     }).catch(function(error) {
//       console.error("Authentication failed: ", error);
//     });
//   }
// ]);


app.controller("CreateUser", function($scope, $firebase){

	$scope.createUser = function(){
		console.log('yas');
	}

	// ref.createUser({
 //  		email    : "bobtony@firebase.com",
 //  		password : "correcthorsebatterystaple"
	// }, function(error, userData) {
 //  		if (error) {
 //    		console.log("Error creating user:", error);
 // 	 	} else {
 //    		console.log("Successfully created user account with uid:", userData.uid);
 //  		}
	// });

});
