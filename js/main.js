var newColour;
var newCreature;
var newAdj;
var newStory;

alert('Let’s make a story together!');

newColour = prompt('A colour (orange, indigo, etc.)');
newCreature = prompt('A creature (dragon, moth, etc.)');
newAdj = prompt('An adjective (beautiful, super, etc.)');
newVerb = prompt('A past tense verb (ran, burped, etc.)');
newStory = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning Enter the letter below:');

if (newStory == 'a') {
  document.write('After snacking on ' + newAdj + 'treats, the ' + newColour + 'bellied ' + newCreature + ' ' + newVerb + ' for hours.');

} if (newStory == 'b') {
  document.write('Ameilia ' + newVerb + ' through the ' + newAdj + ' ' + newColour + ' nebula escaping the space ' + newCreature + '.');

} if (newStory == 'c') {
  document.write('Jackson chose his ' + newAdj + ', ' + newColour + ' ' + newCreature + ' card and ' + newVerb  + ' it to the table knowing he won.');
}

