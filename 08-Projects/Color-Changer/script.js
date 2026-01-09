const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (event) => {
    console.log(event);

    // switch (event.target.id) {
    //   case 'event.target.id = gray':
    //     body.style.backgroundColor = 'event.target.id';
    // }

    if (event.target.id === 'grey') {
      // we have to assing the value of color not any string.
      // body.style.backgroundColor = 'event.target.id';

      // Correct Way to do
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    // if (event.target.id === 'purple') {
    //   body.style.backgroundColor = event.target.id;
    // }

    if (body.style.backgroundColor === 'purple') {
      body.style.backgroundColor = 'white';
    } else {
      body.style.backgroundColor = event.target.id;
    }
  });
});
