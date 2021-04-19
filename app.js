// lorem text
const text = [
  `Dear friends,
               I don’t know if this letter will even reach you, despite being published in a big newspaper. Many of you are so busy with your phones, watching videos, playing video games, chatting with your friends, commenting on social media, or just scrolling through the feeds of beautiful celebrities, reading an article falls way down on the priority list.
However, if you do happen to chance on this, please read this fully. This is important and this is about your life. You are wasting your life on your phone. Yes, you are the first young generation in India’s history that has access to smartphones and cheap data, and you are spending hours on it, every day.
Check your screen time, which often averages 5-7 hours a day for young people. Retired or established people can spend so many hours on their devices. A young person, who has to build his/ her life, just can’t.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];
//9 article
const form = document.querySelector(".lorem-form"); //for access one class,if i use querySelectorAll()->for all same class
const amount = document.getElementById("amount"); //for access id
const result = document.querySelector(".lorem-text"); //for access class

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.
  e.preventDefault(); //prevent the default behaviour of the form
  //string convert the number using parseInt()
  const value = parseInt(amount.value);
  //for random paragraph
  const random = Math.floor(Math.random() * text.length); //random no. multiply by length of text array
  //3condn.
  //empty value for-->NaN  (OR)
  //-1 value or negative value  (OR)
  //>9

  if (isNaN(value) || value <= 0 || value > 9) {
    //  result.innerHTML=`<p class="result>${text[0]}</p>`;//for 1st paragraph or article
    result.innerHTML = `<p class="result">${text[random]}</p>`; //for random paragraph or article
  } else {
    //for incorrect value
    let tempText = text.slice(0, value); //text array
    //for value iterating new array using map fn.
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");

    // console.log(tempText);//what u enter number in ip field then the show  in new array
    result.innerHTML = tempText;
  } //close else
}); //close addEventListener
