import { v4 as uuidv4 } from "uuid";

//Action.Value
// 오류를 잡기위해서 따로 써주는게 좋기때문에

// 편지를 추가하는 버튼
const ADD_LETTER = "ADD_LETTER";

// 작성된 편지를 삭제하는 버튼
const DEL_LETTER = "DEL_LETTER";

// 작성된 편지를 수정하는 버튼
const UPDATE_LETTER = "UPDATE_LETTER";

//Action.Creator

export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload,
  };
};

export const delLetter = (payload) => {
  return {
    type: DEL_LETTER,
    payload,
  };
};

export const updateLetter = (payload) => {
  return {
    type: UPDATE_LETTER,
    payload,
  };
};

//Initial.State

const initialState = [
  { id: uuidv4(), title: "Jini", text: "Happy BirthDay To U!!!!!!!!" },
  { id: uuidv4(), title: "BH", text: "생일 축하해🥳🥳 " },
];

//Reducer

const letters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return [...state, action.payload];

    case DEL_LETTER:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

//export.default.reducer

export default letters;
