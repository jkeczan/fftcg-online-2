# Game Objects

## Game Zones
All game zones should have the following handlers
- ```onCardLeave()```
- ```onCardDrop()```

In addition, each zone should have the following helper functions for card orientation
- ```shouldBeShown()```
- ```shouldBeSideways()```
- ``` shouldStack()```


### Hand
- ```shouldBeShown(true)```
- ```shouldBeSideways(false)```
- ``` shouldStack(false)```

### Forward Field
- ```shouldBeShown(true)```
- ```shouldBeSideways(false)```
- ``` shouldStack(false)```
### Backup Field
- ```shouldBeShown(true)```
- ```shouldBeSideways(false)```
- ``` shouldStack(false)```
### Monster Field
- ```shouldBeShown(true)```
- ```shouldBeSideways(false)```
- ``` shouldStack(false)```
### Break Zone
- ```shouldBeShown(true)```
- ```shouldBeSideways(false)```
- ``` shouldStack(true)```
### Damage Zone
- ```shouldBeShown(true)```
- ```shouldBeSideways(true)```
- ``` shouldStack(false)```

# All cards needs to implement the following lifecycle hooks
- ```onDraw```
- ```onPlay```
- ```onBreak```
- ```onLeaveField```
- ```onPutFromField```
- ```onDamage```
- ```onTap```


https://www.kenney.nl/assets?q=audio
