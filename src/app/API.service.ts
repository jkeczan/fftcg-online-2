/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCardInput = {
  id?: string | null;
  cost: number;
  cardType: string;
  jobs: Array<string>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export enum FFTCGCardRarity {
  COMMON = "COMMON",
  RARE = "RARE",
  HERO = "HERO",
  LEGEND = "LEGEND"
}

export type ModelCardConditionInput = {
  cost?: ModelIntInput | null;
  cardType?: ModelStringInput | null;
  jobs?: ModelStringInput | null;
  powerLevel?: ModelIntInput | null;
  effectText?: ModelStringInput | null;
  isExBurst?: ModelBooleanInput | null;
  rarity?: ModelFFTCGCardRarityInput | null;
  isMultiPlay?: ModelBooleanInput | null;
  and?: Array<ModelCardConditionInput | null> | null;
  or?: Array<ModelCardConditionInput | null> | null;
  not?: ModelCardConditionInput | null;
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

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
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
  cost?: number | null;
  cardType?: string | null;
  jobs?: Array<string> | null;
  powerLevel?: number | null;
  effectText?: string | null;
  isExBurst?: boolean | null;
  rarity?: FFTCGCardRarity | null;
  isMultiPlay?: boolean | null;
};

export type DeleteCardInput = {
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

export type ModelCardFilterInput = {
  id?: ModelIDInput | null;
  cost?: ModelIntInput | null;
  cardType?: ModelStringInput | null;
  jobs?: ModelStringInput | null;
  powerLevel?: ModelIntInput | null;
  effectText?: ModelStringInput | null;
  isExBurst?: ModelBooleanInput | null;
  rarity?: ModelFFTCGCardRarityInput | null;
  isMultiPlay?: ModelBooleanInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
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

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  cost: number;
  elements: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  }>;
  cardType: string;
  jobs: Array<string>;
  categories: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  }>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  cost: number;
  elements: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  }>;
  cardType: string;
  jobs: Array<string>;
  categories: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  }>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  cost: number;
  elements: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  }>;
  cardType: string;
  jobs: Array<string>;
  categories: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  }>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export type CreateCardCategoryMutation = {
  __typename: "CardCategory";
  id: string;
  name: string;
};

export type UpdateCardCategoryMutation = {
  __typename: "CardCategory";
  id: string;
  name: string;
};

export type DeleteCardCategoryMutation = {
  __typename: "CardCategory";
  id: string;
  name: string;
};

export type CreateCardElementMutation = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
};

export type UpdateCardElementMutation = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
};

export type DeleteCardElementMutation = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  cost: number;
  elements: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  }>;
  cardType: string;
  jobs: Array<string>;
  categories: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  }>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    cost: number;
    elements: Array<{
      __typename: "CardElement";
      id: string;
      name: string;
      icon: string;
    }>;
    cardType: string;
    jobs: Array<string>;
    categories: Array<{
      __typename: "CardCategory";
      id: string;
      name: string;
    }>;
    powerLevel: number;
    effectText: string;
    isExBurst: boolean;
    rarity: FFTCGCardRarity;
    isMultiPlay: boolean;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardCategoryQuery = {
  __typename: "CardCategory";
  id: string;
  name: string;
};

export type ListCardCategorysQuery = {
  __typename: "ModelCardCategoryConnection";
  items: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardElementQuery = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
};

export type ListCardElementsQuery = {
  __typename: "ModelCardElementConnection";
  items: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  cost: number;
  elements: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  }>;
  cardType: string;
  jobs: Array<string>;
  categories: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  }>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  cost: number;
  elements: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  }>;
  cardType: string;
  jobs: Array<string>;
  categories: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  }>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  cost: number;
  elements: Array<{
    __typename: "CardElement";
    id: string;
    name: string;
    icon: string;
  }>;
  cardType: string;
  jobs: Array<string>;
  categories: Array<{
    __typename: "CardCategory";
    id: string;
    name: string;
  }>;
  powerLevel: number;
  effectText: string;
  isExBurst: boolean;
  rarity: FFTCGCardRarity;
  isMultiPlay: boolean;
};

export type OnCreateCardCategorySubscription = {
  __typename: "CardCategory";
  id: string;
  name: string;
};

export type OnUpdateCardCategorySubscription = {
  __typename: "CardCategory";
  id: string;
  name: string;
};

export type OnDeleteCardCategorySubscription = {
  __typename: "CardCategory";
  id: string;
  name: string;
};

export type OnCreateCardElementSubscription = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
};

export type OnUpdateCardElementSubscription = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
};

export type OnDeleteCardElementSubscription = {
  __typename: "CardElement";
  id: string;
  name: string;
  icon: string;
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
          cost
          elements {
            __typename
            id
            name
            icon
          }
          cardType
          jobs
          categories {
            __typename
            id
            name
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
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
          cost
          elements {
            __typename
            id
            name
            icon
          }
          cardType
          jobs
          categories {
            __typename
            id
            name
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
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
          cost
          elements {
            __typename
            id
            name
            icon
          }
          cardType
          jobs
          categories {
            __typename
            id
            name
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
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
  async CreateCardCategory(
    input: CreateCardCategoryInput,
    condition?: ModelCardCategoryConditionInput
  ): Promise<CreateCardCategoryMutation> {
    const statement = `mutation CreateCardCategory($input: CreateCardCategoryInput!, $condition: ModelCardCategoryConditionInput) {
        createCardCategory(input: $input, condition: $condition) {
          __typename
          id
          name
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
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          cost
          elements {
            __typename
            id
            name
            icon
          }
          cardType
          jobs
          categories {
            __typename
            id
            name
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
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
            cost
            elements {
              __typename
              id
              name
              icon
            }
            cardType
            jobs
            categories {
              __typename
              id
              name
            }
            powerLevel
            effectText
            isExBurst
            rarity
            isMultiPlay
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
  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          id
          cost
          elements {
            __typename
            id
            name
            icon
          }
          cardType
          jobs
          categories {
            __typename
            id
            name
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
        }
      }`
    )
  ) as Observable<OnCreateCardSubscription>;

  OnUpdateCardListener: Observable<OnUpdateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard {
        onUpdateCard {
          __typename
          id
          cost
          elements {
            __typename
            id
            name
            icon
          }
          cardType
          jobs
          categories {
            __typename
            id
            name
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
        }
      }`
    )
  ) as Observable<OnUpdateCardSubscription>;

  OnDeleteCardListener: Observable<OnDeleteCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard {
        onDeleteCard {
          __typename
          id
          cost
          elements {
            __typename
            id
            name
            icon
          }
          cardType
          jobs
          categories {
            __typename
            id
            name
          }
          powerLevel
          effectText
          isExBurst
          rarity
          isMultiPlay
        }
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;

  OnCreateCardCategoryListener: Observable<
    OnCreateCardCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardCategory {
        onCreateCardCategory {
          __typename
          id
          name
        }
      }`
    )
  ) as Observable<OnCreateCardCategorySubscription>;

  OnUpdateCardCategoryListener: Observable<
    OnUpdateCardCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardCategory {
        onUpdateCardCategory {
          __typename
          id
          name
        }
      }`
    )
  ) as Observable<OnUpdateCardCategorySubscription>;

  OnDeleteCardCategoryListener: Observable<
    OnDeleteCardCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardCategory {
        onDeleteCardCategory {
          __typename
          id
          name
        }
      }`
    )
  ) as Observable<OnDeleteCardCategorySubscription>;

  OnCreateCardElementListener: Observable<
    OnCreateCardElementSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCardElement {
        onCreateCardElement {
          __typename
          id
          name
          icon
        }
      }`
    )
  ) as Observable<OnCreateCardElementSubscription>;

  OnUpdateCardElementListener: Observable<
    OnUpdateCardElementSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCardElement {
        onUpdateCardElement {
          __typename
          id
          name
          icon
        }
      }`
    )
  ) as Observable<OnUpdateCardElementSubscription>;

  OnDeleteCardElementListener: Observable<
    OnDeleteCardElementSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCardElement {
        onDeleteCardElement {
          __typename
          id
          name
          icon
        }
      }`
    )
  ) as Observable<OnDeleteCardElementSubscription>;
}
