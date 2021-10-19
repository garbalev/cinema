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
      numberOfSeats: [19, 10, 4],
      placeForSeats: [".bigBlockRow", ".smallBlockRow", ".smallBlockRow:eq(6)"],
    },
  },

  voka: {
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
      numberOfSeats: [19, 10, 4],
      placeForSeats: [".bigBlockRow", ".smallBlockRow", ".smallBlockRow:eq(6)"],
    },
  },

  brest: {
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
      numberOfSeats: [19, 10, 4],
      placeForSeats: [".bigBlockRow", ".smallBlockRow", ".smallBlockRow:eq(6)"],
    },
  },

  silver: {
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
      numberOfSeats: [19, 10, 4],
      placeForSeats: [".bigBlockRow", ".smallBlockRow", ".smallBlockRow:eq(6)"],
    },
  },

  pioneer: {
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
      numberOfSeats: [19, 10, 4],
      placeForSeats: [".bigBlockRow", ".smallBlockRow", ".smallBlockRow:eq(6)"],
    },
  },

  belarus: {
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
      numberOfSeats: [19, 10, 4],
      placeForSeats: [".bigBlockRow", ".smallBlockRow", ".smallBlockRow:eq(6)"],
    },
  },
};

function blocksMaker() {
  console.log(this);

  for (let i = 0; i < this.numberOfBigBlocks; i++) {
    $(".schemeBigBlocks").append(`
        <div class="bigBlock">
        `);
  }

  for (let i = 0; i < this.numberOfSmallBlocks; i++) {
    $(".schemeSmallBlocks").append(`
        <div class="smallBlock">
        `);
  }
}

blocksMaker.call(cinemas.rocket.blocks);

function rowsMaker() {
  console.log(this);

  for (let i = 0; i < this.rowsMakerRepeatNum; i++) {
    for (let j = 0; j < this.numberOfRows[i]; j++) {
      let className = $(this.placeForRows[i]).attr("class") + "Row";
      $(this.placeForRows[i]).append(`
      <span class="${className} row"></span>
      `);
    }
  }
}

rowsMaker.call(cinemas.rocket.rows);

function seatsMaker() {
  console.log(this);

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
}

seatsMaker.call(cinemas.rocket.seats);
