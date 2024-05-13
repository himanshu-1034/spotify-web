export default function (state: String = '', action: any) {
    if(action?.type) {
        switch(action.type) {
            case 'SET_ACCESS_TOKEN': {
                return action?.payload?.accessToken ?? state;
            }
        }
    }
    return state;
}