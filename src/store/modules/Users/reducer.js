import produce from 'immer';

const INNITIAL_STATE = {
  profile: null,
};

export default function user(state = INNITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
