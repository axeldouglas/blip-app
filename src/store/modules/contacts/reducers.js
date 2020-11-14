import contactsList from "../../../assets/data.json";

const INITIAL_STATE = {
    list: contactsList,
    favoriteList: [],
};

export default function contacts(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@contacts/GET_CONTACTS":
            return {
                ...state,
                list: state.list,
            };
        case "@contacts/ADD_FAVORITE":
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload.shortName],
            };
        case "@contacts/REMOVE_FAVORITE":
            return {
                ...state,
                favoriteList: action.payload.favoriteList,
            };
        default:
            return state;
    }
}
