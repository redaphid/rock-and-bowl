Alright, so the using of an existing library gave me a feel for the sort of thing you're looking for.

I have some have some exciting questions, along with some "guesses" that I'll use to implement features speculatively if I'm resource-starved for more detailed requirements. 

And sometimes I even have a plan. 

Don't worry about answering all of 'em if you have other things to do, or want to test my guessing skills.

Alright, questions time:

# Kind of deliverable
 * Is it better for the deliverable to be an "extreme" MVP, that does the bare minimum based on the literal requirements?
 * Can I make something more complicated than the MVP if I want to "show off", or is that considered a negative?


 ## Guess
 * Assume we're going for the Jade-ism "doing things half-asssed is fine if you only need half of an ass".
 * Hope adding *some* complexity beyond the minimum requireents isn't seen as a bad thing.

## Plan
* I will work on the extreme MVP async while waiting for these questions to be answered
* I will progressively make things more complicated if I am bottlenecked waiting for the answers to these questions.
  * I will stop speculatively implementing features that are *too* fancy before getting the answers to these questions. e.g., make a GUI.
* I will hide the fact that I implemented too complicated a deliverable if my requirements-starved speculation is incorrect.
  * No one will ever know.


# User Input Format
 * Can the user just edit JSON files?
 * If not, can the user provide a CSV file of the sort made from spreadsheet apps?
 * Is a CLI "good enough"?
 * If not, should the user use a GUI?
 * Do any input validation?
* Hand-hold user by restricting them to recording 1 frame at a time, or just have them enter all the frames in a game? 

# User Output Format
 * JSON good enough?
 * Human-readable text in terminal good enough?
 * GUI for the output important?
   * GUI for the output actually bad for the interview?

* Indicate if the game is finished or incomplete?

## Guess
* JSON->JSON might be good enough.
  * Doing anything more complicated than CSV->Human readable text in a terminal might be considered a negative.

* User specifying all the game information they have at once is good enough
* Basic input validation is required. (see below)
  * All validation errors should be indicated to the user at once.
* I assume avoiding "developer gold plating" is important. So I shouldn't get too fancy.

## Plan
* Start with an MVP that might be subviable as a deliverable
* Basic input validation.
* Do other stuff unrelated to format, then make I/O progressively more user-friendly.
* Stop adding I/O complexity until I get the responses to these questions before I implement a GUI
   * Wait for question answers to see if making a GUI would considered "good" or "bad".
   

# Input Validation
  * Should I do it?
  * Too many pins (or negative) knocked down in a frame?
  * Specifying any value in the 2nd "roll" of a frame if the user gets a strike?
  * Too many frames in a game?
  * Complain about unfinished frame? (only one roll if it's an open frame)

## Error stuff
  * Can the app just "blow up" (throw error) if the user input is bad?
  * Do the error messages have to be "friendly", and explain why the input is invalid?
* Is the user ok with only seeing the first "user-friendly" validation error?
  * Does the user need information for *all* validation errors with "friendly" error messages at once?


## Guess
* I have to implement everything enumerated in this section.

## Plan
  * Implement input validation, in the order of the list above.


# Features
  * Multiplayer?
  * A stateful user experience that leads them along as they complete frames?

## Guess
  * None of the above features are required.

## Plan
  * I will not implement them.

I'm sure I'll have more questions as time goes on, but I'm a night owl, so working at night is actually my preference (though I know I need to sync up with the world once I'm employed.)

Thanks for answering whatever subset of the questions that you do. And the explanations of the kind of questions I can ask.

-- Aaron