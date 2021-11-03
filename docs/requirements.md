# Bowling Scoring Application

## Description:
As a bowler, I want to be able to enter a list of bowling frame scores so that I can see the
progress and total score of my game.

## Acceptance Criteria:
* I will have a place to enter a series of scores per frame.
* A strike is scored as defined below.
* A spare is scored as defined below.
* An incomplete game is scored up to the last frame provided.

## Information
Please read through the following and develop a solution to complete the user story. Your deliverable
should be working code (github, zip file, other… up to you) with some brief instructions.

## Definitions

### Frame
 A frame consists of 2 opportunities to knock down 10 bowling pins with a bowling ball. The 10 pins are then reset for the next frame.
___

### How to Score

#### Strike
* If you knock down all 10 pins in the first shot of a frame, you get a strike.
* A strike earns 10 points plus the sum of your next two shots.

#### Spare
* If you knock down all 10 pins using both shots of a frame, you get a spare.
* A spare earns 10 points plus the sum of your next one shot.

#### Open Frame
* If you do not knock down all 10 pins using both shots of your frame (9 or fewerpins knocked down), you have an open frame.

* An open frame only earns the number of pins knocked down.

#### The 10th Frame
* If you roll a strike in the first shot of the 10th frame, you get 2 more shots.
* The score for the 10th frame is the total number of pins knocked down in the 10th frame.
* If you roll a spare in the first two shots of the 10th frame, you get 1 more shot.
* If you leave the 10th frame open after two shots, the game is over and you do not get an additional shot.