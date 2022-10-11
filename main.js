let account = 0;

let x = 'default';

function enterInfo() {
  while (x != 'Q') {
    x = prompt('enter Q, W, D, or B');
    if (x == 'W') {
      w = Number(prompt('Enter a withdrawal amount.'));
      if ((account - w) < 300) {
        lowBal = prompt("This will bring your total below $300. Do you want to continue with this withdrawal? Y/N");
        if (lowBal == 'N') {
          alert('See you next time!');
          return;
        }
      }
      account = account - w;
      if (account < 0) {
        account = 0;
        alert('Your account has reached $0. Please add funds in order to withdraw more.');
      }
      else if (account < 50) {
        alert(`Warning. Your account has dropped to $${account}.`);
        continue;
      }
      else {
        continue;
      }
    } else if (x == 'D') {
        d = Number(prompt('Enter deposit amount.'));
        if (d > 50000) {
          d = 50000;
          alert('Maximum deposit is $50,000.');
        }
        account = account + d;
    } else if (x == 'B') {
        alert(`Your account balance is $${account}.`);
    } else if (x == 'Q') {
        alert('See you next time!');
    } else if (x != 'W' || 'D' || 'B') {
        alert('Enter only the letters Q, W, D, or B');
    } else {
        return;
      }
  }
}





//function withDraw() {
  //let input = prompt('Enter an amount to withdraw');


//}
