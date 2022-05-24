export const UPDATE_NICK_NAME = 'UPDATE_NICK_NAME';

export const updateNickName = (nickName) => {
    return { type: UPDATE_NICK_NAME, nickName: nickName};
}