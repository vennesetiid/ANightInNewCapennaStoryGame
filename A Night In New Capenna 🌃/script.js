let storyButtons = document.getElementsByClassName("storyButton");
for (const storyButton of storyButtons) {
    storyButton.style.display = "none";
}
document.getElementById("storytext").style.display = "none";
// Hide all storyButtons at the start but show name input and submit button
document.getElementById("submitName").style.display = "block";


function submitName() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("storytext").innerText =
        "'Well hello there... So you are the legendary " + name + ", we have been waiting for you, it took you long enough ! My name is Parnesse, welcome to our estate. I do not know all the details, but Xander cannot stop talking about your arrival. You better hurry straight down to the Archives, it's not a good idea to let him wait... He is known for not being a very patient person, especially if he wants something and I guess you have something he wants. Well, consider this a friendly warning. Our Chauffeur is already waiting outside in our limousine, do not worry, we have a room here for you in case you need it, it used to belong to a famous painter back in the days. I bet you must be exhausted from the very long journey, but you can rest later, this cannot wait, hurry !'";
    document.getElementById("headertext").style.display = "none";
    document.getElementById("storytext").style.display = "block";
    document.getElementById("leave").style.display = "block";
    document.getElementById("stay").style.display = "block";
}

function leave() {
    document.getElementById("storytext").innerText =
        "'Welcome, I am your driver today, is that it...?' He is staring at your green briefcase. 'I wonder what it could be... the whole city is in turmoil about your arrival.' You notice he seems incredibly curious but you can make out the fear in his eyes, he is looking through the rear view mirror straight into your eyes. 'You know this delicate information has leaked outside the Maestros, they think there is a rat in their inner circle, but what do I know, I am just a Chauffeur...' He tried to smile but you felt like something was off. After a while the car is leaving the main road and is taking many turns into a more shady looking area of Capenna -  suddenly the view divider to the front row of the car closes and you cannot see the driver anymore. The car comes to a hold, you have a bad feeling. Do you want to get out of the car and run away or do you remain seated and wait?";
    document.getElementById("leave").style.display = "none";
    document.getElementById("stay").style.display = "none";
    document.getElementById("run").style.display = "block";
    document.getElementById("wait").style.display = "block";
}

function stay() {
    document.getElementById("storytext").innerText =
        "You are escorted to the top floor and find yourself in a big Art Deco suite full with abstract paintings and sculptures, you remember Parnesse mentioned that this was once the home of an artist. It looks very well taken care of and you wonder if they often have guests, because it feels like as if someone is still living here. You go to the bathroom and sprinkle cold water in your face, you open the mirror cabinet and notice a small box with the carving 'for the Painter' - you open it - inside there are small glass containers filled with a red liquid and closed with golden caps. You wonder what that could be. You put it back and return to the bedroom. You decide to lay on the bed for a minute, as you had a long journey behind you.";
    document.getElementById("leave").style.display = "none";
    document.getElementById("stay").style.display = "none";
    document.getElementById("nap").style.display = "block";
    document.getElementById("explore").style.display = "block";
}

function run() {
    document.getElementById("storytext").innerText =
        "You need to get out of here, you open the door and start to run as fast as you can, after a while you stop to catch up with your breath. You look around and see that the streets are full with people holding up big cardboard signs, there seems to be a large demonstration of some sort, the angry citizens of Capenna are marching through the streets, chanting things you do not understand. Then there it is - a loud screak - you look up, 'Sky Crier !' you mumble in disbelief. Huge birds roaming the sky, equipped with speakers and cameras, spreading news while wearing leather aviator hats and goggles. Suddenly it hits you - this intense pain... you look down and see a glowing dagger stuck deep inside your stomach. You slowly collapse to the ground and while your vision is slowly fading you see a thug running away with your briefcase. \n YOU DIED \n GAME OVER \n Thank you for playing my game <3";
    document.getElementById("run").style.display = "none";
    document.getElementById("wait").style.display = "none";
}
function wait() {
    document.getElementById("storytext").innerText =
        "Just a few seconds later the divider goes back down. 'My apologies ! This car might look high class but under this pretty surface there is simply poor engineering, this button randomly malfunctions sometimes. Anyway, as you might noticed I tried to take a short cut to avoid the big Raffine Tower demonstration, but apparently many others tried to do so as well. Damn Rabble Rouser, always causing trouble. Do not worry, we should be there soon!' After a while you arrive at a huge old stone building - the Archives. The Chaffeur opens the door and nods goodbye to you. You are greeted by a huge bird in a fancy velvet suit. 'Welcome, my name is Falco Spara, so.. you are the person creating all this trouble - we will see if it is really worth it.' You enter the Archives and go down what feels like an endless number of stairs into a well guarded room. You look around and there are books everywhere. 'Well..' you suddenly hear and turn around. 'I must say I am very curious, somehow you are not how I imagined.. do you really have it? If you are just one of Cabarettis lackeys you would be a fool to come here.. Excuse me, I guess you know who I am, Lord Xander, also known as the Collector, and this here is my better half Cormela! Apparently you already met Spara, our prescious Adviser. Ignore the others, they are just here for our safety' Cormela...the famous glamour thief - you almost splurted out but held it back, you put the briefcase on the huge golden table surrounded by scrolls and books. 'May I?' asks Xander, you agree. He opens the briefcase and inside there it is – the Arcane Encyclopedia. 'The rumor was true, it was not exiled! I must say this is extraordinary. Let us see... I will make you an offer you cannot refuse, because I do not offer you the chance to refuse.' In this moment you feel it, the kill shot straight through your heart. Lord Xander broke your agreement and betrayed you. He is now in possesion of the Artifact. \n You died \n GAME OVER \n Thank you for playing my game <3";
    document.getElementById("run").style.display = "none";
    document.getElementById("wait").style.display = "none";
}

function explore() {
    document.getElementById("storytext").innerText =
        "You were laying on the bed for a few minutes but you are too nervous about the meeting. You take a drink and look around the room. There are very cozy brown velvet lounge chairs, lots of abstract sculptures and paintings. You put on jazzy music from a grammophone. The large Bookcase catches your eye and your eyes are gliding over some of the titles - mostly books about art. A golden figure on the top shelf caught your attention, when you tried to take it down for a closer look it turned like a switch and the bookcase opened like a door. You were suprised but you know that old buildings like this would have secret escape tunnels. You try to take a glimpse of whats behind the door but it is too dark. You take a step closer in while you try to get your matchbox out of your pockets, suddenly you feel a gasp of air in your neck, a breath, it was too late. \n You have been bitten by Anhelo the Painter (The legendary Maestro Vampire Assassin). \n The little glass containers in the bathroom cabinet were Blood Valves. \n GAME OVER \n Thank you for playing my game <3";
    document.getElementById("nap").style.display = "none";
    document.getElementById("explore").style.display = "none";
}

function nap() {
    document.getElementById("storytext").innerText =
        "You wake up by a careful knock on the door, it is already dark outside. You get up and open it, it is a woman dressed in a long glittery green dress with feathers in her hair and a white long scarf. You look outside the hallway and notice that there is no one else and that everything seems oddly quiet. The mysterious woman smiles at you. 'Good evening, so nice to finally meet you! I am here to pick you up for the festivities, we threw you a party to celebrate your partnership with Xander, he will be there to talk about your business aswell, but first let us have some fun !' You take your briefcase and coat, she grabs your hand and you both leave. You take a small staircase on the back of the estate which seems strange, but there is something about her that makes you feel comfortable. You get into a black car which reminds you somehow of a pimped hearse. The driver is waiting already, a big Rhino in a suit and fedora who observes every movement you make, he nods at her after you both got into the car. A long drive later you arrive at a very fancy looking part of the city, there are many people in extravagant outfits and venetian style masks in shape of animals everywhere. You both leave the car and everyone is staring at you, it is almost as the world stops spinning for a while and the atmosphere is filled with whispers. The mysterious woman is escorting you inside. As soon as you enter your jaw almost drops to the floor when you see the huge fountain of shiny, rainbow like liquid, you have never seen anything like it. The music is playing loud, people are dancing, laughing, having a good time. There are Rhino servants walking around everywhere, holding silver trays full with green steamy drinks in margharita glasses, she takes one for you. \n Will you drink?";
    document.getElementById("nap").style.display = "none";
    document.getElementById("explore").style.display = "none";
    document.getElementById("drink").style.display = "block";
    document.getElementById("decline").style.display = "block";
}

function drink() {
    document.getElementById("storytext").innerText =
        "You take a sip, it tastes surprisingly good. You walk upstairs towards a balcony overlooking the huge festivities. 'Up here, Xander is waiting for you, the view up there is incredible, believe me !' When you arrive upstairs and walk through the door to the balcony you suddenly encounter a huge cat-like man in a robe, you immediately notice that this is not Xander. You try to back out, but one of his lackeys is preventing you from leaving and pushes you back into the room. 'Well well well, if this is not Xanders little partner, he unfortuntely could not be with us tonight, he is busy being dead, all it took was a little tiny dose of black mana and... splash! But hey do not worry, I will gladly take this prescious item off of you!' Before you could even react you suddenly start to feel strange, your heart starts to beat very fast, you start to sweat and your vision is getting blurry, you hear them mumbling and laughing but almost like from a distance. The mysterious woman gives you a blowing kiss and waves goodbye and suddenly you feel like flying. \n You walked into Jetmirs trap, got poisoned by the mysterious Lady which turned out to be Cabarettis Venom Connoiseur and his lackeys threw you over the balcony railing into the Halo Fountain.\n Halo is the magical substance that is sought after for its magic-enhancing quality. You have been consumed by magic and exiled forever. \n GAME OVER \n Thank you for playing my game <3";
    document.getElementById("drink").style.display = "none";
    document.getElementById("decline").style.display = "none";
}

function decline() {
    document.getElementById("storytext").innerText =
        "You decline the drink and excuse yourself. You quickly walk towards the bathroom and in the back of your eye you see the mysterious woman whispering something into a grim looking guys ear, while they are both looking at you. He is coming after you. First thing you do in the bathroom is to lock the door. You knew something was wrong here, why would Xander throw a party for a delicate business like this which should have been kept in secret. You hear the man knocking at the door and trying to kick it in. You look into the mirror in the bathroom and regret coming to this corrupt town, this will be your end. Suddenly you see a reflection in the mirror, a silhouette pulling you towards it. You are wondering if you are losing your mind completely. A moment later you find yourself floating in a room full of little bottles, a fireplace and a group of people in robes around a table with a crystal sphere in the middle. 'Dont be afraid, we knew you would come but let us first get you back onto the ground!' You are landing back on your feet in the middle of this strange room with these strange people. As if this was not strange enough there are little fish flying around in bubbles. 'We are known as the Obscura Ascendancy, wizards and mystics. We knew you would arrive long before you came here, years ago already. We have seen it. We have prepared for it. We know the reason you are here. The artifact you wanted to give Xander should not be in the hand of anyone, it should be banished!' Your Briefcase is floating away from you to one of the wizards. 'We will make sure that this cannot hurt anyone, and that it will never end up in the wrong hands. It was wise of you to question your decisions today, we have seen it all... your fate was not on the lucky end. The order will be restored and we will bring you safely back home, no one will ever come after you and you will be reunited with the person dear to you.' They all take each others hand and start chanting spells. \n The Obscura returned you home and erased your memory, they did not banish the book as they said they would and took over Capenna as the leading crime family. The reason you came to Capenna was a deal with Lord Xander - The Collector to give him the only existing copy of the Arcane Encyclopedia in exchange for reversing a spell which trapped your loved one in exile forever. The Obscura are one of the 5 leading crime families in the city, luckily they still kept their word. You have been reunited with your loved one and live a happy life. \n The end \n YOU WON \n Thank you for playing my game <3";
    document.getElementById("drink").style.display = "none";
    document.getElementById("decline").style.display = "none";
}

