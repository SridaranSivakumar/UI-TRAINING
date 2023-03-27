$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});
//click action of the about page
 document.querySelector(".about-page").addEventListener("click",()=>{
      $(".startSection").css("display","block");
      $(".midSection").css("display","none");
      $(".last-section").css("display","none");
      $(".about-page").css("background-color","darkblue");
      $(".solution-page").css("background-color","black");
      $(".location-page").css("background-color","black");

 });
 //click action of the solution page
 document.querySelector(".solution-page").addEventListener("click",()=>{
      $(".startSection").css("display","none");
      $(".midSection").css("display","block");
      $(".last-section").css("display","none");
      $(".solution-page").css("background-color","darkblue");
      $(".about-page").css("background-color","black");
      $(".location-page").css("background-color","black");
 });
 //click action of the location page
 document.querySelector(".location-page").addEventListener("click",()=>{
      $(".startSection").css("display","none");
      $(".midSection").css("display","none");
      $(".last-section").css("display","block");
      $(".location-page").css("background-color","darkblue");
      $(".about-page").css("background-color","black");
      $(".solution-page").css("background-color","black");
 });

 //fetching the json file
fetch('./json/locations.json')
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        for (let location of res) {
           //creating a company details div
           let company = $("<div>")
           company.addClass("company-details");
           $(".details-container").append(company);
           //creating a country  div
           let country = $("<div>");
           country.addClass("country");
             //creating a img tag
           let imageTag = $("<img>");
           imageTag.addClass("images")
           let str = "./flags/";
           str = str.concat(location.country + ".jpg");
           console.log(str);
           imageTag.attr("src", str);
           country.append(imageTag);
           company.append(country);
             //creating a state  div
           let state = $("<div>");
           state.addClass("state");
           state.text(location.state);
           company.append(state);
             //creating a city  div
           let city = $("<div>");
           city.addClass("city");
           city.text(location.city);
           company.append(city);
             //creating a contact  div
           let contact = $("<div>");
           contact.addClass("contact");
           contact.text(location.contact);
           company.append(contact); 
        }
    });