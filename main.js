// Lovebug
// A somewhat buggy dating app.
// Fix it up if you can!


// our clients' names, used only for grabbing the right client from the user input
const names = [
  'ladybug',
  'caterpillar',
  'bee',
  'ant',
  'snail',
  'spider',
]

// the data we working with
// rank 1 is best
const clients = [
  '🐞', // rank: 6
  '🐛', // rank: 5
  '🐝', // rank: 4
  '🐜', // rank: 3
  '🐌', // rank: 2
  '🕷', // rank: 1
]


// the command the user wants run
const command = process.argv[2];
// the name they want it run on
const name = process.argv[3]
// the corresponding client
const client = clients[names.indexOf(name)]


// get a random client from whatever list was passed in

// Removed -1 after clients.length
const randomClient = function(clients) {
  return clients[Math.floor(Math.random() * clients.length)];
}

const matchRandomly = function(client) {
  // get our client's location within our system

  // Swapped clients.indexOf to names
  const clientLocation = names.indexOf(client);

  // exclude our client from matches by making an array of everyone else
  // find all the clients before our client in the system
  const clientsBeforeOurClient = clients.slice(0, clientLocation);
  // find all the clients after our client in the system
  
  // ADDED + 1
  const clientsAfterOurClient = clients.slice(clientLocation + 1);
  // add them together

  // Used .concat to join
  const otherClients = clientsBeforeOurClient.concat(clientsAfterOurClient);

  // return a random client from the remaining pool
  return randomClient(otherClients);
}

const getRank = function(client) {
  // this is backwards or something? they're supposed to be ranked
  // from lowest to highest, and the top one (spider, obvously) should
  // be ranked #1
  
  // Added .reverse and + 1 for ranking and changed to name
    return names.reverse().indexOf(client) + 1;
    
  
}

const getMatch = function(client) {
  // get the client's location in our data

  // Changed to names.indexOf
  const clientLocation = names.indexOf(client);

  // find their two nearest neighbors
  const neighbor1 = clients[clientLocation - 1];
  const neighbor2 = clients[clientLocation + 1];
  const neighbors = [neighbor1, neighbor2];

  // pick one of them and return it

  // Changed too randomClient
  return randomClient(neighbors);
}

// Replaced clients to name
if (command === 'random') {
  // match them randomly
  console.log(matchRandomly(name));
} else if (command === 'rate') {
  // get back their rank in the system
  console.log(getRank(name));
} else if (command === 'match') {
  // get one of their neighbors in the ranking
  console.log(getMatch(name));
} else if (command !== 'match') {
  console.log('Please try one of our options:');
  console.log('random [client name] -> a totally random other user');
  console.log('match [client name] -> a match of similar ranking');
  console.log("rate [client name] -> the client's ranking in our system");
}
