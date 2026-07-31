function addVehicle(){

let table=document.querySelector("#vehicleTable tbody");

let row=table.insertRow();

row.innerHTML=`

<td><input></td>
<td><input></td>
<td><input placeholder="KG"></td>
<td><input value="1"></td>

`;

}



function generateBL(){

const {jsPDF}=window.jspdf;

let pdf=new jsPDF();


/* LOGO */

let logo=new Image();

logo.src="logo.png";


logo.onload=function(){


pdf.addImage(logo,"PNG",15,10,35,35);



pdf.setFontSize(16);

pdf.text(
"HAM INTERNATIONAL TRANSPORT",
60,
18
);


pdf.setFontSize(9);

pdf.text(
"74 Mnt de St Sulpice, Saint-Sulpice, QC J5W 0H2, Canada",
60,
25
);

pdf.text(
"Documentation@hamintltransport.com | +1 (514) 238-4241",
60,
32
);



pdf.line(10,50,200,50);



pdf.setFontSize(15);

pdf.text(
"HOUSE BILL OF LADING",
65,
62
);



pdf.setFontSize(10);



let y=75;


pdf.text(
"Booking #: "+booking.value,
15,y
);

pdf.text(
"Container #: "+container.value,
110,y
);


y+=8;


pdf.text(
"Seal #: "+seal.value,
15,y
);


pdf.text(
"Transshipment: "+trans.value,
110,y
);



y+=15;



pdf.rect(10,y,190,30);


pdf.text("Exporter",15,y+8);

pdf.text(
exporter.value,
15,
y+15,
{maxWidth:80}
);



pdf.text("Consignee",110,y+8);

pdf.text(
consignee.value,
110,
y+15,
{maxWidth:80}
);



y+=45;



pdf.text("Notify Party",15,y);

pdf.text(
notify.value,
15,
y+7,
{maxWidth:170}
);



y+=35;



/* VEHICLE TABLE */


pdf.rect(10,y,190,10);


pdf.text("MODEL & YEAR",15,y+7);
pdf.text("VIN",70,y+7);
pdf.text("WEIGHT KG",140,y+7);
pdf.text("QTY",180,y+7);



y+=10;



document.querySelectorAll("#vehicleTable tbody tr")
.forEach(row=>{


let c=row.querySelectorAll("input");


pdf.rect(10,y,190,10);


pdf.text(c[0].value,15,y+7);

pdf.text(c[1].value,70,y+7);

pdf.text(c[2].value+" KG",140,y+7);

pdf.text(c[3].value,180,y+7);


y+=10;


});



/* NOTES */


y+=15;


pdf.setFontSize(8);


let notes=
"All business is transacted in accordance with our standard trading conditions. "+
"Copy available upon request.\n\n"+
"Freight term: PREPAID\n"+
"HS Code: 87032330\n"+
"Original No SWB";


pdf.text(
notes,
15,
y,
{
maxWidth:180
}
);



pdf.save("HAM_House_BL.pdf");


}


}
