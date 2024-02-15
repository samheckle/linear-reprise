"A Linear Story" by Sam Heckle

Include Basic Screen Effects by Emily Short.

To say the/-- banner text:
	say "[italic type]Solve the riddle in each memory to chart your path.[line break]".

Section 1 - Accept

The Contract is a room. The description of the Contract is "Do you accept these terms?".
Inside from Contract is the Death. 

When play begins:
    now the command prompt is "y/n? > ".

To decide whether agreement:
	if the command prompt is "y/n? > ", yes;
	no.
	
After reading a command when agreement:
	if player consents:
		say "It is done.";
		now the command prompt is "> ";
		try going inside;
	otherwise:
		say "You already agreed to a contract.";
		now the command prompt is "> ";
		try going inside;

[if the player consents:
say "It is agreed.";
try going inside;
otherwise:
say "You already agreed to a contract.";
try going inside;]
		
Section 2 - Death

The Death is a room. The description of the Death is "Emerging from the Revelation, the journey finished, you take a deep breath. A seemingly endless labyrinth of thinking. A pattern only broken by Death itself. [paragraph break]You think you see a gnarled old redwood tree out here.[paragraph break] It didn't have to be this way. Maybe you can retrace your steps."
Inside from Death is the Revelation. 
The gnarled old redwood tree is scenery in the Death. 

[retrace steps]
Understand "retrace steps" as retracing. 
Retracing is an action applying to nothing. 
Check retracing:
    if the location is not Death, say "There are no footsteps to follow." instead;
Carry out retracing:
	try going inside;

ending is a truth state that varies.
ending is initially false.

After going to the Death:
	if ending is true: 
		say "You are reborn.";
		end the story;
	if ending is not true:
		clear the screen;
		say "You think about how Death finally got you, but it seems you came to Death first.[line break]";
		continue the action;

Section 3 - Revelation

The Revelation is a room. "It seems ages since you came to your last conclusion. You had a big idea, but not sure where it ran off to. You can end it here, embracing the eternal slumber. You remembered spiraling down there earlier. Do you remember what you were feeling so anxious about?"

After going to the Revelation the first time:
	now the description of the Death is "You re-emerged from the revelation. [paragraph break]You think you see a gnarled old redwood tree out here.[paragraph break]It didn't have to be this way either. Maybe you can retrace your steps.";
	continue the action;
	
Outside from Revelation is the Death.
Down from Revelation is Spiraling.

Understand "end" as death. Understand "embrace the eternal slumber" as death. 
death is an action applying to nothing. 
Check death:
    if the location is not Revelation, say "It isn't safe to do that here." instead;
Carry out death:
	try going outside;
	
Understand "spiral" as spiraling. Understand "spiraling" as spiraling. Understand "spiral down" as spiraling. Understand "spiraling down" as spiraling. Understand "go spiral" as spiraling. Understand "go spiraling" as spiraling. 
spiraling is an action applying to nothing. 
Check spiraling:
	if the location is not Revelation, say "It isn't safe to do that here.";
Carry out spiraling:
	if the location is Revelation:
		try going down;
	if the location is Thoughts:
		try going outside;
		

Section 4 - Spiral

The Spiraling is a room."Round and round we go again. Your cyclical thoughts float around the room, taunting you. You did start spiraling from some type of idea, but it seems there you have no logic here. Is this healthy? To stay here, thinking the same thought over and over, unable to break the pattern?[paragraph break]Maybe there is a revelation soon if you wait awhile."
Inside from Spiraling is Thoughts.

Understand the commands “think” as something new.
Understand "thoughts" as think-override. Understand "thought" as think-override. Understand "think" as think-override. Understand "break the pattern" as think-override. Understand "go think" as think-override.
think-override is an action applying to nothing. 
Check think-override:
    if the location is not Spiraling, say "A worthy endeavor. Is thinking embodied ever? How do we map the thought process? How does creativity happen?[paragraph break] Time passes." instead;
Carry out think-override:
	if the location is Spiraling:
		try going inside;
	if the location is Decision:
		try going down;
	
Check thinking:
    if the location is not Spiraling, say "Thoughts drift in and out. It's almost like meditation." instead;
Carry out thinking:
	try going inside;
	
Understand the commands “wait” and “z” as something new.
Understand "wait" as wait-override. Understand "waiting" as  wait-override. Understand "wait awhile" as wait-override. Understand "z" as wait-override. 
wait-override is an action applying to nothing. 

The wait count is a number which varies.
The wait count is 0.
Check wait-override:
    if the location is not Spiraling, say "Thoughts drift in and out. It's almost like meditation." instead;
Carry out wait-override:
	if wait count is 3:
		say "It seems that you have come to a conclusion here again. You found your Big Idea!";
		now wait count is 0;
		try going up;
		stop the action;
	if wait count is 2:
		say "Standing here is kind of boring, should you meditate?";
		now wait count is 3;
		continue the action;
	if wait count is 1:
		say "Time passes.";
		now wait count is 2;
		continue the action;
	if wait count is 0:
		say "You ruminated for a moment.";
		now wait count is 1;
		continue the action;
	
Understand "meditate" as meditating.
meditating is an action applying to nothing.
Carry out meditating:
	say "Each thought passes you by, is there a way to enter them?";

Section 5 - Thoughts

Up from Thoughts is Decision. "You hit the flow, entering a thoughtful space. Maybe if you looked into an idea you might be able to find something. You can linger on the decision you had made. [paragraph break] You don't know if the choice was optional, something thrust upon you. You might end up spiraling, ruminating on the choices that you made. The choices that plague your mind."

The idea is a open container in Thoughts. The idea is fixed in place and enterable."An idea floats around."

The description of an idea is "Each idea seems to be worth exploring. Brainstorming is always a fruitful adventure that is worth iterating on." 

The thought count is a number which varies.
The thought count is 0.

After entering the idea: 
	if thought count is 3:
		say "Thinking...have i even had an original thought ever in my life?";
		now thought count is 0;
		continue the action;
	if thought count is 2:
		say "Thinking...how do i handle obsession? is there any way to make it easier to bear? how do normal people do this? [paragraph break]what is normal even?";
		now thought count is 3;
		continue the action;
	if the thought count is 1:
		say "Thinking...my heart isn't full its just anxious and worried about the future all the time. is there something beyond this?";
		now thought count is 2;
		continue the action;
	if the thought count is 0: 
		say "Thinking...about choices. choices i made. choices that were taken from me.";
		now thought count is 1;
		continue the action;

Instead of taking the idea, say "Maybe you need to be inside the idea to have it."

inside-idea is a truth state that varies.
inside-idea is initially false.
 [linger on decision]
Understand "brainstorm" as brainstorming. Understand "brainstorm idea" as brainstorming. 
brainstorming is an action applying to nothing. 
Check brainstorming:
    if the location is not Thoughts, say "You need to be in a place with flow to do this." instead;
Carry out brainstorming:
	if inside-idea is true:
		now inside-idea is false;
		move player to Thoughts, without printing a room description;
	if inside-idea is false:
		try entering idea;
		now inside-idea is true;
		stop the action;

 [linger on decision]
Understand "linger on decision" as lingering. Understand "linger" as lingering. Understand "linger on the decision" as lingering. Understand "decide" as lingering. Understand "go decide" as lingering. 
lingering is an action applying to nothing. 
[Check lingering:
    if the location is not Thoughts, say "It isn't safe to do that here." instead;]
Carry out lingering:
	if location is Thoughts:
		if inside-idea is true:
			now inside-idea is false;
			move player to Thoughts, without printing a room description;
		try going up;
	if location is Choice:
		try going down;

Section 6 - Decision

Decision is a room. "Was this a great choice? At least you made one. You can think about it further ahead. You descended here from the choice that was presented to you, and now you are living in your decision. Did you want to think about that choice again?"
Up from Decision is the Choice.

[think about it further ahead]
Understand "think about it further ahead" as further-ahead. Understand "go further ahead" as further-ahead. Understand "go ahead" as further-ahead. 
further-ahead is an action applying to nothing. 
Check further-ahead:
    if the location is not Decision, say "There is nothing ahead here." instead;
Carry out further-ahead:
	try going down;
	
Understand "chose" as choosing. Understand "go choose" as choosing. Understand "think about choice" as choosing. Understand "choose" as choosing.
choosing is an action applying to nothing. 
Check choosing:
    if the location is not Decision, say "Now isn't the time to make a choice." instead;
Carry out choosing:
	try going up;

Section 7 - Description

The Choice is a room. "This or that. You have options. [paragraph break]You need to decide to continue. [paragraph break]Your parents made a choice too, a choice in naming you. When you emerged from birth you were set for something. Was your name a blessing or a curse?"
The Choice is outside from the Birth.

Understand "decide" as deciding. Understand "make decision" as deciding. 
deciding is an action applying to nothing. 
Check deciding:
    if the location is not Choice, say "You don't have any options to choose from right now." instead;
Carry out deciding:
	try going down;
	
Understand "birth" as birthing. 
birthing is an action applying to nothing. 
Check birthing:
    if the location is not Choice, say "You are already born." instead;
Carry out birthing:
	try going inside;

Section 8 - Birth

The Birth is a room. "The birth of an idea. The birth of you. The beginning of a new story. You have some choices to be made in the outside world. [paragraph break] You feel a sudden revelation. Did you find your Big Idea after all this time?"
The Revelation is a room below the Birth.

After going to the Birth:
	now the description of the Revelation is "Your last conclusion. You found your big idea, finally. You should embrace the eternal slumber. But you can return to spiraling if you think it necessary. Some journeys are meant to be done more than once.";
	now ending is true;
	continue the action;
	
Section 9 - Helpers

Understand "[any room]" as going by name. Understand "go to [any room]" as going by name. Understand "go [any room]" as going by name.
Going by name is an action applying to one thing.
Check going by name:
    if the noun is the location, say "You're already in [the location]." instead;
    if the noun is not adjacent, say "That doesn't make sense." instead. 
Carry out going by name:
    let aim be the best route from the location to the noun, using doors;
    if aim is not a direction, say "You can't think how to get there from here." instead;
    try going aim;
    if the location is not the noun, say "You'll have to stop here." 

[Understand "go back" as retreating. Understand "back" or "return" or "retreat" as retreating.
Retreating is an action applying to nothing.
Carry out retreating:
	let way be the best route from the location to the former location;
	if way is a direction, try going way;
	otherwise say "You can't see an open way back."]


Section 10 - Facts

A fact is a kind of thing. A fact can be known or unknown. A fact can be ready to learn or hidden. A fact has some text called the narration.

Definition: a thing is narratively significant if it conveys an interesting fact.
Definition: a thing is narratively dull if it is not narratively significant.

Conveyance relates various things to various facts. The verb to convey means the conveyance relation.

Definition: a fact is interesting if it is unknown and it is ready to learn.

Following relates various facts to various facts. The verb to follow means the following relation.

To say (new fact - a fact):
	say "[narration of the new fact]";
	now the new fact is known;
	repeat with possible outcome running through facts which follow the new fact:
		if every fact which is followed by possible outcome is known:
			now the possible outcome is ready to learn.
After examining something which conveys an interesting fact (called discovery):
	say "[discovery][paragraph break]".
After choosing notable locale objects:
	repeat through the Table of Locale Priorities:
		if the notable-object entry is narratively significant:
			set the locale priority of the notable-object entry to 1.

For writing a paragraph about a narratively significant thing (called item):
	now the item is mentioned;
	let chosen fact be a random interesting fact which is conveyed by the item;
		say "[chosen fact][paragraph break]".
		
reminder is a fact.
It is ready to learn.
The narration is "It reminds you to be rooted, to not let your thoughts get away from you."
The gnarled old redwood tree conveys reminder.

	
Release along with an interpreter.