var input = document.getElementById("input");
var divContainer = document.querySelector(".container");
input.addEventListener("change", function () {
  readXlsxFile(input.files[0]).then(function (data) {
    // // Oppgave1
    // for (const i of data) {
    //    document.write(i [1] ,i [2], "<br>");
    // }

    // // Oppgave2
    // for (const i of data) {
    //     var para = document.createElement('img');

    //             para.src = i[6];

    //             divContainer.appendChild(para);

    //             var param = document.createElement("p")

    //             param.innerText = i[1] +" "+ i[2]

    //             divContainer.appendChild(param)

    // Oppgave3
    // for (const i of data) {
    //   if (i[0] == 1) {
    //     var para = document.createElement("img");

    //     para.src = i[6];

    //     divContainer.appendChild(para);

    //     var param = document.createElement("p");

    //     param.innerText = i[1] + " " + i[2];

    //     divContainer.appendChild(param);
    //   }
     
    // }

    // Oppgave4

    //    for (const i of data) {

    //     if (i[7] == "Asker") {

    //         var para = document.createElement('img');

    //         para.src = i[6];

    //         divContainer.appendChild(para);

    //     }

    // }

    // Oppgave5

    // for (const i of data) {

    //     if (i[3] == 15) {

    //         var para = document.createElement('img');

    //         para.src = i[6];

    //         divContainer.appendChild(para);

    //         var param = document.createElement("p")

    //         param.innerText = i[1] +" "+ i[2]

    //         divContainer.appendChild(param)

    //     }

    // }

    //Oppgave6

    // alder = 0;
    // for (const i of data) {
    //   // console.log(i[3]);

    //   if (i[3] > alder) {
    //     alder = i[3];
    //   }
    // }

    // for (let a = 0; a < data.length; a++) {
    //   if (data[a][3] == alder) {
    //     // console.log(data[a][1], data[a][2],data[a][3]);
    //     var param = document.createElement("p");

    //     param.innerText = (data[a][1]+" " +data[a][2]+" " +data[a][3]);

    //     divContainer.appendChild(param);
    //   }
    // }
  });
});

// uncomment oppgave koden for å sjekke koden :)