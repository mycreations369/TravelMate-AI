function generatePlan(){

let city=document.getElementById("city").value;
let destination=document.getElementById("destination").value;
let budget=parseInt(document.getElementById("budget").value);
let days=parseInt(document.getElementById("days").value);
let type=document.getElementById("travelType").value;

if(city==="" || destination==="" || isNaN(budget) || isNaN(days)){
alert("Please fill all fields");
return;
}

let transport="";
let hotel="";

if(budget<10000){
transport="🚌 Bus";
hotel="Budget Hotel";
}
else if(budget<25000){
transport="🚆 Train";
hotel="3-Star Hotel";
}
else{
transport="✈️ Flight";
hotel="Luxury Resort";
}

let itinerary="";

for(let i=1;i<=days;i++){

if(i===1){
itinerary+=`<li>Day ${i}: Travel from ${city} to ${destination} and explore local attractions.</li>`;
}
else if(i===days){
itinerary+=`<li>Day ${i}: Shopping, photography and return journey.</li>`;
}
else{
itinerary+=`<li>Day ${i}: Sightseeing, local food and activities.</li>`;
}
}

let hotelCost=Math.round(budget*0.4);
let foodCost=Math.round(budget*0.2);
let travelCost=Math.round(budget*0.25);
let activityCost=Math.round(budget*0.15);

document.getElementById("result").innerHTML=`

<div class="card">
<h2>👋 TravelMate Recommendation</h2>
<p>Hey! Based on your budget and preferences, ${destination} is a fantastic choice for a ${type} trip.</p>
</div>

<div class="card">
<h2>📍 Destination Suggestions</h2>
<ul>
<li>${destination}</li>
<li>Nearby Tourist Spots</li>
<li>Hidden Local Attractions</li>
</ul>
</div>

<div class="card">
<h2>🚆 Best Transport Option</h2>
<p>${transport}</p>
<p>Recommended based on your budget and comfort.</p>
</div>

<div class="card">
<h2>🏨 Hotel Recommendation</h2>
<p>${hotel}</p>
</div>

<div class="card">
<h2>🗓 Day-wise Itinerary</h2>
<ul>
${itinerary}
</ul>
</div>

<div class="card">
<h2>💰 Budget Breakdown</h2>

<table>
<tr>
<th>Category</th>
<th>Cost</th>
</tr>

<tr>
<td>Hotel</td>
<td>₹${hotelCost}</td>
</tr>

<tr>
<td>Food</td>
<td>₹${foodCost}</td>
</tr>

<tr>
<td>Transport</td>
<td>₹${travelCost}</td>
</tr>

<tr>
<td>Activities</td>
<td>₹${activityCost}</td>
</tr>

</table>

</div>

<div class="card">
<h2>🍽 Food Recommendations</h2>
<ul>
<li>Local Traditional Food</li>
<li>Popular Street Food</li>
<li>Famous Regional Dishes</li>
</ul>
</div>

<div class="card">
<h2>📸 Must Visit Places</h2>
<ul>
<li>Main Tourist Attraction</li>
<li>Historical Monument</li>
<li>Nature Park</li>
<li>Shopping Market</li>
<li>Popular Photography Spot</li>
</ul>
</div>

<div class="card">
<h2>🌦 Weather Advice</h2>
<p>Check local weather before departure. Carry sunscreen, water bottle and umbrella.</p>
</div>

<div class="card">
<h2>🎒 Packing Checklist</h2>
<ul>
<li>Clothes</li>
<li>Power Bank</li>
<li>Charger</li>
<li>ID Card</li>
<li>Medicines</li>
<li>Sunglasses</li>
<li>Water Bottle</li>
</ul>
</div>

<div class="card">
<h2>🚖 Safety Tips</h2>
<ul>
<li>Keep emergency contacts saved.</li>
<li>Carry digital and physical copies of documents.</li>
<li>Stay aware of local regulations.</li>
</ul>
</div>

`;
}

function downloadPlan(){

let content=document.getElementById("result").innerText;

let blob=new Blob([content],{type:"text/plain"});

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="TravelPlan.txt";

a.click();
}
