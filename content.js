const curMonth = new Date().toLocaleString("default", { month: "short" });
const curDate = new Date().toLocaleString("default", { day: "2-digit" });
const curWeekday = new Date().toLocaleString("default", { weekday: "short" });

const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);

const tomMonth = tomorrow.toLocaleString("default", { month: "short" });
const tomDate = tomorrow.toLocaleString("default", { day: "2-digit" });
const tomWeekday = tomorrow.toLocaleString("default", { weekday: "short" });

const tomorrowX2 = new Date();
tomorrowX2.setDate(new Date().getDate() + 2);

const tomX2Month = tomorrowX2.toLocaleString("default", { month: "short" });
const tomX2Date = tomorrowX2.toLocaleString("default", { day: "2-digit" });
const tomX2Weekday = tomorrowX2.toLocaleString("default", { weekday: "short" });

const tomorrowX3 = new Date();
tomorrowX3.setDate(new Date().getDate() + 3);

const tomX3Month = tomorrowX3.toLocaleString("default", { month: "short" });
const tomX3Date = tomorrowX3.toLocaleString("default", { day: "2-digit" });
const tomX3Weekday = tomorrowX3.toLocaleString("default", { weekday: "short" });

let newDate = [
  curMonth,
  curDate,
  curWeekday,
  tomMonth,
  tomDate,
  tomWeekday,
  tomX2Month,
  tomX2Date,
  tomX2Weekday,
  tomX3Month,
  tomX3Date,
  tomX3Weekday,
];

for (let i = 0; i < 4; i++) {
  $(".firstPageSessionDateBlocks").append(`
        <div class="firstPageSessionDateBlocksItem" tabindex="8">
            <span>${newDate[i * 3]}</span>
            <span>${newDate[i * 3 + 1]}</span>
            <span>${newDate[i * 3 + 2]}</span>
        </div>
        `);
}

for (let i = 8; i <= 24; i += 2) {
  $(".firstPageSessionTimeSelectDown").append(`
        <p>${i}:00</p>
  `);

  // console.log(`'${i}:00'`);
}

$(".firstPageSessionDateBlocksItem").click(function () {
  $(".firstPageSessionDateBlocksItem")
    .not(this)
    .removeClass("sessionItem_active");
  $(this).toggleClass("sessionItem_active");
});
