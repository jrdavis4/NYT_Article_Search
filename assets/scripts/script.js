var articleDiv = $("#article-section");
 
function search () {
  
  clear();
  //assign variables
  var startYear = "";
  var endYear = "";
  var apiKey = "AcmPBVj10iUfqxs5czSPGoBnb96xiKmm";

  //inputs
  var Query = $("#searchTerm1").val();

  var count = parseInt($("#inlineFormCustomSelect").val());

  var inputStart = $("#startYear1").val().trim();
  if (inputStart) {
    startYear = "&begin_date=" + inputStart.toString() + "0101";
  }

  var inputEnd = $("#endYear1").val().trim();
  if (inputEnd) {
    endYear = "&end_date=" + inputEnd.toString() + "1231";
  }

  var urlQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + Query + startYear + endYear + "&api-key=" + apiKey;

  console.log("test1");
  $.ajax({
    url: urlQuery,
    method: "GET"
  }).then(function(response) {

    console.log("test2");
    for (var i = 0; i < count; i++) {
      console.log("test");
      var title = response.response.docs[i].headline.main;
      var author = response.response.docs[i].byline.original;
      var newDiv = $("<div>").addClass("result");
      var newTitle = $("<h4>").html("<span class='article-number'>" + (i+1) + " </span>" + title);
      var newAuthor = $("<h6>").text(author);
      newDiv.append(newTitle, newAuthor);

      articleDiv.append(newDiv);
    }

  })
}

function clear() {
  articleDiv.empty();
}
 
 

// $(document).submit(function(event){
//   event.preventDefault();
// })

$(".btn").click(function(event){
  event.preventDefault();
  if ($(this).attr("type") === "search") {
    console.log("search");
    search();
  } else if ($(this).attr("type") === "clear") {
    clear();
  }
})
 
