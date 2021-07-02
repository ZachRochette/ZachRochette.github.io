const townListURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(townListURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (townlist) {
    const towns = townlist["towns"];
    
    //Soda Springs Info
      let townInfo = document.createElement("section");
      let datadiv = document.createElement("div");

      let h2 = document.createElement("h2");
      h2.textContent = towns[0].name;

      let p1 = document.createElement("p");
      p1.innerHTML = `<span class="infoHeadings">Year Founded: </span> ${towns[0].yearFounded}`;

      let p2 = document.createElement("p");
      p2.innerHTML = `<span class="infoHeadings">Population: </span> ${towns[0].currentPopulation}`;

      let p3 = document.createElement("p");
      p3.innerHTML = `<span class="infoHeadings">Annual Rain Fall: </span> ${towns[0].averageRainfall}`;
      
      datadiv.append(h2, p1, p2, p3);
      datadiv.setAttribute("class", "data");

      let image = document.createElement("img");
      image.setAttribute("src", "images/soda-springs.jpg");
      image.setAttribute("alt", "picture of a geyser in soda springs");
      image.setAttribute("title", "Photo from Visit Idaho");

      townInfo.append(datadiv, image);
      townInfo.setAttribute("class", "towngrid");

      document.querySelector("div.towns").appendChild(townInfo);

    //Fish Haven Info
      townInfo = document.createElement("section");
      datadiv = document.createElement("div");

      h2 = document.createElement("h2");
      h2.textContent = towns[2].name;

      p1 = document.createElement("p");
      p1.innerHTML = `<span class="infoHeadings">Year Founded: </span> ${towns[2].yearFounded}`;

      p2 = document.createElement("p");
      p2.innerHTML = `<span class="infoHeadings">Population: </span> ${towns[2].currentPopulation}`;

      p3 = document.createElement("p");
      p3.innerHTML = `<span class="infoHeadings">Annual Rain Fall: </span> ${towns[2].averageRainfall}`;

      datadiv.append(h2, p1, p2, p3);
      datadiv.setAttribute("class", "data");

      image = document.createElement("img");
      image.setAttribute("src", "images/fish-haven.jpg");
      image.setAttribute("alt", "Photo of fish haven");
      image.setAttribute("title", "Photo by kaqurei");

      townInfo.append(datadiv, image);
      townInfo.setAttribute("class", "middlegrid");

      document.querySelector("div.towns").appendChild(townInfo);

    //Preston Info
      townInfo = document.createElement("section");
      datadiv = document.createElement("div");

      h2 = document.createElement("h2");
      h2.textContent = towns[6].name;

      p1 = document.createElement("p");
      p1.innerHTML = `<span class="infoHeadings">Year Founded: </span> ${towns[6].yearFounded}`;

      p2 = document.createElement("p");
      p2.innerHTML = `<span class="infoHeadings">Population: </span> ${towns[6].currentPopulation}`;

      p3 = document.createElement("p");
      p3.innerHTML = `<span class="infoHeadings">Annual Rain Fall: </span> ${towns[6].averageRainfall}`;
      
      datadiv.append(h2, p1, p2, p3);
      datadiv.setAttribute("class", "data");

      image = document.createElement("img");
      image.setAttribute("src", "images/preston.jpg");
      image.setAttribute("alt", "picture of a road going through a small town by Louise Tollisen");
      image.setAttribute("title", "Photo by Louise Tollisen on Unsplash");

      townInfo.append(datadiv, image);
      townInfo.setAttribute("class", "towngrid");

      document.querySelector("div.towns").appendChild(townInfo);
    })