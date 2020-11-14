export function getContacts(payload) {
    return {
        type: "@contacts/GET_CONTACTS",
        payload,
    };
}

export function addFavorite(payload) {
    return {
        type: "@contacts/ADD_FAVORITE",
        payload,
    };
}

export function removeFavorite(payload) {
    return {
        type: "@contacts/REMOVE_FAVORITE",
        payload,
    };
}
