export enum GameMessages {
    DeckChosen,
    RequestGameStateChange,
    TurnStateChange,
    StackChange,
    DrawCard,
    UpdatePlayer,
    UserReadyToStart,
    MulliganRequest,
    PlayerConfirmsHand,
    NextPhase,
    SetGamePhase,
    RequestNewTurn,
    RequestPriority,
    ReleasingPriority,
    PassPriority,
    StageCard,
    PayCP,
    UnpayCP,
    PlayCard,
    UnstageCard
}

export enum GameResponseMessages {
    CardHasBeenStaged,
    CardHasBeenUnstaged
}

export enum GamePhases {
    WAITING_FOR_PLAYERS,
    READY_TO_START,
    CHOOSING_DECKS,
    ROLL_DICE,
    DETERMINE_HAND,
    LOADING_GAME,
    START_GAME,
    GAME_IN_PROGRESS,
    SWITCH_TURN,
    END_GAME
}

export enum TurnPhases {
    START_TURN = 0,
    ACTIVE = 1,
    DRAW = 2,
    MAIN_1 = 3,
    ATTACK = 4,
    MAIN_2 = 5,
    END = 6,
    END_TURN = 7
}

export interface GameStateChangeMessage {
    newState: GamePhases;
}

export interface NextPhaseMessageInput {
    explicitPhase?: TurnPhases;
}

export interface DeckChosenMessageInput {
    deckID: string;
}

export interface MulliganRequestMessageInput {
    mulligan: boolean;
}

export interface SetGamePhaseMessageInput {
    gamePhase: GamePhases;
}

export interface PriorityMessageInput {
    forTurnPhase: TurnPhases;
}

export interface StageCardMessageInput {
    cardID: string;
}

// tslint:disable-next-line:no-empty-interface
export interface PayCPMessageInput {

}

// Response Interfaces
export interface CardHasBeenStagedMessage {
    cardID: string;
}

