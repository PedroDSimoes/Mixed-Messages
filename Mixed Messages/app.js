const jokes = ["I'm afraid for the calendar. Its days are numbered.","My wife said I should do lunges to stay in shape. That would be a big step forward.",
"Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
"What do a tick and the Eiffel Tower have in common? They're both Paris sites.", "What do you call a fish wearing a bowtie? Sofishticated.",
"How do you follow Will Smith in the snow? You follow the fresh prints.", "If April showers bring May flowers, what do May flowers bring? Pilgrims.",
"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.", "How does dry skin affect you at work? You don’t have any elbow grease to put into it.",
"Dear Math, grow up and solve your own problems.", "Have you heard about the chocolate record player? It sounds pretty sweet.",
"What did the ocean say to the beach? Nothing, it just waved.", "I only know 25 letters of the alphabet. I don't know y.",
"A skeleton walks into a bar and says, 'Hey, bartender. I'll have one beer and a mop.'","I asked my dog what's two minus two. He said nothing.",
"I got carded at a liquor store, and my Blockbuster card accidentally fell out. The cashier said never mind.", "I don't trust those trees. They seem kind of shady.",
"My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!", "How do you get a squirrel to like you? Act like a nut.",
"Why don't eggs tell jokes? They'd crack each other up.", "I don't trust stairs. They're always up to something.",
"What do you call someone with no body and no nose? Nobody knows.", "Did you hear the rumor about butter? Well, I'm not going to spread it!",
"Why couldn't the bicycle stand up by itself? It was two tired.", "Why did Billy get fired from the banana factory? He kept throwing away the bent ones.",
"Why can't a nose be 12 inches long? Because then it would be a foot.", "This graveyard looks overcrowded. People must be dying to get in.",
"What time did the man go to the dentist? Tooth hurt-y.", "How many tickles does it take to make an octopus laugh? Ten tickles."]


const jokeEl = document.getElementById("joke");

function generateJoke() {
    const funny = jokes[Math.floor(Math.random() * jokes.length)];
    jokeEl.textContent = funny;
}