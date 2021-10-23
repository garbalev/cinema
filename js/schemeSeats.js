const cinemas = {
  rocket: {
    blocks: {
      numberOfBigBlocks: 2,
      numberOfSmallBlocks: 3,
    },
    rows: {
      rowsMakerRepeatNum: 3,
      numberOfRows: [5, 2, 1],
      placeForRows: [".bigBlock", ".smallBlock", ".smallBlock:eq(2)"],
    },
    seats: {
      seatsMakerRepeatNum: 3,
      numberOfSeats: [19, 10, 9],
      placeForSeats: [".bigBlockRow", ".smallBlockRow", ".smallBlockRow:last"],
    },
  }, //

  voka: {
    blocks: {
      numberOfBigBlocks: 3,
      numberOfSmallBlocks: 0,
    },
    rows: {
      rowsMakerRepeatNum: 2,
      numberOfRows: [2, 3],
      placeForRows: [".bigBlock", ".bigBlock:last, .bigBlock:eq(-2)"],
    },
    seats: {
      seatsMakerRepeatNum: 2,
      numberOfSeats: [16, 5],
      placeForSeats: [".bigBlockRow", ".bigBlockRow:not(:first)"],
    },
  },

  brest: {
    blocks: {
      numberOfBigBlocks: 0,
      numberOfSmallBlocks: 5,
    },
    rows: {
      rowsMakerRepeatNum: 2,
      numberOfRows: [4, 2],
      placeForRows: [".smallBlock", ".smallBlock:eq(2)"],
    },
    seats: {
      seatsMakerRepeatNum: 2,
      numberOfSeats: [12, 6],
      placeForSeats: [".smallBlockRow", ".smallBlock:eq(2) span"],
    },
  },

  silver: {
    blocks: {
      numberOfBigBlocks: 1,
      numberOfSmallBlocks: 0,
    },
    rows: {
      rowsMakerRepeatNum: 1,
      numberOfRows: [15],
      placeForRows: [".bigBlock"],
    },
    seats: {
      seatsMakerRepeatNum: 7,
      numberOfSeats: [10, 12, 9, 8, 6, 4, 2],
      placeForSeats: [
        ".bigBlockRow:first",
        ".bigBlockRow:not(:first)",
        ".bigBlockRow:last",
        ".bigBlockRow:eq(-2)",
        ".bigBlockRow:eq(-3)",
        ".bigBlockRow:eq(-4)",
        ".bigBlockRow:eq(-5)",
      ],
    },
  },

  pioneer: {
    blocks: {
      numberOfBigBlocks: 3,
      numberOfSmallBlocks: 2,
    },
    rows: {
      rowsMakerRepeatNum: 2,
      numberOfRows: [4, 5],
      placeForRows: [".bigBlock", ".smallBlock"],
    },
    seats: {
      seatsMakerRepeatNum: 2,
      numberOfSeats: [19, 8],
      placeForSeats: [".bigBlockRow", ".smallBlockRow"],
    },
  }, //

  belarus: {
    blocks: {
      numberOfBigBlocks: 0,
      numberOfSmallBlocks: 6,
    },
    rows: {
      rowsMakerRepeatNum: 1,
      numberOfRows: [5],
      placeForRows: [".smallBlock"],
    },
    seats: {
      seatsMakerRepeatNum: 2,
      numberOfSeats: [9, 1, 4],
      placeForSeats: [
        ".smallBlockRow",
        ".smallBlock:last span, .smallBlock:eq(-2) span",
      ],
    },
  },
};

let cinemaCall = cinemas.belarus;

function schemeMaker() {
  $(".schemeBigBlocks, .schemeSmallBlocks").html("");
  blocksMaker.call(cinemaCall.blocks);
  rowsMaker.call(cinemaCall.rows);
  seatsMaker.call(cinemaCall.seats);
  seatsAction();
  $(".secondPage").show();
}

// schemeMaker();

let cinemaName = "";

$(".firstPageSessionPlaceSelectDown p").click(function () {
  cinemaName = $(this).text();
  cinemaCall = cinemas[$(this).data("cinema")];
  schemeMaker();
  $(".payForSeat").remove();
  $("#cinemaName, #totalPrice").html("");
});

function blocksMaker() {
  let I = 0;
  for (I; I < this.numberOfBigBlocks; I++) {
    $(".schemeBigBlocks").append(`
        <div class="bigBlock" data-sector='Сектор ${I + 1}'>
        `);
  }
  for (let i = 0; i < this.numberOfSmallBlocks; i++) {
    $(".schemeSmallBlocks").append(`
        <div class="smallBlock" data-sector='Сектор ${I + 1 + i}'>
        `);
  }
}

function rowsMaker() {
  for (let i = 0; i < this.rowsMakerRepeatNum; i++) {
    for (let j = 0; j < this.numberOfRows[i]; j++) {
      let className = $(this.placeForRows[i]).attr("class") + "Row";
      $(this.placeForRows[i]).append(`
      <span class="${className} row"></span>
      `);
    }
  }
}

function seatsMaker() {
  for (let i = 0; i < this.seatsMakerRepeatNum; i++) {
    for (let j = 0; j < this.numberOfSeats[i]; j++) {
      $(this.placeForSeats[i]).append(`
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="38"
           height="32"
           viewBox="0 0 38 32"
           fill="rgba(255, 255, 255, 0.25)"
         >
           <path
             d="M0 24.5C0 24.5256 0.000982583 24.5512 0.00294554 24.5767C0.0963478 25.7909 0.536755 27.5963 1.58794 29.1283C2.66579 30.6991 4.40875 32 7 32H29.5C29.5238 32 29.5475 31.9992 29.5712 31.9975C30.8985 31.9027 32.8511 31.3731 34.4956 30.0716C36.1806 28.7381 37.5 26.6218 37.5 23.5V14H35.5V23.5C35.5 25.9782 34.486 27.5286 33.2544 28.5034C31.9964 29.499 30.4694 29.9212 29.4627 30H7C5.19125 30 4.01754 29.1342 3.23706 27.9967C2.44021 26.8354 2.07957 25.4126 2 24.46V14H0V24.5ZM26.5 1H10.5C7.18629 1 4.5 3.68629 4.5 7V20C4.5 23.3137 7.18629 26 10.5 26H26.5C29.8137 26 32.5 23.3137 32.5 20V7C32.5 3.68629 29.8137 1 26.5 1Z"
           />
         </svg>
        `);
    }
  }

  console.log($("[data-sector]").length);
  for (let i = 0; i < $("[data-sector]").length; i++) {
    let sectorNum = `[data-sector]:eq(${i})`;
    for (let j = 0; j < $(`${sectorNum} span`).length; j++) {
      $(`${sectorNum} span:eq(${j})`).attr("data-row", `Ряд ${j + 1}`);
      for (let k = 0; k < $(`${sectorNum} span:eq(${j}) svg`).length; k++) {
        $(`${sectorNum} span:eq(${j}) svg:eq(${k})`).attr(
          "data-seat",
          `Место ${k + 1}`
        );
      }
    }
  }
}

function seatsAction() {
  let sector = "",
    row = "",
    seat = "";

  $(".secondPageSchemeSeating svg").hover(
    function () {
      sector = $(this).parents().eq(1).data("sector");
      row = $(this).parent().data("row");
      seat = $(this).data("seat");
      const leftPosition = $(this).offset().left;
      const topPosition = $(this).offset().top;
      $("#seatHover").html(`
        <span>${sector}</span>
        <span>${seat}</span>
        <span>${row}</span>
      `);
      $("#seatHover").css({
        display: "flex",
        top: `${topPosition - 95}px`,
        left: `${leftPosition - 50}px`,
      });
    },
    function () {
      $("#seatHover").css("display", "none");
    }
  );

  $(".secondPageSchemeSeating svg").click(function () {
    if ($(this).hasClass("selectedSvg")) {
      $(this).removeClass("selectedSvg").removeAttr("style");
      let regexp = new RegExp(`${sector}.${row}.${seat}`);
      for (let i = 0; i < $(".info").length; i++) {
        if ($(".info").eq(i).text().match(regexp) !== null) {
          $(".info").eq(i).parents().eq(1).remove();
          $("#totalPrice").html(`${12 * $(".payForSeat").length},00 BYN`);
        }
      }
    } else if ($(".selectedSvg").length < 5) {
      $(this).css("fill", "rgba(255, 255, 255, 0.7)").addClass("selectedSvg");
      $(".secondPagePaymentSeats").append(`
      <div class="payForSeat">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="32"
                  viewBox="0 0 38 32"
                  fill="rgba(255, 255, 255, 0.25)"
                >
                  <path
                    d="M0 24.5C0 24.5256 0.000982583 24.5512 0.00294554 24.5767C0.0963478 25.7909 0.536755 27.5963 1.58794 29.1283C2.66579 30.6991 4.40875 32 7 32H29.5C29.5238 32 29.5475 31.9992 29.5712 31.9975C30.8985 31.9027 32.8511 31.3731 34.4956 30.0716C36.1806 28.7381 37.5 26.6218 37.5 23.5V14H35.5V23.5C35.5 25.9782 34.486 27.5286 33.2544 28.5034C31.9964 29.499 30.4694 29.9212 29.4627 30H7C5.19125 30 4.01754 29.1342 3.23706 27.9967C2.44021 26.8354 2.07957 25.4126 2 24.46V14H0V24.5ZM26.5 1H10.5C7.18629 1 4.5 3.68629 4.5 7V20C4.5 23.3137 7.18629 26 10.5 26H26.5C29.8137 26 32.5 23.3137 32.5 20V7C32.5 3.68629 29.8137 1 26.5 1Z"
                  />
                </svg>
                <div class="payForSeatBlock">
                  <div class="info">${sector}/${row}/${seat}</div>
                  <span>12,00 BYN</span>
                </div>
              </div>
      `);

      $("#totalPrice").html(`${12 * $(".payForSeat").length},00 BYN`);
      $("#cinemaName").html(`Кинотеатр ${cinemaName}`);
    } else {
      alert("Вы не можете выбрать больше 5 мест");
    }
  });
}
