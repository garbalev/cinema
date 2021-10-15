


const curMonth = new Date().toLocaleString('default', {month: 'short'});
const curDate = new Date().toLocaleString('default', {day: '2-digit'});
const curWeekday = new Date().toLocaleString('default', {weekday: 'short'});


const tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+1);

const tomMonth = tomorrow.toLocaleString('default', {month: 'short'});
const tomDate = tomorrow.toLocaleString('default', {day: '2-digit'});
const tomWeekday = tomorrow.toLocaleString('default', {weekday: 'short'});


const tomorrowX2 = new Date();
tomorrowX2.setDate(new Date().getDate()+2);

const tomX2Month = tomorrowX2.toLocaleString('default', {month: 'short'});
const tomX2Date = tomorrowX2.toLocaleString('default', {day: '2-digit'});
const tomX2Weekday = tomorrowX2.toLocaleString('default', {weekday: 'short'});



function sessionMaker() {
    let newDate = [curMonth, curDate, curWeekday, tomMonth, tomDate, tomWeekday, tomX2Month, tomX2Date, tomX2Weekday]

    for (let i = 0; i < 3; i++) {
        $(".firstPageSessionDateBlocks").append(`
        
        <div class="firstPageSessionDateBlocksItem">
            <span>${newDate[i*3]}</span>
            <span>${newDate[i*3+1]}</span>
            <span>${newDate[i*3+2]}</span>
        </div>

        `);
    }
}

sessionMaker();

