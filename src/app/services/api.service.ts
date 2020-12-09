/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCardInput = {
  id?: string | null;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
};

export enum FFTCGCardElement {
  FIRE = "FIRE",
  WIND = "WIND",
  WATER = "WATER",
  EARTH = "EARTH",
  LIGHTNING = "LIGHTNING",
  ICE = "ICE",
  LIGHT = "LIGHT",
  DARK = "DARK"
}

export enum FFTCGCardRarity {
  COMMON = "COMMON",
  RARE = "RARE",
  HERO = "HERO",
  LEGEND = "LEGEND"
}

export type ModelCardConditionInput = {
  name?: ModelStringInput | null;
  cost?: ModelIntInput | null;
  elements?: ModelFFTCGCardElementListInput | null;
  cardType?: ModelStringInput | null;
  powerLevel?: ModelIntInput | null;
  effectText?: ModelStringInput | null;
  isExBurst?: ModelBooleanInput | null;
  rarity?: ModelFFTCGCardRarityInput | null;
  isMultiPlay?: ModelBooleanInput | null;
  serialNumber?: ModelStringInput | null;
  imageSource?: ModelStringInput | null;
  cardHash?: ModelStringInput | null;
  and?: Array<ModelCardConditionInput | null> | null;
  or?: Array<ModelCardConditionInput | null> | null;
  not?: ModelCardConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFFTCGCardElementListInput = {
  eq?: Array<FFTCGCardElement | null> | null;
  ne?: Array<FFTCGCardElement | null> | null;
  contains?: FFTCGCardElement | null;
  notContains?: FFTCGCardElement | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFFTCGCardRarityInput = {
  eq?: FFTCGCardRarity | null;
  ne?: FFTCGCardRarity | null;
};

export type UpdateCardInput = {
  id: string;
  name?: string | null;
  cost?: number | null;
  elements?: Array<FFTCGCardElement> | null;
  cardType?: string | null;
  powerLevel?: number | null;
  effectText?: string | null;
  isExBurst?: boolean | null;
  rarity?: FFTCGCardRarity | null;
  isMultiPlay?: boolean | null;
  serialNumber?: string | null;
  imageSource?: string | null;
  cardHash?: string | null;
};

export type DeleteCardInput = {
  id?: string | null;
};

export type CreateCardCategoryConnectionInput = {
  id?: string | null;
  cardID: string;
  categoryID: string;
};

export type ModelCardCategoryConnectionConditionInput = {
  cardID?: ModelIDInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelCardCategoryConnectionConditionInput | null> | null;
  or?: Array<ModelCardCategoryConnectionConditionInput | null> | null;
  not?: ModelCardCategoryConnectionConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCardCategoryConnectionInput = {
  id: string;
  cardID?: string | null;
  categoryID?: string | null;
};

export type DeleteCardCategoryConnectionInput = {
  id?: string | null;
};

export type CreateCardCategoryInput = {
  id?: string | null;
  name: string;
};

export type ModelCardCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCardCategoryConditionInput | null> | null;
  or?: Array<ModelCardCategoryConditionInput | null> | null;
  not?: ModelCardCategoryConditionInput | null;
};

export type UpdateCardCategoryInput = {
  id: string;
  name?: string | null;
};

export type DeleteCardCategoryInput = {
  id?: string | null;
};

export type CreateCardElementInput = {
  id?: string | null;
  name: string;
  icon: string;
};

export type ModelCardElementConditionInput = {
  name?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  and?: Array<ModelCardElementConditionInput | null> | null;
  or?: Array<ModelCardElementConditionInput | null> | null;
  not?: ModelCardElementConditionInput | null;
};

export type UpdateCardElementInput = {
  id: string;
  name?: string | null;
  icon?: string | null;
};

export type DeleteCardElementInput = {
  id?: string | null;
};

export type CreateCardDesignerInput = {
  id?: string | null;
  name: string;
};

export type ModelCardDesignerConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCardDesignerConditionInput | null> | null;
  or?: Array<ModelCardDesignerConditionInput | null> | null;
  not?: ModelCardDesignerConditionInput | null;
};

export type UpdateCardDesignerInput = {
  id: string;
  name?: string | null;
};

export type DeleteCardDesignerInput = {
  id?: string | null;
};

export type CreateCardJobConnectionInput = {
  id?: string | null;
  cardID: string;
  jobID: string;
};

export type ModelCardJobConnectionConditionInput = {
  cardID?: ModelIDInput | null;
  jobID?: ModelIDInput | null;
  and?: Array<ModelCardJobConnectionConditionInput | null> | null;
  or?: Array<ModelCardJobConnectionConditionInput | null> | null;
  not?: ModelCardJobConnectionConditionInput | null;
};

export type UpdateCardJobConnectionInput = {
  id: string;
  cardID?: string | null;
  jobID?: string | null;
};

export type DeleteCardJobConnectionInput = {
  id?: string | null;
};

export type CreateCardJobInput = {
  id?: string | null;
  name: string;
};

export type ModelCardJobConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCardJobConditionInput | null> | null;
  or?: Array<ModelCardJobConditionInput | null> | null;
  not?: ModelCardJobConditionInput | null;
};

export type UpdateCardJobInput = {
  id: string;
  name?: string | null;
};

export type DeleteCardJobInput = {
  id?: string | null;
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  cost?: ModelIntInput | null;
  elements?: ModelFFTCGCardElementListInput | null;
  cardType?: ModelStringInput | null;
  powerLevel?: ModelIntInput | null;
  effectText?: ModelStringInput | null;
  isExBurst?: ModelBooleanInput | null;
  rarity?: ModelFFTCGCardRarityInput | null;
  isMultiPlay?: ModelBooleanInput | null;
  serialNumber?: ModelStringInput | null;
  imageSource?: ModelStringInput | null;
  cardHash?: ModelStringInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type ModelCardCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCardCategoryFilterInput | null> | null;
  or?: Array<ModelCardCategoryFilterInput | null> | null;
  not?: ModelCardCategoryFilterInput | null;
};

export type ModelCardElementFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  and?: Array<ModelCardElementFilterInput | null> | null;
  or?: Array<ModelCardElementFilterInput | null> | null;
  not?: ModelCardElementFilterInput | null;
};

export type ModelCardDesignerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCardDesignerFilterInput | null> | null;
  or?: Array<ModelCardDesignerFilterInput | null> | null;
  not?: ModelCardDesignerFilterInput | null;
};

export type ModelCardJobFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCardJobFilterInput | null> | null;
  or?: Array<ModelCardJobFilterInput | null> | null;
  not?: ModelCardJobFilterInput | null;
};

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  jobs: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cardCategories: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
  cardDesigner: {
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  jobs: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cardCategories: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
  cardDesigner: {
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  jobs: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cardCategories: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
  cardDesigner: {
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateCardCategoryConnectionMutation = {
  __typename: "CardCategoryConnection";
  id: string;
  cardID: string;
  categoryID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "CardCategory";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardCategoryConnectionMutation = {
  __typename: "CardCategoryConnection";
  id: string;
  cardID: string;
  categoryID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "CardCategory";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardCategoryConnectionMutation = {
  __typename: "CardCategoryConnection";
  id: string;
  cardID: string;
  categoryID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "CardCategory";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateCardCategoryMutation = {
  __typename: "CardCategory";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardCategoryMutation = {
  __typename: "CardCategory";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardCategoryMutation = {
  __typename: "CardCategory";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCardElementMutation = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardElementMutation = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardElementMutation = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCardDesignerMutation = {
  __typename: "CardDesigner";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardDesignerMutation = {
  __typename: "CardDesigner";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardDesignerMutation = {
  __typename: "CardDesigner";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCardJobConnectionMutation = {
  __typename: "CardJobConnection";
  id: string;
  cardID: string;
  jobID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "CardJob";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardJobConnectionMutation = {
  __typename: "CardJobConnection";
  id: string;
  cardID: string;
  jobID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "CardJob";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardJobConnectionMutation = {
  __typename: "CardJobConnection";
  id: string;
  cardID: string;
  jobID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "CardJob";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateCardJobMutation = {
  __typename: "CardJob";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardJobMutation = {
  __typename: "CardJob";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardJobMutation = {
  __typename: "CardJob";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  jobs: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cardCategories: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
  cardDesigner: {
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardCategoryQuery = {
  __typename: "CardCategory";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCardCategorysQuery = {
  __typename: "ModelCardCategoryConnection";
  items: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardElementQuery = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCardElementsQuery = {
  __typename: "ModelCardElementConnection";
  items: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardDesignerQuery = {
  __typename: "CardDesigner";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCardDesignersQuery = {
  __typename: "ModelCardDesignerConnection";
  items: Array<{
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardJobQuery = {
  __typename: "CardJob";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCardJobsQuery = {
  __typename: "ModelCardJobConnection";
  items: Array<{
    __typename: "CardJob";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  jobs: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cardCategories: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
  cardDesigner: {
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  jobs: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cardCategories: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
  cardDesigner: {
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  name: string;
  cost: number;
  elements: Array<FFTCGCardElement>;
  cardType: string;
  jobs: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cardCategories: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
  serialNumber: string;
  imageSource: string;
  cardHash: string;
  cardDesigner: {
    __typename: "CardDesigner";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardCategoryConnectionSubscription = {
  __typename: "CardCategoryConnection";
  id: string;
  cardID: string;
  categoryID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "CardCategory";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardCategoryConnectionSubscription = {
  __typename: "CardCategoryConnection";
  id: string;
  cardID: string;
  categoryID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "CardCategory";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardCategoryConnectionSubscription = {
  __typename: "CardCategoryConnection";
  id: string;
  cardID: string;
  categoryID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  category: {
    __typename: "CardCategory";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardCategorySubscription = {
  __typename: "CardCategory";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardCategorySubscription = {
  __typename: "CardCategory";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardCategorySubscription = {
  __typename: "CardCategory";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardCategoryConnectionConnection";
    items: Array<{
      __typename: "CardCategoryConnection";
      id: string;
      cardID: string;
      categoryID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      category: {
        __typename: "CardCategory";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardElementSubscription = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardElementSubscription = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardElementSubscription = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardDesignerSubscription = {
  __typename: "CardDesigner";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardDesignerSubscription = {
  __typename: "CardDesigner";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardDesignerSubscription = {
  __typename: "CardDesigner";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardJobConnectionSubscription = {
  __typename: "CardJobConnection";
  id: string;
  cardID: string;
  jobID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "CardJob";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardJobConnectionSubscription = {
  __typename: "CardJobConnection";
  id: string;
  cardID: string;
  jobID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "CardJob";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardJobConnectionSubscription = {
  __typename: "CardJobConnection";
  id: string;
  cardID: string;
  jobID: string;
  card: {
    __typename: "Card";
    id: string;
    name: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: string;
    jobs: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    cardCategories: {
      __typename: "ModelCardCategoryConnectionConnection";
      items: Array<{
        __typename: "CardCategoryConnection";
        id: string;
        cardID: string;
        categoryID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        category: {
          __typename: "CardCategory";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
    serialNumber: string;
    imageSource: string;
    cardHash: string;
    cardDesigner: {
      __typename: "CardDesigner";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
  job: {
    __typename: "CardJob";
    id: string;
    name: string;
    cards: {
      __typename: "ModelCardJobConnectionConnection";
      items: Array<{
        __typename: "CardJobConnection";
        id: string;
        cardID: string;
        jobID: string;
        card: {
          __typename: "Card";
          id: string;
          name: string;
          cost: number;
          elements: Array<FFTCGCardElement>;
          cardType: string;
          jobs: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          cardCategories: {
            __typename: "ModelCardCategoryConnectionConnection";
            items: Array<{
              __typename: "CardCategoryConnection";
              id: string;
              cardID: string;
              categoryID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          powerLevel: number;
          effectText: string;
          isExBurst: boolean;
          rarity: FFTCGCardRarity;
          isMultiPlay: boolean;
          serialNumber: string;
          imageSource: string;
          cardHash: string;
          cardDesigner: {
            __typename: "CardDesigner";
            id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
        job: {
          __typename: "CardJob";
          id: string;
          name: string;
          cards: {
            __typename: "ModelCardJobConnectionConnection";
            items: Array<{
              __typename: "CardJobConnection";
              id: string;
              cardID: string;
              jobID: string;
              createdAt: string;
              updatedAt: string;
            } | null> | null;
            nextToken: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardJobSubscription = {
  __typename: "CardJob";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardJobSubscription = {
  __typename: "CardJob";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardJobSubscription = {
  __typename: "CardJob";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardJobConnectionConnection";
    items: Array<{
      __typename: "CardJobConnection";
      id: string;
      cardID: string;
      jobID: string;
      card: {
        __typename: "Card";
        id: string;
        name: string;
        cost: number;
        elements: Array<FFTCGCardElement>;
        cardType: string;
        jobs: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        cardCategories: {
          __typename: "ModelCardCategoryConnectionConnection";
          items: Array<{
            __typename: "CardCategoryConnection";
            id: string;
            cardID: string;
            categoryID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            category: {
              __typename: "CardCategory";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        powerLevel: number;
        effectText: string;
        isExBurst: boolean;
        rarity: FFTCGCardRarity;
        isMultiPlay: boolean;
        serialNumber: string;
        imageSource: string;
        cardHash: string;
        cardDesigner: {
          __typename: "CardDesigner";
          id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
      job: {
        __typename: "CardJob";
        id: string;
        name: string;
        cards: {
          __typename: "ModelCardJobConnectionConnection";
          items: Array<{
            __typename: "CardJobConnection";
            id: string;
            cardID: string;
            jobID: string;
            card: {
              __typename: "Card";
              id: string;
              name: string;
              cost: number;
              elements: Array<FFTCGCardElement>;
              cardType: string;
              powerLevel: number;
              effectText: string;
              isExBurst: boolean;
              rarity: FFTCGCardRarity;
              isMultiPlay: boolean;
              serialNumber: string;
              imageSource: string;
              cardHash: string;
              createdAt: string;
              updatedAt: string;
            };
            job: {
              __typename: "CardJob";
              id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          } | null> | null;
          nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCard(
    input: CreateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!, $condition: ModelCardConditionInput) {
        createCard(input: $input, condition: $condition) {
          __typename
          id
          name
          cost
          elements
          cardType
          jobs {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cardCategories {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
          serialNumber
          imageSource
          cardHash
          cardDesigner {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardMutation>response.data.createCard;
  }
  async UpdateCard(
    input: UpdateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<UpdateCardMutation> {
    const statement = `mutation UpdateCard($input: UpdateCardInput!, $condition: ModelCardConditionInput) {
        updateCard(input: $input, condition: $condition) {
          __typename
          id
          name
          cost
          elements
          cardType
          jobs {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cardCategories {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
          serialNumber
          imageSource
          cardHash
          cardDesigner {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardMutation>response.data.updateCard;
  }
  async DeleteCard(
    input: DeleteCardInput,
    condition?: ModelCardConditionInput
  ): Promise<DeleteCardMutation> {
    const statement = `mutation DeleteCard($input: DeleteCardInput!, $condition: ModelCardConditionInput) {
        deleteCard(input: $input, condition: $condition) {
          __typename
          id
          name
          cost
          elements
          cardType
          jobs {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cardCategories {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
          serialNumber
          imageSource
          cardHash
          cardDesigner {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardMutation>response.data.deleteCard;
  }
  async CreateCardCategoryConnection(
    input: CreateCardCategoryConnectionInput,
    condition?: ModelCardCategoryConnectionConditionInput
  ): Promise<CreateCardCategoryConnectionMutation> {
    const statement = `mutation CreateCardCategoryConnection($input: CreateCardCategoryConnectionInput!, $condition: ModelCardCategoryConnectionConditionInput) {
        createCardCategoryConnection(input: $input, condition: $condition) {
          __typename
          id
          cardID
          categoryID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardCategoryConnectionMutation>(
      response.data.createCardCategoryConnection
    );
  }
  async UpdateCardCategoryConnection(
    input: UpdateCardCategoryConnectionInput,
    condition?: ModelCardCategoryConnectionConditionInput
  ): Promise<UpdateCardCategoryConnectionMutation> {
    const statement = `mutation UpdateCardCategoryConnection($input: UpdateCardCategoryConnectionInput!, $condition: ModelCardCategoryConnectionConditionInput) {
        updateCardCategoryConnection(input: $input, condition: $condition) {
          __typename
          id
          cardID
          categoryID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardCategoryConnectionMutation>(
      response.data.updateCardCategoryConnection
    );
  }
  async DeleteCardCategoryConnection(
    input: DeleteCardCategoryConnectionInput,
    condition?: ModelCardCategoryConnectionConditionInput
  ): Promise<DeleteCardCategoryConnectionMutation> {
    const statement = `mutation DeleteCardCategoryConnection($input: DeleteCardCategoryConnectionInput!, $condition: ModelCardCategoryConnectionConditionInput) {
        deleteCardCategoryConnection(input: $input, condition: $condition) {
          __typename
          id
          cardID
          categoryID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardCategoryConnectionMutation>(
      response.data.deleteCardCategoryConnection
    );
  }
  async CreateCardCategory(
    input: CreateCardCategoryInput,
    condition?: ModelCardCategoryConditionInput
  ): Promise<CreateCardCategoryMutation> {
    const statement = `mutation CreateCardCategory($input: CreateCardCategoryInput!, $condition: ModelCardCategoryConditionInput) {
        createCardCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardCategoryMutation>response.data.createCardCategory;
  }
  async UpdateCardCategory(
    input: UpdateCardCategoryInput,
    condition?: ModelCardCategoryConditionInput
  ): Promise<UpdateCardCategoryMutation> {
    const statement = `mutation UpdateCardCategory($input: UpdateCardCategoryInput!, $condition: ModelCardCategoryConditionInput) {
        updateCardCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardCategoryMutation>response.data.updateCardCategory;
  }
  async DeleteCardCategory(
    input: DeleteCardCategoryInput,
    condition?: ModelCardCategoryConditionInput
  ): Promise<DeleteCardCategoryMutation> {
    const statement = `mutation DeleteCardCategory($input: DeleteCardCategoryInput!, $condition: ModelCardCategoryConditionInput) {
        deleteCardCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardCategoryMutation>response.data.deleteCardCategory;
  }
  async CreateCardElement(
    input: CreateCardElementInput,
    condition?: ModelCardElementConditionInput
  ): Promise<CreateCardElementMutation> {
    const statement = `mutation CreateCardElement($input: CreateCardElementInput!, $condition: ModelCardElementConditionInput) {
        createCardElement(input: $input, condition: $condition) {
          __typename
          id
          name
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardElementMutation>response.data.createCardElement;
  }
  async UpdateCardElement(
    input: UpdateCardElementInput,
    condition?: ModelCardElementConditionInput
  ): Promise<UpdateCardElementMutation> {
    const statement = `mutation UpdateCardElement($input: UpdateCardElementInput!, $condition: ModelCardElementConditionInput) {
        updateCardElement(input: $input, condition: $condition) {
          __typename
          id
          name
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardElementMutation>response.data.updateCardElement;
  }
  async DeleteCardElement(
    input: DeleteCardElementInput,
    condition?: ModelCardElementConditionInput
  ): Promise<DeleteCardElementMutation> {
    const statement = `mutation DeleteCardElement($input: DeleteCardElementInput!, $condition: ModelCardElementConditionInput) {
        deleteCardElement(input: $input, condition: $condition) {
          __typename
          id
          name
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardElementMutation>response.data.deleteCardElement;
  }
  async CreateCardDesigner(
    input: CreateCardDesignerInput,
    condition?: ModelCardDesignerConditionInput
  ): Promise<CreateCardDesignerMutation> {
    const statement = `mutation CreateCardDesigner($input: CreateCardDesignerInput!, $condition: ModelCardDesignerConditionInput) {
        createCardDesigner(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardDesignerMutation>response.data.createCardDesigner;
  }
  async UpdateCardDesigner(
    input: UpdateCardDesignerInput,
    condition?: ModelCardDesignerConditionInput
  ): Promise<UpdateCardDesignerMutation> {
    const statement = `mutation UpdateCardDesigner($input: UpdateCardDesignerInput!, $condition: ModelCardDesignerConditionInput) {
        updateCardDesigner(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardDesignerMutation>response.data.updateCardDesigner;
  }
  async DeleteCardDesigner(
    input: DeleteCardDesignerInput,
    condition?: ModelCardDesignerConditionInput
  ): Promise<DeleteCardDesignerMutation> {
    const statement = `mutation DeleteCardDesigner($input: DeleteCardDesignerInput!, $condition: ModelCardDesignerConditionInput) {
        deleteCardDesigner(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardDesignerMutation>response.data.deleteCardDesigner;
  }
  async CreateCardJobConnection(
    input: CreateCardJobConnectionInput,
    condition?: ModelCardJobConnectionConditionInput
  ): Promise<CreateCardJobConnectionMutation> {
    const statement = `mutation CreateCardJobConnection($input: CreateCardJobConnectionInput!, $condition: ModelCardJobConnectionConditionInput) {
        createCardJobConnection(input: $input, condition: $condition) {
          __typename
          id
          cardID
          jobID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardJobConnectionMutation>(
      response.data.createCardJobConnection
    );
  }
  async UpdateCardJobConnection(
    input: UpdateCardJobConnectionInput,
    condition?: ModelCardJobConnectionConditionInput
  ): Promise<UpdateCardJobConnectionMutation> {
    const statement = `mutation UpdateCardJobConnection($input: UpdateCardJobConnectionInput!, $condition: ModelCardJobConnectionConditionInput) {
        updateCardJobConnection(input: $input, condition: $condition) {
          __typename
          id
          cardID
          jobID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardJobConnectionMutation>(
      response.data.updateCardJobConnection
    );
  }
  async DeleteCardJobConnection(
    input: DeleteCardJobConnectionInput,
    condition?: ModelCardJobConnectionConditionInput
  ): Promise<DeleteCardJobConnectionMutation> {
    const statement = `mutation DeleteCardJobConnection($input: DeleteCardJobConnectionInput!, $condition: ModelCardJobConnectionConditionInput) {
        deleteCardJobConnection(input: $input, condition: $condition) {
          __typename
          id
          cardID
          jobID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardJobConnectionMutation>(
      response.data.deleteCardJobConnection
    );
  }
  async CreateCardJob(
    input: CreateCardJobInput,
    condition?: ModelCardJobConditionInput
  ): Promise<CreateCardJobMutation> {
    const statement = `mutation CreateCardJob($input: CreateCardJobInput!, $condition: ModelCardJobConditionInput) {
        createCardJob(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardJobMutation>response.data.createCardJob;
  }
  async UpdateCardJob(
    input: UpdateCardJobInput,
    condition?: ModelCardJobConditionInput
  ): Promise<UpdateCardJobMutation> {
    const statement = `mutation UpdateCardJob($input: UpdateCardJobInput!, $condition: ModelCardJobConditionInput) {
        updateCardJob(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardJobMutation>response.data.updateCardJob;
  }
  async DeleteCardJob(
    input: DeleteCardJobInput,
    condition?: ModelCardJobConditionInput
  ): Promise<DeleteCardJobMutation> {
    const statement = `mutation DeleteCardJob($input: DeleteCardJobInput!, $condition: ModelCardJobConditionInput) {
        deleteCardJob(input: $input, condition: $condition) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardJobMutation>response.data.deleteCardJob;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          name
          cost
          elements
          cardType
          jobs {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cardCategories {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
          serialNumber
          imageSource
          cardHash
          cardDesigner {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardsQuery>response.data.listCards;
  }
  async GetCardCategory(id: string): Promise<GetCardCategoryQuery> {
    const statement = `query GetCardCategory($id: ID!) {
        getCardCategory(id: $id) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardCategoryQuery>response.data.getCardCategory;
  }
  async ListCardCategorys(
    filter?: ModelCardCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardCategorysQuery> {
    const statement = `query ListCardCategorys($filter: ModelCardCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCardCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardCategorysQuery>response.data.listCardCategorys;
  }
  async GetCardElement(id: string): Promise<GetCardElementQuery> {
    const statement = `query GetCardElement($id: ID!) {
        getCardElement(id: $id) {
          __typename
          id
          name
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardElementQuery>response.data.getCardElement;
  }
  async ListCardElements(
    filter?: ModelCardElementFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardElementsQuery> {
    const statement = `query ListCardElements($filter: ModelCardElementFilterInput, $limit: Int, $nextToken: String) {
        listCardElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            icon
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardElementsQuery>response.data.listCardElements;
  }
  async GetCardDesigner(id: string): Promise<GetCardDesignerQuery> {
    const statement = `query GetCardDesigner($id: ID!) {
        getCardDesigner(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardDesignerQuery>response.data.getCardDesigner;
  }
  async ListCardDesigners(
    filter?: ModelCardDesignerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardDesignersQuery> {
    const statement = `query ListCardDesigners($filter: ModelCardDesignerFilterInput, $limit: Int, $nextToken: String) {
        listCardDesigners(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardDesignersQuery>response.data.listCardDesigners;
  }
  async GetCardJob(id: string): Promise<GetCardJobQuery> {
    const statement = `query GetCardJob($id: ID!) {
        getCardJob(id: $id) {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardJobQuery>response.data.getCardJob;
  }
  async ListCardJobs(
    filter?: ModelCardJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardJobsQuery> {
    const statement = `query ListCardJobs($filter: ModelCardJobFilterInput, $limit: Int, $nextToken: String) {
        listCardJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardJobsQuery>response.data.listCardJobs;
  }
  OnCreateCardListener: Observable<
    SubscriptionResponse<OnCreateCardSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          id
          name
          cost
          elements
          cardType
          jobs {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cardCategories {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
          serialNumber
          imageSource
          cardHash
          cardDesigner {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCardSubscription>>;

  OnUpdateCardListener: Observable<
    SubscriptionResponse<OnUpdateCardSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard {
        onUpdateCard {
          __typename
          id
          name
          cost
          elements
          cardType
          jobs {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cardCategories {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
          serialNumber
          imageSource
          cardHash
          cardDesigner {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCardSubscription>>;

  OnDeleteCardListener: Observable<
    SubscriptionResponse<OnDeleteCardSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard {
        onDeleteCard {
          __typename
          id
          name
          cost
          elements
          cardType
          jobs {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          cardCategories {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
          serialNumber
          imageSource
          cardHash
          cardDesigner {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCardSubscription>>;

  OnCreateCardCategoryConnectionListener: Observable<
    SubscriptionResponse<OnCreateCardCategoryConnectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardCategoryConnection {
        onCreateCardCategoryConnection {
          __typename
          id
          cardID
          categoryID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateCardCategoryConnectionSubscription>
  >;

  OnUpdateCardCategoryConnectionListener: Observable<
    SubscriptionResponse<OnUpdateCardCategoryConnectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardCategoryConnection {
        onUpdateCardCategoryConnection {
          __typename
          id
          cardID
          categoryID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateCardCategoryConnectionSubscription>
  >;

  OnDeleteCardCategoryConnectionListener: Observable<
    SubscriptionResponse<OnDeleteCardCategoryConnectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardCategoryConnection {
        onDeleteCardCategoryConnection {
          __typename
          id
          cardID
          categoryID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          category {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteCardCategoryConnectionSubscription>
  >;

  OnCreateCardCategoryListener: Observable<
    SubscriptionResponse<OnCreateCardCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardCategory {
        onCreateCardCategory {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCardCategorySubscription>>;

  OnUpdateCardCategoryListener: Observable<
    SubscriptionResponse<OnUpdateCardCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardCategory {
        onUpdateCardCategory {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCardCategorySubscription>>;

  OnDeleteCardCategoryListener: Observable<
    SubscriptionResponse<OnDeleteCardCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardCategory {
        onDeleteCardCategory {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              categoryID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              category {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCardCategorySubscription>>;

  OnCreateCardElementListener: Observable<
    SubscriptionResponse<OnCreateCardElementSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardElement {
        onCreateCardElement {
          __typename
          id
          name
          icon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCardElementSubscription>>;

  OnUpdateCardElementListener: Observable<
    SubscriptionResponse<OnUpdateCardElementSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardElement {
        onUpdateCardElement {
          __typename
          id
          name
          icon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCardElementSubscription>>;

  OnDeleteCardElementListener: Observable<
    SubscriptionResponse<OnDeleteCardElementSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardElement {
        onDeleteCardElement {
          __typename
          id
          name
          icon
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCardElementSubscription>>;

  OnCreateCardDesignerListener: Observable<
    SubscriptionResponse<OnCreateCardDesignerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardDesigner {
        onCreateCardDesigner {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCardDesignerSubscription>>;

  OnUpdateCardDesignerListener: Observable<
    SubscriptionResponse<OnUpdateCardDesignerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardDesigner {
        onUpdateCardDesigner {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCardDesignerSubscription>>;

  OnDeleteCardDesignerListener: Observable<
    SubscriptionResponse<OnDeleteCardDesignerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardDesigner {
        onDeleteCardDesigner {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCardDesignerSubscription>>;

  OnCreateCardJobConnectionListener: Observable<
    SubscriptionResponse<OnCreateCardJobConnectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardJobConnection {
        onCreateCardJobConnection {
          __typename
          id
          cardID
          jobID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCardJobConnectionSubscription>>;

  OnUpdateCardJobConnectionListener: Observable<
    SubscriptionResponse<OnUpdateCardJobConnectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardJobConnection {
        onUpdateCardJobConnection {
          __typename
          id
          cardID
          jobID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCardJobConnectionSubscription>>;

  OnDeleteCardJobConnectionListener: Observable<
    SubscriptionResponse<OnDeleteCardJobConnectionSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardJobConnection {
        onDeleteCardJobConnection {
          __typename
          id
          cardID
          jobID
          card {
            __typename
            id
            name
            cost
            elements
            cardType
            jobs {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            cardCategories {
              __typename
              items {
                __typename
                id
                cardID
                categoryID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                category {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
            serialNumber
            imageSource
            cardHash
            cardDesigner {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          job {
            __typename
            id
            name
            cards {
              __typename
              items {
                __typename
                id
                cardID
                jobID
                card {
                  __typename
                  id
                  name
                  cost
                  elements
                  cardType
                  jobs {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  cardCategories {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      categoryID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  powerLevel
                  effectText
                  isExBurst
                  rarity
                  isMultiPlay
                  serialNumber
                  imageSource
                  cardHash
                  cardDesigner {
                    __typename
                    id
                    name
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                job {
                  __typename
                  id
                  name
                  cards {
                    __typename
                    items {
                      __typename
                      id
                      cardID
                      jobID
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCardJobConnectionSubscription>>;

  OnCreateCardJobListener: Observable<
    SubscriptionResponse<OnCreateCardJobSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardJob {
        onCreateCardJob {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCardJobSubscription>>;

  OnUpdateCardJobListener: Observable<
    SubscriptionResponse<OnUpdateCardJobSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardJob {
        onUpdateCardJob {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCardJobSubscription>>;

  OnDeleteCardJobListener: Observable<
    SubscriptionResponse<OnDeleteCardJobSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardJob {
        onDeleteCardJob {
          __typename
          id
          name
          cards {
            __typename
            items {
              __typename
              id
              cardID
              jobID
              card {
                __typename
                id
                name
                cost
                elements
                cardType
                jobs {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                cardCategories {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    categoryID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    category {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                powerLevel
                effectText
                isExBurst
                rarity
                isMultiPlay
                serialNumber
                imageSource
                cardHash
                cardDesigner {
                  __typename
                  id
                  name
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              job {
                __typename
                id
                name
                cards {
                  __typename
                  items {
                    __typename
                    id
                    cardID
                    jobID
                    card {
                      __typename
                      id
                      name
                      cost
                      elements
                      cardType
                      powerLevel
                      effectText
                      isExBurst
                      rarity
                      isMultiPlay
                      serialNumber
                      imageSource
                      cardHash
                      createdAt
                      updatedAt
                    }
                    job {
                      __typename
                      id
                      name
                      createdAt
                      updatedAt
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCardJobSubscription>>;
}
