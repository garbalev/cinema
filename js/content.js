const actualdate = new Date();

let allDatesArray = [];

for (let i = 0; i < 4; i++) {
  actualdate.setDate(new Date().getDate() + i);
  allDatesArray.push(actualdate.toLocaleString("default", { month: "short" }));
  allDatesArray.push(actualdate.toLocaleString("default", { day: "2-digit" }));
  allDatesArray.push(actualdate.toLocaleString("default", { weekday: "short" }));
}

for (let i = 0; i < 4; i++) {
  $(".firstPageSessionDateBlocks").append(`
        <div class="firstPageSessionDateBlocksItem" tabindex="8">
            <span>${allDatesArray[i * 3]}</span>
            <span>${allDatesArray[i * 3 + 1]}</span>
            <span>${allDatesArray[i * 3 + 2]}</span>
        </div>
  `);
}

for (let i = 8; i <= 24; i += 2) {
  $(".firstPageSessionTimeSelectDown").append(`
        <p>${i}:00</p>
  `);
}

$(".firstPageSessionDateBlocksItem").click(function () {
  $(".firstPageSessionDateBlocksItem")
    .not(this)
    .removeClass("sessionItem_active");
  $(this).toggleClass("sessionItem_active");
});
