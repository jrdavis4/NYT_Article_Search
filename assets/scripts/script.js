 //assign variables
 var startYear = "";
 var endYear = "";
 var apiKey = "AcmPBVj10iUfqxs5czSPGoBnb96xiKmm";
 var articleDiv = $("#artivle-section");

 //inputs
 var Query = $("#searchTerm1").val();

 var count = parseInt($("#records1").val());

 var inputStart = $("#startYear1").val().trim();
 if (inputStart) {
   startYear = "&begin_date=" + inputStart.toString() + "0101";
 }
 
 var inputEnd = $("#endYear1").val().trim();
 if (inputEnd) {
   endYear = "&end_date=" + inputEnd.toString() + "1231";
 }

 var urlQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + Query + startYear + endYear + "&api-key=" + apiKey;

 $.ajax({
   url: urlQuery,
   method: "GET"
 }).then(function(response) {

   for (var i = 0; i < count; i++) {
     var title = response.response.docs[i].headline.main;
     var author = response.response.docs[i].byline.original;
     var newDiv = $("<div>");
     var newTitle = $("<h3>").html("<span id='article-number'>" + i + "</span>" + title);
     var newAuthor = $("<h6>").text(author);
     newDiv.append(newTitle, newAuthor);

     articleDiv.append(newDiv);
   }

 })