const currentUser = 'Kathy Phan';

// let welcomeMessage = 'Welcome to Flatbook, !';

// let welcomeMessage = currentUser;

// let welcomeMessage = 'Welcome to Flatbook, currentUser';

// let welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

// let shortGreeting = 'Welcome, ';
// let shortGreeting = `Welcome, ${currentUser}`;
// const firstInitial = currentUser[0];
// const restOfName = currentUser.slice(6);

// shortGreeting = 'Welcome, ' + firstInitial + restOfName + '!';

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;